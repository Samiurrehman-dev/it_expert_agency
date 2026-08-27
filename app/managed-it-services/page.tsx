import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AppWindow,
  BarChart3,
  Blocks,
  Building2,
  CheckCircle2,
  DatabaseBackup,
  Handshake,
  Headphones,
  Landmark,
  Network,
  RefreshCw,
  ServerCog,
  ShieldCheck,
  Store,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Managed IT Services in Toronto",
  description:
    "Managed IT services for Toronto businesses with 24/7 monitoring, help desk support, EDR security, backups, patching, network support, and cloud management.",
  alternates: {
    canonical: "/managed-it-services",
  },
};

type ManagedITFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: ManagedITFeature[] = [
  {
    icon: Activity,
    title: "24/7 Performance Monitoring",
    description:
      "Continuous health and performance monitoring helps us identify problems early and keep your systems productive.",
  },
  {
    icon: DatabaseBackup,
    title: "Data Backup & Recovery",
    description:
      "Managed backup and recovery solutions protect essential business data and make restoration more dependable.",
  },
  {
    icon: RefreshCw,
    title: "Updates & Patch Management",
    description:
      "Timely operating-system and application updates keep technology current, reliable, and better protected.",
  },
  {
    icon: ShieldCheck,
    title: "EDR Endpoint Security",
    description:
      "Managed endpoint detection and response adds active protection against malware, breaches, and emerging threats.",
  },
  {
    icon: ServerCog,
    title: "Disaster Recovery",
    description:
      "Recovery planning and backup management help your business restore operations after an outage or security incident.",
  },
  {
    icon: Blocks,
    title: "Technology Procurement",
    description:
      "Vendor-neutral product selection, configuration, and installation give you technology that fits your actual needs.",
  },
  {
    icon: Network,
    title: "Single & Multi-Site Networks",
    description:
      "We support network performance and connectivity across one office or multiple business locations.",
  },
  {
    icon: Headphones,
    title: "24/7 Help Desk",
    description:
      "Your users receive responsive technical support at any hour, reducing delays, frustration, and avoidable downtime.",
  },
  {
    icon: AppWindow,
    title: "Third-Party Application Support",
    description:
      "We troubleshoot business applications and coordinate directly with vendors to move complex issues toward resolution.",
  },
  {
    icon: BarChart3,
    title: "Quarterly Business Reviews",
    description:
      "Regular performance reporting and planning sessions keep technology priorities aligned with your business goals.",
  },
];

const businessSizes = [
  {
    icon: Store,
    label: "Small business",
    title: "A complete IT team without the in-house overhead.",
    description:
      "Build a cost-conscious technology foundation with managed infrastructure, vendor coordination, EDR security, cloud management, Microsoft 365 support, and clear performance reporting.",
  },
  {
    icon: Building2,
    label: "Mid-sized business",
    title: "Extra capacity for the team you already trust.",
    description:
      "Tier 1, 2, and 3 technicians can take on daily maintenance and support work, giving your internal specialists more time for mission-critical projects and strategic priorities.",
  },
  {
    icon: Landmark,
    label: "Large enterprise",
    title: "Specialist support that works alongside your people.",
    description:
      "Experienced technicians integrate with your IT operation on-site, supporting advanced systems while absorbing routine work that can overwhelm a growing enterprise team.",
  },
];

const outcomes = [
  {
    icon: Blocks,
    title: "Best-fit solutions",
    description:
      "Proven technology selected to improve efficiency, productivity, and long-term performance.",
  },
  {
    icon: BarChart3,
    title: "Lower IT costs",
    description:
      "Outsourced expertise helps control staffing and upgrade costs without compromising support quality.",
  },
  {
    icon: Activity,
    title: "Efficient operations",
    description:
      "Proactive management helps your organization get more consistent performance from its technology.",
  },
  {
    icon: RefreshCw,
    title: "Current technology",
    description:
      "Systems stay secure, updated, and tuned for the way your business operates today.",
  },
  {
    icon: Handshake,
    title: "Dedicated account management",
    description:
      "A consistent point of contact manages your experience from onboarding through ongoing service.",
  },
];

const servicePlans = [
  {
    name: "Basic",
    price: "Under $50",
    suffix: "/ workstation",
    teamSize: "For teams of up to 20",
    features: [
      "24/7 performance and health monitoring",
      "Single-office support",
      "Antivirus endpoint security",
      "Managed backups",
      "Annual business reporting",
      "Office 365 and business email support",
      "Domain and hosting maintenance",
      "Updates and patching",
    ],
  },
  {
    name: "Standard",
    price: "$55–$80",
    suffix: "/ workstation",
    teamSize: "For teams of 20–150",
    featured: true,
    features: [
      "24/7 performance and health monitoring",
      "Multi-site support across the GTA",
      "Managed EDR endpoint protection",
      "On-site and off-site managed backups",
      "Quarterly business reporting",
      "Microsoft 365 Business Premium support",
      "Domain and hosting maintenance",
      "Site-to-site VPN support",
      "Updates and patch management",
      "Network and server maintenance",
      "Remote employee and VPN support",
      "3CX VoIP support",
      "One on-site visit per month",
    ],
  },
  {
    name: "Premium",
    price: "$85+",
    suffix: "/ workstation",
    teamSize: "For teams of 150+",
    features: [
      "24/7 performance and health monitoring",
      "Multi-site support across Canada and the USA",
      "Managed EDR endpoint protection",
      "On-site and off-site managed backups",
      "Quarterly business reporting",
      "Microsoft 365 Enterprise support",
      "Domain and hosting maintenance",
      "Site-to-site VPN support",
      "Managed updates and patching",
      "Network and server maintenance",
      "Remote employee and VPN support",
      "3CX and RingCentral PBX support",
      "Multiple on-site visits each month",
      "Azure, AWS, and GCP support",
      "Annual vulnerability scan",
    ],
  },
];

export default function ManagedITServicesPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-primary-950 py-20 sm:min-h-[560px] sm:py-24 lg:min-h-[620px]">
          <Image
            src="https://itexpertsagency.com/wp-content/uploads/2020/06/managed-service-provider-1-opj2godi2628in9vt7molhpfpma3uz5wa7w5k6jxd8.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-20 object-contain object-right p-8 opacity-[0.45] sm:p-14 lg:p-20"
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
                Managed IT Services in Toronto
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-100/85 sm:text-xl sm:leading-9">
                Fast, reliable IT support and a cost-effective infrastructure
                tailored to the way your business works.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
              Managed IT support
            </p>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
              Reliable technology and responsive support, built around your
              business.
            </h2>
            <div className="mt-7 space-y-5 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              <p>
                IT Experts provides flexible managed support that helps Toronto
                businesses improve uptime, security, and day-to-day
                productivity. We shape the service around your environment,
                goals, and budget instead of forcing your team into a
                one-size-fits-all model.
              </p>
              <p>
                With continuous monitoring, predictable service options, 24/7
                customer support, and one accountable point of contact, your
                people can solve issues faster while we coordinate the
                technology and vendors behind the scenes.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Managed service capabilities
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Complete day-to-day coverage for the technology your team
                depends on.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const centerLastCard = index === features.length - 1;

                return (
                  <article
                    key={feature.title}
                    className={[
                      "group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft sm:p-8 lg:col-span-2",
                      centerLastCard ? "lg:col-start-3" : "",
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
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                  Support at every stage
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                  The right support model for the size of your business.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {businessSizes.map((business) => {
                const Icon = business.icon;

                return (
                  <article
                    key={business.label}
                    className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-card"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-primary-700">
                      {business.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-extrabold tracking-[-0.035em] text-ink">
                      {business.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {business.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div>
              <div className="max-w-3xl">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-300">
                  What we deliver
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  Better technology outcomes, managed by one accountable team.
                </h2>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                    <p className="mt-3 text-sm leading-6 text-slate-100/70">
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
                  Per-device service plans
                </p>
                <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                  Flexible coverage for growing teams.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  Choose a starting point based on your team size, locations,
                  and support requirements. Final scope and pricing are
                  confirmed after an environment review.
                </p>
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
                      Most popular
                    </span>
                  )}
                  <p className="text-sm font-extrabold uppercase tracking-[0.15em] text-primary-700">
                    {plan.name}
                  </p>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-4xl font-extrabold tracking-[-0.05em] text-ink">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-xs font-semibold text-slate-500">
                      {plan.suffix}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-bold text-accent-700">
                    {plan.teamSize}
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
          eyebrow="Let’s solve IT together"
          heading="Build a more stable IT operation and give your team room to grow."
          description="Start with a no-pressure conversation about your support needs, technology environment, and the right service plan for your team."
          buttonLabel="Let’s Talk"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
