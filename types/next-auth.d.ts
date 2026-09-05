import type { DefaultSession } from "next-auth";
import type { UserRole } from "@/generated/prisma/client";

declare module "next-auth" {
  interface User {
    role: UserRole;
  }
  interface Session {
    user: { id: number; role: UserRole } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    userId: number;
    role: UserRole;
  }
}
