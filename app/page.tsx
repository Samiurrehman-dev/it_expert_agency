import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Headphones,
  RefreshCcw,
  ShieldCheck,
} from "lucide-react";

import { ClientLogos } from "@/components/ClientLogos";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsCounter } from "@/components/StatsCounter";

const latestUpdates = [
  {
    category: "Private AI",
    title: "Keep your data, models, and decisions under your control",
    summary:
      "Build enterprise AI around your own infrastructure, policies, and business goals—without giving up control of sensitive data.",
    href: "/contact-us",
    image: "/images/hero-ai-poster.jpg",
    imageClass: "object-cover object-[68%_center]",
    overlay: "from-sky-950/30 via-transparent to-black/30",
  },
  {
    category: "IT Operations",
    title: "Turn infrastructure signals into faster, smarter action",
    summary:
      "Connect monitoring, automation, and decision-making so your IT operation can identify issues early and respond with confidence.",
    href: "/it-infrastructure",
    image: "/images/hero-slide-data.jpg",
    imageClass: "object-cover object-center",
    overlay: "from-violet-950/35 via-transparent to-black/30",
  },
  {
    category: "Cybersecurity",
    title: "A practical security checklist for growing businesses",
    summary:
      "Strengthen everyday security with practical controls that reduce risk while keeping your people productive and your business moving.",
    href: "/blog",
    image: "/images/hero-slide-control.jpg",
    imageClass: "object-cover object-[63%_center]",
    overlay: "from-emerald-950/30 via-transparent to-black/35",
  },
  {
    category: "Managed IT",
    title: "What proactive IT support should look like in practice",
    summary:
      "Move beyond reactive fixes with continuous monitoring, preventive maintenance, and responsive support designed around your team.",
    href: "/managed-it-services",
    image: "/images/hero-ai-poster.jpg",
    imageClass: "object-cover object-[38%_center]",
    overlay: "from-orange-950/25 via-transparent to-black/35",
  },
  {
    category: "Cloud",
    title: "When is it time to move your business systems to the cloud?",
    summary:
      "Explore the key signs, tradeoffs, and planning questions that can help you make your next cloud move with clarity.",
    href: "/aws-solutions",
    image: "/images/hero-slide-data.jpg",
    imageClass: "object-cover object-[72%_center]",
    overlay: "from-indigo-950/35 via-transparent to-black/35",
  },
  {
    category: "Microsoft 365",
    title: "A safer path to modern collaboration across your team",
    summary:
      "Bring communication, productivity, and security together with a Microsoft 365 environment designed for the way your team works.",
    href: "/microsoft-solutions",
    image: "/images/hero-slide-control.jpg",
    imageClass: "object-cover object-[35%_center]",
    overlay: "from-blue-950/35 via-transparent to-black/30",
  },
  {
    category: "Business Continuity",
    title: "Backups are only useful when recovery is tested",
    summary:
      "Create a resilient backup and recovery process that helps your organization return to work quickly after disruption.",
    href: "/cyber-and-data-security",
    image: "/images/hero-ai-poster.jpg",
    imageClass: "object-cover object-[82%_center]",
    overlay: "from-fuchsia-950/30 via-transparent to-black/35",
  },
  {
    category: "Infrastructure",
    title: "Five warning signs your network is holding your team back",
    summary:
      "Spot the performance, coverage, and reliability issues that quietly slow down a growing business and affect daily work.",
    href: "/it-infrastructure",
    image: "/images/hero-slide-data.jpg",
    imageClass: "object-cover object-[32%_center]",
    overlay: "from-cyan-950/30 via-transparent to-black/35",
  },
];

const reasons = [
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Reliable, cost-conscious help whenever your team needs it, delivered by people who understand your environment.",
  },
  {
    icon: BadgeCheck,
    title: "100% Satisfaction",
    description:
      "A service experience built around clear communication, responsive support, and solutions that fit your goals.",
  },
  {
    icon: RefreshCcw,
    title: "Money Back Guarantee",
    description:
      "Our work is backed by a straightforward satisfaction promise, so you can move forward with confidence.",
  },
];

export default function Home() {
  return (
    <main id="top" className="overflow-x-clip">
      <Header overlay />

      <HeroSection />

      <section id="services" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-4xl font-extrabold tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
                Latest Updates
              </h2>
              <Link
                href="/blog"
                className="group hidden items-center gap-2 pb-1 text-sm font-extrabold text-primary-800 transition-colors hover:text-primary-600 sm:inline-flex"
              >
                View all insights
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {latestUpdates.map((update, index) => (
              <ScrollReveal
                key={update.title}
                delay={(index % 4) * 0.06}
                className="h-full"
              >
                <Link
                  href={update.href}
                  className="group block h-full rounded-2xl"
                >
                  <article className="relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-card transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-soft">
                    <div className="relative min-h-0 flex-[1.45] overflow-hidden bg-slate-950">
                      <Image
                        src={update.image}
                        alt=""
                        fill
                        sizes="(min-width: 1280px) 290px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`${update.imageClass} transition-transform duration-700 ease-out group-hover:scale-105`}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${update.overlay}`}
                      />
                    </div>

                    <div className="relative flex min-h-[174px] flex-1 flex-col p-6 sm:p-7">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-slate-300">
                          {update.category}
                        </p>
                        <ArrowUpRight className="size-4 text-slate-500 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-300" />
                      </div>
                      <h3 className="text-xl font-extrabold leading-[1.28] tracking-[-0.025em] text-white">
                        {update.title}
                      </h3>
                      <span className="mt-auto block h-0.5 w-0 bg-accent-300 transition-all duration-500 group-hover:mt-6 group-hover:w-12" />
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20 flex translate-y-8 flex-col bg-[linear-gradient(180deg,#fb5b24_0%,#e65d88_48%,#ca67df_100%)] p-7 text-white opacity-0 transition-[opacity,transform] duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transform-none sm:p-8"
                    >
                      <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/95">
                        {update.category}
                      </p>
                      <h3 className="mt-7 text-[1.4rem] font-extrabold leading-[1.18] tracking-[-0.035em] text-white">
                        {update.title}
                      </h3>
                      <p className="mt-4 text-sm font-semibold leading-6 text-white/90">
                        {update.summary}
                      </p>

                      <div className="mt-auto flex items-center gap-4 text-lg font-extrabold">
                        <span className="shrink-0">Read more</span>
                        <span className="h-px flex-1 bg-white/90" />
                        <ArrowRight
                          className="size-6 shrink-0"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800 sm:hidden"
          >
            View all insights
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-primary-950 p-8 shadow-soft sm:p-10">
              <div className="absolute -right-16 -top-16 size-48 rounded-full border-[42px] border-white/5" />
              <ShieldCheck className="size-10 text-accent-300" />
              <p className="mt-14 text-6xl font-extrabold tracking-[-0.06em] text-white">
                10+
              </p>
              <p className="mt-2 max-w-xs text-sm font-bold uppercase tracking-[0.15em] text-slate-200">
                Years of specialist experience across our team
              </p>
              <div className="mt-10 flex flex-wrap gap-2">
                {["Remote support", "On-site service", "Proactive care"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-slate-100"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading
              eyebrow="About us"
              title="Experienced people. Support that feels personal."
              description="IT Experts brings together specialists with deep experience in their fields. We provide remote and on-site support for small and medium-sized businesses, learning each environment during onboarding so issues can be resolved faster."
            />
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
              Our goal is simple: remove the burden of maintaining a full
              in-house IT team while giving your business dependable expertise
              whenever it is needed.
            </p>
            <Link
              href="/about-us"
              className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800 transition-colors hover:text-primary-600"
            >
              Read More
              <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal distance={16}>
        <StatsCounter />
      </ScrollReveal>

      <section id="why-us" className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Technology support built on trust."
              description="We take time to understand your needs, then match the right support, security, equipment, and cloud solutions to your business."
              centered
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <ScrollReveal
                key={reason.title}
                delay={index * 0.08}
                className="h-full"
              >
                <article className="group h-full rounded-2xl border border-slate-200/80 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent-50 text-accent-700 transition-colors group-hover:bg-accent-400 group-hover:text-white">
                    <reason.icon className="size-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-ink">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {reason.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div id="clients" className="bg-white py-6 sm:py-8">
        <ClientLogos />
      </div>

      <ScrollReveal distance={16}>
        <CTASection
          eyebrow="Let’s solve IT together"
          heading="Focus on your business. We’ll take care of the technology."
          description="Start with a no-pressure conversation about your support, infrastructure, cloud, or security needs."
          buttonLabel="Get Free Consultation"
          buttonHref="/contact-us"
        />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
