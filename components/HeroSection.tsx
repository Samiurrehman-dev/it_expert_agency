"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDE_DURATION = 7000;

type HeroSlide = {
  eyebrow: string;
  titleLines: {
    text?: string;
    lead?: string;
    accent?: string;
    mobileAccentBreak?: boolean;
  }[];
  headlineClass: string;
  description: string;
  cta: { label: string; href: string };
  media: "video" | "image";
  background: string;
  backgroundClass: string;
  overlayClass: string;
  accentClass: string;
};

const slides: HeroSlide[] = [
  {
    eyebrow: "Own AI",
    titleLines: [
      { lead: "Your ", accent: "AI." },
      { lead: "Your ", accent: "Data." },
      { lead: "Your ", accent: "Control." },
    ],
    headlineClass:
      "text-[clamp(3.25rem,14vw,5.7rem)] lg:text-[clamp(5rem,6.6vw,6.5rem)]",
    description:
      "Deploy enterprise AI on infrastructure you own—keeping your data private, governed, and completely under your control.",
    cta: { label: "Explore Private AI", href: "#services" },
    media: "video",
    background: "/images/hero-ai-poster.jpg",
    backgroundClass: "object-cover object-[67%_center]",
    overlayClass:
      "bg-[linear-gradient(90deg,#05080d_0%,rgba(5,8,13,0.97)_31%,rgba(5,8,13,0.68)_57%,rgba(5,8,13,0.14)_100%)] max-lg:bg-[linear-gradient(90deg,rgba(5,8,13,0.94)_0%,rgba(5,8,13,0.84)_58%,rgba(5,8,13,0.36)_100%)]",
    accentClass: "text-sky-200",
  },
  {
    eyebrow: "Transform Operations",
    titleLines: [
      { text: "Turn your infrastructure" },
      {
        lead: "into an ",
        accent: "intelligent operation.",
        mobileAccentBreak: true,
      },
    ],
    headlineClass:
      "text-[clamp(2.65rem,11.5vw,5.2rem)] lg:text-[clamp(4.4rem,5.5vw,5.5rem)]",
    description:
      "Bring intelligence into monitoring, automation, and decision-making to make every part of your IT operation work smarter.",
    cta: { label: "See Intelligent Operations", href: "#services" },
    media: "image",
    background: "/images/hero-slide-data.jpg",
    backgroundClass: "object-cover object-center",
    overlayClass:
      "bg-[linear-gradient(90deg,rgba(3,4,10,0.97)_0%,rgba(3,4,10,0.88)_38%,rgba(8,4,18,0.42)_68%,rgba(8,4,18,0.06)_100%)] max-lg:bg-[linear-gradient(90deg,rgba(3,4,10,0.94)_0%,rgba(3,4,10,0.76)_70%,rgba(3,4,10,0.4)_100%)]",
    accentClass: "text-violet-200",
  },
  {
    eyebrow: "Trust AI",
    titleLines: [
      { text: "Private." },
      { text: "Customized." },
      { accent: "Operational." },
    ],
    headlineClass:
      "text-[clamp(3.35rem,13vw,5.6rem)] lg:text-[clamp(5rem,6.3vw,6.2rem)]",
    description:
      "Run private AI tailored to your workflows, policies, and business goals—securely inside your own environment.",
    cta: { label: "Talk to an AI Architect", href: "/contact-us" },
    media: "image",
    background: "/images/hero-slide-control.jpg",
    backgroundClass: "object-cover object-[62%_center]",
    overlayClass:
      "bg-[linear-gradient(90deg,rgba(3,7,10,0.98)_0%,rgba(3,7,10,0.9)_37%,rgba(3,7,10,0.5)_64%,rgba(3,7,10,0.12)_100%)] max-lg:bg-[linear-gradient(90deg,rgba(3,7,10,0.96)_0%,rgba(3,7,10,0.8)_68%,rgba(3,7,10,0.42)_100%)]",
    accentClass: "text-emerald-100",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const slide = slides[activeSlide];

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;

    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timer);
  }, [activeSlide, isPaused, shouldReduceMotion]);

  function showPreviousSlide() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  }

  function showNextSlide() {
    setActiveSlide((current) => (current + 1) % slides.length);
  }

  return (
    <section
      id="private-ai"
      aria-roledescription="carousel"
      aria-label="Private AI transformation"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#05080d] text-white"
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {slides.map((item, index) => (
        <div
          key={item.eyebrow}
          className={[
            "absolute inset-0 -z-30 transition-[opacity,transform] duration-1000 ease-out",
            index === activeSlide
              ? "scale-100 opacity-100"
              : "pointer-events-none scale-[1.025] opacity-0",
          ].join(" ")}
          aria-hidden="true"
        >
          <Image
            src={item.background}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className={item.backgroundClass}
          />
          {item.media === "video" && (
            <video
              className={`absolute inset-0 size-full ${item.backgroundClass} motion-reduce:hidden`}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={item.background}
            >
              <source src="/videos/hero-ai.mp4" type="video/mp4" />
            </video>
          )}
          <div className={`absolute inset-0 ${item.overlayClass}`} />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,4,8,0.1)_0%,transparent_44%,rgba(2,4,8,0.94)_100%)]" />
        </div>
      ))}

      <button
        type="button"
        onClick={showPreviousSlide}
        className="absolute left-4 top-1/2 z-20 hidden size-14 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/20 text-white/75 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10 hover:text-white lg:grid"
        aria-label="Show previous slide"
      >
        <ArrowLeft className="size-6" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={showNextSlide}
        className="absolute right-4 top-1/2 z-20 hidden size-14 -translate-y-1/2 place-items-center rounded-full border border-white/10 bg-black/20 text-white/75 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10 hover:text-white lg:grid"
        aria-label="Show next slide"
      >
        <ArrowRight className="size-6" strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 lg:hidden">
        <button
          type="button"
          onClick={showPreviousSlide}
          className="grid size-11 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white/10"
          aria-label="Show previous slide"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          onClick={showNextSlide}
          className="grid size-11 place-items-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-sm transition hover:bg-white/10"
          aria-label="Show next slide"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>

      <div className="mx-auto box-border flex w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 sm:py-28 lg:px-20 lg:py-24 xl:px-8">
        <div
          key={slide.eyebrow}
          className="relative z-10 w-full min-w-0 max-w-[calc(100vw-2.5rem)] [animation-fill-mode:both] motion-safe:animate-fade-up sm:max-w-[720px]"
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeSlide + 1} of ${slides.length}: ${slide.eyebrow}`}
        >
          <div className="mb-7 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.25em] text-sky-100/85 sm:text-xs">
            <span className="h-px w-9 bg-accent-300" />
            {slide.eyebrow}
          </div>

          <h1
            className={`text-balance font-extrabold leading-[0.92] tracking-[-0.065em] text-white ${slide.headlineClass}`}
          >
            {slide.titleLines.map((line, index) => (
              <span key={index} className="block">
                {line.text ?? line.lead}
                {line.accent && (
                  <>
                    {line.mobileAccentBreak && <br className="sm:hidden" />}
                    <span className={slide.accentClass}>{line.accent}</span>
                  </>
                )}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-slate-200/85 sm:mt-7 sm:text-lg">
            {slide.description}
          </p>

          <Link
            href={slide.cta.href}
            className="group mt-9 box-border inline-flex h-14 w-full max-w-full items-center justify-center gap-2 rounded-full bg-accent-400 px-7 text-sm font-extrabold text-white shadow-[0_14px_42px_-18px_rgba(229,122,37,0.9)] transition-all hover:-translate-y-0.5 hover:bg-accent-300 focus-visible:ring-offset-[#05080d] sm:mt-10 sm:w-auto"
          >
            {slide.cta.label}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing slide {activeSlide + 1} of {slides.length}: {slide.eyebrow}
      </p>
    </section>
  );
}
