import Link from "next/link";
import {
  BadgeCheck,
  Blocks,
  Cloud,
  Handshake,
  Headphones,
  Network,
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
import { ServiceCard, type ServiceCardProps } from "@/components/ServiceCard";
import { StatsCounter } from "@/components/StatsCounter";

const homepageServices: ServiceCardProps[] = [
  {
    icon: Headphones,
    title: "Managed IT Services",
    description:
      "Responsive 24/7 support, proactive monitoring, and ongoing maintenance that keep your team productive.",
    href: "/managed-it-services",
  },
  {
    icon: Blocks,
    title: "Microsoft Solutions",
    description:
      "Simplify Microsoft 365, email, cloud migration, and business workflows while reducing cost and complexity.",
    href: "/microsoft-solutions",
  },
  {
    icon: Cloud,
    title: "AWS Solutions",
    description:
      "Flexible, scalable AWS environments that help your business innovate faster and operate more efficiently.",
    href: "/aws-solutions",
  },
  {
    icon: Network,
    title: "IT Infrastructure",
    description:
      "Networks, servers, endpoints, and cloud systems monitored around the clock for uptime and continuity.",
    href: "/it-infrastructure",
  },
  {
    icon: ShieldCheck,
    title: "Cyber & Data Security",
    description:
      "Continuous alert monitoring, risk reduction, and rapid response that protect your systems and business data.",
    href: "/cyber-and-data-security",
  },
  {
    icon: Handshake,
    title: "Technology Partners",
    description:
      "Proven solutions from trusted technology leaders including Microsoft, AWS, Cisco, VMware, Veeam, and Dell.",
    href: "#clients",
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
      <Header />

      <HeroSection
        eyebrow="Your own IT department"
        heading={
          <>
            Managed IT Services{" "}
            <span className="text-primary-900">
              built around your business.
            </span>
          </>
        }
        subheading="Our IT professionals provide 24/7 support, proactive monitoring, and practical technology guidance—so you can stay focused on your business goals."
        primaryCta={{ label: "Get a free consultation", href: "#contact" }}
        secondaryCta={{ label: "Explore IT services", href: "#services" }}
      />

      <section id="services" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What we do"
              title="Complete IT support for a more resilient business."
              description="From daily support to cloud transformation and cybersecurity, one experienced team manages the technology behind your growth."
              centered
            />
          </ScrollReveal>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homepageServices.map((service, index) => (
              <ScrollReveal
                key={service.title}
                delay={index * 0.06}
                className="h-full"
              >
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
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
