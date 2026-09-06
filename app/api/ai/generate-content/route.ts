import { z } from "zod";

import { apiError, apiSuccess } from "@/lib/apiResponse";
import { getAuthenticatedUser } from "@/lib/apiAuth";
import {
  contentTypes,
  generateContentFromPdf,
  generateContentFromText,
} from "@/lib/ai/gemini";
import { checkAiRateLimit } from "@/lib/ai/rate-limit";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const MAX_PDF_BYTES = 20 * 1024 * 1024;
const textRequestSchema = z.object({
  type: z.literal("text"),
  content: z.string().trim().min(50).max(100_000),
  contentType: z.enum(contentTypes),
});

export async function POST(request: Request) {
  const user = await getAuthenticatedUser();
  if (!user) return apiError("Authentication required.", 401);
  const limit = checkAiRateLimit(user.id);
  if (!limit.allowed) {
    return Response.json(
      {
        success: false,
        error: "AI generation limit reached. Please retry shortly.",
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  try {
    const categories = await prisma.category.findMany({
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    });
    const mediaType = request.headers.get("content-type") ?? "";
    if (mediaType.includes("multipart/form-data")) {
      const form = await request.formData();
      const file = form.get("file");
      const parsedType = z
        .enum(contentTypes)
        .safeParse(form.get("contentType"));
      if (!parsedType.success) return apiError("Invalid contentType.", 400);
      if (!(file instanceof File))
        return apiError("A PDF file is required.", 400);
      if (file.type !== "application/pdf")
        return apiError("Only PDF files are supported.", 400);
      if (file.size === 0 || file.size > MAX_PDF_BYTES)
        return apiError("PDF files must be between 1 byte and 20MB.", 400);
      const fileBuffer = Buffer.from(await file.arrayBuffer());
      if (fileBuffer.subarray(0, 5).toString("ascii") !== "%PDF-")
        return apiError("The uploaded file is not a valid PDF.", 400);
      const generated = await generateContentFromPdf(
        fileBuffer,
        parsedType.data,
        categories,
      );
      return apiSuccess(generated);
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return apiError("Invalid JSON request body.", 400);
    }
    const parsed = textRequestSchema.safeParse(body);
    if (!parsed.success)
      return apiError(
        "Provide 50 to 100,000 characters and a valid contentType.",
        400,
      );
    return apiSuccess(
      await generateContentFromText(
        parsed.data.content,
        parsed.data.contentType,
        categories,
      ),
    );
  } catch (error) {
    console.error("AI content generation failed:", error);
    const message =
      error instanceof Error ? error.message : "Content generation failed.";
    if (message === "GEMINI_API_KEY is not configured.")
      return apiError(message, 503);
    if (
      message.startsWith("Gemini returned") ||
      message.startsWith("No content")
    )
      return apiError(message, 502);
    return apiError("Content generation failed. Please try again.", 502);
  }
}
