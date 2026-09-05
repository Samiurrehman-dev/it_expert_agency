"use client";
import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AuthCard } from "@/components/dashboard/auth-card";

function ResetPasswordForm() {
  const token = useSearchParams().get("token") || "";
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (f.get("password") !== f.get("confirm")) {
      setError("Passwords do not match.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const r = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password: f.get("password") }),
      });
      const p = await r.json();
      if (!r.ok) throw new Error(p.error);
      setMessage(p.data.message);
    } catch (x) {
      setError(x instanceof Error ? x.message : "Request failed.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <AuthCard
      eyebrow="Account recovery"
      title="Choose a new password"
      description="Use at least 8 characters. This reset link can only be used once."
      footer={
        <Link className="font-bold text-primary-700" href="/login">
          Back to sign in
        </Link>
      }
    >
      {!token ? (
        <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
          This reset link is missing its token.
        </p>
      ) : (
        <form onSubmit={submit} className="grid gap-5">
          <label>
            <span className="field-label">New password</span>
            <input
              name="password"
              type="password"
              minLength={8}
              maxLength={72}
              className="field"
              required
            />
          </label>
          <label>
            <span className="field-label">Confirm password</span>
            <input name="confirm" type="password" className="field" required />
          </label>
          {message && (
            <p className="rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-700">
              {message}
            </p>
          )}
          {error && (
            <p className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}
          <button className="btn-primary" disabled={busy}>
            {busy ? "Saving…" : "Set new password"}
          </button>
        </form>
      )}
    </AuthCard>
  );
}

export default function ResetPasswordPage() {
  return <Suspense fallback={<main className="min-h-screen bg-[#fcfaf7]" />}><ResetPasswordForm /></Suspense>;
}
