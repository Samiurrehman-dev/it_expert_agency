/** Creates an employee/admin. Body: { name, email, password, role }. Never returns password. */
import { hash } from "bcryptjs";
import { z } from "zod";
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { requireAdmin } from "@/lib/apiAuth";
import {
  emailSchema,
  userRoleSchema,
  validationFields,
} from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";

const schema = z
  .object({
    name: z.string().trim().min(1).max(100),
    email: emailSchema,
    password: z.string().min(8).max(72),
    role: userRoleSchema,
  })
  .strict();
const safeUser = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} as const;

export async function POST(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
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
    if (
      await prisma.user.findUnique({
        where: { email: result.data.email },
        select: { id: true },
      })
    )
      return apiError("A user with this email already exists.", 400, {
        email: ["Email must be unique."],
      });
    const { password, ...data } = result.data;
    return apiSuccess(
      await prisma.user.create({
        data: { ...data, password: await hash(password, 12) },
        select: safeUser,
      }),
      201,
    );
  } catch (error) {
    console.error("Create user failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}
