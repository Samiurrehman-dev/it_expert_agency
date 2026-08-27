import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export type CTASectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  id = "contact",
  eyebrow = "Ready to strengthen your IT?",
  heading = "Turn technology into an advantage for your business.",
  description = "Talk with an IT expert about a clear, practical plan for better support, stronger security, and less downtime.",
  buttonLabel = "Let’s Talk",
  buttonHref = "#contact",
}: CTASectionProps) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden bg-primary-950 py-16 sm:py-20"
    >
      <div className="absolute -left-24 -top-28 size-72 rounded-full border-[64px] border-white/5" />
      <div className="absolute -bottom-40 right-0 size-80 rounded-full bg-accent-500/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 px-5 sm:px-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-accent-300">
            <CheckCircle2 className="size-4" />
            {eyebrow}
          </p>
          <h2 className="text-balance text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-100/80 sm:text-base">
            {description}
          </p>
        </div>
        <Link
          href={buttonHref}
          className="group inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-full bg-accent-400 px-7 text-sm font-extrabold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-accent-300"
        >
          {buttonLabel}
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
