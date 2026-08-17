"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { services } from "@/lib/content";

const palettes = [
  ["#fff8f1", "#f6bd86", "#e57a25"],
  ["#f7f6f3", "#ffd7b3", "#ee8d3c"],
  ["#fff3e5", "#f5b272", "#b95514"],
  ["#fffaf5", "#efc39a", "#d56f1d"],
  ["#f8f7f4", "#fac996", "#e57a25"],
  ["#fff5ea", "#f3b575", "#c65f18"],
];

function ServiceArtwork({ index }: { index: number }) {
  const [light, middle, strong] = palettes[index % palettes.length];
  const gradientId = `service-signal-${index}`;
  const glowId = `service-glow-${index}`;

  return (
    <svg
      viewBox="0 0 440 190"
      preserveAspectRatio="none"
      className="size-full transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="0.52" stopColor={middle} />
          <stop offset="1" stopColor={strong} />
        </linearGradient>
        <radialGradient id={glowId} cx="0.72" cy="0.18" r="0.85">
          <stop offset="0" stopColor="#fff" stopOpacity=".86" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="440" height="190" fill={`url(#${gradientId})`} />
      <rect width="440" height="190" fill={`url(#${glowId})`} />

      {Array.from({ length: 8 }).map((_, line) => (
        <path
          key={line}
          d={`M${-20 + line * 62} 205L${96 + line * 62} -15`}
          stroke="#fff"
          strokeOpacity=".2"
          strokeWidth="1"
        />
      ))}

      {index % 2 === 0 ? (
        <>
          {[0, 1, 2].map((ring) => (
            <circle
              key={ring}
              cx="326"
              cy="104"
              r={35 + ring * 29}
              fill="none"
              stroke={ring === 1 ? "#363839" : "#fff"}
              strokeOpacity={ring === 1 ? ".26" : ".52"}
              strokeWidth={ring === 1 ? "2" : "1.5"}
            />
          ))}
          <path
            d="M-20 151C48 151 52 85 118 85s72 54 132 54 68-35 121-35 58 31 91 31"
            fill="none"
            stroke="#363839"
            strokeOpacity=".72"
            strokeWidth="3"
          />
        </>
      ) : (
        <>
          <path
            d="M-15 158C54 75 111 176 177 98s121 39 176-30c33-42 70-40 105-20"
            fill="none"
            stroke="#fff"
            strokeOpacity=".82"
            strokeWidth="20"
          />
          <path
            d="M-15 158C54 75 111 176 177 98s121 39 176-30c33-42 70-40 105-20"
            fill="none"
            stroke="#363839"
            strokeOpacity=".68"
            strokeWidth="3"
          />
          {[92, 177, 353].map((point, pointIndex) => (
            <circle
              key={point}
              cx={point}
              cy={[105, 98, 68][pointIndex]}
              r="7"
              fill="#fff"
              stroke="#363839"
              strokeWidth="3"
            />
          ))}
        </>
      )}
    </svg>
  );
}

export function OurServicesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const moveCarousel = useCallback((direction: 1 | -1) => {
    const scroller = scrollerRef.current;
    const firstCard = scroller?.querySelector<HTMLElement>(
      "[data-service-card]",
    );

    if (!scroller || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(scroller).columnGap) || 20;
    const distance = firstCard.offsetWidth + gap;
    const isAtEnd =
      scroller.scrollLeft + scroller.clientWidth >=
      scroller.scrollWidth - distance * 0.45;
    const isAtStart = scroller.scrollLeft <= distance * 0.25;

    if (direction === 1 && isAtEnd) {
      scroller.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    if (direction === -1 && isAtStart) {
      scroller.scrollTo({ left: scroller.scrollWidth, behavior: "smooth" });
      return;
    }

    scroller.scrollBy({ left: distance * direction, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const interval = window.setInterval(() => moveCarousel(1), 3600);
    return () => window.clearInterval(interval);
  }, [isPaused, moveCarousel, shouldReduceMotion]);

  return (
    <section
      id="services"
      aria-labelledby="our-services-title"
      className="relative isolate overflow-hidden bg-primary-950 py-20 text-white sm:py-28"
    >
      <div className="pointer-events-none absolute -left-36 -top-44 -z-10 size-[28rem] rounded-full border-[84px] border-white/[0.035]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-6rem] -z-10 size-[30rem] rounded-full border border-primary-500/20" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.22em] text-primary-300">
              <span className="h-px w-9 bg-primary-400" />
              Technology that moves with you
            </div>
            <h2
              id="our-services-title"
              className="text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
            >
              Our services
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-slate-300">
              Practical expertise across support, security, cloud, and
              infrastructure—connected as one reliable technology partner.
            </p>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => moveCarousel(-1)}
              className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-primary-400 hover:bg-primary-500"
              aria-label="Show previous service"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => moveCarousel(1)}
              className="grid size-12 place-items-center rounded-full border border-white/15 text-white transition hover:border-primary-400 hover:bg-primary-500"
              aria-label="Show next service"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        id="service-cards"
        className="services-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-80rem)/2+2rem))] pb-5 sm:mt-14 sm:gap-6"
        onPointerEnter={() => setIsPaused(true)}
        onPointerLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
        aria-label="Services carousel"
      >
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              data-service-card
              className="group h-[445px] w-[84vw] max-w-[395px] shrink-0 snap-start sm:w-[52vw] lg:w-[35vw] xl:w-[30vw]"
            >
              <Link
                href={service.href}
                className="relative flex size-full flex-col overflow-hidden rounded-[2rem_2rem_5.5rem_2rem] border border-white/10 bg-[#fffdf9] p-3 text-ink shadow-[0_24px_70px_-35px_rgba(0,0,0,0.75)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-400/70 focus-visible:ring-offset-primary-950"
              >
                <div className="flex items-start justify-between px-4 pb-5 pt-4 sm:px-5 sm:pt-5">
                  <span className="text-xs font-extrabold tracking-[0.18em] text-slate-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:rotate-[-7deg] group-hover:bg-primary-500 group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="px-4 sm:px-5">
                  <h3 className="max-w-xs text-[1.7rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm font-medium leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="relative mt-auto h-[145px] overflow-hidden rounded-[4rem_1.25rem_4.5rem_1.25rem]">
                  <ServiceArtwork index={index} />
                  <span className="absolute bottom-4 left-5 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-950">
                    Explore service
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </article>
          );
        })}
      </div>

      <div className="mx-auto mt-3 flex max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
          <span className="size-1.5 rounded-full bg-primary-400 motion-safe:animate-pulse" />
          Auto exploring services
        </div>
        <Link
          href="/contact-us"
          className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.08em] text-white transition-colors hover:text-primary-300 sm:text-sm"
        >
          View all capabilities
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
