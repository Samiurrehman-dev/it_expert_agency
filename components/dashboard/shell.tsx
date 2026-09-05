"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  Gauge,
  LogOut,
  Menu,
  MessageSquare,
  UserRound,
  Users,
  X,
} from "lucide-react";
import { Logo } from "@/components/logo";
type User = {
  id: number;
  name: string;
  email: string;
  role: "ADMIN" | "EMPLOYEE";
};
const links = [
  { href: "/dashboard", label: "Overview", icon: Gauge },
  { href: "/dashboard/blogs", label: "Blogs", icon: FileText },
  {
    href: "/dashboard/case-studies",
    label: "Case Studies",
    icon: BriefcaseBusiness,
  },
  { href: "/dashboard/ebooks", label: "Ebooks", icon: BookOpen },
  {
    href: "/dashboard/messages",
    label: "Contact Messages",
    icon: MessageSquare,
    admin: true,
  },
  {
    href: "/dashboard/employees",
    label: "Employees",
    icon: Users,
    admin: true,
  },
  { href: "/dashboard/profile", label: "My Profile", icon: UserRound },
];
export function DashboardShell({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#f8f7f5]">
      <button
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-30 grid size-11 place-items-center rounded-xl bg-primary-950 text-white shadow lg:hidden"
      >
        <Menu className="size-5" />
      </button>
      {open && (
        <button
          className="fixed inset-0 z-30 bg-slate-950/50 lg:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-primary-950 px-4 py-5 text-white transition-transform lg:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-2">
          <Logo light />
          <button onClick={() => setOpen(false)} className="lg:hidden">
            <X />
          </button>
        </div>
        <p className="mx-3 mt-8 text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary-300">
          Management portal
        </p>
        <nav className="mt-3 grid gap-1">
          {links
            .filter((x) => !x.admin || user.role === "ADMIN")
            .map(({ href, label, icon: Icon }) => {
              const active =
                href === "/dashboard" ? path === href : path.startsWith(href);
              return (
                <Link
                  onClick={() => setOpen(false)}
                  href={href}
                  key={href}
                  className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-bold transition ${active ? "bg-primary-500 text-white" : "text-slate-300 hover:bg-white/[.06] hover:text-white"}`}
                >
                  <Icon className="size-5" />
                  {label}
                </Link>
              );
            })}
        </nav>
        <div className="mt-auto rounded-2xl border border-white/10 bg-white/[.04] p-3">
          <p className="truncate text-sm font-extrabold">{user.name}</p>
          <p className="truncate text-xs text-slate-400">{user.email}</p>
          <span className="mt-2 inline-flex rounded-full bg-primary-500/20 px-2 py-1 text-[9px] font-extrabold uppercase tracking-wider text-primary-300">
            {user.role}
          </span>
        </div>
      </aside>
      <div className="lg:pl-72">
        <header className="flex h-20 items-center justify-end border-b border-slate-200 bg-white/90 px-5 backdrop-blur sm:px-8">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-extrabold">{user.name}</p>
            <p className="text-xs text-slate-500">
              {user.role === "ADMIN" ? "Administrator" : "Employee"}
            </p>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="btn-secondary ml-4"
          >
            <LogOut className="size-4" />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        </header>
        <main className="p-5 sm:p-8 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
