import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clock3,
  GraduationCap,
  HeartHandshake,
  Laptop2,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at IT Experts Agency and join a team helping businesses get more from their technology.",
  alternates: { canonical: "/careers" },
};

const positions = [
  {
    title: "Senior IT Support Specialist",
    team: "Managed Services",
    location: "Ontario / Hybrid",
    type: "Full-time",
  },
  {
    title: "Cloud Solutions Engineer",
    team: "Cloud & Infrastructure",
    location: "Remote — Canada",
    type: "Full-time",
  },
  {
    title: "Cybersecurity Analyst",
    team: "Security Operations",
    location: "Ontario / Hybrid",
    type: "Full-time",
  },
  {
    title: "Technical Account Manager",
    team: "Client Success",
    location: "Cambridge, ON",
    type: "Full-time",
  },
];

const benefits = [
  {
    icon: UsersRound,
    title: "A team that shares knowledge",
    description:
      "Work alongside experienced specialists who solve problems together and make room for every voice.",
  },
  {
    icon: GraduationCap,
    title: "Room to keep growing",
    description:
      "Build deeper technical skills through varied client environments, mentorship, and continuous learning.",
  },
  {
    icon: Laptop2,
    title: "Flexible ways of working",
    description:
      "Our roles blend focused remote work with the collaboration and on-site support each project needs.",
  },
  {
    icon: HeartHandshake,
    title: "Work with real impact",
    description:
      "Help businesses stay productive, protected, and confident in the technology behind their work.",
  },
];

export default function CareersPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <InnerPageHero
          eyebrow="Careers at IT Experts"
          title={
            <>
              Do work that keeps businesses{" "}
              <span className="text-accent-300">moving.</span>
            </>
          }
          description="Join a curious, practical team that turns complex technology challenges into dependable everyday experiences."
        />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Open positions"
                title="Find your place on the team."
                description="We’re always interested in people who combine technical depth with clear communication and genuine care for clients."
              />
            </ScrollReveal>

            <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
              {positions.map((position, index) => (
                <ScrollReveal
                  key={position.title}
                  delay={index * 0.05}
                  distance={12}
                  className={
                    index < positions.length - 1
                      ? "border-b border-slate-200"
                      : undefined
                  }
                >
                  <article className="group grid gap-5 p-6 transition-colors hover:bg-slate-50 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid size-10 place-items-center rounded-xl bg-primary-50 text-primary-800">
                          <BriefcaseBusiness className="size-4" />
                        </span>
                        <div>
                          <h3 className="text-lg font-extrabold tracking-[-0.02em] text-ink sm:text-xl">
                            {position.title}
                          </h3>
                          <p className="mt-1 text-sm font-bold text-primary-700">
                            {position.team}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 pl-0 text-xs font-bold text-slate-500 sm:pl-[52px]">
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="size-4 text-accent-600" />
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Clock3 className="size-4 text-accent-600" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`mailto:careers@itexpertsagency.com?subject=${encodeURIComponent(`Application: ${position.title}`)}`}
                      className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-5 text-sm font-extrabold text-primary-900 transition-all group-hover:border-primary-900 group-hover:bg-primary-900 group-hover:text-white"
                    >
                      Apply now
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              These roles are sample openings. Don’t see your specialty? Send a
              general application to{" "}
              <a
                href="mailto:careers@itexpertsagency.com"
                className="font-extrabold text-primary-800 hover:text-primary-600"
              >
                careers@itexpertsagency.com
              </a>
              .
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Why work with us"
                title="Grow your craft. Make a visible difference."
                description="We’re building a workplace where talented people can do thoughtful work, learn continuously, and help clients succeed."
                centered
              />
            </ScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4">
              {benefits.map((benefit, index) => (
                <ScrollReveal
                  key={benefit.title}
                  delay={index * 0.06}
                  className="h-full"
                >
                  <article className="h-full rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card sm:p-8">
                    <span className="grid size-12 place-items-center rounded-2xl bg-accent-50 text-accent-700">
                      <benefit.icon className="size-5" />
                    </span>
                    <h3 className="mt-6 text-lg font-extrabold tracking-[-0.025em] text-ink">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-primary-950 py-16 sm:py-20">
          <div className="absolute -right-20 -top-28 -z-10 size-72 rounded-full border-[56px] border-white/5" />
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent-300">
                <Sparkles className="size-4" />
                Your next chapter
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Bring your experience to IT Experts.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100/75">
                Introduce yourself and tell us what kind of problems you love to
                solve.
              </p>
            </div>
            <a
              href="mailto:careers@itexpertsagency.com?subject=General application"
              className="group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-accent-400 px-7 text-sm font-extrabold text-white transition-all hover:-translate-y-1 hover:bg-accent-300"
            >
              Send your résumé
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
