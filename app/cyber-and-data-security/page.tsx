import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  CloudCog,
  DatabaseBackup,
  Eye,
  Gauge,
  LockKeyhole,
  Radar,
  Scale,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Cyber & Data Security Services",
  description:
    "Managed cybersecurity and data protection services including 24/7 monitoring, security consulting, compliance, server hardening, audits, SIEM, and disaster recovery.",
  alternates: {
    canonical: "/cyber-and-data-security",
  },
};

type SecurityFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: SecurityFeature[] = [
  {
    icon: ShieldCheck,
    title: "Security Consulting",
    description:
      "Build an integrated security strategy around your risks, compliance obligations, critical assets, and available resources.",
  },
  {
    icon: Scale,
    title: "Compliance Consulting",
    description:
      "Turn regulatory requirements into practical policies, controls, testing programs, and a clear security roadmap.",
  },
  {
    icon: ServerCog,
    title: "Server Hardening",
    description:
      "Reduce attack surface by removing unnecessary software and securing accounts, access, networks, logging, and applications.",
  },
  {
    icon: Gauge,
    title: "Server Optimization",
    description:
      "Improve processing, configuration, availability, and application delivery so overloaded systems perform reliably.",
  },
  {
    icon: BadgeCheck,
    title: "ISO Certification Compliance",
    description:
      "Align security and service management with frameworks such as ISO 27001, ISO 20000, ISO 9001, COBIT, and ITIL.",
  },
  {
    icon: ScanSearch,
    title: "Security Assessment & Audit",
    description:
      "Identify assets, threats, vulnerabilities, and control gaps, then turn the findings into prioritized short- and long-term action.",
  },
  {
    icon: Radar,
    title: "Managed SIEM",
    description:
      "Collect and analyze security events around the clock, separate genuine incidents from alert noise, and accelerate response.",
  },
  {
    icon: DatabaseBackup,
    title: "Disaster Recovery",
    description:
      "Prepare a tested recovery process that limits exposure, protects data, restores operations, and reduces further loss after an incident.",
  },
];

const securityCoverage = [
  "Strategy, risk, and compliance",
  "Threat intelligence and predictive analytics",
  "Network and application security",
  "Identity and access management",
  "Data security and privacy",
];

const outcomes = [
  {
    icon: UsersRound,
    title: "Extend security expertise",
    description:
      "Add experienced specialists across a broad security portfolio without building a full in-house department.",
  },
  {
    icon: LockKeyhole,
    title: "Protect vital systems",
    description:
      "Combine information protection, intrusion prevention, and threat intelligence against common and advanced attacks.",
  },
  {
    icon: Activity,
    title: "Strengthen continuity",
    description:
      "Use proactive monitoring, threat removal, backups, and disaster recovery to reduce disruption across cloud and hybrid systems.",
  },
  {
    icon: Eye,
    title: "Reinforce security posture",
    description:
      "Assess vulnerabilities, simulate attacks, and build a clearer picture of risk across your environment.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce business risk",
    description:
      "Stronger identity and access controls help prevent breaches, financial loss, reputational harm, and IP theft.",
  },
  {
    icon: ClipboardCheck,
    title: "Improve compliance & privacy",
    description:
      "Assessment, consulting, and implementation support help you address GDPR, ISO, BSI, and other requirements.",
  },
  {
    icon: BarChart3,
    title: "Optimize costs & resources",
    description:
      "Scale managed SOC services to control spending and keep internal IT resources focused on strategic work.",
  },
];

const servicePlans = [
  {
    name: "Small Business",
    description: "Essential monitoring and operational support.",
    features: [
      "24/7/365 performance and health monitoring",
      "Standard service-level agreement",
      "Annual business reporting",
      "Business email setup and configuration",
      "Domain, hosting, and web support",
    ],
  },
  {
    name: "Mid-Size Business",
    description: "Broader protection for growing environments.",
    featured: true,
    features: [
      "Everything in the Small Business plan",
      "Quarterly business reviews",
      "Vulnerability scanning",
      "Managed endpoint protection",
      "Managed backups and server maintenance",
      "Network maintenance",
      "Microsoft 365 support",
      "PBX phone management and support",
      "On-site visits",
    ],
  },
  {
    name: "Premium A La Carte",
    description: "Customized security and IT services.",
    features: [
      "SIEM as a Service",
      "Security education program",
      "Quarterly business reporting",
      "Annual vulnerability scanning",
      "Managed endpoint protection",
      "Managed backups",
      "Server and network maintenance",
      "On-site consultation visits",
      "PBX phone management and support",
    ],
  },
];

export default function CyberAndDataSecurityPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-primary-950 py-20 sm:min-h-[560px] sm:py-24 lg:min-h-[620px]">
          <Image
            src="https://itexpertsagency.com/wp-content/uploads/2021/01/image-65.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/85 to-primary-950/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/20" />
          <div className="absolute -right-24 -top-24 -z-10 size-80 rounded-full border-[64px] border-white/5" />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent-300 sm:text-sm">
                IT Experts Agency
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Cyber & Data Security
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-blue-100/85 sm:text-xl sm:leading-9">
                Round-the-clock monitoring, layered protection, and experienced
                security guidance for a threat landscape that never stands
                still.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
              Managed cybersecurity
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
              Always-on protection for a threat landscape that never stops
              changing.
            </h2>
            <div className="mt-7 space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              <p>
                Cyber threats are everywhere, and they continue to evolve. For
                many organizations, maintaining a fully staffed on-site security
                department is impractical. Managed cybersecurity gives you the
                strategy, technology, and dedicated expertise needed to protect
                the business around the clock.
              </p>
              <p>
                IT Experts combines 24/7 monitoring and remediation with layered
                defenses, security assessments, SIEM, virtual CISO guidance,
                cloud security, and predictable service costs. Our consultants
                protect sensitive data, support compliance, and help businesses
                of every size operate with greater confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Core security services
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                A connected defense across systems, data, risk, and recovery.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const centerLastPair =
                  features.length % 3 === 2 && index === features.length - 2;

                return (
                  <article
                    key={feature.title}
                    className={[
                      "group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft sm:p-8 lg:col-span-2",
                      centerLastPair ? "lg:col-start-2" : "",
                    ].join(" ")}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-primary-900 group-hover:text-white">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Security consultation
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                A security program designed around your real risks.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Whether you need a stronger security strategy, support for an
                audit, or a plan for emerging threats, our consultants evaluate
                requirements, controls, technologies, and investment priorities
                as one connected security ecosystem.
              </p>
            </div>

            <div>
              <div className="rounded-2xl border border-primary-100 bg-primary-50 p-7 shadow-card sm:p-8">
                <CloudCog className="size-8 text-primary-800" />
                <h3 className="mt-5 text-xl font-extrabold text-ink">
                  Consulting coverage
                </h3>
                <ul className="mt-6 space-y-4">
                  {securityCoverage.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-700"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-accent-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-300">
                  How we help
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Security outcomes that support the whole business.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((outcome) => {
                const Icon = outcome.icon;

                return (
                  <article
                    key={outcome.title}
                    className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <Icon aria-hidden className="size-6 text-accent-300" />
                    <h3 className="mt-5 text-lg font-extrabold">
                      {outcome.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-blue-100/70">
                      {outcome.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                  Service plans
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                  Coverage that scales with your security needs.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
              {servicePlans.map((plan) => (
                <article
                  key={plan.name}
                  className={[
                    "relative h-full overflow-hidden rounded-2xl border bg-white p-7 shadow-card sm:p-8",
                    plan.featured
                      ? "border-primary-700 ring-2 ring-primary-700/10"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  {plan.featured && (
                    <span className="absolute right-0 top-0 rounded-bl-xl bg-primary-900 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.12em] text-white">
                      Recommended
                    </span>
                  )}
                  <h3 className="pr-16 text-2xl font-extrabold tracking-[-0.035em] text-ink">
                    {plan.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {plan.description}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-slate-100 pt-7">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Let’s build your security posture"
          heading="Reduce security risk without carrying the cost of a full in-house security operation."
          description="Start with a no-pressure conversation about your risks, compliance needs, and the right next step for protecting your business."
          buttonLabel="Get Free Consultation"
          buttonHref="/#contact"
        />
      </main>

      <Footer />
    </div>
  );
}
