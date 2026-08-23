import Image from "next/image";

export type ClientLogo = {
  name: string;
  src: string;
  href?: string;
};

export type ClientLogosProps = {
  logos?: ClientLogo[];
  label?: string;
  description?: string;
};

const defaultLogos: ClientLogo[] = [
  {
    name: "Performance Solution",
    src: "/images/Performance-Solution.png",
  },
  {
    name: "Modern Sense Furniture",
    src: "/images/Modern-Sense-Furniture.png",
  },
  {
    name: "Meetpoint",
    src: "/images/Meetpoint.png",
  },
  {
    name: "Orion Technologies",
    src: "/images/Orion-Technologies.png",
  },
  {
    name: "Diesel Truck",
    src: "/images/Diesel-Truck.png",
  },
  {
    name: "Premium Sweets",
    src: "/images/Premium-Sweets.png",
  },
];

function LogoItem({ item }: { item: ClientLogo }) {
  const content = (
    <span className="group/logo flex h-28 w-52 shrink-0 items-center justify-center rounded-2xl bg-white px-6 transition-transform duration-300 hover:-translate-y-1">
      <Image
        src={item.src}
        alt={`${item.name} logo`}
        width={190}
        height={120}
        unoptimized
        loading="eager"
        className="h-20 w-full object-contain opacity-80 transition-all duration-300 group-hover/logo:opacity-100"
      />
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
  label = "Our clients",
  description = "Belonging to IT Experts Group International, IT Experts is engaged in IT support and services, equipment leasing and integrating IT system.",
}: ClientLogosProps) {
  return (
    <section
      className="overflow-hidden bg-white py-14 sm:py-20"
      aria-label={label}
    >
      <div className="mx-auto mb-10 max-w-3xl px-5 text-center sm:px-8">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-primary-700">
          Trusted relationships
        </p>
        <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
          {label}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-36" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-36" />
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
