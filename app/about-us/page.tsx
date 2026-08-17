import type { Metadata } from "next";
import {
  BrainCircuit,
  CloudCog,
  Headphones,
  HeartHandshake,
  Lightbulb,
  Network,
  ServerCog,
  ShieldCheck,
  Target,
  UsersRound,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the experienced IT specialists behind IT Experts Agency and learn about our mission to make dependable technology support accessible to growing businesses.",
  alternates: { canonical: "/about-us" },
};

const expertise = [
  {
    icon: Headphones,
    title: "Managed support",
    description:
      "Responsive remote and on-site help that keeps teams productive and technology dependable.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Practical protection, monitoring, and recovery planning for modern business risks.",
  },
  {
    icon: CloudCog,
    title: "Cloud solutions",
    description:
      "Microsoft and AWS expertise for secure migration, collaboration, and scalable operations.",
  },
  {
    icon: Network,
    title: "IT infrastructure",
    description:
      "Networks, endpoints, servers, and communications managed as one connected environment.",
  },
  {
    icon: ServerCog,
    title: "Systems expertise",
    description:
      "Deep technical experience applied to maintenance, troubleshooting, and modernization.",
  },
  {
    icon: BrainCircuit,
    title: "Technology strategy",
    description:
      "Clear guidance that connects technology decisions to business priorities and sustainable growth.",
  },
];

const values = [
  {
    icon: HeartHandshake,
    title: "Partnership first",
    description:
      "We learn your environment, communicate clearly, and work as an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Practical thinking",
    description:
      "We recommend what fits your needs—not complexity for complexity’s sake.",
  },
  {
    icon: Target,
    title: "Built for outcomes",
    description:
      "Every solution is measured by the reliability, security, and progress it creates for your business.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <InnerPageHero
          eyebrow="About IT Experts"
          title={
            <>
              Experienced people.{" "}
              <span className="text-accent-300">Better IT.</span>
            </>
          }
          description="We bring together seasoned specialists who make business technology more secure, reliable, and easier to manage."
        />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Our story"
                title="A senior IT team, without the in-house overhead."
                description="IT Experts Agency was built around a simple idea: growing businesses should have access to experienced technology specialists without needing to assemble a large internal department."
              />
              <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Every specialist on our team brings deep experience in their
                  field. Together, we support small and medium-sized businesses
                  with day-to-day help, proactive care, infrastructure,
                  security, and cloud expertise.
                </p>
                <p>
                  During onboarding, we learn how your systems and people work.
                  That context helps us triage issues faster, communicate more
                  clearly, and build technology around where your business is
                  going next.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-primary-950 p-8 shadow-soft sm:p-10">
                <div className="absolute -right-16 -top-16 size-48 rounded-full border-[42px] border-white/5" />
                <UsersRound className="size-11 text-accent-300" />
                <p className="mt-16 text-6xl font-extrabold tracking-[-0.06em] text-white">
                  20+
                </p>
                <p className="mt-2 max-w-sm text-sm font-bold uppercase leading-6 tracking-[0.15em] text-slate-200">
                  Years of specialist experience across every discipline
                </p>
                <div className="mt-9 grid grid-cols-2 gap-3 border-t border-white/10 pt-7 text-sm font-bold text-slate-100">
                  <span>24/7 support</span>
                  <span>Remote & on-site</span>
                  <span>Cloud expertise</span>
                  <span>Security focused</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Team expertise"
                title="One team for your whole technology environment."
                description="Our specialists combine operational experience with a practical understanding of how technology affects the people who rely on it."
                centered
              />
            </ScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {expertise.map((item, index) => (
                <ScrollReveal
                  key={item.title}
                  delay={index * 0.05}
                  className="h-full"
                >
                  <article className="group h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft sm:p-8">
                    <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors group-hover:bg-primary-900 group-hover:text-white">
                      <item.icon className="size-5" />
                    </span>
                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="overflow-hidden rounded-3xl bg-primary-950 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
                  <SectionHeading
                    eyebrow="Our mission"
                    title="Make great IT feel effortless."
                    description="We give businesses the confidence to move forward by making their technology stable, secure, and ready for change."
                    light
                  />
                  <div className="grid gap-4 sm:grid-cols-3">
                    {values.map((value) => (
                      <article
                        key={value.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6"
                      >
                        <value.icon className="size-6 text-accent-300" />
                        <h3 className="mt-5 font-extrabold text-white">
                          {value.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-100/70">
                          {value.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection
          eyebrow="A better IT partnership"
          heading="Bring experienced IT specialists into your corner."
          description="Tell us where technology is slowing you down, and we’ll help you build a clear way forward."
          buttonLabel="Talk to our team"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
