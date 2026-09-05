import Link from "next/link";
import { Logo } from "@/components/logo";

export function AuthCard({ eyebrow, title, description, children, footer }: { eyebrow: string; title: string; description: string; children: React.ReactNode; footer?: React.ReactNode }) {
  return <main className="relative grid min-h-screen place-items-center overflow-hidden bg-[#fcfaf7] px-5 py-12"><div className="absolute -right-24 -top-24 size-80 rounded-full border-[64px] border-primary-100" /><div className="absolute -bottom-24 -left-24 size-64 rounded-full border-[48px] border-primary-100/70" /><section className="relative w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-7 shadow-soft sm:p-9"><Link href="/" className="inline-block"><Logo /></Link><p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.22em] text-primary-600">{eyebrow}</p><h1 className="mt-2 text-3xl font-extrabold tracking-[-0.04em]">{title}</h1><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p><div className="mt-7">{children}</div>{footer && <div className="mt-6 border-t pt-5 text-center text-sm text-slate-600">{footer}</div>}</section></main>;
}
