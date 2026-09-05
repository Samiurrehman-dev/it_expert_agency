/** Requests a one-hour password reset link. Body: { email }. Always returns a generic success response. */
import { createHash, randomBytes } from "node:crypto";
import { z } from "zod";
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { emailSchema, validationFields } from "@/lib/apiValidation";
import {
  passwordResetHtml,
  passwordResetText,
} from "@/lib/emailTemplates/passwordReset";
import { createMailTransport } from "@/lib/mail";
import { prisma } from "@/lib/prisma";

const schema = z.object({ email: emailSchema }).strict();
const genericMessage = {
  message:
    "If an account exists for that email, a password reset link has been sent.",
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return apiError("Invalid JSON request body.", 400);
  }
  const result = schema.safeParse(body);
  if (!result.success)
    return apiError("Validation failed.", 400, validationFields(result.error));
  try {
    const user = await prisma.user.findUnique({
      where: { email: result.data.email },
      select: { id: true, name: true, email: true },
    });
    if (!user) return apiSuccess(genericMessage);
    const token = randomBytes(32).toString("hex");
    const tokenHash = createHash("sha256").update(token).digest("hex");
    await prisma.$transaction([
      prisma.passwordResetToken.deleteMany({ where: { userId: user.id } }),
      prisma.passwordResetToken.create({
        data: {
          tokenHash,
          userId: user.id,
          expiresAt: new Date(Date.now() + 60 * 60 * 1000),
        },
      }),
    ]);
    const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
    const resetUrl = `${baseUrl.replace(/\/$/, "")}/admin/reset-password?token=${encodeURIComponent(token)}`;
    const { config, transporter } = createMailTransport();
    await transporter.sendMail({
      from: config.from,
      to: user.email,
      subject: "Reset your IT Experts Agency password",
      text: passwordResetText({ name: user.name, resetUrl }),
      html: passwordResetHtml({ name: user.name, resetUrl }),
    });
    return apiSuccess(genericMessage);
  } catch (error) {
    console.error("Forgot-password request failed:", error);
    return apiError(
      "Unable to process the password reset request right now.",
      500,
    );
  }
}
