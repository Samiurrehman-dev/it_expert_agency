type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={[
          "mb-4 text-xs font-extrabold uppercase tracking-[0.22em]",
          light ? "text-accent-300" : "text-primary-700",
        ].join(" ")}
      >
        {eyebrow}
      </p>
      <h2
        className={[
          "text-balance text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-ink",
        ].join(" ")}
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            "mt-5 text-pretty text-base leading-8 sm:text-lg",
            light ? "text-blue-100" : "text-slate-600",
          ].join(" ")}
        >
          {description}
        </p>
      )}
    </div>
  );
}
