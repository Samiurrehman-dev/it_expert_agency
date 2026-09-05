import { z } from "zod";

export const idSchema = z.coerce.number().int().positive();
export const contentStatusSchema = z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]);
export const contactStatusSchema = z.enum(["NEW", "READ", "RESPONDED"]);
export const userRoleSchema = z.enum(["ADMIN", "EMPLOYEE"]);

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

export function validationFields(error: z.ZodError) {
  return error.flatten().fieldErrors as Record<string, string[]>;
}

export async function readJson(request: Request): Promise<unknown> {
  return request.json();
}

export const emailSchema = z
  .string()
  .trim()
  .email()
  .max(254)
  .transform((v) => v.toLowerCase());
export const optionalDateSchema = z.coerce.date().nullable().optional();
export const requiredDateSchema = z.coerce.date();
export const jsonValueSchema = z.union([
  z.string(),
  z.number(),
  z.boolean(),
  z.null(),
  z.array(z.unknown()),
  z.record(z.string(), z.unknown()),
]);
