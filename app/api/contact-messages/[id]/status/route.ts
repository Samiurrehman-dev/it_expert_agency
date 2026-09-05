/** Changes a contact message status. Body: { status: NEW|READ|RESPONDED }. Response: { success, data|error }. */
import { z } from "zod";
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { requireAdmin } from "@/lib/apiAuth";
import {
  contactStatusSchema,
  idSchema,
  validationFields,
} from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";
import { hasPrismaCode } from "@/lib/prismaErrors";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const id = idSchema.safeParse(params.id);
  if (!id.success) return apiError("Invalid message id.", 400);
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return apiError("Invalid JSON request body.", 400);
  }
  const result = z
    .object({ status: contactStatusSchema })
    .strict()
    .safeParse(body);
  if (!result.success)
    return apiError("Validation failed.", 400, validationFields(result.error));
  try {
    return apiSuccess(
      await prisma.contactMessage.update({
        where: { id: id.data },
        data: result.data,
      }),
    );
  } catch (error: unknown) {
    if (hasPrismaCode(error, "P2025"))
      return apiError("Contact message not found.", 404);
    console.error("Update contact-message status failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}
