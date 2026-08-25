"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type SubmissionState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "" }
  | { status: "success" | "error"; message: string };

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setSubmission({ status: "loading", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let result: {
        message?: string;
        error?: string;
      } = {};

      try {
        result = (await response.json()) as typeof result;
      } catch {
        // Keep the fallback message below if an upstream server returns no JSON.
      }

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setSubmission({
        status: "success",
        message: result.message || "Your message has been sent successfully.",
      });
    } catch (error) {
      setSubmission({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={submission.status === "loading"}
      className="grid gap-5 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-soft sm:p-9"
    >
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="contact-check">Leave this field empty</label>
        <input
          id="contact-check"
          type="text"
          name="contact_check"
          value=""
          readOnly
          tabIndex={-1}
          autoComplete="off"
          data-1p-ignore
          data-lpignore="true"
        />
      </div>
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">Your name</span>
        <input
          type="text"
          name="name"
          autoComplete="name"
          required
          maxLength={100}
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
          maxLength={254}
          placeholder="alex@company.com"
          className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">
          Phone <span className="font-normal">(optional)</span>
        </span>
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          maxLength={30}
          placeholder="+1 555 123 4567"
          className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">Subject</span>
        <input
          type="text"
          name="subject"
          required
          maxLength={150}
          placeholder="How can we help?"
          className="h-14 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <label className="grid gap-2.5">
        <span className="text-xs font-bold text-slate-600">Your message</span>
        <textarea
          name="message"
          required
          maxLength={5000}
          rows={6}
          placeholder="Tell us a little about your IT needs..."
          className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-slate-400 focus:border-accent-500 focus:bg-white focus:ring-4 focus:ring-accent-100"
        />
      </label>
      <button
        type="submit"
        disabled={submission.status === "loading"}
        className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary-900 px-5 text-sm font-extrabold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {submission.status === "loading" ? (
          <>
            Sending message
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Send message
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>
      <div aria-live="polite" aria-atomic="true">
        {submission.status === "success" && (
          <p className="flex items-center gap-2 text-sm font-bold text-accent-700">
            <CheckCircle2 className="size-4 shrink-0" aria-hidden="true" />
            {submission.message}
          </p>
        )}
        {submission.status === "error" && (
          <p className="flex items-center gap-2 text-sm font-bold text-red-700">
            <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
            {submission.message}
          </p>
        )}
      </div>
    </form>
  );
}
