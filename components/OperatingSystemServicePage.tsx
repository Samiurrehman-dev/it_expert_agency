import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ChevronRight,
  CircleGauge,
  FileLock2,
  KeyRound,
  Layers3,
  RefreshCw,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import {
  osCategorySlug,
  type OSServicePageContent,
  osServicePages,
} from "@/lib/os-service-pages-data";
import { serviceCategories } from "@/lib/services-data";

import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollReveal } from "./ScrollReveal";

const coverageIcons = [
  Settings2,
  RefreshCw,
  SearchCheck,
  FileLock2,
  ShieldCheck,
  Layers3,
  CircleGauge,
  KeyRound,
  Wrench,
  Activity,
] as const;

type OperatingSystemServicePageProps = {
  page: OSServicePageContent;
  schemas: readonly Record<string, unknown>[];
};

export function OperatingSystemServicePage({
  page,
  schemas,
}: OperatingSystemServicePageProps) {
  const category = serviceCategories.find(
    (item) => item.slug === osCategorySlug,
  );
  const service = category?.services.find((item) => item.slug === page.slug);
  const ServiceIcon = service?.icon ?? Settings2;

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

        <section className="sm:py-18 relative isolate overflow-hidden bg-primary-950 py-14 text-white lg:py-20">
          <div className="bg-grid absolute inset-0 -z-20 opacity-30" />
          <div className="absolute -right-24 -top-32 -z-10 size-80 rounded-full border-[64px] border-white/[0.035]" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav
              aria-label="Breadcrumb"
              className="mb-9 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-300"
            >
              <Link href="/" className="transition hover:text-primary-300">
                Home
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <Link
                href={`/services/${osCategorySlug}`}
                className="transition hover:text-primary-300"
              >
                Operating Systems &amp; Endpoint Management
              </Link>
              <ChevronRight className="size-3.5" aria-hidden="true" />
              <span className="text-primary-300">{page.navTitle}</span>
            </nav>

            <div className="max-w-4xl motion-safe:animate-fade-up">
              <div className="flex items-center gap-4">
                <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-black/10">
                  <ServiceIcon className="size-6" aria-hidden="true" />
                </span>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary-300">
                  {page.eyebrow}
                </p>
              </div>
              <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                {page.title}
              </h1>
              <div className="mt-7 max-w-3xl space-y-3 text-pretty text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
            <aside aria-label="Operating system services">
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-card lg:sticky lg:top-28">
                <p className="px-4 pb-3 pt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  In this category
                </p>
                <nav>
                  <ul className="grid gap-1">
                    {osServicePages.map((item) => {
                      const active = item.slug === page.slug;
                      return (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${osCategorySlug}/${item.slug}`}
                            aria-current={active ? "page" : undefined}
                            className={[
                              "relative flex items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-bold leading-5 transition-colors",
                              active
                                ? "bg-primary-50 text-primary-800"
                                : "text-slate-600 hover:bg-slate-50 hover:text-ink",
                            ].join(" ")}
                          >
                            {active && (
                              <span className="absolute inset-y-2 left-0 w-1 rounded-r-full bg-primary-500" />
                            )}
                            <span>{item.navTitle}</span>
                            <ChevronRight
                              className={[
                                "size-3.5 shrink-0",
                                active ? "text-primary-600" : "text-slate-400",
                              ].join(" ")}
                              aria-hidden="true"
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <Link
                  href={`/services/${osCategorySlug}`}
                  className="mx-4 mb-3 mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-extrabold text-primary-800"
                >
                  View category overview
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </aside>

            <div className="min-w-0">
              <ScrollReveal>
                <div className="max-w-3xl">
                  <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                    Service coverage
                  </p>
                  <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
                    What we manage
                  </h2>
                  <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                    {page.coverageIntro}
                  </p>
                </div>
              </ScrollReveal>

              <div className="mt-10 grid gap-5 md:grid-cols-2">
                {page.coverage.map((item, index) => {
                  const Icon = coverageIcons[index % coverageIcons.length];
                  return (
                    <ScrollReveal
                      key={item.title}
                      delay={(index % 2) * 0.04}
                      className="h-full"
                    >
                      <article
                        id={`coverage-${index + 1}`}
                        className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7"
                      >
                        <div className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-primary-500" />
                        <span className="grid size-10 place-items-center rounded-xl bg-primary-50 text-primary-800">
                          <Icon className="size-4.5" aria-hidden="true" />
                        </span>
                        <h3 className="mt-5 text-xl font-extrabold tracking-[-0.025em] text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>

              <ScrollReveal>
                <section className="mt-10 rounded-3xl border border-primary-200 bg-white p-7 shadow-card sm:p-8">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-700">
                    Platforms and tools
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                    Technology coverage
                  </h2>
                  <ul
                    className="mt-6 flex flex-wrap gap-2.5"
                    aria-label={`${page.navTitle} platforms and tools`}
                  >
                    {page.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-primary-300 bg-primary-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.08em] text-primary-800"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </section>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Build your specialist team"
          heading={`Need ${page.navTitle.toLowerCase()} expertise?`}
          description="Tell us about your estate, toolchain, maintenance windows and coverage goals. We’ll shape the right dedicated or shared operating model."
          buttonLabel="Talk to an OS specialist"
          buttonHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
