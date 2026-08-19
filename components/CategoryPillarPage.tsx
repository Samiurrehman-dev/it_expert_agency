import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import type { CategoryPageContent } from "@/lib/category-pages-data";
import { serviceDetailContent } from "@/lib/category-pages-data";
import type { ServiceCategory } from "@/lib/services-data";

import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollReveal } from "./ScrollReveal";

type CategoryPillarPageProps = {
  category: ServiceCategory;
  content: CategoryPageContent;
  relatedCategories: readonly ServiceCategory[];
  schemas: readonly Record<string, unknown>[];
};

const proofPoints = [
  { value: "10+ years", label: "experience per SME", icon: Layers3 },
  { value: "24×7", label: "NOC/SOC coverage", icon: Clock3 },
  { value: "1–2 weeks", label: "talent onboarding", icon: Globe2 },
] as const;

export function CategoryPillarPage({
  category,
  content,
  relatedCategories,
  schemas,
}: CategoryPillarPageProps) {
  const toolCount = new Set(
    category.services.flatMap((service) => [...service.tools]),
  ).size;

  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        {schemas.map((schema) => (
          <script
            key={String(schema["@type"])}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <section className="relative isolate overflow-hidden bg-primary-950 py-16 text-white sm:py-20 lg:py-24">
          <div className="bg-grid absolute inset-0 -z-20 opacity-30" />
          <div className="absolute -right-32 -top-40 -z-10 size-[34rem] rounded-full border-[90px] border-white/[0.035]" />
          <div className="absolute -bottom-40 left-1/3 -z-10 size-80 rounded-full bg-primary-500/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-300"
            >
              <Link href="/" className="transition hover:text-primary-300">
                Home
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <Link
                href="/services"
                className="transition hover:text-primary-300"
              >
                Services
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <span className="text-primary-300">{category.title}</span>
            </nav>

            <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
              <div className="[animation-fill-mode:both] motion-safe:animate-fade-up">
                <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary-300">
                  <span className="h-px w-9 bg-primary-400" />
                  Service category {category.number}
                </p>
                <h1 className="mt-5 max-w-5xl text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                  {content.h1}
                </h1>
                <div className="mt-7 max-w-3xl space-y-4 text-pretty text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                  {content.heroIntro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <aside className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-soft backdrop-blur-sm sm:p-7">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
                  Category coverage
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs font-bold text-slate-400">
                      Capabilities
                    </dt>
                    <dd className="mt-1 text-3xl font-extrabold text-white">
                      {category.services.length}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-bold text-slate-400">
                      Named tools
                    </dt>
                    <dd className="mt-1 text-3xl font-extrabold text-white">
                      {toolCount}+
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-bold leading-6 text-slate-200">
                    Dedicated, shared or augmentation teams for US, UK, Canada
                    and GCC delivery.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="category-overview"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-20">
              <ScrollReveal>
                <div className="lg:sticky lg:top-28">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                    Category overview
                  </p>
                  <h2
                    id="category-overview"
                    className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl"
                  >
                    {content.overviewHeading}
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                  {content.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <dl className="mt-10 grid gap-3 sm:grid-cols-3">
                  {proofPoints.map((point) => {
                    const Icon = point.icon;
                    return (
                      <div
                        key={point.value}
                        className="rounded-2xl border border-primary-200/70 bg-primary-50 p-5"
                      >
                        <Icon className="size-5 text-primary-700" />
                        <dt className="mt-4 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                          {point.value}
                        </dt>
                        <dd className="mt-1 text-xs font-bold text-slate-600">
                          {point.label}
                        </dd>
                      </div>
                    );
                  })}
                </dl>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="category-capabilities"
          className="bg-slate-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                  Detailed capabilities
                </p>
                <h2
                  id="category-capabilities"
                  className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl"
                >
                  What {category.shortTitle.toLowerCase()} support covers
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  {content.capabilitiesIntro}
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
              {category.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal
                    key={service.slug}
                    delay={(index % 2) * 0.05}
                    className="h-full"
                  >
                    <article
                      id={service.slug}
                      className="group relative h-full scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-soft sm:p-8"
                    >
                      <div className="absolute inset-y-8 left-0 w-1 rounded-r-full bg-primary-500" />
                      <div className="flex items-start gap-4">
                        <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors group-hover:bg-primary-950 group-hover:text-white">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <div>
                          {service.subgroup && (
                            <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.16em] text-primary-700">
                              {service.subgroup}
                            </p>
                          )}
                          <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-ink">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-6 text-pretty text-[15px] leading-7 text-slate-600">
                        {serviceDetailContent[service.slug] ??
                          service.description}
                      </p>
                      {service.tools.length > 0 && (
                        <div className="mt-6 border-t border-slate-100 pt-5">
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                            Platforms and tools
                          </p>
                          <ul
                            className="mt-3 flex flex-wrap gap-2"
                            aria-label={`${service.title} platforms and tools`}
                          >
                            {service.tools.map((tool) => (
                              <li
                                key={tool}
                                className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.07em] text-primary-800"
                              >
                                {tool}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>

            {category.extraChips && (
              <ScrollReveal>
                <aside className="mt-7 rounded-3xl border border-primary-200 bg-primary-50 p-7 sm:p-8">
                  <h3 className="text-xl font-extrabold tracking-[-0.02em] text-ink">
                    OS-level managed service coverage
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                    Cross-platform operations can also include the following
                    recurring lifecycle, security and reporting activities.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {category.extraChips.map((chip) => (
                      <li
                        key={chip}
                        className="flex items-center gap-2 rounded-full border border-primary-200 bg-white px-3 py-2 text-xs font-bold text-primary-800"
                      >
                        <Check className="size-3.5" aria-hidden="true" />
                        {chip}
                      </li>
                    ))}
                  </ul>
                </aside>
              </ScrollReveal>
            )}
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-primary-950 p-7 text-white shadow-soft sm:p-10 lg:p-14">
                <div className="absolute -right-20 -top-24 size-64 rounded-full border-[52px] border-white/[0.035]" />
                <div className="relative grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
                  <div>
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-500 text-white">
                      <ShieldCheck className="size-6" aria-hidden="true" />
                    </span>
                    <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
                      A practical delivery model
                    </p>
                    <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                      {content.whyHeading}
                    </h2>
                  </div>
                  <div className="space-y-5 text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                    {content.why.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-labelledby="category-faq"
          className="bg-slate-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                  Buyer questions
                </p>
                <h2
                  id="category-faq"
                  className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl"
                >
                  Frequently asked questions
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-12 space-y-4">
              {content.faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} delay={index * 0.04}>
                  <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7">
                    <h3 className="text-lg font-extrabold leading-7 text-ink sm:text-xl">
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {faq.answer}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="related-services"
          className="bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                    Connected expertise
                  </p>
                  <h2
                    id="related-services"
                    className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl"
                  >
                    Related service categories
                  </h2>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-primary-800"
                >
                  View all services <ArrowRight className="size-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {relatedCategories.map((related, index) => {
                const RelatedIcon = related.services[0]?.icon;
                return (
                  <ScrollReveal
                    key={related.slug}
                    delay={index * 0.05}
                    className="h-full"
                  >
                    <Link
                      href={`/services/${related.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary-300 hover:shadow-soft"
                    >
                      {RelatedIcon && (
                        <span className="grid size-11 place-items-center rounded-xl bg-primary-50 text-primary-800">
                          <RelatedIcon className="size-5" aria-hidden="true" />
                        </span>
                      )}
                      <h3 className="mt-5 text-xl font-extrabold tracking-[-0.03em] text-ink">
                        {related.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                        Explore {related.services.length} connected capabilities
                        across {related.shortTitle.toLowerCase()} delivery.
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800">
                        Explore category
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Build your specialist team"
          heading={`Need ${category.shortTitle.toLowerCase()} capacity?`}
          description="Schedule a discovery call to review your environment, toolchain, coverage hours and the right dedicated or shared delivery model."
          buttonLabel="Schedule a Discovery Call"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
