/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  MessageSquare,
  Users,
} from "lucide-react";
import { api, ErrorState, LoadingState } from "./ui";
import { PageHeading } from "./page-heading";
type User = { id: number; role: "ADMIN" | "EMPLOYEE" };
type List<T> = { items: T[]; pagination: { total: number } };
type Item = { author: { id: number } };
const content = [
  { key: "blogs", url: "/api/blog", label: "Blog posts", icon: FileText },
  {
    key: "cases",
    url: "/api/case-studies",
    label: "Case studies",
    icon: BriefcaseBusiness,
  },
  { key: "ebooks", url: "/api/ebooks", label: "Ebooks", icon: BookOpen },
] as const;
export function Overview({ user }: { user: User }) {
  const [data, setData] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState("");
  const load = async () => {
    setError("");
    try {
      const lists = await Promise.all(
        content.map((x) => api<List<Item>>(`${x.url}?limit=100`)),
      );
      const counts: Record<string, number> = {};
      content.forEach((x, i) => {
        counts[x.key] =
          user.role === "ADMIN"
            ? lists[i].pagination.total
            : lists[i].items.filter((v) => v.author.id === user.id).length;
      });
      if (user.role === "ADMIN") {
        const [m, u] = await Promise.all([
          api<List<unknown>>("/api/contact-messages?status=NEW&limit=1"),
          api<List<unknown>>("/api/users?limit=1"),
        ]);
        Object.assign(counts, {
          messages: m.pagination.total,
          employees: u.pagination.total,
        });
      }
      setData(counts as Record<string, number>);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unable to load dashboard.");
    }
  };
  useEffect(() => {
    void load();
  }, []);
  return (
    <>
      <PageHeading
        title={`Welcome ${user.role === "ADMIN" ? "back" : "to your workspace"}`}
        description="A clear view of your content and day-to-day activity."
      />
      {error ? (
        <ErrorState message={error} retry={load} />
      ) : !data ? (
        <LoadingState />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {content.map(({ key, label, icon: Icon }) => (
            <Link
              href={`/dashboard/${key === "cases" ? "case-studies" : key}`}
              key={key}
              className="dash-card group p-6 transition hover:-translate-y-1 hover:border-primary-200"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                  <Icon />
                </span>
                <span className="text-4xl font-extrabold tracking-[-.05em]">
                  {data[key]}
                </span>
              </div>
              <p className="mt-7 text-sm font-extrabold text-slate-600 group-hover:text-primary-700">
                {label}
              </p>
            </Link>
          ))}
          {user.role === "ADMIN" && (
            <>
              <Link href="/dashboard/messages" className="dash-card p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                    <MessageSquare />
                  </span>
                  <span className="text-4xl font-extrabold">
                    {data.messages}
                  </span>
                </div>
                <p className="mt-7 text-sm font-extrabold text-slate-600">
                  Unread messages
                </p>
              </Link>
              <Link href="/dashboard/employees" className="dash-card p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-600">
                    <Users />
                  </span>
                  <span className="text-4xl font-extrabold">
                    {data.employees}
                  </span>
                </div>
                <p className="mt-7 text-sm font-extrabold text-slate-600">
                  Team members
                </p>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
}
