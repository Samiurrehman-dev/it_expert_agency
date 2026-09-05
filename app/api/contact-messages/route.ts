/** Lists contact messages. Query: page, limit, status. Response: { success, data|error }. */
import { apiError, apiSuccess } from "@/lib/apiResponse";
import { requireAdmin } from "@/lib/apiAuth";
import {
  contactStatusSchema,
  paginationSchema,
  validationFields,
} from "@/lib/apiValidation";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;
  const url = new URL(request.url);
  const pagination = paginationSchema.safeParse({
    page: url.searchParams.get("page") ?? undefined,
    limit: url.searchParams.get("limit") ?? undefined,
  });
  if (!pagination.success)
    return apiError(
      "Invalid pagination parameters.",
      400,
      validationFields(pagination.error),
    );
  const rawStatus = url.searchParams.get("status")?.toUpperCase();
  const status = rawStatus ? contactStatusSchema.safeParse(rawStatus) : null;
  if (status && !status.success)
    return apiError("Invalid contact-message status.", 400);
  const where = status?.success ? { status: status.data } : {};
  const { page, limit } = pagination.data;
  try {
    const [items, total] = await Promise.all([
      prisma.contactMessage.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.contactMessage.count({ where }),
    ]);
    return apiSuccess({
      items,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    console.error("List contact messages failed:", error);
    return apiError("An unexpected server error occurred.", 500);
  }
}
