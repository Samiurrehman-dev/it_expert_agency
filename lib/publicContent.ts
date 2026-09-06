/* eslint-disable @typescript-eslint/no-explicit-any -- Database JSON is validated by the existing content schemas and restored to the exact legacy discriminated shapes here. */
import { prisma } from "@/lib/prisma";
import type { BlogPost } from "@/lib/blog-posts";
import type { CaseStudy } from "@/lib/case-studies";

type JsonObject = Record<string, unknown>;

const caseStudyImageOverrides: Record<string, string> = {
  "turn-infrastructure-signals-into-faster-smarter-action":
    "/images/updates/case-study-aiops-monitoring-v3.jpg",
};

function object(value: unknown): JsonObject {
  return (value ?? {}) as JsonObject;
}

export async function getPublishedBlogs() {
  const rows = await prisma.blogPost.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ publishedDate: "desc" }, { id: "asc" }],
    include: { author: { select: { name: true } }, category: true },
  });

  return rows.map((row) => {
    const body = object(row.body);
    return {
      ...row,
      category: row.category.name,
      author: row.author.name,
      publishedDate: row.publishedDate.toISOString().slice(0, 10),
      intro: (body.intro ?? []) as string[],
      introBlocks: body.introBlocks as BlogPost["introBlocks"],
      sections: (body.sections ?? []) as any[],
      relatedService: object(row.relatedService) as any,
      relatedCaseStudy: row.relatedCaseStudy
        ? (object(row.relatedCaseStudy) as any)
        : undefined,
    } as BlogPost;
  });
}

export async function getPublishedBlog(slug: string) {
  const posts = await getPublishedBlogs();
  return posts.find((post) => post.slug === slug);
}

export async function getPublishedCaseStudies() {
  const rows = await prisma.caseStudy.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ publishedDate: "desc" }, { id: "asc" }],
    include: { category: true },
  });

  return rows.map((row) => ({
    ...row,
    image: caseStudyImageOverrides[row.slug] ?? row.image,
    format: row.format === "STRUCTURED" ? "structured" : "narrative",
    category: row.category.name,
    publishedDate: row.publishedDate?.toISOString().slice(0, 10) ?? undefined,
    publishedLabel: row.publishedLabel ?? undefined,
    readTime: row.readTime ?? undefined,
    clientProfile: row.clientProfile ?? undefined,
    ...object(row.body),
    relatedService: object(row.relatedService) as any,
    relatedContent: row.relatedContent
      ? (object(row.relatedContent) as any)
      : undefined,
  })) as unknown as CaseStudy[];
}

export async function getPublishedCaseStudy(slug: string) {
  const studies = await getPublishedCaseStudies();
  return studies.find((study) => study.slug === slug);
}

export async function getPublishedEbooks() {
  return prisma.ebook.findMany({
    where: { status: "PUBLISHED" },
    orderBy: [{ publishedDate: "desc" }, { id: "asc" }],
    include: { category: true },
  });
}
