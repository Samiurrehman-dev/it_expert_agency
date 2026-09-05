/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Edit3, Plus, Search, Trash2 } from "lucide-react";
import { api, ConfirmModal, ErrorState, LoadingState, useToast } from "./ui";
import { PageHeading } from "./page-heading";
export type Kind = "blogs" | "case-studies" | "ebooks";
type Status = "DRAFT" | "PUBLISHED" | "ARCHIVED";
type Item = {
  id: number;
  slug: string;
  title: string;
  status: Status;
  viewCount: number;
  createdAt: string;
  author: { id: number; name: string };
  category: { name: string };
};
type List = {
  items: Item[];
  pagination: { page: number; total: number; totalPages: number };
};
const config = {
  blogs: { label: "Blogs", single: "blog post", api: "/api/blog" },
  "case-studies": {
    label: "Case Studies",
    single: "case study",
    api: "/api/case-studies",
  },
  ebooks: { label: "Ebooks", single: "ebook", api: "/api/ebooks" },
};
export function ContentList({
  kind,
  user,
}: {
  kind: Kind;
  user: { id: number; role: "ADMIN" | "EMPLOYEE" };
}) {
  const c = config[kind];
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [target, setTarget] = useState<Item | null>(null);
  const [busy, setBusy] = useState(false);
  const toast = useToast();
  const load = async () => {
    setLoading(true);
    setError("");
    try {
      const q = new URLSearchParams({ page: String(page), limit: "20" });
      if (status) q.set("status", status);
      const d = await api<List>(`${c.api}?${q}`);
      setItems(
        user.role === "ADMIN"
          ? d.items
          : d.items.filter((x) => x.author.id === user.id),
      );
      setPages(d.pagination.totalPages);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load content.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    void load();
  }, [page, status, kind]);
  const visible = useMemo(
    () =>
      items.filter((x) => x.title.toLowerCase().includes(search.toLowerCase())),
    [items, search],
  );
  async function toggle(item: Item) {
    try {
      await api(`${c.api}/${item.id}/status`, {
        method: "PATCH",
        body: JSON.stringify({
          status: item.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED",
        }),
      });
      toast("Status updated.");
      void load();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Update failed.", "error");
    }
  }
  async function remove() {
    if (!target) return;
    setBusy(true);
    try {
      await api(`${c.api}/${target.id}`, { method: "DELETE" });
      toast(`${c.single} archived.`);
      setTarget(null);
      void load();
    } catch (e) {
      toast(e instanceof Error ? e.message : "Archive failed.", "error");
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <PageHeading
        title={c.label}
        description={`Create, publish, and manage ${c.label.toLowerCase()} from one workspace.`}
        action={
          <Link href={`/dashboard/${kind}/new`} className="btn-primary">
            <Plus className="size-4" />
            New {c.single}
          </Link>
        }
      />
      <div className="dash-card overflow-hidden">
        <div className="flex flex-col gap-3 border-b p-4 sm:flex-row">
          <label className="relative flex-1">
            <Search className="absolute left-3 top-3 size-4 text-slate-400" />
            <input
              className="field pl-10"
              placeholder="Search titles on this page…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
          <select
            className="field sm:w-44"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All statuses</option>
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>
        {loading ? (
          <div className="p-5">
            <LoadingState />
          </div>
        ) : error ? (
          <div className="p-5">
            <ErrorState message={error} retry={load} />
          </div>
        ) : visible.length === 0 ? (
          <div className="p-12 text-center">
            <p className="font-extrabold">No {c.label.toLowerCase()} found</p>
            <p className="mt-2 text-sm text-slate-500">
              Create your first {c.single} or change the filters.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-5 py-3">Title</th>
                  <th>Author</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Views</th>
                  <th className="pr-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {visible.map((x) => (
                  <tr key={x.id} className="text-sm">
                    <td className="px-5 py-4">
                      <p className="max-w-sm font-extrabold">{x.title}</p>
                      <p className="mt-1 text-xs text-slate-400">
                        {x.category.name}
                      </p>
                    </td>
                    <td>{x.author.name}</td>
                    <td>
                      <button
                        onClick={() => toggle(x)}
                        className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${x.status === "PUBLISHED" ? "bg-emerald-50 text-emerald-700" : x.status === "ARCHIVED" ? "bg-slate-100 text-slate-500" : "bg-amber-50 text-amber-700"}`}
                      >
                        {x.status}
                      </button>
                    </td>
                    <td>{new Date(x.createdAt).toLocaleDateString()}</td>
                    <td>{x.viewCount}</td>
                    <td className="pr-5">
                      <div className="flex justify-end gap-2">
                        <Link
                          aria-label="Edit"
                          className="rounded-lg border p-2 hover:text-primary-600"
                          href={`/dashboard/${kind}/${x.id}/edit?slug=${encodeURIComponent(x.slug)}`}
                        >
                          <Edit3 className="size-4" />
                        </Link>
                        <button
                          aria-label="Archive"
                          onClick={() => setTarget(x)}
                          className="rounded-lg border p-2 hover:border-red-200 hover:text-red-600"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="flex items-center justify-between border-t p-4 text-sm">
          <span>
            Page {page} of {Math.max(1, pages)}
          </span>
          <div className="flex gap-2">
            <button
              className="btn-secondary"
              disabled={page <= 1}
              onClick={() => setPage((x) => x - 1)}
            >
              Previous
            </button>
            <button
              className="btn-secondary"
              disabled={page >= pages}
              onClick={() => setPage((x) => x + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <ConfirmModal
        open={Boolean(target)}
        title={`Archive this ${c.single}?`}
        description="It will no longer be treated as active content. This API archives rather than permanently deleting content."
        busy={busy}
        onCancel={() => setTarget(null)}
        onConfirm={remove}
      />
    </>
  );
}
