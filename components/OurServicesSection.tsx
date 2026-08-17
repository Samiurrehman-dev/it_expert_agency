import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { services } from "@/lib/content";

const palettes = [
  ["#d9b4ff", "#9aa8ff", "#ff9ee8"],
  ["#c4b0ff", "#89c7ff", "#f08dff"],
  ["#8fdcff", "#a996ff", "#e985ff"],
  ["#c6a9ff", "#ff9be5", "#86c8ff"],
  ["#90d9ff", "#d6a4ff", "#ff9fc9"],
  ["#b8a1ff", "#81d6ef", "#eb90ff"],
];

function ServiceArtwork({ index }: { index: number }) {
  const [first, second, third] = palettes[index % palettes.length];
  const baseId = `service-art-${index}-base`;
  const shineId = `service-art-${index}-shine`;

  return (
    <svg
      viewBox="0 0 520 250"
      preserveAspectRatio="none"
      className="size-full transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={baseId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={first} />
          <stop offset="0.52" stopColor={second} />
          <stop offset="1" stopColor={third} />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".82" />
          <stop offset=".38" stopColor="#fff" stopOpacity=".12" />
          <stop offset="1" stopColor="#6f36ff" stopOpacity=".18" />
        </linearGradient>
        <filter
          id={`service-art-${index}-soft`}
          x="-20%"
          y="-30%"
          width="140%"
          height="160%"
        >
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      <rect width="520" height="250" fill={`url(#${baseId})`} opacity=".72" />

      {index % 3 === 0 && (
        <>
          <path
            d="M-35 212C34 143 77 206 141 170S243 102 305 142s90 85 152 34c43-36 73-44 101-25v117H-35Z"
            fill={`url(#${shineId})`}
            stroke="#fff"
            strokeOpacity=".55"
            strokeWidth="3"
          />
          <path
            d="M-20 240c75-71 122-14 185-58s99-67 161-22 118 44 209-25"
            fill="none"
            stroke="#fff"
            strokeOpacity=".58"
            strokeWidth="18"
            filter={`url(#service-art-${index}-soft)`}
          />
          <path
            d="M-16 198c76-61 116-3 179-45s104-72 168-31 112 37 202-19"
            fill="none"
            stroke="#7b55e9"
            strokeOpacity=".25"
            strokeWidth="2"
          />
        </>
      )}

      {index % 3 === 1 && (
        <>
          <ellipse
            cx="275"
            cy="251"
            rx="230"
            ry="177"
            fill={`url(#${shineId})`}
            stroke="#fff"
            strokeOpacity=".55"
            strokeWidth="5"
          />
          {[0, 1, 2, 3].map((ring) => (
            <ellipse
              key={ring}
              cx="275"
              cy="255"
              rx={185 - ring * 38}
              ry={137 - ring * 27}
              fill="none"
              stroke={ring % 2 ? "#876cf0" : "#fff"}
              strokeOpacity={0.48 - ring * 0.05}
              strokeWidth={15 - ring * 2}
              filter={`url(#service-art-${index}-soft)`}
            />
          ))}
          <ellipse
            cx="275"
            cy="258"
            rx="173"
            ry="126"
            fill="none"
            stroke="#fff"
            strokeOpacity=".48"
            strokeWidth="3"
          />
        </>
      )}

      {index % 3 === 2 && (
        <>
          <path
            d="M-48 258c21-97 73-164 143-142 61 19 57 92 105 90 55-2 69-145 145-151 89-7 83 128 149 127 35 0 58-36 83-75v166H-48Z"
            fill={`url(#${shineId})`}
            stroke="#fff"
            strokeOpacity=".48"
            strokeWidth="4"
          />
          <path
            d="M-45 259c27-77 67-118 126-99 57 18 62 83 113 81 72-3 78-130 149-136 79-7 88 108 145 107 38 0 63-31 88-69"
            fill="none"
            stroke="#fff"
            strokeOpacity=".6"
            strokeWidth="17"
            filter={`url(#service-art-${index}-soft)`}
          />
          <path
            d="M-44 239c29-68 68-103 122-84 55 20 65 74 116 72 66-3 78-119 148-126 73-7 88 97 144 96 38-1 63-30 90-70"
            fill="none"
            stroke="#7759dd"
            strokeOpacity=".24"
            strokeWidth="3"
          />
        </>
      )}

      <ellipse
        cx="105"
        cy="36"
        rx="118"
        ry="30"
        fill="#fff"
        opacity=".42"
        filter={`url(#service-art-${index}-soft)`}
      />
    </svg>
  );
}

export function OurServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="our-services-title"
      className="overflow-hidden bg-[linear-gradient(180deg,#fffdfd_0%,rgba(187,145,194,0.58)_50%,#fff_100%)] py-14 sm:py-20"
    >
      <div className="px-[clamp(1.875rem,5.75vw,7.375rem)]">
        <div className="flex items-center justify-between gap-8">
          <h2
            id="our-services-title"
            className="text-[2.55rem] font-extrabold leading-none tracking-[-0.055em] text-black sm:text-5xl lg:text-[3.25rem]"
          >
            Our services
          </h2>

          <Link
            href="/contact-us"
            className="group hidden items-center gap-3 text-sm font-extrabold uppercase text-black md:inline-flex"
          >
            <span className="relative">
              Discover our full capabilities
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </span>
            <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div
        id="service-cards"
        className="services-scrollbar mt-11 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[clamp(1.875rem,5.75vw,7.375rem)] pb-4 sm:mt-14"
      >
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group h-[470px] w-[85vw] max-w-[530px] shrink-0 snap-start sm:w-[58vw] lg:w-[38vw] xl:w-[30vw] 2xl:h-[530px] 2xl:w-[27.5vw]"
          >
            <Link
              href={service.href}
              className="relative flex size-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] focus-visible:shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
            >
              <div className="absolute inset-x-0 bottom-0 h-[49%] overflow-hidden [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.12)_8%,rgba(0,0,0,0.72)_22%,#000_36%)] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.12)_8%,rgba(0,0,0,0.72)_22%,#000_36%)]">
                <ServiceArtwork index={index} />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-[38%] z-[1] h-16 bg-gradient-to-b from-white/0 via-white/45 to-white/0 blur-xl transition-opacity duration-300 group-focus-within:opacity-0 group-hover:opacity-0" />

              <div className="absolute inset-0 z-10 bg-[rgba(103,17,119,0.42)] opacity-0 backdrop-blur-[6.6px] transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100" />

              <div className="relative z-20 flex h-full flex-col px-6 py-7 sm:px-7">
                <h3 className="min-h-[70px] max-w-[18rem] text-[1.8rem] font-semibold leading-[1.2] tracking-[-0.035em] text-black transition-colors duration-300 group-focus-within:text-white group-hover:text-white lg:text-[2rem]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[140px] max-w-[24rem] text-base leading-[1.42] text-black/95 transition-colors duration-300 group-focus-within:text-white/85 group-hover:text-white/85 lg:text-[1.06rem]">
                  {service.description}
                </p>

                <span className="mt-1 inline-flex w-fit items-center gap-2 pb-1 text-xs font-extrabold uppercase tracking-[0.05em] text-black transition-all duration-300 group-focus-within:text-white group-hover:gap-3 group-hover:text-white">
                  Learn more
                  <ArrowRight className="size-4" strokeWidth={2.25} />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="px-[clamp(1.875rem,5.75vw,7.375rem)] md:hidden">
        <Link
          href="/contact-us"
          className="group mt-2 inline-flex items-center gap-3 text-xs font-extrabold uppercase text-black"
        >
          Discover our full capabilities
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
