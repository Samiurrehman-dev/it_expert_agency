/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { Mail, Trash2 } from "lucide-react";
import { api, ConfirmModal, ErrorState, LoadingState, useToast } from "./ui";
import { PageHeading } from "./page-heading";
type M = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "NEW" | "READ" | "RESPONDED";
  createdAt: string;
};
type L = { items: M[]; pagination: { totalPages: number } };
export function Messages() {
  const [items, setItems] = useState<M[]>([]),
    [selected, setSelected] = useState<M | null>(null),
    [status, setStatus] = useState(""),
    [page, setPage] = useState(1),
    [pages, setPages] = useState(1),
    [loading, setLoading] = useState(true),
    [error, setError] = useState(""),
    [remove, setRemove] = useState<M | null>(null);
  const toast = useToast();
  const load = async () => {
    setLoading(true);
    try {
      const q = new URLSearchParams({ page: String(page), limit: "20" });
      if (status) q.set("status", status);
      const d = await api<L>(`/api/contact-messages?${q}`);
      setItems(d.items);
      setPages(d.pagination.totalPages);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load messages.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void load();
  }, [page, status]);
  async function open(m: M) {
    try {
      const d = await api<M>(`/api/contact-messages/${m.id}`);
      setSelected(d);
      setItems((v) => v.map((x) => (x.id === d.id ? d : x)));
    } catch (e) {
      toast(
        e instanceof Error ? e.message : "Unable to open message.",
        "error",
      );
    }
  }
  async function respond() {
    if (!selected) return;
    try {
      const d = await api<M>(`/api/contact-messages/${selected.id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status: "RESPONDED" }),
      });
      setSelected(d);
      toast("Marked as responded.");
      void load();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Update failed.", "error");
    }
  }
  async function del() {
    if (!remove) return;
    try {
      await api(`/api/contact-messages/${remove.id}`, { method: "DELETE" });
      toast("Message deleted.");
      setRemove(null);
      if (selected?.id === remove.id) setSelected(null);
      void load();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Delete failed.", "error");
    }
  }
  return (
    <>
      <PageHeading
        title="Contact Messages"
        description="Review and respond to enquiries from the website."
      />
      <div className="mb-4 flex justify-end">
        <select
          className="field max-w-48"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All statuses</option>
          <option>NEW</option>
          <option>READ</option>
          <option>RESPONDED</option>
        </select>
      </div>
      {loading ? (
        <LoadingState />
      ) : error ? (
        <ErrorState message={error} retry={load} />
      ) : (
        <div className="grid gap-5 xl:grid-cols-[.9fr_1.1fr]">
          <div className="dash-card divide-y overflow-hidden">
            {items.length === 0 ? (
              <p className="p-10 text-center text-sm text-slate-500">
                No messages found.
              </p>
            ) : (
              items.map((m) => (
                <button
                  key={m.id}
                  onClick={() => open(m)}
                  className={`block w-full p-5 text-left hover:bg-primary-50/50 ${selected?.id === m.id ? "bg-primary-50" : ""}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p
                      className={
                        m.status === "NEW" ? "font-extrabold" : "font-bold"
                      }
                    >
                      {m.name}
                    </p>
                    <span
                      className={`rounded-full px-2 py-1 text-[9px] font-extrabold ${m.status === "NEW" ? "bg-primary-100 text-primary-700" : "bg-slate-100 text-slate-600"}`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <p className="mt-1 truncate text-sm font-semibold">
                    {m.subject}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">
                    {m.message}
                  </p>
                  <p className="mt-2 text-[10px] text-slate-400">
                    {new Date(m.createdAt).toLocaleString()}
                  </p>
                </button>
              ))
            )}
          </div>
          <div className="dash-card min-h-96 p-6">
            {!selected ? (
              <div className="grid h-full place-items-center text-center text-slate-400">
                <div>
                  <Mail className="mx-auto size-10" />
                  <p className="mt-3 text-sm">Select a message to read it</p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-extrabold">
                      {selected.subject}
                    </h2>
                    <p className="mt-2 text-sm text-slate-600">
                      {selected.name} ·{" "}
                      <a
                        className="text-primary-700"
                        href={`mailto:${selected.email}`}
                      >
                        {selected.email}
                      </a>
                      {selected.phone && ` · ${selected.phone}`}
                    </p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                    {selected.status}
                  </span>
                </div>
                <p className="mt-7 whitespace-pre-wrap rounded-2xl bg-slate-50 p-5 text-sm leading-7">
                  {selected.message}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {selected.status !== "RESPONDED" && (
                    <button onClick={respond} className="btn-primary">
                      Mark responded
                    </button>
                  )}
                  <button
                    onClick={() => setRemove(selected)}
                    className="btn-secondary text-red-600"
                  >
                    <Trash2 className="size-4" />
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="mt-4 flex justify-end gap-2">
        <button
          className="btn-secondary"
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>
        <button
          className="btn-secondary"
          disabled={page >= pages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
      <ConfirmModal
        open={!!remove}
        title="Delete this message?"
        description="This permanently removes the enquiry and cannot be undone."
        onCancel={() => setRemove(null)}
        onConfirm={del}
      />
    </>
  );
}
