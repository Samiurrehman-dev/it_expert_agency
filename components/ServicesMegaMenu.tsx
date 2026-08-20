"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, ServerCog } from "lucide-react";

import { getServiceHref, serviceCategories } from "@/lib/services-data";

import { ServiceCard } from "./ServiceCard";

export function ServicesMegaMenu({ light = false }: { light?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = "services-mega-menu";

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function closeOnScroll() {
      setIsOpen(false);
    }

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("scroll", closeOnScroll, { passive: true });

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, [isOpen]);

  return (
    <div
      className="group flex h-full items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={[
          "flex h-20 items-center gap-1.5 text-sm font-bold transition-colors",
          light
            ? "text-white/80 hover:text-white"
            : "text-slate-700 hover:text-primary-900",
        ].join(" ")}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        Services
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        id={menuId}
        aria-hidden={!isOpen}
        className={[
          "pointer-events-none invisible fixed left-1/2 top-20 z-[80] w-[min(calc(100vw-2rem),80rem)] -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-200 ease-out group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
          isOpen
            ? "!pointer-events-auto !visible !translate-y-0 !opacity-100"
            : "",
        ].join(" ")}
      >
        <div className="relative max-h-[calc(100vh-6.75rem)] overflow-y-auto rounded-b-2xl border border-white/10 bg-primary-950 p-5 text-white shadow-[0_28px_70px_-28px_rgba(54,56,57,0.8)] xl:p-6">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent shadow-[0_0_18px_rgba(229,122,37,0.7)]" />

          <div className="grid gap-x-6 gap-y-8 lg:grid-cols-4">
            {serviceCategories.map((category) => (
              <section
                key={category.slug}
                aria-labelledby={`menu-${category.slug}`}
              >
                <h2 id={`menu-${category.slug}`} className="min-h-10">
                  <Link
                    href={`/services/${category.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-start gap-1.5 text-sm font-extrabold leading-5 text-white transition hover:text-primary-300"
                  >
                    {category.title}
                    <ArrowRight className="mt-0.5 size-3.5 shrink-0" />
                  </Link>
                </h2>
                <ul
                  className={`mt-3 gap-x-3 ${
                    category.services.length > 8
                      ? "grid grid-cols-2"
                      : "space-y-0.5"
                  }`}
                >
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={getServiceHref(category.slug, service.slug)}
                        onClick={() => setIsOpen(false)}
                        className="group/link flex items-center gap-2 rounded-lg py-1.5 text-[11px] font-semibold leading-4 text-slate-300 transition-all hover:translate-x-1 hover:bg-white/[0.04] hover:px-2 hover:text-primary-300 focus:translate-x-1 focus:bg-white/[0.04] focus:px-2 focus:text-primary-300"
                      >
                        <span className="h-px w-0 bg-primary-400 transition-all group-hover/link:w-3 group-focus/link:w-3" />
                        {service.title}
                      </Link>
                    </li>
                  ))}
                  {category.extraChips && (
                    <li>
                      <Link
                        href={`/services/${category.slug}#category-capabilities`}
                        onClick={() => setIsOpen(false)}
                        className="group/link flex items-center gap-2 rounded-lg py-1.5 text-[11px] font-semibold leading-4 text-slate-300 transition-all hover:translate-x-1 hover:bg-white/[0.04] hover:px-2 hover:text-primary-300 focus:translate-x-1 focus:bg-white/[0.04] focus:px-2 focus:text-primary-300"
                      >
                        <span className="h-px w-0 bg-primary-400 transition-all group-hover/link:w-3 group-focus/link:w-3" />
                        OS-Level MSP Services
                      </Link>
                    </li>
                  )}
                </ul>
              </section>
            ))}

            <ServiceCard
              icon={ServerCog}
              eyebrow="Featured capability"
              title="Full-stack MSP staffing"
              description="Infrastructure to SIEM — certified, toolchain-ready engineers for dedicated or shared delivery teams."
              href="/services/managed-services-msp-toolchain"
              linkLabel="Explore delivery"
              variant="featured"
            />
          </div>

          <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/10 pt-4">
            <p className="text-xs font-semibold text-slate-300">
              One partner across infrastructure, platforms, security, and
              operations.
            </p>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="group flex shrink-0 items-center gap-2 text-xs font-extrabold text-white transition hover:text-primary-300"
            >
              View all services
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
