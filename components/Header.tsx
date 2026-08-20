"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  FileText,
  Menu,
  Phone,
  ServerCog,
  X,
} from "lucide-react";

import { getServiceHref, serviceCategories } from "@/lib/services-data";

import { Logo } from "./logo";
import { ServicesMegaMenu } from "./ServicesMegaMenu";

type NavItem = {
  label: string;
  href: string;
  description?: string;
  icon?: typeof ServerCog;
};

const updateLinks: NavItem[] = [
  {
    label: "Ebooks",
    href: "/ebooks",
    description: "In-depth guides for smarter IT decisions",
    icon: BookOpen,
  },
  {
    label: "Blog",
    href: "/blog",
    description: "Practical ideas, news, and expert guidance",
    icon: FileText,
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    description: "Real challenges, solutions, and outcomes",
    icon: Briefcase,
  },
];

function DesktopDropdown({
  label,
  items,
  light = false,
}: {
  label: string;
  items: NavItem[];
  light?: boolean;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={[
          "flex h-20 items-center gap-1.5 text-sm font-bold transition-colors",
          light
            ? "text-white/80 hover:text-white group-focus-within:text-white"
            : "text-slate-700 hover:text-primary-900 group-focus-within:text-primary-900",
        ].join(" ")}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="size-4 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
      </button>

      <div className="invisible fixed left-1/2 top-20 z-[80] w-[min(calc(100vw-2rem),80rem)] -translate-x-1/2 -translate-y-2 opacity-0 transition-all duration-200 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="relative overflow-hidden rounded-b-2xl border border-white/10 bg-primary-950 p-5 text-white shadow-[0_28px_70px_-28px_rgba(54,56,57,0.8)] xl:p-6">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent shadow-[0_0_18px_rgba(229,122,37,0.7)]" />
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.4fr]">
            <a
              href="/blog"
              className="group/feature overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] transition-colors hover:border-primary-400/50 hover:bg-white/[0.065]"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src="/images/hero-slide-data.jpg"
                  alt="Digital data connections"
                  fill
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover/feature:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/70 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
                  Featured updates
                </p>
                <h2 className="mt-2 text-xl font-extrabold tracking-[-0.025em] text-white">
                  Ideas for stronger, smarter IT
                </h2>
                <p className="mt-2 text-xs leading-5 text-slate-300">
                  Explore practical insights, technology guidance, and expert
                  perspectives for modern IT teams.
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs font-extrabold text-primary-300">
                  Learn More
                  <ArrowRight className="size-3.5 transition-transform group-hover/feature:translate-x-1" />
                </span>
              </div>
            </a>

            <div className="flex flex-col">
              <div className="mb-4">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
                  Latest resources
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-white">
                  Explore our updates
                </h2>
              </div>
              <div className="grid flex-1 content-start gap-1">
                {items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group/item flex items-start gap-4 rounded-xl p-4 transition-all hover:bg-white/[0.06] focus:bg-white/[0.06]"
                    >
                      {Icon && (
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/[0.07] text-primary-300 transition-colors group-hover/item:bg-primary-500 group-hover/item:text-white">
                          <Icon className="size-5" />
                        </span>
                      )}
                      <span className="min-w-0">
                        <span className="flex items-center gap-2 text-sm font-extrabold text-white transition-colors group-hover/item:text-primary-300">
                          {item.label}
                          <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-slate-300">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileServicesGroup({
  isOpen,
  onToggle,
  onNavigate,
}: {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-base font-extrabold text-ink"
        aria-expanded={isOpen}
        aria-controls="mobile-services-list"
      >
        Services
        <ChevronDown
          className={`size-5 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id="mobile-services-list"
        className={[
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="space-y-5 pb-5 pl-3">
            {serviceCategories.map((category) => (
              <section key={category.slug}>
                <a
                  href={`/services/${category.slug}`}
                  onClick={onNavigate}
                  className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-primary-700"
                >
                  {category.number} / {category.shortTitle}
                  <ArrowRight className="size-3" />
                </a>
                <ul className="mt-2 grid gap-0.5 border-l border-primary-200 pl-2">
                  {category.services.map((service) => (
                    <li key={service.slug}>
                      <a
                        href={getServiceHref(category.slug, service.slug)}
                        onClick={onNavigate}
                        className="block rounded-lg px-2 py-1.5 text-xs font-semibold leading-5 text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-900"
                      >
                        {service.title}
                      </a>
                    </li>
                  ))}
                  {category.extraChips && (
                    <li>
                      <a
                        href={`/services/${category.slug}#category-capabilities`}
                        onClick={onNavigate}
                        className="block rounded-lg px-2 py-1.5 text-xs font-semibold leading-5 text-slate-600 transition-colors hover:bg-primary-50 hover:text-primary-900"
                      >
                        OS-Level MSP Services
                      </a>
                    </li>
                  )}
                </ul>
              </section>
            ))}
            <a
              href="/services"
              onClick={onNavigate}
              className="inline-flex items-center gap-2 rounded-full bg-primary-950 px-4 py-2.5 text-xs font-extrabold text-white"
            >
              View all services
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileNavGroup({
  label,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-base font-extrabold text-ink"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown
          className={[
            "size-5 text-slate-400 transition-transform duration-200",
            isOpen ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>
      <div
        className={[
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="grid gap-1 pb-4 pl-3">
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={onNavigate}
                className="rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-50 hover:text-primary-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDrawerOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isDrawerOpen]);

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <header
        className={[
          "inset-x-0 top-0 z-50 border-b backdrop-blur-xl",
          overlay
            ? "absolute border-white/10 bg-[#05080d]/30"
            : "sticky border-slate-200/80 bg-white/95 shadow-[0_8px_24px_-20px_rgba(54,56,57,0.45)]",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
          <a href="/" aria-label="IT Experts home" className="shrink-0">
            <Logo light={overlay} />
          </a>

          <nav
            className="hidden h-full items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            <a
              href="/"
              className={[
                "flex h-20 items-center text-sm font-bold transition-colors",
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-slate-700 hover:text-primary-900",
              ].join(" ")}
            >
              Home
            </a>
            <ServicesMegaMenu light={overlay} />
            <DesktopDropdown
              label="Updates"
              items={updateLinks}
              light={overlay}
            />
            <a
              href="/about-us"
              className={[
                "flex h-20 items-center text-sm font-bold transition-colors",
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-slate-700 hover:text-primary-900",
              ].join(" ")}
            >
              About
            </a>
            <a
              href="/careers"
              className={[
                "flex h-20 items-center text-sm font-bold transition-colors",
                overlay
                  ? "text-white/80 hover:text-white"
                  : "text-slate-700 hover:text-primary-900",
              ].join(" ")}
            >
              Careers
            </a>
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+19095456727"
              className={[
                "hidden items-center gap-2 whitespace-nowrap text-sm font-extrabold transition-colors xl:flex",
                overlay
                  ? "text-white/90 hover:text-white"
                  : "text-primary-900 hover:text-primary-700",
              ].join(" ")}
            >
              <Phone
                className={
                  overlay ? "size-4 text-sky-300" : "size-4 text-accent-600"
                }
              />
              +1 909 545 6727
            </a>
            <a
              href="/contact-us"
              className={[
                "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-extrabold text-white shadow-sm transition-all hover:-translate-y-0.5",
                overlay
                  ? "bg-accent-400 hover:bg-accent-300"
                  : "bg-primary-900 hover:bg-primary-800",
              ].join(" ")}
            >
              Free Consultation
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className={[
              "grid size-11 place-items-center rounded-full border shadow-sm transition-colors lg:hidden",
              overlay
                ? "border-white/20 bg-white/10 text-white hover:bg-white/15"
                : "border-slate-200 bg-white text-ink hover:bg-slate-50",
            ].join(" ")}
            aria-label="Open navigation"
            aria-expanded={isDrawerOpen}
            aria-controls="mobile-navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <button
        type="button"
        aria-label="Close navigation"
        onClick={closeDrawer}
        className={[
          "fixed inset-0 z-[60] bg-primary-950/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isDrawerOpen ? "visible opacity-100" : "invisible opacity-0",
        ].join(" ")}
      />

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isDrawerOpen}
        className={[
          "fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          isDrawerOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-5">
          <a href="/" onClick={closeDrawer} aria-label="IT Experts home">
            <Logo />
          </a>
          <button
            type="button"
            onClick={closeDrawer}
            className="grid size-10 place-items-center rounded-full bg-slate-100 text-ink transition-colors hover:bg-slate-200"
            aria-label="Close navigation"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-5 py-4">
          <a
            href="/"
            onClick={closeDrawer}
            className="block border-b border-slate-100 py-4 text-base font-extrabold text-ink"
          >
            Home
          </a>
          <MobileServicesGroup
            isOpen={openMobileMenu === "Services"}
            onToggle={() =>
              setOpenMobileMenu((value) =>
                value === "Services" ? null : "Services",
              )
            }
            onNavigate={closeDrawer}
          />
          <a
            href="/about-us"
            onClick={closeDrawer}
            className="block border-b border-slate-100 py-4 text-base font-extrabold text-ink"
          >
            About
          </a>
          <a
            href="/careers"
            onClick={closeDrawer}
            className="block border-b border-slate-100 py-4 text-base font-extrabold text-ink"
          >
            Careers
          </a>
          <MobileNavGroup
            label="Updates"
            items={updateLinks}
            isOpen={openMobileMenu === "Updates"}
            onToggle={() =>
              setOpenMobileMenu((value) =>
                value === "Updates" ? null : "Updates",
              )
            }
            onNavigate={closeDrawer}
          />
        </nav>

        <div className="border-t border-slate-100 p-5">
          <a
            href="tel:+19095456727"
            className="mb-4 flex items-center justify-center gap-2 text-sm font-extrabold text-primary-900"
          >
            <Phone className="size-4 text-accent-600" />
            +1 909 545 6727
          </a>
          <a
            href="/contact-us"
            onClick={closeDrawer}
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary-900 px-5 text-sm font-extrabold text-white"
          >
            Free Consultation
            <ArrowRight className="size-4" />
          </a>
        </div>
      </aside>
    </>
  );
}
