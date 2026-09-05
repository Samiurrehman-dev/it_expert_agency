/** Fetches (and marks READ) or deletes one contact message by id. Response: { success, data|error }. */
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { requireAdmin } from "@/lib/apiAuth";
import { idSchema } from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";
import { hasPrismaCode } from "@/lib/prismaErrors";
type Context = { params: { id: string } };

export async function GET(_request: Request, { params }: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const id = idSchema.safeParse(params.id);
  if (!id.success) return apiError("Invalid message id.", 400);
  try {
    const message = await prisma.contactMessage.findUnique({
      where: { id: id.data },
    });
    if (!message) return apiError("Contact message not found.", 404);
    return apiSuccess(
      message.status === "NEW"
        ? await prisma.contactMessage.update({
            where: { id: id.data },
            data: { status: "READ" },
          })
        : message,
    );
  } catch (error) {
    console.error("Fetch contact message failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}

export async function DELETE(_request: Request, { params }: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const id = idSchema.safeParse(params.id);
  if (!id.success) return apiError("Invalid message id.", 400);
  try {
    await prisma.contactMessage.delete({ where: { id: id.data } });
    return apiSuccess({ id: id.data, deleted: true });
  } catch (error: unknown) {
    if (hasPrismaCode(error, "P2025"))
      return apiError("Contact message not found.", 404);
    console.error("Delete contact message failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}
