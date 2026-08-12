import type { ReactNode } from "react";

type InnerPageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export function InnerPageHero({
  eyebrow,
  title,
  description,
}: InnerPageHeroProps) {
  return (
    <section className="bg-grid relative isolate overflow-hidden bg-primary-950 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-950 via-primary-950 to-primary-900/80" />
      <div className="absolute -right-24 -top-28 -z-10 size-80 rounded-full border-[64px] border-white/5" />
      <div className="absolute -bottom-40 left-1/3 -z-10 size-80 rounded-full bg-accent-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl [animation-fill-mode:both] motion-safe:animate-fade-up">
          <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent-300">
            {eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-blue-100/85 sm:text-xl sm:leading-9">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
