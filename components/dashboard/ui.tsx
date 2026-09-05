"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { AlertTriangle, CheckCircle2, X } from "lucide-react";

export type ApiEnvelope<T> = { success: true; data: T } | { success: false; error: string; fields?: Record<string, string[]> };

export async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, { ...init, headers: { "Content-Type": "application/json", ...init?.headers } });
  const payload = (await response.json()) as ApiEnvelope<T>;
  if (!response.ok || !payload.success) throw new Error("error" in payload ? payload.error : "Request failed.");
  return payload.data;
}

type Toast = { id: number; message: string; type: "success" | "error" };
const ToastContext = createContext<(message: string, type?: Toast["type"]) => void>(() => undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const notify = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = Date.now(); setToasts((v) => [...v, { id, message, type }]);
    window.setTimeout(() => setToasts((v) => v.filter((t) => t.id !== id)), 3500);
  }, []);
  return <ToastContext.Provider value={notify}>{children}<div className="fixed right-4 top-4 z-[100] grid w-[min(24rem,calc(100vw-2rem))] gap-2">{toasts.map((t) => <div key={t.id} className={`flex items-center gap-3 rounded-2xl border bg-white p-4 text-sm font-bold shadow-soft ${t.type === "error" ? "border-red-200 text-red-700" : "border-emerald-200 text-emerald-700"}`}>{t.type === "error" ? <AlertTriangle className="size-5" /> : <CheckCircle2 className="size-5" />}<span className="flex-1">{t.message}</span><button onClick={() => setToasts((v) => v.filter((x) => x.id !== t.id))}><X className="size-4" /></button></div>)}</div></ToastContext.Provider>;
}
export const useToast = () => useContext(ToastContext);

export function ConfirmModal({ open, title, description, busy, onCancel, onConfirm }: { open: boolean; title: string; description: string; busy?: boolean; onCancel: () => void; onConfirm: () => void }) {
  if (!open) return null;
  return <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 p-4" role="dialog" aria-modal="true"><div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft"><div className="grid size-12 place-items-center rounded-2xl bg-red-50 text-red-600"><AlertTriangle /></div><h2 className="mt-5 text-xl font-extrabold">{title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p><div className="mt-6 flex justify-end gap-3"><button className="btn-secondary" onClick={onCancel} disabled={busy}>Cancel</button><button className="btn-danger" onClick={onConfirm} disabled={busy}>{busy ? "Working…" : "Confirm"}</button></div></div></div>;
}

export function LoadingState() { return <div className="grid gap-3">{[1,2,3].map((n) => <div key={n} className="h-20 animate-pulse rounded-2xl bg-slate-100" />)}</div>; }
export function ErrorState({ message, retry }: { message: string; retry?: () => void }) { return <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-sm text-red-700"><p className="font-bold">{message}</p>{retry && <button className="mt-3 underline" onClick={retry}>Try again</button>}</div>; }
