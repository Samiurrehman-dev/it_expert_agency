import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgeDollarSign,
  CheckCircle2,
  Cloud,
  Handshake,
  HardDrive,
  Headphones,
  Monitor,
  Network,
  Package,
  PhoneCall,
  ServerCog,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "IT Infrastructure Services",
  description:
    "Modern IT infrastructure services for servers, desktops, networks, cloud, VoIP, hardware, monitoring, backup, security, and ongoing technical support.",
  alternates: {
    canonical: "/it-infrastructure",
  },
};

const supportRequests = [
  "Cloud server troubleshooting",
  "Compromised website recovery",
  "IP blacklist removal",
  "Database repair",
  "Business email troubleshooting",
  "Website monitoring and recovery",
  "Disaster recovery",
  "Service optimization",
  "Security hardening",
  "Backup setup and restoration",
  "Disk-space management",
];

type InfrastructureArea = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
};

const infrastructureAreas: InfrastructureArea[] = [
  {
    icon: Monitor,
    eyebrow: "End-user systems",
    title: "Desktop Management",
    description:
      "Keep desktop environments reliable, responsive, and easier to operate with around-the-clock incident, problem, and request support. Trained technicians help restore operating systems and business applications quickly so users can return to full productivity.",
    features: [
      "ITIL-aligned incident, problem, and request management",
      "24/7 live support coverage",
      "Microsoft operating system, AWS, and application support",
    ],
  },
  {
    icon: Network,
    eyebrow: "Connectivity",
    title: "Network Management",
    description:
      "Proactive outsourced network management identifies issues before they become business problems. We protect, manage, monitor, and report on your network while maintaining secure access through firewalls and VPNs.",
    features: [
      "ISP and DNS management",
      "Wireless, router, and switch administration",
      "Firewall and VPN management",
      "Asset, KPI, and performance reporting",
      "Configuration management and continuous monitoring",
    ],
  },
  {
    icon: Cloud,
    eyebrow: "Flexible working",
    title: "Cloud Services & Management",
    description:
      "Reduce infrastructure overhead with scalable cloud computing, secure data storage, and collaborative access. We can guide migration, connect existing networks, and create a unified environment for teams working from anywhere.",
    features: [
      "Cloud computing",
      "Software as a Service",
      "Secure virtual access",
      "Protected cloud data storage",
    ],
  },
  {
    icon: PhoneCall,
    eyebrow: "Business communications",
    title: "Cloud-Based VoIP",
    description:
      "Replace aging phone systems with flexible software-based communications that work across computers, tablets, smartphones, and modern desk phones. Add messaging, presence, video, and collaboration without maintaining an on-site PBX.",
    features: [
      "Reduced long-distance and telephone-line costs",
      "Built-in network redundancy",
      "No on-site PBX equipment",
      "Advanced calling, flexibility, and mobility",
      "Short extension dialing across locations",
      "Local and national phone numbers",
    ],
  },
  {
    icon: Wrench,
    eyebrow: "Post-warranty support",
    title: "Break/Fix Solutions",
    description:
      "Extend the useful life of infrastructure with adaptable post-warranty maintenance. Labor-only, parts-only, and complete support options provide a practical alternative when manufacturer coverage becomes too costly.",
    features: [
      "Servers, networks, and storage",
      "End-user and telecommunications devices",
      "Wireless and audiovisual equipment",
      "EPOS systems and other business hardware",
    ],
  },
  {
    icon: Package,
    eyebrow: "Predictable hardware",
    title: "Hardware as a Service",
    description:
      "Upgrade infrastructure through a predictable monthly service instead of a large capital purchase. Hardware, software, support contracts, consulting, and project management can be combined into one scalable model.",
    features: [
      "Lower up-front capital expense",
      "Access to current technology",
      "Scalable capacity as requirements change",
      "Lower total cost of ownership",
      "Ongoing expert technical support",
      "Improved operational efficiency",
    ],
  },
];

const monitoringAreas = [
  {
    icon: HardDrive,
    title: "Hardware monitoring",
    description:
      "Track the health and capacity of physical systems before failures create unplanned downtime or lost revenue.",
  },
  {
    icon: Network,
    title: "Network monitoring",
    description:
      "Watch connectivity, traffic, availability, and device performance across the infrastructure that connects your users.",
  },
  {
    icon: Activity,
    title: "Application monitoring",
    description:
      "Measure the availability and behavior of software services while identifying suspicious or disruptive activity.",
  },
];

const partnershipBenefits = [
  {
    icon: Handshake,
    title: "Understand first",
    description:
      "We take time to learn your business and technical challenges before recommending a contract or solution.",
  },
  {
    icon: ServerCog,
    title: "Broad technical experience",
    description:
      "Deep experience with Linux, open-source technology, cloud platforms, and software development informs practical decisions.",
  },
  {
    icon: ShieldCheck,
    title: "More eyes on infrastructure",
    description:
      "Experience across varied customer environments helps reveal opportunities to save money, remove friction, and strengthen security.",
  },
  {
    icon: Headphones,
    title: "Business-aware support",
    description:
      "Reach specialists who understand both the technology and the way your organization depends on it.",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-conscious guidance",
    description:
      "Technology choices are evaluated against business value instead of trends, with dedicated account management throughout delivery.",
  },
];

const servicePlans = [
  {
    name: "Small Business",
    description: "Core monitoring and operational essentials.",
    features: [
      "24/7/365 performance and health monitoring",
      "Standard service-level agreement",
      "Annual business reporting",
      "Business email setup and configuration",
      "Domain, hosting, and website support",
    ],
  },
  {
    name: "Mid-Size Business",
    description: "Expanded management for growing environments.",
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
    description: "A customized mix of advanced services.",
    features: [
      "SIEM as a Service",
      "Security education",
      "Quarterly business reporting",
      "Annual vulnerability scanning",
      "Managed endpoint protection and backups",
      "Server and network maintenance",
      "On-site consultation",
      "PBX phone management and support",
    ],
  },
];

export default function ITInfrastructurePage() {
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
            className="-z-20 object-contain object-right p-8 opacity-[0.42] sm:p-14 lg:p-20"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/90 to-primary-950/35" />
          <div className="absolute -right-24 -top-24 -z-10 size-80 rounded-full border-[64px] border-white/5" />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent-300 sm:text-sm">
                Infrastructure services
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                IT Infrastructure
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-100/85 sm:text-xl sm:leading-9">
                Infrastructure that can monitor, anticipate, and respond to the
                changing needs of your business.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Future-ready infrastructure
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Simplify complex infrastructure and prepare for what comes next.
              </h2>
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Modern enterprises must manage connectivity across locations,
                  detailed application policies, hybrid-cloud deployments, and a
                  growing list of operational responsibilities.
                </p>
                <p>
                  IT Experts combines future-ready technology, flexible
                  consumption options, specialist knowledge, and proven delivery
                  methods to lower cost, improve availability, and increase
                  automation.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-7 shadow-card sm:p-8">
              <ServerCog className="size-8 text-primary-800" />
              <h3 className="mt-5 text-xl font-extrabold text-ink">
                Common requests we resolve
              </h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {supportRequests.map((request) => (
                  <div
                    key={request}
                    className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-sm font-semibold leading-6 text-slate-700 shadow-sm"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent-600" />
                    {request}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Complete infrastructure coverage
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                One partner across users, systems, connectivity, and hardware.
              </h2>
            </div>

            <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {infrastructureAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft sm:p-8"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors group-hover:bg-primary-900 group-hover:text-white">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.16em] text-accent-700">
                      {area.eyebrow}
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold tracking-[-0.025em] text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {area.description}
                    </p>
                    <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6">
                      {area.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                        >
                          <CheckCircle2 className="mt-1 size-3.5 shrink-0 text-accent-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-300">
                Infrastructure monitoring
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Turn infrastructure data into uptime, performance, and business
                value.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-100/75">
                Monitoring brings physical and virtual infrastructure into view,
                from servers and storage to networks, software, and virtual
                machines.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {monitoringAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                  >
                    <Icon aria-hidden className="size-7 text-accent-300" />
                    <h3 className="mt-5 text-xl font-extrabold">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-100/70">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Full technology life cycle
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                More than a solution provider—a technical partner.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {partnershipBenefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
                  >
                    <Icon aria-hidden className="size-6 text-primary-800" />
                    <h3 className="mt-5 text-lg font-extrabold text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                Service plans
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Flexible infrastructure support at every stage of growth.
              </h2>
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
          eyebrow="Infrastructure built for what’s next"
          heading="Scale with confidence while a dedicated team watches your infrastructure."
          description="Talk with an IT expert about improving availability, simplifying operations, and planning the next stage of your technology environment."
          buttonLabel="Let’s Talk"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
