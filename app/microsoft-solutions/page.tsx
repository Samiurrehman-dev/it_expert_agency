import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  CheckCircle2,
  Cloud,
  CloudCog,
  Database,
  Gauge,
  Handshake,
  Layers3,
  LayoutDashboard,
  Lightbulb,
  MonitorSmartphone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "ITExpert Agency’s Services for Microsoft solutions in USA & Canada",
  description:
    "Get the latest in cloud solutions from ITExperts Agency that puts you first! Grow Your Business with Microsoft.",
  alternates: {
    canonical: "/microsoft-solutions",
  },
};

type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const journeyFeatures = [
  "Making purchase easy, acquire and manage your Microsoft solutions through ITExperts cloud delivery and management platform.",
  "Giving you access to the best target partners across SPs, CSPs, and MSPs.",
  "Equipping you with the knowledge and expertise needed to acquire solutions across a range of sectors and in several different cases.",
  "Endorsing complementary solutions to complete Microsoft’s offerings.",
  "Creating demand with business development and customized marketing campaigns.",
  "Offering a wide portfolio of consultancy services from pre-sales valuations to solution design, support, and training.",
];

const keyFeatures: IconItem[] = [
  {
    icon: Sparkles,
    title: "Powerful applications",
    description:
      "Powerful applications to let your customers run their businesses efficiently and attain valuable new insights they can work on.",
  },
  {
    icon: CloudCog,
    title: "Microsoft’s best global cloud infrastructure",
    description:
      "Microsoft’s best global cloud infrastructure is the best possible platform for your customers’ businesses. ITExpert’s migration, management, and support services make their journeys painless.",
  },
  {
    icon: MonitorSmartphone,
    title: "The best cloud vendors",
    description:
      "The best cloud vendors power the most popular productivity applications.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of mind is invaluable",
    description:
      "Peace of mind is invaluable. Use the cloud to help users’ keep devices, identities and their data safe.",
  },
  {
    icon: LayoutDashboard,
    title: "Cloud management tools from ITExperts",
    description:
      "These aren’t just simple dashboards—with cloud management tools from ITExperts, where you can centrally manage all data, including cloud service usage, license breakdown, and upgrade opportunities—utilizing real-time analytics that can digitally transform your customer’s business.",
  },
];

const microsoft365Features = [
  "Office applications – Microsoft 365 Business contains all the Microsoft Office apps that you like.",
  "Microsoft Teams – Providing the best meeting place for groups to meet and exchange information.",
  "SharePoint Online – Get the best document sharing, bringing employees closer.",
  "Windows 10 – Get the benefits of Windows 10 Pro, plus Windows Defender Security Controls and Autopilot.",
  "Threat analytics – Advanced Threat Analytics analyses user behavior to find suspicious activity and reports it to administrators.",
];

const azureFeatures = [
  "Hybrid ready – Microsoft is a leader in on-premises software and cloud computing. Build and manage the perfect hybrid cloud environment using Azure, System Center, and the Azure Stack onsite cloud system.",
  "Flexible offerings – A mixture of infrastructure as a service (IaaS), platform as a service (PaaS), and software as a Service (SaaS) lets customers create and manage a mixture of technology resources and services with the right level of detail and control.",
  "Flexible pricing – Azure offers a mixture of reserved instances and other cloud computing options to suit the customer’s technology needs and budget.",
];

const azureGrowthFeatures = [
  "Hybrid ready – Microsoft is a leading Software which can be used in=house for cloud computing. You can easily build and manage the perfect hybrid cloud environment using Azure, System Center, and the Azure Stack on-site cloud system.",
  "Flexible offerings – A mix of IaaS, PaaS, and SaaS which lets customers develop and manage technological resources and services with the right level of detail and control.",
  "Flexible pricing – Azure offers a mixture of reserved instances and other cloud computing options to suit the customer’s technology needs and budget.",
];

const powerBIFeatures: IconItem[] = [
  {
    icon: MonitorSmartphone,
    title: "Mobile access",
    description:
      "Customers are able to retrieve fresh insights with a data analytics platform that lives in the cloud.",
  },
  {
    icon: Gauge,
    title: "Quick results",
    description:
      "Power BI is powerful but simple. It hails a rapid cloud-based setup and natural language interface which offer valuable information to employees for easy accessibility.",
  },
  {
    icon: Database,
    title: "360 visibilities",
    description:
      "Power BI uses data from diverse sources and features data integrations with many third-party services, producing a wide and in-depth view of all business operations.",
  },
  {
    icon: RefreshCw,
    title: "Instant information",
    description:
      "Customers can find the most recent changes to their data. Real-time dashboards are self-updating whenever new information comes through, and they can even set up mobile alerts, allowing for fast reaction times.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom reporting",
    description:
      "Custom reports get the correct data to the right people, enabling them to see relevant data quickly and attain the required findings.",
  },
  {
    icon: UsersRound,
    title: "Group collaboration",
    description:
      "The Pro version allows multiple people to work on analytics projects together, bringing different mindsets and perspectives to their data reporting.",
  },
];

const deliveryFeatures: IconItem[] = [
  {
    icon: Handshake,
    title: "We know you're unique",
    description:
      "We are an in-depth cloud aggregator that builds strong relationships with our partners, understanding their individual business needs.",
  },
  {
    icon: Cloud,
    title: "We know cloud",
    description:
      "Our cloud knowledge runs deep. We help you consult with customers on migrating their infrastructure to the cloud and managing it afterward.",
  },
  {
    icon: Lightbulb,
    title: "We understand",
    description: "We are aware of your business needs and offer 24*7 support.",
  },
];

const outcomes: IconItem[] = [
  {
    icon: Layers3,
    title: "Best of breed solutions",
    description:
      "Industry-leading IT solutions to help you drive efficiency, productivity and long-term success.",
  },
  {
    icon: BarChart3,
    title: "Lower IT costs:",
    description:
      "Outsourced IT support lowers your costs dramatically and reduce spending on IT up-gradation.",
  },
  {
    icon: Gauge,
    title: "More efficient operations",
    description:
      "We help you capture maximum performance from your technology with expert IT professionals.",
  },
  {
    icon: RefreshCw,
    title: "Up-to-date technology",
    description:
      "We ensure your technology is always secure, up-to-date and running at optimal efficiency.",
  },
  {
    icon: Handshake,
    title: "Dedicated account management",
    description:
      "Expect more with our dedicated account manager, managing your experience with us from start to completion.",
  },
];

const servicePlans = [
  {
    name: "Small Business",
    features: [
      "24/7/365 Performance and Health Monitoring",
      "Standard Service Level Agreement (SLA)",
      "Annual Business Reports",
      "Business Email Setup and Configuration",
      "Domain & Hosting Web Development",
    ],
  },
  {
    name: "Mid-Size Business",
    featured: true,
    features: [
      "Small Business Services",
      "Quarterly Business Review",
      "Vulnerability Scan",
      "Managed Endpoint Protection",
      "Managed Backups Server Maintenance",
      "Network Maintenance",
      "Microsoft Office 365 Support",
      "PBX Phone Management & Support",
      "Onsite Visit",
    ],
  },
  {
    name: "Premium A La Carte IT Support",
    description:
      "We offer customised IT support services and systems to meet your business needs. You can plan your IT support options and choose services specific to your requirements. Some of the core services included in this package are:",
    features: [
      "SIEM as a Service",
      "Security Education Program",
      "Quarterly Business Reports",
      "Annual Vulnerability Scan",
      "Managed Endpoint Protection",
      "Managed Backups",
      "Server Maintenance",
      "Network Maintenance",
      "Onsite Consultation Visits",
      "Private Branch Exchange (PBX)",
      "Phone Management & Support",
      "Microsoft Office 365 support",
    ],
  },
];

export default function MicrosoftSolutionsPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-primary-950 py-20 sm:min-h-[560px] sm:py-24 lg:min-h-[620px]">
          <div className="bg-grid absolute inset-0 -z-20 opacity-20" />
          <div className="absolute -right-20 top-16 -z-10 grid rotate-6 grid-cols-2 gap-3 opacity-50 sm:right-[8%] sm:gap-5 lg:right-[12%]">
            <span className="size-24 rounded-3xl bg-[#f25022] sm:size-36" />
            <span className="size-24 rounded-3xl bg-[#7fba00] sm:size-36" />
            <span className="size-24 rounded-3xl bg-[#00a4ef] sm:size-36" />
            <span className="size-24 rounded-3xl bg-[#ffb900] sm:size-36" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/95 to-primary-950/40" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/40" />
          <div className="absolute -left-24 -top-24 -z-10 size-80 rounded-full border-[64px] border-white/5" />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent-300 sm:text-sm">
                Grow Your Business with Microsoft
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                Microsoft Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-100/85 sm:text-xl sm:leading-9">
                Get the latest in cloud solutions from ITExperts Agency that
                puts you first !
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Welcome to YOUR Journey
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Your business is growing, just as it should be. However, your
                customer base is strengthening, and the revenue you enjoy from
                them is plummeting. ITExpert Agency’s highly experienced team
                can help you drive your organization towards a lucrative journey
                with Microsoft solutions helping customers at every stage of
                their journey by:
              </p>
              <p className="mt-7 rounded-2xl bg-primary-50 p-5 text-base font-extrabold leading-7 text-primary-900">
                Let ITExpert Agency get you started with Microsoft today!
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {journeyFeatures.map((feature, index) => (
                <article
                  key={feature}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:p-7"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-primary-900 text-sm font-extrabold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    {feature}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                How ITExpert Agency supports Microsoft
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Evolution brings challenges, usually, in the form of new
                resources, you’ll need to endure and rush your growth. That’s
                why you’re considering moving to the best Microsoft Cloud
                Solutions.
              </p>
              <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-accent-700">
                Some of our key features include:
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
              {keyFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.description}
                    className={[
                      "group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft lg:col-span-2",
                      index === 3 ? "lg:col-start-2" : "",
                    ].join(" ")}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-300 group-hover:scale-x-100" />
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-extrabold tracking-[-0.025em] text-ink">
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
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-4xl border border-slate-200 bg-white p-7 shadow-card sm:p-10">
                <span className="grid size-14 place-items-center rounded-2xl bg-primary-900 text-white">
                  <MonitorSmartphone aria-hidden className="size-6" />
                </span>
                <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                  MICROSOFT 365: Desktop, productivity, and security
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Businesses are keen to maintain a balance among the needs of
                    a progressively diverse and location-spread workforce,
                    including those arising from remote working requirements,
                    while addressing an ever-growing cyber threat landscape.
                    Microsoft 365 offers customers solutions to this challenge.
                  </p>
                  <p>
                    Microsoft 365 combines the top-notch productivity of Office
                    365 with simple device management and security to help
                    people gain information in the newest way. It’s everything
                    you need, whenever you need it, and helps you transform how
                    you manage your business and integrate customer
                    relationships with integrated workflows. Depending on the
                    plan you choose, MICROSOFT 365 comes with a plethora of
                    features, including but not limited to:
                  </p>
                </div>
                <ul className="mt-7 space-y-3.5">
                  {microsoft365Features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                    >
                      <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-accent-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-4xl bg-primary-950 p-7 text-white shadow-soft sm:p-10">
                <span className="grid size-14 place-items-center rounded-2xl bg-white/10 text-accent-300">
                  <Cloud aria-hidden className="size-6" />
                </span>
                <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                  Azure: A cloud platform that grows with the business
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-100/75">
                  <p>
                    Microsoft Azure is a global, scalable cloud infrastructure
                    supporting all your customers’ computing and application
                    requirements across hybrid and public cloud environments. It
                    offers various applications and services accessible via
                    simple, secure application programming interfaces.
                  </p>
                  <p>
                    Azure isn’t just a cloud infrastructure. It’s a complete
                    ecosystem, blending Microsoft’s range of cloud-based
                    applications and services with others from thousands of
                    third-party providers. As a result, there’s a type and level
                    of service for every business customer on this global
                    platform.
                  </p>
                </div>
                <ul className="mt-7 space-y-3.5">
                  {azureFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-100/75 sm:text-base"
                    >
                      <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-accent-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <article className="mt-6 grid overflow-hidden rounded-4xl border border-primary-100 bg-primary-50 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative isolate min-h-72 overflow-hidden bg-primary-900 p-8 text-white sm:p-10 lg:min-h-full">
                <div className="absolute -right-20 -top-20 -z-10 size-72 rounded-full border-[55px] border-white/5" />
                <CloudCog aria-hidden className="size-12 text-accent-300" />
                <h2 className="mt-8 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                  Azure: A cloud platform that helps your business grow
                </h2>
              </div>
              <div className="p-7 sm:p-10">
                <div className="space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Microsoft Azure is a globally renowned, scalable cloud
                    infrastructure supporting all your customers’ computing and
                    application requirements across hybrid and public cloud
                    environments. It offers various applications and services
                    accessible via simple, secure application programming
                    interfaces.
                  </p>
                  <p>
                    Azure isn’t just a cloud infrastructure. Instead, it’s a
                    complete ecosystem, blending Microsoft’s range of
                    cloud-based applications and services with others from
                    thousands of third-party providers. As a result, every
                    business customer has a type and level of service on this
                    global platform.
                  </p>
                </div>
                <ul className="mt-7 space-y-3.5">
                  {azureGrowthFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                    >
                      <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-accent-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-primary-900 text-white">
                <BarChart3 aria-hidden className="size-6" />
              </span>
              <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Microsoft Power BI: data to insights of business intelligence
              </h2>
              <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                <p>
                  Power BI is a data analytics platform that combines data from
                  multiple sources for analysis and visualization. It makes use
                  of dynamic dashboards and natural language interfaces to open
                  a totally fresh business intelligence insights for
                  non-technical employees. Being empowered by Microsoft’s Azure
                  cloud, it offers convenience and quick access.
                </p>
                <p>
                  Power BI helps in bringing business intelligence into the
                  current age with a cloud-based feature that influences power
                  and simplicity. It has a simple setup, online access, and easy
                  capabilities that make it easy for customers to acquaint
                  themselves quickly and allows users to make capable decisions.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {powerBIFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card"
                  >
                    <Icon aria-hidden className="size-6 text-accent-600" />
                    <h3 className="mt-5 text-xl font-extrabold text-ink">
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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                {"What we'll deliver"}
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                IT Expert Agency is more than just a solution provider. It would
                help if you considered us when looking for a technical partner
                to support your business.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {deliveryFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-card"
                  >
                    <span className="mx-auto grid size-12 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold text-ink">
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

        <section className="bg-primary-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {outcomes.map((outcome) => {
                const Icon = outcome.icon;

                return (
                  <article
                    key={outcome.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <Icon aria-hidden className="size-6 text-accent-300" />
                    <h2 className="mt-5 text-lg font-extrabold">
                      {outcome.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-slate-100/70">
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
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                Services Plan
              </h2>
            </div>

            <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
              {servicePlans.map((plan) => (
                <article
                  key={plan.name}
                  className={[
                    "relative overflow-hidden rounded-2xl border bg-white p-7 shadow-card sm:p-8",
                    plan.featured
                      ? "border-primary-700 ring-2 ring-primary-700/10"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  {plan.featured && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-accent-400" />
                  )}
                  <h3 className="text-2xl font-extrabold tracking-[-0.035em] text-ink">
                    {plan.name}
                  </h3>
                  {plan.description && (
                    <p className="mt-5 text-sm leading-7 text-slate-600">
                      {plan.description}
                    </p>
                  )}
                  <ul className="mt-7 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-7 text-slate-600 sm:text-base"
                      >
                        <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-accent-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
              Expand Your Business with IT Experts
            </h2>
            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              At ITExperts Agency, you will experience the service efficiency
              and expertise which will help you achieve your business goals and
              objective 10x times faster. A stable IT support system is
              essential for business growth and we understand it can be
              frustrating when downtime increases. Therefore, we are here to
              offer adaptive, cost-effective, and customized IT support. Our
              professionals are trained to resolve all IT challenges, so you can
              focus on your core business and expand exponentially.
            </p>
          </div>
        </section>

        <CTASection
          eyebrow="Grow Your Business with Microsoft"
          heading="Let ITExpert Agency get you started with Microsoft today!"
          description="We help you strategize your business with a future focused IT execution strategy to help you stay ahead of the competitors. We offer ultimate customer experience for our clients."
          buttonLabel="Let’s Talk"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
