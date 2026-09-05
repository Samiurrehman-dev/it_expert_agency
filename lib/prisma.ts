import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "@/generated/prisma/client";

function createAdapter() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  const databaseUrl = new URL(connectionString);

  if (databaseUrl.protocol !== "mysql:") {
    throw new Error("DATABASE_URL must use the mysql:// protocol.");
  }

  return new PrismaMariaDb({
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port || 3306),
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: decodeURIComponent(databaseUrl.pathname.replace(/^\//, "")),
    // Temporary for the current Aiven service: its CA is not installed locally.
    // Replace with a CA-backed SSL configuration before production.
    ssl: { rejectUnauthorized: false },
    connectionLimit: 5,
    connectTimeout: 10_000,
    acquireTimeout: 30_000,
    initializationTimeout: 30_000,
  });
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({ adapter: createAdapter() });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
