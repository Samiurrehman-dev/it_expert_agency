import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  Gauge,
  GitMerge,
  ListChecks,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import {
  grcCategorySlug,
  type GRCServicePageContent,
  grcServicePages,
} from "@/lib/grc-service-pages-data";
import { serviceCategories } from "@/lib/services-data";

import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollReveal } from "./ScrollReveal";

const coverageIcons = [
  Activity,
  FileSearch,
  BarChart3,
  GitMerge,
  ShieldCheck,
  FileCheck2,
  Gauge,
  SearchCheck,
] as const;

function renderFootnotes(text: string) {
  const parts = text.split(/(\[[1-3]\])/g);
  return parts.map((part, index) => {
    if (!/^\[[1-3]\]$/.test(part)) return part;
    const sourceIndex = Number(part[1]);
    return (
      <sup key={`${part}-${index}`}>
        <a
          href={`#source-${sourceIndex}`}
          className="ml-0.5 font-extrabold text-primary-300 underline decoration-primary-400/60 underline-offset-2"
        >
          {sourceIndex}
        </a>
      </sup>
    );
  });
}

type GRCServicePageProps = {
  page: GRCServicePageContent;
  schemas: readonly Record<string, unknown>[];
};

export function GRCServicePage({ page, schemas }: GRCServicePageProps) {
  const category = serviceCategories.find(
    (item) => item.slug === grcCategorySlug,
  );
  const service = category?.services.find((item) => item.slug === page.slug);
  const ServiceIcon = service?.icon ?? ClipboardCheck;
  const isComplianceAutomation = page.slug === "compliance-automation";

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

        <section className="relative isolate overflow-hidden bg-primary-950 py-14 text-white sm:py-16 lg:py-20">
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
                href={`/services/${grcCategorySlug}`}
                className="transition hover:text-primary-300"
              >
                Governance, Risk &amp; Compliance
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
              <div className="mt-7 max-w-3xl space-y-4 text-pretty text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{renderFootnotes(paragraph)}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-12">
            <aside aria-label="Governance, risk and compliance services">
              <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-card lg:sticky lg:top-28">
                <p className="px-4 pb-3 pt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">
                  In this category
                </p>
                <nav>
                  <ul className="grid gap-1">
                    {grcServicePages.map((item) => {
                      const active = item.slug === page.slug;
                      return (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${grcCategorySlug}/${item.slug}`}
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
                          {active && (
                            <ul className="mb-2 ml-5 mt-1 border-l border-primary-200 pl-4 text-xs font-bold text-slate-500">
                              <li>
                                <a
                                  href="#service-coverage"
                                  className="block py-1.5 transition hover:text-primary-700"
                                >
                                  Service coverage
                                </a>
                              </li>
                              {isComplianceAutomation && (
                                <>
                                  <li>
                                    <a
                                      href="#saudi-framework-depth"
                                      className="block py-1.5 transition hover:text-primary-700"
                                    >
                                      Saudi framework depth
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#evidence-reuse"
                                      className="block py-1.5 transition hover:text-primary-700"
                                    >
                                      Assess once, evidence many
                                    </a>
                                  </li>
                                  <li>
                                    <a
                                      href="#evidence-states"
                                      className="block py-1.5 transition hover:text-primary-700"
                                    >
                                      Evidence states
                                    </a>
                                  </li>
                                </>
                              )}
                              <li>
                                <a
                                  href="#platforms-tools"
                                  className="block py-1.5 transition hover:text-primary-700"
                                >
                                  {page.toolsLabel}
                                </a>
                              </li>
                              {page.faqs && (
                                <li>
                                  <a
                                    href="#grc-faq"
                                    className="block py-1.5 transition hover:text-primary-700"
                                  >
                                    FAQ
                                  </a>
                                </li>
                              )}
                            </ul>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <Link
                  href={`/services/${grcCategorySlug}`}
                  className="mx-4 mb-3 mt-5 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-xs font-extrabold text-primary-800"
                >
                  View category overview
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </aside>

            <div className="min-w-0">
              <section id="service-coverage" className="scroll-mt-28">
                <ScrollReveal>
                  <div className="max-w-3xl">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                      Service coverage
                    </p>
                    <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
                      What we support
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
                        <article className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7">
                          <div className="absolute inset-y-6 left-0 w-1 rounded-r-full bg-primary-500" />
                          <span className="grid size-10 place-items-center rounded-xl bg-primary-50 text-primary-800">
                            <Icon className="size-5" aria-hidden="true" />
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
              </section>

              {isComplianceAutomation && (
                <>
                  <ScrollReveal>
                    <section
                      id="saudi-framework-depth"
                      className="mt-10 scroll-mt-28 rounded-3xl bg-primary-950 p-7 text-white shadow-soft sm:p-9"
                    >
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
                        Saudi framework depth
                      </p>
                      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                        Scope first, then evidence
                      </h2>
                      <div className="mt-7 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                          <h3 className="text-xl font-extrabold text-white">
                            NCA ECC-2:2024
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-200">
                            ECC-2:2024 establishes minimum cybersecurity
                            requirements across 4 domains, 28 subdomains, 108
                            main controls and 92 subcontrols. Its scope covers
                            Saudi government entities and their affiliates, plus
                            private-sector entities that own, operate or host
                            Critical National Infrastructure; other Saudi
                            entities are encouraged to use it. Applicability is
                            evaluated control by control, including technology-
                            dependent requirements such as cloud controls. [1]
                          </p>
                        </article>
                        <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-6">
                          <h3 className="text-xl font-extrabold text-white">
                            Saudi Aramco SACS-002
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-200">
                            The February 2022 SACS-002 edition sets minimum
                            requirements for third parties under contract with
                            Saudi Aramco. Its 92 controls comprise 23 general
                            and 69 specific controls; the specific set is
                            applied according to classifications including
                            network connectivity, outsourced infrastructure,
                            critical data processing, customised software and
                            cloud computing services. The document separates
                            general and classification-specific requirements and
                            places responsibility on the third party to
                            establish what applies. Aramco now publishes
                            SACS-210, so the contractually applicable edition
                            must be confirmed before assessment. [2][3]
                          </p>
                        </article>
                      </div>
                      <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-primary-300">
                          Additional Saudi frameworks supported
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-200">
                          NCA Cloud Cybersecurity Controls (CCC), NCA Critical
                          Systems Cybersecurity Controls (CSCC), NCA Data
                          Cybersecurity Controls (DCC), NCA Operational
                          Technology Cybersecurity Controls (OTCC), Personal
                          Data Protection Law (PDPL), and SAMA Cyber Security
                          Framework.
                        </p>
                      </div>
                    </section>
                  </ScrollReveal>

                  <div className="mt-10 grid gap-5 lg:grid-cols-2">
                    <ScrollReveal className="h-full">
                      <section
                        id="evidence-reuse"
                        className="h-full scroll-mt-28 rounded-3xl border border-primary-200 bg-white p-7 shadow-card sm:p-8"
                      >
                        <span className="grid size-11 place-items-center rounded-xl bg-primary-50 text-primary-800">
                          <GitMerge className="size-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.035em] text-ink">
                          Assess once, evidence many times
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          One well-defined internal control can support several
                          framework requirements. We assess that control once,
                          retain the evidence and map it wherever the scope and
                          test criteria genuinely align. Framework-specific
                          differences remain visible, so reuse reduces duplicate
                          requests without turning a crosswalk into proof.
                        </p>
                      </section>
                    </ScrollReveal>

                    <ScrollReveal className="h-full" delay={0.05}>
                      <section
                        id="evidence-states"
                        className="h-full scroll-mt-28 rounded-3xl border border-primary-200 bg-primary-50 p-7 shadow-card sm:p-8"
                      >
                        <span className="grid size-11 place-items-center rounded-xl bg-white text-primary-800">
                          <ListChecks className="size-5" aria-hidden="true" />
                        </span>
                        <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.035em] text-ink">
                          Owning a tool is not a control
                        </h2>
                        <dl className="mt-5 grid gap-4">
                          <div>
                            <dt className="font-extrabold text-ink">
                              Potential
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-slate-600">
                              The capability exists, but it is not configured or
                              enforced.
                            </dd>
                          </div>
                          <div>
                            <dt className="font-extrabold text-ink">Claimed</dt>
                            <dd className="mt-1 text-sm leading-6 text-slate-600">
                              It is configured and enforced, but has not been
                              independently verified.
                            </dd>
                          </div>
                          <div>
                            <dt className="font-extrabold text-ink">
                              Verified
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-slate-600">
                              An independent review has confirmed the control
                              with suitable evidence.
                            </dd>
                          </div>
                        </dl>
                      </section>
                    </ScrollReveal>
                  </div>
                </>
              )}

              <ScrollReveal>
                <section
                  id="platforms-tools"
                  className="mt-10 scroll-mt-28 rounded-3xl border border-primary-200 bg-white p-7 shadow-card sm:p-8"
                >
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-700">
                    {page.toolsLabel}
                  </p>
                  <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
                    Technology and framework coverage
                  </h2>
                  <ul
                    className="mt-6 flex flex-wrap gap-2.5"
                    aria-label={`${page.navTitle} ${page.toolsLabel.toLowerCase()}`}
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

              {page.faqs && (
                <section id="grc-faq" className="mt-16 scroll-mt-28">
                  <ScrollReveal>
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                      Frequently asked questions
                    </p>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                      Compliance automation FAQ
                    </h2>
                  </ScrollReveal>
                  <div className="mt-8 grid gap-4">
                    {page.faqs.map((faq, index) => (
                      <ScrollReveal
                        key={faq.question}
                        delay={(index % 2) * 0.03}
                      >
                        <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
                          <summary className="flex cursor-pointer list-none items-start justify-between gap-5 font-extrabold text-ink">
                            {faq.question}
                            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary-600" />
                          </summary>
                          <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </details>
                      </ScrollReveal>
                    ))}
                  </div>
                </section>
              )}

              {page.sources && (
                <section
                  aria-labelledby="source-notes"
                  className="mt-12 rounded-2xl border border-slate-200 bg-slate-100 p-6"
                >
                  <h2
                    id="source-notes"
                    className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-600"
                  >
                    Source notes
                  </h2>
                  <ol className="mt-4 grid gap-3 text-xs leading-6 text-slate-600">
                    {page.sources.map((source, index) => (
                      <li id={`source-${index + 1}`} key={source.label}>
                        <a
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="font-extrabold text-primary-800 underline decoration-primary-300 underline-offset-2"
                        >
                          {source.label}
                        </a>{" "}
                        — {source.detail}
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Build a defensible GRC programme"
          heading={`Need ${page.navTitle.toLowerCase()} support?`}
          description="Tell us which obligations, systems, evidence and deadlines are in scope. We’ll shape the right support model around your control owners and independent assessors."
          buttonLabel="Talk to a GRC specialist"
          buttonHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
