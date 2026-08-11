import { ShieldCheck } from "lucide-react";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-accent-400 text-primary-950 shadow-sm">
        <ShieldCheck className="size-5" strokeWidth={2.5} />
      </span>
      <span
        className={[
          "text-lg font-extrabold tracking-[-0.035em]",
          light ? "text-white" : "text-ink",
        ].join(" ")}
      >
        IT Experts
      </span>
    </span>
  );
}
