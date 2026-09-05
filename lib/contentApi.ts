/* eslint-disable @typescript-eslint/no-explicit-any -- Prisma model delegates have incompatible generated overloads; this module validates all boundary data before dispatch. */
import { z } from "zod";

import { apiError, apiSuccess } from "@/lib/apiResponse";
import { getAuthenticatedUser } from "@/lib/apiAuth";
import {
  contentStatusSchema,
  idSchema,
  jsonValueSchema,
  paginationSchema,
  validationFields,
} from "@/lib/apiValidation";
import { generateUniqueSlug } from "@/lib/generateSlug";
import { prisma } from "@/lib/prisma";

type ContentKind = "blog" | "case-study" | "ebook";

const slugSchema = z.string().trim().min(1).max(191).optional();
const commonSchema = z.object({
  slug: slugSchema,
  title: z.string().trim().min(1).max(255),
  excerpt: z.string().trim().min(1),
  authorId: z.number().int().positive(),
  categoryId: z.number().int().positive(),
  status: contentStatusSchema.optional(),
});

const blogSchema = commonSchema.extend({
  subtitle: z.string().trim().nullable().optional(),
  publishedDate: z.coerce.date(),
  publishedLabel: z.string().trim().min(1).max(100),
  readTime: z.string().trim().min(1).max(50),
  image: z.string().trim().min(1).max(500),
  imageAlt: z.string().trim().min(1).max(500),
  body: jsonValueSchema,
  relatedService: jsonValueSchema,
  relatedCaseStudy: jsonValueSchema.optional(),
});

const caseStudySchema = commonSchema.extend({
  format: z.enum(["STRUCTURED", "NARRATIVE"]),
  industry: z.string().trim().min(1).max(191),
  subtitle: z.string().trim().min(1),
  image: z.string().trim().min(1).max(500),
  imageAlt: z.string().trim().min(1).max(500),
  publishedDate: z.coerce.date().nullable().optional(),
  publishedLabel: z.string().trim().max(100).nullable().optional(),
  readTime: z.string().trim().max(50).nullable().optional(),
  clientProfile: z.string().trim().nullable().optional(),
  body: jsonValueSchema,
  relatedService: jsonValueSchema,
  relatedContent: jsonValueSchema.optional(),
});

const ebookSchema = commonSchema.extend({
  meta: z.string().trim().min(1).max(100),
  color: z.string().trim().min(1).max(191),
  icon: z.string().trim().min(1).max(100),
  publishedDate: z.coerce.date().nullable().optional(),
});

const schemas = {
  blog: blogSchema,
  "case-study": caseStudySchema,
  ebook: ebookSchema,
};

function delegate(kind: ContentKind): any {
  if (kind === "blog") return prisma.blogPost;
  if (kind === "case-study") return prisma.caseStudy;
  return prisma.ebook;
}

function serverError(label: string, error: unknown) {
  console.error(`${label}:`, error);
  return apiError("An unexpected server error occurred.", 500);
}

async function parseBody(request: Request) {
  try {
    return { body: await request.json() } as const;
  } catch {
    return { response: apiError("Invalid JSON request body.", 400) } as const;
  }
}

export async function createContent(kind: ContentKind, request: Request) {
  const actor = await getAuthenticatedUser();
  if (!actor) return apiError("Authentication required.", 401);

  const parsedBody = await parseBody(request);
  if ("response" in parsedBody) return parsedBody.response;
  const result = schemas[kind].safeParse(parsedBody.body);
  if (!result.success) {
    return apiError("Validation failed.", 400, validationFields(result.error));
  }

  try {
    const model = delegate(kind);
    const slug = await generateUniqueSlug(
      result.data.slug,
      result.data.title,
      async (value) =>
        Boolean(
          await model.findUnique({
            where: { slug: value },
            select: { id: true },
          }),
        ),
    );
    const input: any = {
      ...result.data,
      authorId: actor.role === "ADMIN" ? result.data.authorId : actor.id,
    };
    delete input.slug;
    const created = await model.create({
      data: { ...input, slug },
      include: {
        author: { select: { id: true, name: true, email: true, role: true } },
        category: true,
      },
    });
    return apiSuccess(created, 201);
  } catch (error) {
    return serverError(`Create ${kind} failed`, error);
  }
}

export async function listContent(kind: ContentKind, request: Request) {
  const actor = await getAuthenticatedUser();

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

  const statusValue = url.searchParams.get("status")?.toUpperCase();
  const status = statusValue
    ? contentStatusSchema.safeParse(statusValue)
    : null;
  if (status && !status.success)
    return apiError("Invalid content status.", 400);

  const categoryIdValue = url.searchParams.get("categoryId");
  const categoryId = categoryIdValue
    ? idSchema.safeParse(categoryIdValue)
    : null;
  if (categoryId && !categoryId.success)
    return apiError("Invalid categoryId.", 400);
  const category = url.searchParams.get("category")?.trim();
  const formatValue = url.searchParams.get("format")?.toUpperCase();
  if (formatValue && kind !== "case-study")
    return apiError("The format filter is only valid for case studies.", 400);
  if (formatValue && !["STRUCTURED", "NARRATIVE"].includes(formatValue))
    return apiError("Invalid case-study format.", 400);

  const sort = url.searchParams.get("sort") ?? "newest";
  const orderBy =
    sort === "oldest"
      ? { createdAt: "asc" }
      : sort === "views"
        ? { viewCount: "desc" }
        : sort === "title"
          ? { title: "asc" }
          : { createdAt: "desc" };
  const where = {
    ...(actor && status?.success
      ? { status: status.data }
      : !actor
        ? { status: "PUBLISHED" }
        : {}),
    ...(categoryId?.success ? { categoryId: categoryId.data } : {}),
    ...(category ? { category: { name: category } } : {}),
    ...(formatValue ? { format: formatValue } : {}),
  };

  try {
    const model = delegate(kind);
    const { page, limit } = pagination.data;
    const [items, total] = await Promise.all([
      model.findMany({
        where,
        orderBy,
        skip: (page - 1) * limit,
        take: limit,
        include: {
          author: { select: { id: true, name: true, email: true, role: true } },
          category: true,
        },
      }),
      model.count({ where }),
    ]);
    return apiSuccess({
      items,
      pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
    });
  } catch (error) {
    return serverError(`List ${kind} failed`, error);
  }
}

export async function getContentBySlug(kind: ContentKind, slug: string) {
  const actor = await getAuthenticatedUser();
  try {
    const item = await delegate(kind).update({
      where: { slug, ...(!actor ? { status: "PUBLISHED" } : {}) },
      data: { viewCount: { increment: 1 } },
      include: {
        author: { select: { id: true, name: true, email: true, role: true } },
        category: true,
      },
    });
    return apiSuccess(item);
  } catch (error: any) {
    if (error?.code === "P2025")
      return apiError("Content entry not found.", 404);
    return serverError(`Fetch ${kind} failed`, error);
  }
}

export async function updateContent(
  kind: ContentKind,
  request: Request,
  rawId: string,
) {
  const actor = await getAuthenticatedUser();
  if (!actor) return apiError("Authentication required.", 401);
  const id = idSchema.safeParse(rawId);
  if (!id.success) return apiError("Invalid content id.", 400);
  const parsedBody = await parseBody(request);
  if ("response" in parsedBody) return parsedBody.response;
  const result = schemas[kind].partial().safeParse(parsedBody.body);
  if (!result.success)
    return apiError("Validation failed.", 400, validationFields(result.error));
  if (Object.keys(result.data).length === 0)
    return apiError("At least one field must be provided.", 400);

  try {
    const model = delegate(kind);
    const current = await model.findUnique({
      where: { id: id.data },
      select: { id: true, slug: true, title: true, authorId: true },
    });
    if (!current) return apiError("Content entry not found.", 404);
    if (actor.role !== "ADMIN" && current.authorId !== actor.id)
      return apiError("You can only update your own content.", 403);
    const input: any = { ...result.data };
    if (actor.role !== "ADMIN") input.authorId = actor.id;
    if (result.data.slug !== undefined) {
      input.slug = await generateUniqueSlug(
        result.data.slug,
        result.data.title ?? current.title,
        async (value) =>
          Boolean(
            await model.findUnique({
              where: { slug: value },
              select: { id: true },
            }),
          ),
        current.slug,
      );
    }
    const updated = await model.update({
      where: { id: id.data },
      data: input,
      include: {
        author: { select: { id: true, name: true, email: true, role: true } },
        category: true,
      },
    });
    return apiSuccess(updated);
  } catch (error) {
    return serverError(`Update ${kind} failed`, error);
  }
}

export async function archiveContent(kind: ContentKind, rawId: string) {
  const actor = await getAuthenticatedUser();
  if (!actor) return apiError("Authentication required.", 401);
  const id = idSchema.safeParse(rawId);
  if (!id.success) return apiError("Invalid content id.", 400);
  try {
    const model = delegate(kind);
    const current = await model.findUnique({
      where: { id: id.data },
      select: { authorId: true },
    });
    if (!current) return apiError("Content entry not found.", 404);
    if (actor.role !== "ADMIN" && current.authorId !== actor.id)
      return apiError("You can only archive your own content.", 403);
    const archived = await model.update({
      where: { id: id.data },
      data: { status: "ARCHIVED" },
    });
    return apiSuccess(archived);
  } catch (error: any) {
    if (error?.code === "P2025")
      return apiError("Content entry not found.", 404);
    return serverError(`Archive ${kind} failed`, error);
  }
}

export async function updateContentStatus(
  kind: ContentKind,
  request: Request,
  rawId: string,
) {
  const actor = await getAuthenticatedUser();
  if (!actor) return apiError("Authentication required.", 401);
  const id = idSchema.safeParse(rawId);
  if (!id.success) return apiError("Invalid content id.", 400);
  const parsedBody = await parseBody(request);
  if ("response" in parsedBody) return parsedBody.response;
  const result = z
    .object({ status: contentStatusSchema })
    .strict()
    .safeParse(parsedBody.body);
  if (!result.success)
    return apiError("Validation failed.", 400, validationFields(result.error));
  try {
    const model = delegate(kind);
    const current = await model.findUnique({
      where: { id: id.data },
      select: { authorId: true },
    });
    if (!current) return apiError("Content entry not found.", 404);
    if (actor.role !== "ADMIN" && current.authorId !== actor.id)
      return apiError("You can only change the status of your own content.", 403);
    return apiSuccess(
      await model.update({
        where: { id: id.data },
        data: result.data,
      }),
    );
  } catch (error: any) {
    if (error?.code === "P2025")
      return apiError("Content entry not found.", 404);
    return serverError(`Change ${kind} status failed`, error);
  }
}
