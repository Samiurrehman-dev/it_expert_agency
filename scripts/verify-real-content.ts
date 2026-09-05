import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { blogPosts } from "../lib/blog-posts";
import { caseStudies } from "../lib/case-studies";
import { PrismaClient } from "../generated/prisma/client";

const url = new URL(process.env.DATABASE_URL!);
const prisma = new PrismaClient({
  adapter: new PrismaMariaDb({
    host: url.hostname,
    port: Number(url.port || 3306),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: decodeURIComponent(url.pathname.slice(1)),
    ssl: { rejectUnauthorized: false },
  }),
});

const json = (value: unknown) => JSON.stringify(value);

async function main() {
  const [blogs, studies, ebookCount] = await Promise.all([
    prisma.blogPost.findMany({ where: { status: "PUBLISHED" } }),
    prisma.caseStudy.findMany({ where: { status: "PUBLISHED" } }),
    prisma.ebook.count({ where: { status: "PUBLISHED" } }),
  ]);

  for (const source of blogPosts) {
    const row = blogs.find((item) => item.slug === source.slug);
    const expectedBody = {
      intro: source.intro,
      ...(source.introBlocks ? { introBlocks: source.introBlocks } : {}),
      sections: source.sections,
    };
    if (!row || row.title !== source.title || json(row.body) !== json(expectedBody))
      throw new Error(`Blog mismatch: ${source.slug}`);
  }

  for (const source of caseStudies) {
    const row = studies.find((item) => item.slug === source.slug);
    const expectedBody = source.format === "structured"
      ? {
          introduction: source.introduction, snapshot: source.snapshot,
          challenge: source.challenge, rootCauses: source.rootCauses,
          solutionIntroduction: source.solutionIntroduction,
          solutionItems: source.solutionItems, result: source.result,
          pullQuote: source.pullQuote,
          keyTakeawaysIntroduction: source.keyTakeawaysIntroduction,
          keyTakeaways: source.keyTakeaways, conclusion: source.conclusion,
          closingEmphasis: source.closingEmphasis,
        }
      : { sections: source.sections, results: source.results, pullQuote: source.pullQuote };
    if (!row || row.title !== source.title || json(row.body) !== json(expectedBody))
      throw new Error(`Case study mismatch: ${source.slug}`);
  }

  if (blogs.length !== blogPosts.length || studies.length !== caseStudies.length)
    throw new Error("Published database counts do not exactly match the real sources.");

  console.log(JSON.stringify({
    exactMatch: true,
    blogs: blogs.length,
    caseStudies: studies.length,
    publishedEbooks: ebookCount,
    spotChecks: {
      blogs: blogPosts.slice(0, 3).map(({ slug }) => slug),
      caseStudies: caseStudies.map(({ slug }) => slug),
    },
  }, null, 2));
}

main().finally(() => prisma.$disconnect());
