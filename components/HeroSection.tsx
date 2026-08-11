import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CircleCheck, Sparkles } from "lucide-react";

import { HeroVisual } from "./hero-visual";

export type HeroSectionProps = {
  eyebrow?: string;
  heading?: ReactNode;
  subheading?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  highlights?: string[];
  visual?: ReactNode;
};

export function HeroSection({
  eyebrow = "IT that works as hard as you do",
  heading = (
    <>
      Technology that keeps your business{" "}
      <span className="text-primary-900">moving.</span>
    </>
  ),
  subheading = "Secure, proactive IT support that reduces risk, eliminates friction, and gives your team the freedom to focus on what matters.",
  primaryCta = { label: "Book a free consultation", href: "#contact" },
  secondaryCta = { label: "Explore our services", href: "#services" },
  highlights = [
    "24/7 support",
    "On-site & remote",
    "Built for growing businesses",
  ],
  visual = <HeroVisual />,
}: HeroSectionProps) {
  return (
    <section className="bg-grid relative flex min-h-[760px] items-center overflow-hidden pb-24 pt-24 lg:min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute -right-36 -top-36 size-[520px] rounded-full border-[90px] border-primary-100/50" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/85 px-3 py-2 text-xs font-extrabold text-primary-800 shadow-sm backdrop-blur [animation-fill-mode:both] motion-safe:animate-fade-up">
            <span className="grid size-6 place-items-center rounded-full bg-accent-100 text-accent-700">
              <Sparkles className="size-3.5" />
            </span>
            {eyebrow}
          </div>

          <h1 className="text-balance text-5xl font-extrabold leading-[1.04] tracking-[-0.055em] text-ink [animation-delay:100ms] [animation-fill-mode:both] motion-safe:animate-fade-up sm:text-6xl lg:text-7xl">
            {heading}
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-slate-600 [animation-delay:200ms] [animation-fill-mode:both] motion-safe:animate-fade-up sm:text-xl">
            {subheading}
          </p>

          <div className="mt-9 flex flex-col gap-3 [animation-delay:300ms] [animation-fill-mode:both] motion-safe:animate-fade-up sm:flex-row">
            <Link
              href={primaryCta.href}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent-400 px-7 text-sm font-extrabold text-primary-950 shadow-lg shadow-accent-500/20 transition-all hover:-translate-y-0.5 hover:bg-accent-300"
            >
              {primaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex h-14 items-center justify-center rounded-full border border-slate-200 bg-white px-7 text-sm font-extrabold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary-200"
            >
              {secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-slate-500 [animation-delay:400ms] [animation-fill-mode:both] motion-safe:animate-fade-up">
            {highlights.map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <CircleCheck className="size-4 text-accent-600" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="[animation-delay:250ms] [animation-fill-mode:both] motion-safe:animate-fade-in">
          {visual}
        </div>
      </div>
    </section>
  );
}
