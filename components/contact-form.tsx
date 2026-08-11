import { ArrowRight } from "lucide-react";

export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-3xl bg-white p-5 shadow-2xl shadow-primary-950/20 sm:grid-cols-2 sm:p-7">
      <label className="grid gap-2">
        <span className="text-xs font-bold text-slate-600">Your name</span>
        <input
          type="text"
          name="name"
          placeholder="Alex Morgan"
          className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition focus:border-accent-500 focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-xs font-bold text-slate-600">Work email</span>
        <input
          type="email"
          name="email"
          placeholder="alex@company.com"
          className="h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition focus:border-accent-500 focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2 sm:col-span-2">
        <span className="text-xs font-bold text-slate-600">
          How can we help?
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us a little about your IT needs..."
          className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent-500 focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <button
        type="submit"
        className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-accent-400 px-5 text-sm font-extrabold text-primary-950 transition-all hover:bg-accent-300 sm:col-span-2"
      >
        Book my free consultation
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}
