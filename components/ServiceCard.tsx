import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Explore service",
}: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft">
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-300 group-hover:scale-x-100" />
      <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-primary-900 group-hover:text-white">
        <Icon className="size-5" strokeWidth={2} />
      </span>
      <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-ink">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
        {description}
      </p>
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
