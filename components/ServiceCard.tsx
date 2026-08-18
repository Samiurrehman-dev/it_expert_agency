import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  tools?: readonly string[];
  eyebrow?: string;
  accentIndex?: number;
  variant?: "default" | "featured";
  headingLevel?: "h3" | "h4" | "h5";
};

const accentStyles = [
  {
    line: "bg-primary-400",
    hover: "hover:border-primary-300",
    chip: "border-primary-200 bg-primary-50 text-primary-800",
  },
  {
    line: "bg-primary-500",
    hover: "hover:border-primary-400",
    chip: "border-primary-300/70 bg-primary-50 text-primary-900",
  },
  {
    line: "bg-primary-600",
    hover: "hover:border-primary-500",
    chip: "border-primary-400/60 bg-primary-100/60 text-primary-700",
  },
  {
    line: "bg-accent-700",
    hover: "hover:border-accent-600",
    chip: "border-accent-300/60 bg-accent-50 text-accent-800",
  },
] as const;

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Explore service",
  tools = [],
  eyebrow,
  accentIndex = 0,
  variant = "default",
  headingLevel = "h3",
}: ServiceCardProps) {
  const accent = accentStyles[accentIndex % accentStyles.length];
  const Heading = headingLevel;

  if (variant === "featured") {
    return (
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/70 hover:bg-white/[0.075]">
        <div className={`absolute inset-x-0 top-0 h-0.5 ${accent.line}`} />
        <span className="grid size-11 place-items-center rounded-xl bg-primary-500 text-white">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {eyebrow && (
          <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
            {eyebrow}
          </p>
        )}
        <Heading className="mt-2 text-xl font-extrabold leading-tight tracking-[-0.03em] text-white">
          {title}
        </Heading>
        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary-500 px-4 py-2.5 text-xs font-extrabold text-white transition hover:bg-primary-400"
        >
          {linkLabel}
          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </article>
    );
  }

  return (
    <article
      id={href.includes("#") ? href.split("#")[1] : undefined}
      className={`group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:p-7 ${accent.hover}`}
    >
      <div className={`absolute inset-x-0 top-0 h-0.5 ${accent.line}`} />
      <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-primary-900 group-hover:text-white">
        <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
      </span>
      {eyebrow && (
        <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary-700">
          {eyebrow}
        </p>
      )}
      <Heading className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-ink">
        {title}
      </Heading>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {description}
      </p>
      {tools.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${title} tools`}>
          {tools.map((tool) => (
            <li
              key={tool}
              className={`rounded-full border px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] ${accent.chip}`}
            >
              {tool}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        aria-label={linkLabel + ": " + title}
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-primary-800"
      >
        {linkLabel}
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
