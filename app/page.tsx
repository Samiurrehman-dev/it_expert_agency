import Image from "next/image";
import Link from "next/link";
import {
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
import { OurServicesSection } from "@/components/OurServicesSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";
import { StatsCounter } from "@/components/StatsCounter";
import { updatePosts, type UpdatePost } from "@/lib/updates";

type PublishedUpdate = UpdatePost & { href: string };

const publishedUpdates = updatePosts.filter(
  (post): post is PublishedUpdate =>
    Boolean(post.href) && (post.type === "Blog" || post.type === "Case Study"),
);

const latestUpdates = [
  ...publishedUpdates.filter((post) => post.type === "Blog").slice(0, 6),
  ...publishedUpdates.filter((post) => post.type === "Case Study").slice(0, 2),
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

      <section
        id="insights"
        className="relative isolate overflow-hidden bg-[#fcfaf7] py-20 sm:py-28"
      >
        <div className="pointer-events-none absolute -right-32 top-10 -z-10 size-80 rounded-full border-[56px] border-primary-100/60" />
        <div className="pointer-events-none absolute -left-24 bottom-24 -z-10 size-56 rounded-full border border-primary-200/60" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary-700">
                  <span className="h-px w-9 bg-primary-500" />
                  Ideas for smarter IT
                </div>
                <h2 className="text-4xl font-extrabold tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
                  Latest Updates
                </h2>
              </div>
              <div className="hidden items-center gap-3 sm:flex">
                {[
                  { label: "View all blogs", href: "/blog" },
                  { label: "Case studies", href: "/case-studies" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-5 py-3 text-sm font-extrabold text-primary-800 shadow-card transition-all hover:border-primary-400 hover:text-primary-600"
                  >
                    {item.label}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
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
                  className="group block h-full rounded-[2rem] focus-visible:ring-offset-[#fcfaf7]"
                >
                  <article className="relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-3 shadow-card transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-primary-200 group-hover:shadow-soft">
                    <div className="relative aspect-[4/3] shrink-0 overflow-hidden rounded-[1.25rem] bg-slate-950">
                      <Image
                        src={update.image!}
                        alt={update.imageAlt ?? ""}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/85 via-primary-950/10 to-black/5" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/25 bg-primary-500 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm">
                        {update.type}
                      </span>
                      <div className="absolute bottom-5 left-5 max-w-[80%]">
                        <span className="text-xs font-bold leading-5 text-white/80">
                          {update.category}
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col px-4 pb-4 pt-6 sm:px-5 sm:pb-5">
                      <h3 className="text-xl font-extrabold leading-[1.25] tracking-[-0.03em] text-ink transition-colors group-hover:text-primary-700">
                        {update.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm font-medium leading-6 text-slate-600">
                        {update.excerpt}
                      </p>

                      <div className="mt-auto flex items-center gap-3 pt-6 text-sm font-extrabold text-slate-800">
                        <span>
                          {update.type === "Case Study"
                            ? "Read case study"
                            : "Read article"}
                        </span>
                        <span className="h-px flex-1 bg-slate-200 transition-colors group-hover:bg-primary-200" />
                        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition-all duration-300 group-hover:rotate-[-8deg] group-hover:bg-primary-500">
                          <ArrowUpRight className="size-5" strokeWidth={1.8} />
                        </span>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute bottom-0 left-10 h-1 w-14 rounded-t-full bg-primary-500 opacity-0 transition-all duration-500 group-hover:left-6 group-hover:w-24 group-hover:opacity-100" />
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-5 sm:hidden">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-primary-800"
            >
              View all blogs
              <ArrowUpRight className="size-4" />
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-extrabold text-primary-800"
            >
              Case studies
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-2xl bg-primary-950 p-8 shadow-soft sm:p-10">
              <div className="absolute -right-16 -top-16 size-48 rounded-full border-[42px] border-white/5" />
              <ShieldCheck className="size-10 text-accent-300" />
              <p className="mt-14 text-6xl font-extrabold tracking-[-0.06em] text-white">
                20+
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

      <OurServicesSection />

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
          buttonLabel="Let’s Talk"
          buttonHref="/contact-us"
        />
      </ScrollReveal>

      <Footer />
    </main>
  );
}
