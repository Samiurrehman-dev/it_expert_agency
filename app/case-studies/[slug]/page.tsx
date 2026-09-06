import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BookOpenText,
  Building2,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  DatabaseBackup,
  Lightbulb,
  Quote,
  RotateCcw,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  UpdateAccentPill,
  UpdatePostCard,
} from "@/components/update-post-card";
// MIGRATED TO DATABASE — static imports kept in their source files for rollback.
// import { caseStudies, getCaseStudy } from "@/lib/case-studies";
// import { updatePosts } from "@/lib/updates";
import {
  getPublishedCaseStudies,
  getPublishedCaseStudy,
} from "@/lib/publicContent";

type CaseStudyPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return (await getPublishedCaseStudies()).map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = await getPublishedCaseStudy(params.slug);
  if (!caseStudy) return {};

  const canonical = `/case-studies/${caseStudy.slug}`;

  return {
    title: caseStudy.metaTitle || caseStudy.title,
    description: caseStudy.metaDescription || caseStudy.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: caseStudy.metaTitle || caseStudy.title,
      description: caseStudy.metaDescription || caseStudy.excerpt,
      url: canonical,
      siteName: "IT Experts Agency",
      images: [{ url: caseStudy.image, alt: caseStudy.imageAlt }],
      ...(caseStudy.format === "structured"
        ? { publishedTime: caseStudy.publishedDate }
        : {}),
    },
  };
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3" role="list">
      {items.map((item) => (
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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = await getPublishedCaseStudy(params.slug);
  if (!caseStudy) notFound();

  const pageUrl = `https://itexpertsagency.com/case-studies/${caseStudy.slug}`;
  const relatedCaseStudies = (await getPublishedCaseStudies())
    .filter((candidate) => candidate.slug !== caseStudy.slug)
    .slice(0, 3)
    .map((candidate) => ({
      type: "Case Study" as const,
      icon: DatabaseBackup,
      category: candidate.category,
      title: candidate.title,
      excerpt: candidate.excerpt,
      meta:
        candidate.format === "structured" ? candidate.readTime : "Client story",
      color: "from-primary-950 to-accent-700",
      image: candidate.image,
      imageAlt: candidate.imageAlt,
      href: `/case-studies/${candidate.slug}`,
    }));
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.excerpt,
    image: caseStudy.image.startsWith("http")
      ? caseStudy.image
      : `https://itexpertsagency.com${caseStudy.image}`,
    ...(caseStudy.format === "structured"
      ? {
          datePublished: caseStudy.publishedDate,
          dateModified: caseStudy.publishedDate,
        }
      : {}),
    mainEntityOfPage: pageUrl,
    author: {
      "@type": "Organization",
      name: "IT Experts Agency",
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
        name: "Case Studies",
        item: "https://itexpertsagency.com/case-studies",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.title,
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
                    href="/case-studies"
                    className="transition-colors hover:text-white"
                  >
                    Case Studies
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5 text-slate-500" />
                </li>
                <li
                  className="max-w-full truncate text-white"
                  aria-current="page"
                >
                  {caseStudy.title}
                </li>
              </ol>
            </nav>

            <div className="mt-9 max-w-5xl [animation-fill-mode:both] motion-safe:animate-fade-up">
              <UpdateAccentPill>
                {caseStudy.format === "narrative"
                  ? caseStudy.industry
                  : caseStudy.category}
              </UpdateAccentPill>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {caseStudy.title}
              </h1>
              <p className="mt-5 max-w-3xl text-pretty text-lg font-extrabold leading-8 text-accent-300 sm:text-xl">
                {caseStudy.subtitle}
              </p>
              {caseStudy.format === "structured" ? (
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-bold text-slate-200">
                  <time
                    dateTime={caseStudy.publishedDate}
                    className="inline-flex items-center gap-2"
                  >
                    <CalendarDays
                      className="size-4 text-accent-300"
                      aria-hidden="true"
                    />
                    {caseStudy.publishedLabel}
                  </time>
                  <span className="inline-flex items-center gap-2">
                    <Clock3
                      className="size-4 text-accent-300"
                      aria-hidden="true"
                    />
                    {caseStudy.readTime}
                  </span>
                </div>
              ) : (
                <p className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-200">
                  <Building2
                    className="size-4 text-accent-300"
                    aria-hidden="true"
                  />
                  {caseStudy.clientProfile}
                </p>
              )}
            </div>
          </div>
        </header>

        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <article className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-card">
              <figure className="relative aspect-[16/9] bg-slate-200">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 960px, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </figure>

              {caseStudy.format === "structured" ? (
                <>
                  <div className="px-6 py-9 sm:px-10 sm:py-12 lg:px-14">
                    <div className="space-y-5">
                      {caseStudy.introduction.map((paragraph, index) => (
                        <p
                          key={paragraph}
                          className={`leading-8 text-slate-600 ${
                            index === 0
                              ? "text-lg font-semibold leading-9 text-slate-700"
                              : "text-base"
                          }`}
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <aside className="mt-9 rounded-r-3xl border-l-4 border-primary-500 bg-primary-50 px-6 py-6 sm:px-8">
                      <div className="flex items-start gap-4">
                        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary-950 text-white">
                          <DatabaseBackup
                            className="size-5"
                            aria-hidden="true"
                          />
                        </span>
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                            Client / scenario snapshot
                          </p>
                          <p className="mt-2 text-[15px] font-semibold leading-7 text-slate-700">
                            {caseStudy.snapshot}
                          </p>
                          <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.14em] text-primary-700">
                            Industry: {caseStudy.industry}
                          </p>
                        </div>
                      </div>
                    </aside>
                  </div>

                  <div className="border-t border-slate-200 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-primary-950 text-white">
                        <TriangleAlert className="size-5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">
                        01 / Problem
                      </p>
                    </div>
                    <h2 className="mt-5 text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                      The Challenge
                    </h2>
                    <div className="mt-6 space-y-5">
                      {caseStudy.challenge.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <section className="border-t border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                    <h2 className="text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                      What Went Wrong
                    </h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      The company had focused on backup completion, rather than
                      recovery readiness.
                    </p>
                    <div className="mt-6">
                      <CheckList items={caseStudy.rootCauses} />
                    </div>
                  </section>

                  <section className="border-t border-slate-200 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-primary-950 text-white">
                        <RotateCcw className="size-5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">
                        02 / Solution
                      </p>
                    </div>
                    <h2 className="mt-5 text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                      The Solution
                    </h2>
                    <p className="mt-6 text-base leading-8 text-slate-600">
                      {caseStudy.solutionIntroduction}
                    </p>
                    <ol className="mt-7 grid gap-4 sm:grid-cols-2" role="list">
                      {caseStudy.solutionItems.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary-900 text-xs font-extrabold text-white">
                            {index + 1}
                          </span>
                          <span className="pt-0.5 text-sm font-semibold leading-6 text-slate-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </section>

                  <section className="border-t border-slate-200 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-primary-950 text-white">
                        <ShieldCheck className="size-5" aria-hidden="true" />
                      </span>
                      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">
                        03 / Result
                      </p>
                    </div>
                    <h2 className="mt-5 text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                      The Result
                    </h2>
                    <div className="mt-6 space-y-5">
                      {caseStudy.result.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <blockquote className="relative mt-10 overflow-hidden rounded-3xl bg-primary-950 px-7 py-10 text-center sm:px-12 sm:py-12">
                      <Quote
                        className="mx-auto size-8 text-accent-300"
                        aria-hidden="true"
                      />
                      <p className="mx-auto mt-5 max-w-3xl text-balance text-2xl font-extrabold leading-9 tracking-[-0.03em] text-white sm:text-3xl sm:leading-10">
                        “{caseStudy.pullQuote}”
                      </p>
                    </blockquote>
                  </section>

                  <section className="border-t border-slate-200 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                    <aside className="rounded-r-3xl border-l-4 border-primary-500 bg-primary-50 px-6 py-7 sm:px-8 sm:py-8">
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-primary-950 text-white">
                          <Lightbulb className="size-5" aria-hidden="true" />
                        </span>
                        <h2 className="text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                          Key Takeaways
                        </h2>
                      </div>
                      <p className="mt-5 text-base font-semibold leading-8 text-slate-700">
                        {caseStudy.keyTakeawaysIntroduction}
                      </p>
                      <div className="mt-6">
                        <CheckList items={caseStudy.keyTakeaways} />
                      </div>
                    </aside>
                  </section>

                  <section className="border-t border-slate-200 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                    <h2 className="text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                      Conclusion
                    </h2>
                    <div className="mt-6 space-y-5">
                      {caseStudy.conclusion.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-base leading-8 text-slate-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <p className="mt-8 border-l-4 border-primary-500 pl-5 text-xl font-extrabold leading-8 tracking-[-0.02em] text-primary-800 sm:text-2xl sm:leading-9">
                      {caseStudy.closingEmphasis}
                    </p>
                  </section>
                </>
              ) : (
                <>
                  {caseStudy.sections.map((section, index) => {
                    const isResultsSection =
                      section.id === "where-things-stand-now";

                    return (
                      <section
                        key={section.id}
                        aria-labelledby={section.id}
                        className={`border-b border-slate-200 px-6 py-10 last:border-b-0 sm:px-10 sm:py-12 lg:px-14 ${
                          index % 2 === 1 ? "bg-slate-50" : "bg-white"
                        }`}
                      >
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">
                          {String(index + 1).padStart(2, "0")} / Client story
                        </p>
                        <h2
                          id={section.id}
                          className="mt-3 scroll-mt-28 text-balance text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl"
                        >
                          {section.title}
                        </h2>

                        {isResultsSection ? (
                          <>
                            <p className="mt-6 text-base leading-8 text-slate-600">
                              {section.paragraphs[0]}
                            </p>

                            <div className="mt-8 rounded-3xl border border-primary-200 bg-primary-50 p-5 sm:p-6">
                              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                                Results
                              </p>
                              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                                {caseStudy.results.map((result) => (
                                  <div
                                    key={result.label}
                                    className="rounded-2xl border border-primary-200 bg-white p-5"
                                  >
                                    <dt className="text-lg font-extrabold leading-7 tracking-[-0.02em] text-primary-800">
                                      {result.label}
                                    </dt>
                                    <dd className="mt-2 text-sm leading-6 text-slate-600">
                                      {result.detail}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </div>

                            <p className="mt-8 text-base leading-8 text-slate-600">
                              {section.paragraphs[1]}
                            </p>

                            <blockquote className="relative mt-6 overflow-hidden rounded-3xl bg-primary-950 px-7 py-10 text-center sm:px-12 sm:py-12">
                              <Quote
                                className="mx-auto size-8 text-accent-300"
                                aria-hidden="true"
                              />
                              <p className="mx-auto mt-5 max-w-3xl text-balance text-2xl font-extrabold leading-9 tracking-[-0.03em] text-white sm:text-3xl sm:leading-10">
                                “{caseStudy.pullQuote}”
                              </p>
                            </blockquote>
                          </>
                        ) : (
                          <div className="mt-6 space-y-5">
                            {section.paragraphs.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="text-base leading-8 text-slate-600"
                              >
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        )}
                      </section>
                    );
                  })}
                </>
              )}

              <aside className="border-t border-slate-200 bg-primary-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
                <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                      Related service
                    </p>
                    <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                      {caseStudy.relatedService.heading}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {caseStudy.relatedService.description}
                    </p>
                  </div>
                  <Link
                    href={caseStudy.relatedService.href}
                    className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-900 px-5 py-3 text-sm font-extrabold text-white transition-all hover:-translate-y-0.5 hover:bg-primary-800"
                  >
                    {caseStudy.relatedService.label}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </aside>
            </article>
          </div>
        </section>

        {caseStudy.format === "structured" ? (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-5xl px-5 sm:px-8">
              <ScrollReveal>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                  Continue exploring
                </p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                  Related insight
                </h2>
              </ScrollReveal>

              <ScrollReveal className="mt-10" delay={0.06}>
                <Link
                  href={caseStudy.relatedContent.href}
                  className="group flex flex-col gap-7 rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft sm:flex-row sm:items-center sm:justify-between sm:p-9"
                >
                  <div className="flex max-w-3xl items-start gap-5">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-950 text-white">
                      <BookOpenText className="size-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                        {caseStudy.relatedContent.category}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold leading-7 tracking-[-0.025em] text-ink">
                        {caseStudy.relatedContent.label}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {caseStudy.relatedContent.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="size-6 shrink-0 text-primary-700 transition-transform group-hover:translate-x-1" />
                </Link>
              </ScrollReveal>
            </div>
          </section>
        ) : (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <ScrollReveal>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                  More client stories
                </p>
                <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                  Related case studies
                </h2>
              </ScrollReveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedCaseStudies.map((relatedCaseStudy, index) => (
                  <ScrollReveal
                    key={relatedCaseStudy.title}
                    delay={index * 0.06}
                    className="h-full"
                  >
                    <UpdatePostCard post={relatedCaseStudy} headingLevel="h3" />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}
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
