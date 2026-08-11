import type { ReactNode } from "react";

export type ClientLogo = {
  name: string;
  logo?: ReactNode;
  href?: string;
  colorClass?: string;
};

export type ClientLogosProps = {
  logos?: ClientLogo[];
  label?: string;
};

const defaultLogos: ClientLogo[] = [
  { name: "Microsoft", colorClass: "group-hover/logo:text-[#00A4EF]" },
  { name: "AWS", colorClass: "group-hover/logo:text-[#FF9900]" },
  { name: "Cisco", colorClass: "group-hover/logo:text-[#049FD9]" },
  { name: "VMware", colorClass: "group-hover/logo:text-[#607078]" },
  { name: "Veeam", colorClass: "group-hover/logo:text-[#00B336]" },
  { name: "Dell", colorClass: "group-hover/logo:text-[#0672CE]" },
];

function LogoItem({ item }: { item: ClientLogo }) {
  const content = (
    <span
      className={[
        "group/logo flex h-16 w-40 shrink-0 items-center justify-center rounded-2xl border border-slate-200/70 bg-white px-5 text-lg font-extrabold tracking-[-0.03em] text-slate-400 grayscale transition-all duration-300 hover:border-slate-300 hover:grayscale-0",
        item.colorClass ?? "group-hover/logo:text-primary-800",
      ].join(" ")}
    >
      {item.logo ?? item.name}
    </span>
  );

  if (!item.href) return content;

  return (
    <a href={item.href} aria-label={item.name}>
      {content}
    </a>
  );
}

export function ClientLogos({
  logos = defaultLogos,
  label = "Technology partners",
}: ClientLogosProps) {
  return (
    <section className="overflow-hidden bg-white py-9" aria-label={label}>
      <p className="mb-7 text-center text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-36" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center gap-5 pr-5"
              aria-hidden={group === 1}
            >
              {logos.map((logo) => (
                <LogoItem key={logo.name} item={logo} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
