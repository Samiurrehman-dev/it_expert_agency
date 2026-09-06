import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  DatabaseBackup,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogTableOfContents } from "@/components/blog-table-of-contents";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  UpdateAccentPill,
  UpdatePostCard,
} from "@/components/update-post-card";
// MIGRATED TO DATABASE — static imports kept in their source files for rollback.
// import { blogPosts, getBlogPost } from "@/lib/blog-posts";
// import { updatePosts } from "@/lib/updates";
import type { BlogBlock } from "@/lib/blog-posts";
import { getPublishedBlog, getPublishedBlogs } from "@/lib/publicContent";

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return (await getPublishedBlogs()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = await getPublishedBlog(params.slug);
  if (!post) return {};

  const canonical = `/blog/${post.slug}`;

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: canonical,
      siteName: "IT Experts Agency",
      images: [{ url: post.image, alt: post.imageAlt }],
      publishedTime: post.publishedDate,
      authors: [post.author],
    },
  };
}

function ArticleBlock({ block }: { block: BlogBlock }) {
  if (block.type === "image") {
    return (
      <figure>
        <Image
          src={block.url}
          alt={block.caption || "Article image"}
          width={1200}
          height={675}
          sizes="(min-width: 1024px) 760px, calc(100vw - 3rem)"
          className="h-auto w-full rounded-2xl object-cover"
        />
        {block.caption && (
          <figcaption className="mt-2 text-center text-sm text-slate-500">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  }
  if (block.type === "paragraph") {
    return <p className="text-base leading-8 text-slate-600">{block.text}</p>;
  }

  if (block.type === "subheading") {
    return (
      <h3 className="pt-2 text-lg font-extrabold tracking-[-0.02em] text-ink">
        {block.title}
      </h3>
    );
  }

  if (block.type === "checklist") {
    return (
      <ul className="space-y-3" role="list">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-600">
            <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-md border border-primary-300 bg-primary-50 text-primary-800">
              <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-[15px] leading-7">{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "callout") {
    if (block.compact) {
      return (
        <p className="border-l-2 border-primary-500 pl-4 text-sm leading-7 text-slate-600">
          <span className="mr-1 font-extrabold text-primary-800">
            {block.label ?? "Highlight"}:
          </span>
          {block.text}
        </p>
      );
    }

    return (
      <aside className="rounded-r-2xl border-l-4 border-primary-500 bg-primary-50 px-5 py-5 sm:px-6">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
          {block.label ?? "Practical control"}
        </p>
        <p className="mt-2 text-[15px] font-semibold leading-7 text-slate-700">
          {block.text}
        </p>
      </aside>
    );
  }

  if (block.type === "contrast") {
    return (
      <blockquote className="space-y-3 rounded-r-2xl border-l-4 border-primary-500 bg-primary-50 px-5 py-5 sm:px-6">
        {block.items.map((item) => (
          <div key={item.title}>
            <p className="text-lg font-extrabold leading-7 tracking-[-0.02em] text-ink">
              {item.title}
            </p>
            {item.text && (
              <p className="mt-1 text-[15px] leading-7 text-slate-600">
                {item.text}
              </p>
            )}
          </div>
        ))}
      </blockquote>
    );
  }

  if (block.type === "highlights") {
    return (
      <div className="space-y-3">
        {block.items.map((item) => (
          <div
            key={item.title}
            className="rounded-r-2xl border-l-4 border-primary-500 bg-primary-50 px-5 py-4 sm:px-6"
          >
            <p className="text-lg font-extrabold leading-7 tracking-[-0.02em] text-ink">
              {item.title}
            </p>
            {item.text && (
              <p className="mt-1 text-[15px] leading-7 text-slate-600">
                {item.text}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  }

  if (block.type === "steps") {
    return (
      <ol className="space-y-3" role="list">
        {block.items.map((item, index) => (
          <li
            key={item.label}
            className="group grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-primary-200 hover:bg-primary-50 sm:p-5"
          >
            <span className="grid size-10 place-items-center rounded-xl bg-primary-950 text-sm font-extrabold text-white">
              {index + 1}
            </span>
            <div className="pt-0.5">
              <p className="text-base font-extrabold text-ink">{item.label}</p>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (block.type === "metrics") {
    return (
      <dl className="grid gap-4 sm:grid-cols-2">
        {block.items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <dt className="font-extrabold leading-6 text-ink">{item.label}</dt>
            <dd className="mt-2 text-sm leading-6 text-slate-600">
              {item.detail}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return (
    <ul
      className={`grid gap-3 ${
        block.columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
      }`}
      role="list"
    >
      {block.items.map((item) => (
        <li
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
        >
          <p className="flex items-center gap-2 font-extrabold text-ink">
            <ArrowRight
              className="size-4 shrink-0 text-primary-600"
              aria-hidden="true"
            />
            {item.label}
          </p>
          <p className="mt-2 pl-6 text-sm leading-6 text-slate-600">
            {item.detail}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPublishedBlog(params.slug);
  if (!post) notFound();

  const relatedPosts = (await getPublishedBlogs())
    .filter((candidate) => candidate.slug !== post.slug)
    .slice(0, 3)
    .map((candidate) => ({
      type: "Blog" as const,
      icon: ShieldCheck,
      category: candidate.category,
      title: candidate.title,
      excerpt: candidate.excerpt,
      meta: candidate.readTime,
      color: "from-primary-950 to-primary-700",
      image: candidate.image,
      imageAlt: candidate.imageAlt,
      href: `/blog/${candidate.slug}`,
    }));
  const pageUrl = `https://itexpertsagency.com/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image.startsWith("http")
      ? post.image
      : `https://itexpertsagency.com${post.image}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "IT Experts Agency",
      url: "https://itexpertsagency.com",
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://itexpertsagency.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://itexpertsagency.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `https://itexpertsagency.com/blog#${post.category.toLowerCase().replaceAll(" ", "-")}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: pageUrl,
      },
    ],
  };

  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <header className="bg-grid relative isolate overflow-hidden bg-primary-950 py-16 sm:py-20 lg:py-24">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-950 via-primary-950 to-primary-900/80" />
          <div className="absolute -right-24 -top-28 -z-10 size-80 rounded-full border-[64px] border-white/5" />
          <div className="absolute -bottom-40 left-1/3 -z-10 size-80 rounded-full bg-accent-400/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-300">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5 text-slate-500" />
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="transition-colors hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5 text-slate-500" />
                </li>
                <li className="text-slate-200">{post.category}</li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5 text-slate-500" />
                </li>
                <li
                  className="max-w-full truncate text-white"
                  aria-current="page"
                >
                  {post.title}
                </li>
              </ol>
            </nav>

            <div className="mt-9 max-w-4xl [animation-fill-mode:both] motion-safe:animate-fade-up">
              <UpdateAccentPill>{post.category}</UpdateAccentPill>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {post.title}
              </h1>
              {post.subtitle && (
                <p className="mt-5 max-w-3xl text-pretty text-lg font-extrabold leading-8 text-accent-300 sm:text-xl">
                  {post.subtitle}
                </p>
              )}
              <p className="mt-6 max-w-3xl text-pretty text-base leading-8 text-slate-100/85 sm:text-lg">
                {post.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-slate-200">
                <span className="inline-flex items-center gap-2">
                  <UserRound
                    className="size-4 text-accent-300"
                    aria-hidden="true"
                  />
                  {post.author}
                </span>
                <time
                  dateTime={post.publishedDate}
                  className="inline-flex items-center gap-2"
                >
                  <CalendarDays
                    className="size-4 text-accent-300"
                    aria-hidden="true"
                  />
                  {post.publishedLabel}
                </time>
                <span className="inline-flex items-center gap-2">
                  <Clock3
                    className="size-4 text-accent-300"
                    aria-hidden="true"
                  />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto grid max-w-7xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_17rem] xl:gap-12">
            <article className="rounded-[2rem] border border-slate-200/80 bg-white px-6 py-9 shadow-card sm:px-10 sm:py-12 lg:px-12">
              <figure className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl bg-slate-200">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 820px, (min-width: 1024px) calc(100vw - 25rem), calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </figure>

              <div className="space-y-5 border-b border-slate-200 pb-10">
                {post.introBlocks
                  ? post.introBlocks.map((block, index) => (
                      <ArticleBlock key={`intro-${index}`} block={block} />
                    ))
                  : post.intro.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-base leading-8 text-slate-600 first:text-lg first:font-semibold first:leading-9 first:text-slate-700"
                      >
                        {paragraph}
                      </p>
                    ))}
              </div>

              <div>
                {post.sections.map((section) => (
                  <section
                    key={section.id}
                    aria-labelledby={section.id}
                    className="border-b border-slate-200 py-10 last:border-b-0 last:pb-0 sm:py-12"
                  >
                    <h2
                      id={section.id}
                      className="scroll-mt-28 text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl"
                    >
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-6">
                      {section.blocks.map((block, index) => (
                        <ArticleBlock
                          key={`${section.id}-${index}`}
                          block={block}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <aside className="mt-12 overflow-hidden rounded-3xl border border-primary-200 bg-primary-50 shadow-card">
                <div className="p-6 sm:p-8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-950 text-white">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                  </span>
                  <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                    Related service
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                    {post.relatedService.heading}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {post.relatedService.description}
                  </p>
                  <Link
                    href={post.relatedService.href}
                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-800"
                  >
                    {post.relatedService.label}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </aside>

              {post.relatedCaseStudy && (
                <aside className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-card">
                  <div className="p-6 sm:p-8">
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-950 text-white">
                      <DatabaseBackup className="size-6" aria-hidden="true" />
                    </span>
                    <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                      Related case study
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                      {post.relatedCaseStudy.heading}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {post.relatedCaseStudy.description}
                    </p>
                    <Link
                      href={post.relatedCaseStudy.href}
                      className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-800"
                    >
                      {post.relatedCaseStudy.label}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </aside>
              )}
            </article>

            <aside className="hidden self-stretch lg:block">
              <BlogTableOfContents
                sections={post.sections.filter(
                  (section) => section.showInToc !== false,
                )}
              />
            </aside>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                Keep reading
              </p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                Related posts
              </h2>
            </ScrollReveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <ScrollReveal
                  key={relatedPost.title}
                  delay={index * 0.06}
                  className="h-full"
                >
                  <UpdatePostCard post={relatedPost} headingLevel="h3" />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema]),
        }}
      />
    </div>
  );
}
