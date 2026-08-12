"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, "", message].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `mailto:info@itexpertsagency.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-9"
    >
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">Your name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          placeholder="Alex Morgan"
          className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">Work email</span>
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          placeholder="alex@company.com"
          className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">Your message</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell us a little about your IT needs..."
          className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <button
        type="submit"
        className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary-900 px-5 text-sm font-extrabold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-800"
      >
        Send via email
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p
        aria-live="polite"
        className={[
          "items-center gap-2 text-sm font-bold text-accent-700",
          submitted ? "flex" : "sr-only",
        ].join(" ")}
      >
        <CheckCircle2 className="size-4" />
        Your email app should open with the message ready to send.
      </p>
    </form>
  );
}
