/** Resets a password using a one-hour single-use token. Body: { token, password }. */
import { createHash } from "node:crypto";
import { hash } from "bcryptjs";
import { z } from "zod";
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { validationFields } from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";

const schema = z
  .object({ token: z.string().length(64), password: z.string().min(8).max(72) })
  .strict();

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
  const tokenHash = createHash("sha256")
    .update(result.data.token)
    .digest("hex");
  try {
    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { tokenHash },
      select: { id: true, userId: true, expiresAt: true },
    });
    if (!resetToken || resetToken.expiresAt <= new Date()) {
      if (resetToken)
        await prisma.passwordResetToken.delete({
          where: { id: resetToken.id },
        });
      return apiError(
        "This password reset link is invalid or has expired.",
        400,
      );
    }
    const password = await hash(result.data.password, 12);
    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetToken.userId },
        data: { password },
      }),
      prisma.passwordResetToken.deleteMany({
        where: { userId: resetToken.userId },
      }),
    ]);
    return apiSuccess({ message: "Password reset successfully." });
  } catch (error) {
    console.error("Reset password failed:", error);
    return apiError("Unable to reset the password right now.", 500);
  }
}
