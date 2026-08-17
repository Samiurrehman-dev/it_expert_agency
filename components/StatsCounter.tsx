"use client";

import { useEffect, useRef, useState } from "react";

export type Stat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export type StatsCounterProps = {
  stats?: Stat[];
  duration?: number;
};

const defaultStats: Stat[] = [
  { value: 500, suffix: "+", label: "Satisfied clients" },
  { value: 10000, suffix: "+", label: "Requests resolved" },
  { value: 24, suffix: "/7", label: "Support coverage" },
  { value: 20, suffix: "+", label: "Years of expertise" },
];

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  duration,
}: Omit<Stat, "label"> & { duration: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = counterRef.current;
    if (!element) return;

    let animationFrame = 0;
    let hasAnimated = false;

    function startAnimation() {
      if (hasAnimated) return;
      hasAnimated = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setDisplayValue(value);
        return;
      }

      const startedAt = performance.now();

      function update(now: number) {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.round(value * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        }
      }

      animationFrame = requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [duration, value]);

  return (
    <span ref={counterRef}>
      {prefix}
      {new Intl.NumberFormat("en-US").format(displayValue)}
      {suffix}
    </span>
  );
}

export function StatsCounter({
  stats = defaultStats,
  duration = 1400,
}: StatsCounterProps) {
  return (
    <section className="bg-canvas py-6 sm:py-8" aria-label="Company statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:gap-4 sm:px-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200/80 bg-white px-3 py-7 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 sm:px-4 sm:py-9"
          >
            <p className="text-3xl font-extrabold tracking-[-0.04em] text-primary-900 sm:text-4xl">
              <AnimatedNumber {...stat} duration={duration} />
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
