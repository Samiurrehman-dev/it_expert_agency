import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { grcCategorySlug } from "@/lib/grc-service-pages-data";
import type { ServiceCategory } from "@/lib/services-data";

import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollReveal } from "./ScrollReveal";

type GovernanceRiskComplianceLandingPageProps = {
  category: ServiceCategory;
  schemas: readonly Record<string, unknown>[];
};

export function GovernanceRiskComplianceLandingPage({
  category,
  schemas,
}: GovernanceRiskComplianceLandingPageProps) {
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
              <span className="text-primary-300">
                Governance, Risk &amp; Compliance
              </span>
            </nav>

            <div className="max-w-5xl motion-safe:animate-fade-up">
              <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary-300">
                <span className="h-px w-9 bg-primary-400" />
                Service category 06
              </p>
              <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Governance, Risk &amp; Compliance
              </h1>
              <p className="mt-7 max-w-3xl text-pretty text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
                Build a defensible GRC programme with compliance automation,
                risk assessments, regulatory framework alignment, and policy and
                audit support. Our specialists turn obligations into owned
                controls, traceable evidence and prioritised remediation work.
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="grc-services"
          className="bg-slate-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary-700">
                  GRC services
                </p>
                <h2
                  id="grc-services"
                  className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl"
                >
                  Choose the support your programme needs
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Each service can stand alone or combine into one coordinated
                  governance, risk and compliance workstream.
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {category.services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <ScrollReveal
                    key={service.slug}
                    delay={(index % 2) * 0.05}
                    className="h-full"
                  >
                    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-300 hover:shadow-soft sm:p-8">
                      <div className="absolute inset-y-8 left-0 w-1 rounded-r-full bg-primary-500" />
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors group-hover:bg-primary-950 group-hover:text-white">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.035em] text-ink">
                        {service.title}
                      </h3>
                      <p className="mt-4 flex-1 text-pretty text-[15px] leading-7 text-slate-600">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${grcCategorySlug}/${service.slug}`}
                        className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800 transition-colors hover:text-primary-600"
                      >
                        Learn More
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Build a defensible GRC programme"
          heading="Need practical capacity behind your controls?"
          description="Tell us which frameworks, audits, risks and deadlines are in scope. We’ll shape the right specialist support model around your owners and assessors."
          buttonLabel="Talk to a GRC specialist"
          buttonHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
