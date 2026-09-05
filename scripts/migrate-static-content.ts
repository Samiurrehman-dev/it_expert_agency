import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { blogPosts } from "../lib/blog-posts";
import { caseStudies } from "../lib/case-studies";
import {
  CaseStudyFormat,
  ContentStatus,
  Prisma,
  PrismaClient,
} from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not configured.");

const databaseUrl = new URL(connectionString);
const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port || 3306),
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: decodeURIComponent(databaseUrl.pathname.replace(/^\//, "")),
    ssl: { rejectUnauthorized: false },
    connectionLimit: 5,
    connectTimeout: 10_000,
    acquireTimeout: 30_000,
    initializationTimeout: 30_000,
  }),
});

function asJson(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue;
}

async function main() {
  const admin =
    (await prisma.user.findUnique({
      where: { email: "change-before-production@itexpertsagency.com" },
    })) ??
    (await prisma.user.findFirst({
      where: { role: "ADMIN" },
      orderBy: { id: "asc" },
    }));

  if (!admin) {
    throw new Error(
      "No ADMIN user exists. Run `npm run db:seed` before migrating content.",
    );
  }

  for (const post of blogPosts) {
    const category = await prisma.category.upsert({
      where: { name: post.category },
      update: {},
      create: { name: post.category },
    });
    const publishedDate = new Date(`${post.publishedDate}T00:00:00.000Z`);
    const data = {
      title: post.title,
      subtitle: post.subtitle ?? null,
      publishedDate,
      publishedLabel: post.publishedLabel,
      readTime: post.readTime,
      excerpt: post.excerpt,
      image: post.image,
      imageAlt: post.imageAlt,
      body: asJson({
        intro: post.intro,
        ...(post.introBlocks ? { introBlocks: post.introBlocks } : {}),
        sections: post.sections,
      }),
      relatedService: asJson(post.relatedService),
      relatedCaseStudy: post.relatedCaseStudy
        ? asJson(post.relatedCaseStudy)
        : Prisma.JsonNull,
      authorId: admin.id,
      categoryId: category.id,
      status: ContentStatus.PUBLISHED,
    };

    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: data,
      create: { slug: post.slug, createdAt: publishedDate, ...data },
    });
    console.log(`blog: ${post.slug}`);
  }

  for (const study of caseStudies) {
    const category = await prisma.category.upsert({
      where: { name: study.category },
      update: {},
      create: { name: study.category },
    });
    const publishedDate =
      study.format === "structured"
        ? new Date(`${study.publishedDate}T00:00:00.000Z`)
        : null;
    const body =
      study.format === "structured"
        ? {
            introduction: study.introduction,
            snapshot: study.snapshot,
            challenge: study.challenge,
            rootCauses: study.rootCauses,
            solutionIntroduction: study.solutionIntroduction,
            solutionItems: study.solutionItems,
            result: study.result,
            pullQuote: study.pullQuote,
            keyTakeawaysIntroduction: study.keyTakeawaysIntroduction,
            keyTakeaways: study.keyTakeaways,
            conclusion: study.conclusion,
            closingEmphasis: study.closingEmphasis,
          }
        : {
            sections: study.sections,
            results: study.results,
            pullQuote: study.pullQuote,
          };
    const data = {
      format:
        study.format === "structured"
          ? CaseStudyFormat.STRUCTURED
          : CaseStudyFormat.NARRATIVE,
      industry: study.industry,
      title: study.title,
      subtitle: study.subtitle,
      excerpt: study.excerpt,
      image: study.image,
      imageAlt: study.imageAlt,
      publishedDate,
      publishedLabel:
        study.format === "structured" ? study.publishedLabel : null,
      readTime: study.format === "structured" ? study.readTime : null,
      clientProfile: study.format === "narrative" ? study.clientProfile : null,
      body: asJson(body),
      relatedService: asJson(study.relatedService),
      relatedContent:
        study.format === "structured"
          ? asJson(study.relatedContent)
          : Prisma.JsonNull,
      authorId: admin.id,
      categoryId: category.id,
      status: ContentStatus.PUBLISHED,
    };

    await prisma.caseStudy.upsert({
      where: { slug: study.slug },
      update: data,
      create: {
        slug: study.slug,
        ...(publishedDate ? { createdAt: publishedDate } : {}),
        ...data,
      },
    });
    console.log(`case-study: ${study.slug}`);
  }

  const [databaseBlogs, databaseCaseStudies] = await Promise.all([
    prisma.blogPost.findMany({
      where: { slug: { in: blogPosts.map((post) => post.slug) } },
      select: { slug: true, title: true },
      orderBy: { slug: "asc" },
    }),
    prisma.caseStudy.findMany({
      where: { slug: { in: caseStudies.map((study) => study.slug) } },
      select: { slug: true, title: true },
      orderBy: { slug: "asc" },
    }),
  ]);

  const expectedBlogs = new Map(
    blogPosts.map((post) => [post.slug, post.title]),
  );
  const expectedCaseStudies = new Map(
    caseStudies.map((study) => [study.slug, study.title]),
  );
  const blogsMatch =
    databaseBlogs.length === blogPosts.length &&
    databaseBlogs.every((post) => expectedBlogs.get(post.slug) === post.title);
  const caseStudiesMatch =
    databaseCaseStudies.length === caseStudies.length &&
    databaseCaseStudies.every(
      (study) => expectedCaseStudies.get(study.slug) === study.title,
    );

  console.log(
    JSON.stringify(
      {
        source: { blogs: blogPosts.length, caseStudies: caseStudies.length },
        database: {
          blogs: databaseBlogs.length,
          caseStudies: databaseCaseStudies.length,
        },
        matchingTitlesAndSlugs: blogsMatch && caseStudiesMatch,
        blogs: databaseBlogs,
        caseStudies: databaseCaseStudies,
      },
      null,
      2,
    ),
  );

  if (!blogsMatch || !caseStudiesMatch) {
    throw new Error("Migrated content verification failed.");
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
