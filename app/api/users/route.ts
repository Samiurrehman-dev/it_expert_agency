/** Lists users without password hashes. Query: page, limit. Response: { success, data|error }. */
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { requireAdmin } from "@/lib/apiAuth";
import { paginationSchema, validationFields } from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";

const safeUser = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
} as const;

export async function GET(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const url = new URL(request.url);
  const parsed = paginationSchema.safeParse({
    page: url.searchParams.get("page") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
  });
  if (!parsed.success)
    return apiError(
      "Invalid pagination parameters.",
      400,
      validationFields(parsed.error),
    );
  const { page, limit } = parsed.data;
  try {
    const [items, total] = await Promise.all([
      prisma.user.findMany({
        select: safeUser,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.user.count(),
    ]);
    return apiSuccess({
      items,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("List users failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}
