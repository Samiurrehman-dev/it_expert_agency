import Link from "next/link";
import { ArrowRight, BadgeCheck, Check, Clock3, Globe2 } from "lucide-react";

import { markets, serviceCategories, valueProps } from "@/lib/services-data";

import { ScrollReveal } from "./ScrollReveal";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="bg-slate-50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary-700">
              <span className="h-px w-9 bg-primary-500" />
              What we do
            </p>
            <h2
              id="services-heading"
              className="mt-4 text-balance text-4xl font-extrabold tracking-[-0.05em] text-ink sm:text-5xl lg:text-6xl"
            >
              Our Services
            </h2>
            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              Deep operational expertise across infrastructure, operating
              systems, applications, platforms, security, and the complete MSP
              toolchain.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24">
          {serviceCategories.map((category, categoryIndex) => {
            const subgroups = Array.from(
              new Set(
                category.services
                  .map((service) => service.subgroup)
                  .filter((value): value is string => Boolean(value)),
              ),
            );

            return (
              <section
                key={category.slug}
                id={category.slug}
                aria-labelledby={`${category.slug}-heading`}
                className="scroll-mt-28"
              >
                <ScrollReveal>
                  <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-700">
                        Category {category.number}
                      </p>
                      <h3 id={`${category.slug}-heading`} className="mt-2">
                        <Link
                          href={`/services/${category.slug}`}
                          className="group inline-flex max-w-3xl items-center gap-3 text-3xl font-extrabold tracking-[-0.04em] text-ink transition hover:text-primary-700 sm:text-4xl"
                        >
                          {category.title}
                          <ArrowRight className="size-6 shrink-0 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </h3>
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      {category.services.length} capabilities
                    </span>
                  </div>
                </ScrollReveal>

                {subgroups.length > 0 ? (
                  <div className="mt-10 space-y-14">
                    {subgroups.map((subgroup) => (
                      <div key={subgroup}>
                        <div className="mb-6 flex items-center gap-3">
                          <span
                            className={`size-2 rounded-full ${category.accent}`}
                          />
                          <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-slate-600">
                            {subgroup}
                          </h4>
                          <span className="h-px flex-1 bg-slate-200" />
                        </div>
                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                          {category.services
                            .filter((service) => service.subgroup === subgroup)
                            .map((service, index) => (
                              <ScrollReveal
                                key={service.slug}
                                delay={(index % 3) * 0.05}
                                className="h-full"
                              >
                                <ServiceCard
                                  {...service}
                                  href={`/services/${category.slug}#${service.slug}`}
                                  eyebrow={subgroup}
                                  accentIndex={categoryIndex}
                                  headingLevel="h5"
                                />
                              </ScrollReveal>
                            ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {category.services.map((service, index) => (
                      <ScrollReveal
                        key={service.slug}
                        delay={(index % 3) * 0.05}
                        className="h-full"
                      >
                        <ServiceCard
                          {...service}
                          href={`/services/${category.slug}#${service.slug}`}
                          accentIndex={categoryIndex}
                          headingLevel="h4"
                        />
                      </ScrollReveal>
                    ))}
                  </div>
                )}

                {category.extraChips && (
                  <ScrollReveal>
                    <div
                      id="os-level-msp-services"
                      className="mt-8 scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7"
                    >
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-primary-50 text-primary-800">
                          <BadgeCheck className="size-5" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
                            Managed at the OS layer
                          </p>
                          <h4 className="mt-1 text-lg font-extrabold text-ink">
                            OS-Level MSP Services
                          </h4>
                        </div>
                      </div>
                      <ul className="mt-5 flex flex-wrap gap-2.5">
                        {category.extraChips.map((chip) => (
                          <li
                            key={chip}
                            className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-primary-800"
                          >
                            {chip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                )}
              </section>
            );
          })}
        </div>

        <ScrollReveal>
          <section
            id="why-us"
            aria-labelledby="why-us-heading"
            className="relative mt-24 scroll-mt-28 overflow-hidden rounded-[2rem] bg-primary-950 p-6 text-white shadow-soft sm:p-9 lg:p-12"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            <div className="absolute -right-20 -top-24 size-64 rounded-full border-[52px] border-white/[0.035]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.85fr_1.4fr] lg:gap-14">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-primary-300">
                  Global delivery
                </p>
                <h2
                  id="why-us-heading"
                  className="mt-3 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl"
                >
                  Why teams choose IT Experts
                </h2>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Certified specialists, flexible engagement models, and
                  round-the-clock coverage—ready to operate inside the tools
                  your team already uses.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-slate-200">
                    <Clock3 className="size-4 text-primary-300" /> 24×7 coverage
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-bold text-slate-200">
                    <Globe2 className="size-4 text-primary-300" /> 4 global
                    markets
                  </span>
                </div>
              </div>

              <div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {markets.map((market) => (
                    <article
                      key={market.name}
                      className="rounded-xl border border-white/10 bg-white/[0.045] p-4"
                    >
                      <h3 className="text-sm font-extrabold text-white">
                        {market.name}
                      </h3>
                      <p className="mt-1.5 text-xs leading-5 text-slate-300">
                        {market.detail}
                      </p>
                    </article>
                  ))}
                </div>

                <ul className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {valueProps.map((value) => (
                    <li
                      key={value}
                      className="flex items-start gap-2.5 text-xs font-semibold leading-5 text-slate-200"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary-300" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}
