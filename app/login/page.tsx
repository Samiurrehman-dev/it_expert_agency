"use client";
import { FormEvent, Suspense, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from "lucide-react";
import { AuthCard } from "@/components/dashboard/auth-card";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const fd = new FormData(e.currentTarget);
    const result = await signIn("credentials", {
      email: fd.get("email"),
      password: fd.get("password"),
      redirect: false,
    });
    setBusy(false);
    if (result?.error) {
      setError("The email or password you entered is incorrect.");
      return;
    }
    router.push(params.get("callbackUrl") || "/dashboard");
    router.refresh();
  }
  return (
    <AuthCard
      eyebrow="Secure portal"
      title="Welcome back"
      description="Sign in to manage IT Experts Agency content and operations."
      footer={
        <>
          Need help?{" "}
          <Link className="font-bold text-primary-700" href="/forgot-password">
            Reset your password
          </Link>
        </>
      }
    >
      <form onSubmit={submit} className="grid gap-5">
        <label>
          <span className="field-label">Email address</span>
          <span className="relative block">
            <Mail className="absolute left-3 top-3 size-4 text-slate-400" />
            <input
              className="field pl-10"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </span>
        </label>
        <label>
          <span className="field-label">Password</span>
          <span className="relative block">
            <LockKeyhole className="absolute left-3 top-3 size-4 text-slate-400" />
            <input
              className="field px-10"
              name="password"
              type={show ? "text" : "password"}
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-2.5 p-0.5 text-slate-400"
            >
              {show ? (
                <EyeOff className="size-4" />
              ) : (
                <Eye className="size-4" />
              )}
            </button>
          </span>
        </label>
        {error && (
          <p
            role="alert"
            className="rounded-xl bg-red-50 p-3 text-sm font-semibold text-red-700"
          >
            {error}
          </p>
        )}
        <button className="btn-primary w-full" disabled={busy}>
          {busy && <Loader2 className="size-4 animate-spin" />}
          {busy ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </AuthCard>
  );
}

export default function LoginPage() {
  return <Suspense fallback={<main className="min-h-screen bg-[#fcfaf7]" />}><LoginForm /></Suspense>;
}
