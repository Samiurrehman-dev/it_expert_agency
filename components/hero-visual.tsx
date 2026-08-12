import { Check, Cloud, Server, ShieldCheck, Wifi } from "lucide-react";

const systems = [
  { name: "Network", icon: Wifi, status: "Operational" },
  { name: "Cloud services", icon: Cloud, status: "Operational" },
  { name: "Security", icon: ShieldCheck, status: "Protected" },
];

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:mr-0">
      <div className="absolute -left-12 top-16 size-40 animate-pulse-soft rounded-full bg-accent-300/30 blur-3xl" />
      <div className="absolute -right-8 bottom-10 size-48 animate-pulse-soft rounded-full bg-primary-300/30 blur-3xl [animation-delay:1s]" />

      <div className="relative overflow-hidden rounded-4xl border border-white/80 bg-white/90 p-4 shadow-soft backdrop-blur sm:p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
              Live environment
            </p>
            <p className="mt-1 font-extrabold tracking-tight text-ink">
              System health
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
            <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
            All systems online
          </div>
        </div>

        <div className="grid gap-3 py-5">
          {systems.map((system) => (
            <div
              key={system.name}
              className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/70 p-3.5 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white text-primary-800 shadow-sm">
                  <system.icon className="size-5" />
                </span>
                <span className="text-sm font-bold text-slate-700">
                  {system.name}
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <Check className="size-3.5" strokeWidth={3} /> {system.status}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl bg-primary-950 p-4 text-white sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent-400 text-white">
                <Server className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold">Proactive monitoring</p>
                <p className="mt-1 text-xs leading-5 text-slate-200">
                  Protection that never clocks out.
                </p>
              </div>
            </div>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-200">
              24/7
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-5 hidden animate-float items-center gap-3 rounded-2xl border border-white bg-white px-4 py-3 shadow-card sm:flex">
        <span className="grid size-9 place-items-center rounded-xl bg-accent-100 text-accent-700">
          <ShieldCheck className="size-5" />
        </span>
        <div>
          <p className="text-xs font-extrabold text-ink">Threats blocked</p>
          <p className="text-[11px] text-slate-500">
            Your business stays protected
          </p>
        </div>
      </div>
    </div>
  );
}
