import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { hash } from "bcryptjs";

import { blogPosts } from "../lib/blog-posts";
import { caseStudies } from "../lib/case-studies";
import {
  CaseStudyFormat,
  ContentStatus,
  Prisma,
  PrismaClient,
  UserRole,
} from "../generated/prisma/client";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) throw new Error("DATABASE_URL is not configured.");

const databaseUrl = new URL(connectionString);
if (databaseUrl.protocol !== "mysql:") {
  throw new Error("DATABASE_URL must use the mysql:// protocol.");
}

const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: databaseUrl.hostname,
    port: Number(databaseUrl.port || 3306),
    user: decodeURIComponent(databaseUrl.username),
    password: decodeURIComponent(databaseUrl.password),
    database: decodeURIComponent(databaseUrl.pathname.replace(/^\//, "")),
    // Temporary for the current Aiven service: its CA is not installed locally.
    // Replace with `ssl: { ca: readFileSync("/path/to/ca.pem", "utf8") }`
    // before production so the server certificate is verified.
    ssl: { rejectUnauthorized: false },
    connectionLimit: 5,
    connectTimeout: 10_000,
    acquireTimeout: 30_000,
    initializationTimeout: 30_000,
  }),
});

async function main() {
  const placeholderPassword = await hash("CHANGE BEFORE PRODUCTION", 12);
  const admin = await prisma.user.upsert({
    where: { email: "change-before-production@itexpertsagency.com" },
    update: { password: placeholderPassword },
    create: {
      name: "IT Experts Agency",
      email: "change-before-production@itexpertsagency.com",
      password: placeholderPassword,
      role: UserRole.ADMIN,
    },
  });

  const realBlog = blogPosts[0];
  const blogCategory = await prisma.category.upsert({
    where: { name: realBlog.category },
    update: {},
    create: { name: realBlog.category },
  });

  await prisma.blogPost.upsert({
    where: { slug: realBlog.slug },
    update: {},
    create: {
      slug: realBlog.slug,
      title: realBlog.title,
      subtitle: realBlog.subtitle,
      publishedDate: new Date(`${realBlog.publishedDate}T00:00:00.000Z`),
      publishedLabel: realBlog.publishedLabel,
      readTime: realBlog.readTime,
      excerpt: realBlog.excerpt,
      image: realBlog.image,
      imageAlt: realBlog.imageAlt,
      body: {
        intro: realBlog.intro,
        ...(realBlog.introBlocks ? { introBlocks: realBlog.introBlocks } : {}),
        sections: realBlog.sections,
      } as Prisma.InputJsonValue,
      relatedService: realBlog.relatedService,
      relatedCaseStudy: realBlog.relatedCaseStudy ?? Prisma.JsonNull,
      authorId: admin.id,
      categoryId: blogCategory.id,
      status: ContentStatus.PUBLISHED,
    },
  });

  const realCaseStudy = caseStudies[0];
  if (realCaseStudy.format !== "structured") {
    throw new Error("Expected the first real case study to be structured.");
  }

  const caseStudyCategory = await prisma.category.upsert({
    where: { name: realCaseStudy.category },
    update: {},
    create: { name: realCaseStudy.category },
  });

  await prisma.caseStudy.upsert({
    where: { slug: realCaseStudy.slug },
    update: {},
    create: {
      slug: realCaseStudy.slug,
      format: CaseStudyFormat.STRUCTURED,
      industry: realCaseStudy.industry,
      title: realCaseStudy.title,
      subtitle: realCaseStudy.subtitle,
      excerpt: realCaseStudy.excerpt,
      image: realCaseStudy.image,
      imageAlt: realCaseStudy.imageAlt,
      publishedDate: new Date(`${realCaseStudy.publishedDate}T00:00:00.000Z`),
      publishedLabel: realCaseStudy.publishedLabel,
      readTime: realCaseStudy.readTime,
      body: {
        introduction: realCaseStudy.introduction,
        snapshot: realCaseStudy.snapshot,
        challenge: realCaseStudy.challenge,
        rootCauses: realCaseStudy.rootCauses,
        solutionIntroduction: realCaseStudy.solutionIntroduction,
        solutionItems: realCaseStudy.solutionItems,
        result: realCaseStudy.result,
        pullQuote: realCaseStudy.pullQuote,
        keyTakeawaysIntroduction: realCaseStudy.keyTakeawaysIntroduction,
        keyTakeaways: realCaseStudy.keyTakeaways,
        conclusion: realCaseStudy.conclusion,
        closingEmphasis: realCaseStudy.closingEmphasis,
      } as Prisma.InputJsonValue,
      relatedService: realCaseStudy.relatedService,
      relatedContent: realCaseStudy.relatedContent,
      authorId: admin.id,
      categoryId: caseStudyCategory.id,
      status: ContentStatus.PUBLISHED,
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
