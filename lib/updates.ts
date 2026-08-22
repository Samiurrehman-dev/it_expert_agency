import type { LucideIcon } from "lucide-react";
import {
  CloudCog,
  DatabaseBackup,
  Headphones,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export type UpdateType = "Ebook" | "Blog" | "Case Study";

export type UpdatePost = {
  type: UpdateType;
  icon: LucideIcon;
  category: string;
  title: string;
  excerpt: string;
  meta: string;
  color: string;
  href?: string;
};

export const updatePosts: UpdatePost[] = [
  {
    type: "Ebook",
    icon: ShieldCheck,
    category: "Cybersecurity",
    title: "A practical cybersecurity checklist for growing businesses",
    excerpt:
      "The essential controls that help reduce everyday risk without adding unnecessary complexity.",
    meta: "12-page guide",
    color: "from-primary-950 to-primary-700",
  },
  {
    type: "Ebook",
    icon: Sparkles,
    category: "IT Strategy",
    title: "How to build an IT roadmap people can actually use",
    excerpt:
      "Turn technology priorities into a clear plan that supports budgets, operations, and growth.",
    meta: "18-page guide",
    color: "from-accent-900 to-primary-800",
  },
  {
    type: "Ebook",
    icon: CloudCog,
    category: "Microsoft 365",
    title: "A growing business guide to secure modern collaboration",
    excerpt:
      "A practical guide to improving access, sharing, governance, and security across Microsoft 365.",
    meta: "15-page guide",
    color: "from-slate-900 to-primary-600",
  },
  {
    type: "Blog",
    icon: ShieldCheck,
    category: "Security",
    title: "A Practical Security Checklist for a Growing Business",
    excerpt:
      "A practical, no-cost-tools-required checklist covering identities, devices, data, backups, cloud apps, vendors, and incident response — the everyday controls that reduce the most common security risks as a business grows.",
    meta: "9 min read",
    color: "from-primary-950 to-primary-700",
    href: "/blog/practical-security-checklist-growing-business",
  },
  {
    type: "Blog",
    icon: CloudCog,
    category: "Cloud",
    title: "When is it time to move your business systems to the cloud?",
    excerpt:
      "Key signs, tradeoffs, and planning questions to consider before your next cloud move.",
    meta: "5 min read",
    color: "from-accent-800 to-accent-500",
  },
  {
    type: "Blog",
    icon: Network,
    category: "Infrastructure",
    title: "Five warning signs your network is holding your team back",
    excerpt:
      "Spot the performance and reliability issues that tend to hide inside a growing environment.",
    meta: "5 min read",
    color: "from-indigo-950 to-primary-600",
  },
  {
    type: "Blog",
    icon: Headphones,
    category: "Managed IT",
    title: "What proactive IT support should look like in practice",
    excerpt:
      "How monitoring, maintenance, and clear support processes prevent avoidable downtime.",
    meta: "7 min read",
    color: "from-slate-900 to-primary-800",
  },
  {
    type: "Case Study",
    icon: DatabaseBackup,
    category: "Business Continuity",
    title: "Building a recovery process a growing team could trust",
    excerpt:
      "How structured backups and recovery testing created a clearer path back to business after disruption.",
    meta: "Recovery story",
    color: "from-primary-800 to-accent-700",
  },
  {
    type: "Case Study",
    icon: Headphones,
    category: "Managed IT",
    title: "From recurring support issues to a stable IT operation",
    excerpt:
      "How proactive maintenance and a consistent support process reduced avoidable interruptions.",
    meta: "Client story",
    color: "from-slate-950 to-primary-700",
  },
  {
    type: "Case Study",
    icon: ShieldCheck,
    category: "Microsoft 365",
    title: "Creating a safer foundation for hybrid collaboration",
    excerpt:
      "How access controls, device standards, and user guidance strengthened everyday Microsoft 365 use.",
    meta: "Security story",
    color: "from-primary-950 to-accent-600",
  },
];
