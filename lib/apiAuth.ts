import { getServerSession } from "next-auth";

import type { UserRole } from "@/generated/prisma/client";
import { apiError } from "@/lib/apiResponse";
import { authOptions } from "@/lib/authOptions";
import { prisma } from "@/lib/prisma";

export type AuthenticatedUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

/** Resolves the JWT session and refreshes identity/role from the database. */
export async function getAuthenticatedUser(): Promise<AuthenticatedUser | null> {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) return null;
  return prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, name: true, email: true, role: true },
  });
}

export async function requireAuth() {
  return (await getAuthenticatedUser())
    ? null
    : apiError("Authentication required.", 401);
}

export async function requireAdmin() {
  const user = await getAuthenticatedUser();
  if (!user) return apiError("Authentication required.", 401);
  return user.role === "ADMIN"
    ? null
    : apiError("Administrator access required.", 403);
}
