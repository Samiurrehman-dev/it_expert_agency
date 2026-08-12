import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  AppWindow,
  ArrowRight,
  CheckCircle2,
  Cloud,
  CloudCog,
  Code2,
  Eye,
  Gauge,
  Handshake,
  Headphones,
  Layers3,
  Lightbulb,
  RefreshCw,
  Rocket,
  Route,
  Scale,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "ITExpert Agency’s Services for AWS solutions in USA & Canada",
  description:
    "Leverage the full benefits of AWS Services and boost your business's growth with ITExperts Agency AWS Cloud Services.",
  alternates: {
    canonical: "/aws-solutions",
  },
};

type IconItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const supportFeatures = [
  { icon: UsersRound, text: "Experienced professionals with proven expertise" },
  { icon: Lightbulb, text: "Full range of Advisory Services" },
  { icon: Headphones, text: "Seamless support for a smooth experience" },
  {
    icon: ShieldCheck,
    text: "Compliance and security with utmost transparency",
  },
  { icon: Handshake, text: "Dedicated and customized approach" },
];

const cloudMigrationServices = [
  "Cloud Migration Analysis",
  "Strategy and Roadmap Planning",
  "Cloud Migration Planning",
  "Cloud Migration Execution",
];

const applicationMigrationSteps = [
  "Migration Strategy Planning",
  "Performing Tests",
  "Implementing the Migration",
  "Ensuring the Ongoing Success of Your Migration Project",
  "Training your teams",
  "Performing continuous tests and reporting issues",
  "Monitoring the progress of data replication",
];

const devOpsFeatures = [
  "Minimize the use of non-critical services",
  "Designed to growth",
  "Prompt starting",
  "Automation",
  "Completely controlled services",
];

const supportChallenges = [
  "The support team is haywire, causing SLA breaches, too many unresolved tickets, and elevated downtime and costs",
  "The engineers are providing on-call support and are not focused on building new product features",
  "The support team is suffering from burnout",
  "The system has so many recurring incidents",
];

const cloudSupportProjects = [
  {
    icon: AppWindow,
    text: "Build small business applications – Launch line-of-business software such as file storage and sharing, backups, financial and accounting software, and more.",
  },
  {
    icon: Layers3,
    text: "Create custom websites – Build your website in just a few clicks with pre-configured applications like WordPress, Magento, Prestashop, and Joomla.",
  },
  {
    icon: Rocket,
    text: "Launch simple web applications – Use pre-configured development stacks like LAMP, Nginx, MEAN, and Node.js to get online quickly and easily.",
  },
  {
    icon: ServerCog,
    text: "Spin up test environments – Easily create and delete development sandboxes and test environments where you can try out new ideas risk-free.",
  },
];

const deliveryFeatures: IconItem[] = [
  {
    icon: Sparkles,
    title: "Enthusiasm and Potential",
    description:
      "This will be delivered from the time we’ll take to understand your unique business and challenges before we discuss signing any contract.",
  },
  {
    icon: Code2,
    title: "Software Development Experience",
    description:
      "AWS is formulated on Linux and open-source software — an environment and rules in which we’ve worked for over 20 years.",
  },
  {
    icon: Eye,
    title: "Extra Eyes on Your Infrastructure",
    description:
      "Those eyes stay sharp by working with multiple customers. We will tell you different ways to save money, work less resistance, or strengthen your security.",
  },
  {
    icon: Headphones,
    title: "Better Technical Support",
    description:
      "Work with us and you will be entitled to our expertise on anything related to AWS. This direct relation means you can pick up the phone with someone who doesn’t just understand AWS; they also already know your business.",
  },
  {
    icon: Scale,
    title: "We Are More Cost Sensitive Than You Are",
    description:
      "As developers, we understand the siren call of trends and new tech.",
  },
  {
    icon: Handshake,
    title: "Dedicated Account Management",
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
      "We offer customised IT support services and systems to meet your business needs. You can plan your IT support options and choose services specific to your requirements through our premium a la carte IT support package. Some of the core services included in this package are:",
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
    ],
  },
];

export default function AWSSolutionsPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-primary-950 py-20 sm:min-h-[560px] sm:py-24 lg:min-h-[620px]">
          <div className="bg-grid absolute inset-0 -z-20 opacity-20" />
          <div className="absolute -right-24 -top-24 -z-10 size-[28rem] rounded-full border-[72px] border-white/5 sm:right-[5%] sm:top-6" />
          <div className="absolute right-[4%] top-24 -z-10 opacity-55 sm:right-[13%] sm:top-28">
            <Cloud
              className="size-56 text-white sm:size-80"
              strokeWidth={0.8}
            />
            <ArrowRight className="absolute -bottom-8 left-1/2 size-20 -translate-x-1/2 rotate-[-35deg] text-[#ff9900]" />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/95 to-primary-950/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/30" />
          <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-[#ff9900]" />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-4xl">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-[#ffb84d] sm:text-sm">
                Amazon Web Services (AWS)
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                AWS Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-slate-100/85 sm:text-xl sm:leading-9">
                {
                  "Leverage the full benefits of AWS Services and boost your business's growth"
                }
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-28">
              <span className="grid size-14 place-items-center rounded-2xl bg-primary-900 text-white shadow-card">
                <CloudCog aria-hidden className="size-6" />
              </span>
              <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                The One-Stop-Shop for all Your AWS Needs
              </h2>
              <p className="mt-7 rounded-2xl bg-[#fff7e8] p-5 text-base font-extrabold leading-7 text-[#9a5700]">
                Let ITExpert Agency get you started with AWS today!
              </p>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              <p>
                ITExperts’ AWS Cloud Services allow AWS applications to remain
                stable with optimized expenses so that you can be at the
                forefront of new technological developments. We enable you to
                leverage the power and scalability of AWS while our expert team
                runs the show for you – from consulting through the entire
                lifecycle.
              </p>
              <p>
                Our dedicated team of certified AWS technology professionals
                ensures accelerated solution adoption throughout your ecosystem,
                leading to enterprise-wide transformation and creating a secure
                and scalable environment to drive innovation. Our wide range of
                AWS Services includes AWS Managed Services, AWS Advisory
                Services, AWS Migration, and AWS Consulting.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                How ITExperts Agency supports AWS
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                ITExperts brings deep technical and strategic expertise to each
                AWS offering it delivers. We are an AWS Consulting Partner with
                Advanced Tier certification and have experience in successfully
                strategizing, building, and deploying complex AWS environments
                in enterprises operating in varied, highly regulated industries.
              </p>
              <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.18em] text-accent-700">
                Some of our key features include:
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-6">
              {supportFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.text}
                    className={[
                      "group rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[#ffb84d] hover:shadow-soft lg:col-span-2",
                      index === 3 ? "lg:col-start-2" : "",
                    ].join(" ")}
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-[#fff7e8] text-[#b96800] transition-colors group-hover:bg-[#ff9900] group-hover:text-white">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-extrabold leading-7 text-ink">
                      {feature.text}
                    </h3>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <article className="grid overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-card lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative isolate overflow-hidden bg-primary-950 p-8 text-white sm:p-10 lg:p-12">
                <div className="absolute -left-24 -top-24 -z-10 size-72 rounded-full border-[52px] border-white/5" />
                <Route aria-hidden className="size-12 text-[#ffb84d]" />
                <h2 className="mt-8 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  AWS INFRASTRUCTURE MIGRATION
                </h2>
                <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.17em] text-[#ffb84d]">
                  Our AWS Cloud Migration Services Include:
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {cloudMigrationServices.map((service) => (
                    <div
                      key={service}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold leading-6 text-slate-100/80"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#ffb84d]" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-5 p-8 text-base leading-8 text-slate-600 sm:p-10 lg:p-12">
                <p>
                  ITExperts brings deep technical and strategic expertise to
                  each AWS offering it delivers. We are an AWS Consulting
                  Partner with Advanced Tier certification and have experience
                  in successfully strategizing, building, and deploying complex
                  AWS environments in enterprises operating in varied, highly
                  regulated industries. In addition, ITExperts offers a range of
                  AWS Cloud Migration Services to manage the entire cloud
                  migration lifecycle efficiently.
                </p>
                <p>
                  Our comprehensive solution can get your business to the cloud
                  and help you leverage the advantages of AWS cloud
                  infrastructure from the very start while minimizing the
                  probability and impact of disruptions. With our services, you
                  can navigate the cloud and have an exemplary architecture
                  aligned with your strategic business needs.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <span className="grid size-14 place-items-center rounded-2xl bg-primary-900 text-white">
                  <RefreshCw aria-hidden className="size-6" />
                </span>
                <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                  AWS Application Migration (AWS MGN)
                </h2>
                <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    With so many ways to migrate to the cloud, Amazon brings the
                    AWS MGN service that automates lift-and-shift (rehost)
                    application migration to AWS. MGN is freely available for 90
                    days for each server you migrate, and if you can migrate
                    your application within the same time limit, you will not
                    have to pay extra. MGN can quickly take all your
                    applications to the AWS Cloud, whether they are virtual,
                    physical, or cloud servers, where you can leverage AWS tools
                    and services to update your application.
                  </p>
                  <p>
                    The solution will let you avoid compatibility issues,
                    delayed windows, and breaks in the performance. It works by
                    duplicating source services into the relevant AWS account
                    and automatically converting and launching the required
                    servers on AWS. The process is simple to follow and helps
                    achieve your target:
                  </p>
                </div>
              </div>

              <div className="rounded-4xl border border-primary-100 bg-primary-50 p-7 shadow-card sm:p-8">
                <ol className="space-y-3">
                  {applicationMigrationSteps.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 text-sm font-bold leading-6 text-slate-700 shadow-sm"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary-900 text-xs font-extrabold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <article className="rounded-4xl bg-primary-950 p-7 text-white sm:p-10 lg:p-12">
              <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
                <div>
                  <Code2 aria-hidden className="size-12 text-[#ffb84d]" />
                  <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                    AWS DevOps Service
                  </h2>
                  <div className="mt-6 space-y-5 text-base leading-8 text-slate-100/75">
                    <p>
                      AWS DevOps Services allow you to improve your business
                      agility as it supports various DevOps principles and
                      practices. This service will enable you to automate the
                      development cycle with proper infrastructure provisioning
                      and manage every complex environment at scale. In
                      addition, AWS comprises features that let you build, test
                      and deploy an application without hindrances throughout
                      AWS’s continuous integration and delivery pipeline.
                    </p>
                    <p>
                      ITExperts’ analysts argue that this is the best option for
                      organizations that cannot predict the required capacities
                      when launching new projects or scaling existing ones. In
                      addition, software developers cannot find a
                      better-integrated platform with all existing development
                      environments and tools.
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {devOpsFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold text-slate-100/80"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-[#ffb84d]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <div>
                <span className="grid size-14 place-items-center rounded-2xl bg-[#ff9900] text-primary-950">
                  <Activity aria-hidden className="size-6" />
                </span>
                <h2 className="mt-7 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                  AWS 24/7 Support
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  To delight customers and develop a competitive edge, modern
                  organizations know that their services must be available 24/7.
                  But do you know if your customers are happy with your
                  website’s performance and stability? If not, which reason do
                  you find to be an obstacle to your success?
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {supportChallenges.map((challenge) => (
                  <article
                    key={challenge}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card"
                  >
                    <Gauge aria-hidden className="size-5 text-[#d87900]" />
                    <p className="mt-4 text-sm font-semibold leading-7 text-slate-600">
                      {challenge}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 grid gap-6 rounded-4xl border border-slate-200 bg-white p-7 shadow-card sm:p-10 lg:grid-cols-2 lg:gap-12">
              <p className="text-base leading-8 text-slate-600">
                AWS Support delivers a wide range of plans that provide access
                to tools and expertise that support your AWS solutions’ success
                and operational health. All support plans offer 24/7 access to
                customer service, AWS documentation, technical papers, and
                support forums. You can select a support plan that properly
                aligns with your AWS for technical support and more resources to
                plan, deploy, and improve your AWS environment.
              </p>
              <div className="flex items-start gap-4 rounded-2xl bg-primary-50 p-6">
                <Headphones className="mt-1 size-6 shrink-0 text-primary-800" />
                <p className="text-base font-extrabold leading-8 text-primary-950">
                  AWS Support offers five support plans: Basic, Developer,
                  Business, Enterprise On-Ramp, and Enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl">
                AWS Cloud Support Projects
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                The AWS projects span various industries and skill levels,
                allowing you to customize your experience and interests. The
                greater the number of projects in your portfolio, the better.
                Companies are constantly looking for talented AWS Developers who
                can create cutting-edge AWS projects. As a result, if you’re a
                beginner, the best thing you can do is work on some of the most
                popular AWS projects.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {cloudSupportProjects.map((project) => {
                const Icon = project.icon;

                return (
                  <article
                    key={project.text}
                    className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft"
                  >
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                      {project.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-primary-950 py-20 text-white sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                What we’ll deliver
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-100/75 sm:text-lg">
                IT Expert Agency is more than just a solution provider. It would
                help if you considered us when looking for a technical partner
                to support your business.
              </p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {deliveryFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm"
                  >
                    <Icon aria-hidden className="size-6 text-[#ffb84d]" />
                    <h3 className="mt-5 text-xl font-extrabold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-100/70">
                      {feature.description}
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
                      ? "border-[#e88b16] ring-2 ring-[#ff9900]/10"
                      : "border-slate-200",
                  ].join(" ")}
                >
                  {plan.featured && (
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#ff9900]" />
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
                        className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                      >
                        <CheckCircle2 className="mt-1.5 size-4 shrink-0 text-[#d87900]" />
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
              ITExperts Minimizes Your Risk and Your Cost at The Same Time
            </h2>
            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              You will find a list of many reasons why you should talk to us
              before choosing your AWS-managed service provider. But if the list
              is too long, we can narrow it down to this…we can find and find a
              solution to any problem; we don’t just fix the reasons. And
              because we work in varied customer environments, we’re equipped
              with the best ideas.
            </p>
          </div>
        </section>

        <CTASection
          eyebrow="Amazon Web Services (AWS)"
          heading="Let ITExpert Agency get you started with AWS today!"
          description="Finally, you can scale with confidence, knowing you have a separate, dedicated team with eyes on your infrastructure, a team with deep, long, and diverse experience in software development."
          buttonLabel="Free Consultation"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
