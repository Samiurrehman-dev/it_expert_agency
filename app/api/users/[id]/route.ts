/** Fetches, partially updates, or deletes a user by id. Password hashes are never returned. */
import { hash } from "bcryptjs";
import { z } from "zod";
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { requireAdmin } from "@/lib/apiAuth";
import {
  emailSchema,
  idSchema,
  userRoleSchema,
  validationFields,
} from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";
import { hasPrismaCode } from "@/lib/prismaErrors";

type Context = { params: { id: string } };
const safeUser = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} as const;
const updateSchema = z
  .object({
    name: z.string().trim().min(1).max(100).optional(),
    email: emailSchema.optional(),
    password: z.string().min(8).max(72).optional(),
    role: userRoleSchema.optional(),
  })
  .strict();

export async function GET(_request: Request, { params }: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const id = idSchema.safeParse(params.id);
  if (!id.success) return apiError("Invalid user id.", 400);
  try {
    const user = await prisma.user.findUnique({
      where: { id: id.data },
      select: safeUser,
    });
    return user ? apiSuccess(user) : apiError("User not found.", 404);
  } catch (error) {
    console.error("Fetch user failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}

export async function PUT(request: Request, { params }: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const id = idSchema.safeParse(params.id);
  if (!id.success) return apiError("Invalid user id.", 400);
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return apiError("Invalid JSON request body.", 400);
  }
  const result = updateSchema.safeParse(body);
  if (!result.success)
    return apiError("Validation failed.", 400, validationFields(result.error));
  if (!Object.keys(result.data).length)
    return apiError("At least one field must be provided.", 400);
  try {
    if (result.data.email) {
      const owner = await prisma.user.findUnique({
        where: { email: result.data.email },
        select: { id: true },
      });
      if (owner && owner.id !== id.data)
        return apiError("A user with this email already exists.", 400, {
          email: ["Email must be unique."],
        });
    }
    const { password, ...values } = result.data;
    const data = {
      ...values,
      ...(password ? { password: await hash(password, 12) } : {}),
    };
    return apiSuccess(
      await prisma.user.update({
        where: { id: id.data },
        data,
        select: safeUser,
      }),
    );
  } catch (error: unknown) {
    if (hasPrismaCode(error, "P2025")) return apiError("User not found.", 404);
    console.error("Update user failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}

export async function DELETE(_request: Request, { params }: Context) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const id = idSchema.safeParse(params.id);
  if (!id.success) return apiError("Invalid user id.", 400);
  try {
    await prisma.user.delete({ where: { id: id.data } });
    return apiSuccess({ id: id.data, deleted: true });
  } catch (error: unknown) {
    if (hasPrismaCode(error, "P2025")) return apiError("User not found.", 404);
    console.error("Delete user failed:", error);
    return apiError(
      "Unable to delete this user. They may still own content.",
      400,
    );
  }
}
