import type { LucideIcon } from "lucide-react";
import {
  Activity,
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
  image?: string;
  imageAlt?: string;
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
    image: "/images/updates/blog-security-checklist.jpg",
    imageAlt:
      "Cybersecurity professional monitoring several computer screens in a home office",
    href: "/blog/practical-security-checklist-growing-business",
  },
  {
    type: "Blog",
    icon: Headphones,
    category: "Managed IT",
    title: "A Safer Path to Modern Collaboration Across Your Team",
    excerpt:
      "How Microsoft 365 brings communication, productivity, and security together into one connected environment — helping teams collaborate freely without losing control of business data.",
    meta: "8 min read",
    color: "from-slate-900 to-primary-800",
    image: "/images/updates/blog-modern-collaboration.jpg",
    imageAlt:
      "Colleagues collaborating around laptops and a digital presentation in a modern office",
    href: "/blog/safer-path-modern-collaboration-across-your-team",
  },
  {
    type: "Blog",
    icon: DatabaseBackup,
    category: "Backup & Disaster Recovery",
    title: "Backups Are Only Useful When Recovery Is Tested",
    excerpt:
      "A backup is only as valuable as your ability to restore it. A practical framework for RTOs, RPOs, backup resilience, and — most importantly — actually testing recovery before you need it.",
    meta: "14 min read",
    color: "from-primary-900 to-accent-700",
    image: "/images/updates/blog-backup-recovery.jpg",
    imageAlt:
      "IT technician working at a computer inside a blue-lit server room",
    href: "/blog/backups-are-only-useful-when-recovery-is-tested",
  },
  {
    type: "Blog",
    icon: Sparkles,
    category: "AI & Automation",
    title: "Keep Your Data, Models and Decisions Under Your Control",
    excerpt:
      "Enterprise AI adoption isn't about choosing the most powerful model — it's about control. A principle-driven approach to keeping your data, models, policies, and decisions aligned with your own infrastructure and business goals.",
    meta: "6 min read",
    color: "from-accent-900 to-primary-800",
    image: "/images/updates/blog-ai-control.jpg",
    imageAlt:
      "Professional using an artificial intelligence and big data interface on a laptop",
    href: "/blog/keep-your-data-models-decisions-under-control",
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
    title: "Five Warning Signs Your Network Is Holding Your Team Back",
    excerpt:
      "Spot the performance and reliability issues that tend to hide inside a growing environment — before they become costly business disruptions.",
    meta: "5 min read",
    color: "from-indigo-950 to-primary-600",
    image: "/images/updates/blog-network-warning-signs.jpg",
    imageAlt:
      "IT specialist carefully inspecting network cables in a server environment",
    href: "/blog/five-warning-signs-network-holding-team-back",
  },
  {
    type: "Blog",
    icon: Headphones,
    category: "Managed IT",
    title: "What Proactive IT Support Should Look Like in Practice",
    excerpt:
      "How monitoring, maintenance, and clear support processes prevent avoidable downtime — and what separates a genuinely proactive IT team from one that just reacts faster.",
    meta: "7 min read",
    color: "from-slate-900 to-primary-800",
    image: "/images/updates/blog-proactive-it-support.jpg",
    imageAlt:
      "IT support specialists wearing headsets and working together at laptops",
    href: "/blog/what-proactive-it-support-should-look-like-in-practice",
  },
  {
    type: "Blog",
    icon: Activity,
    category: "Observability & Automation",
    title: "Turn Infrastructure Signals into Faster and Smarter Action",
    excerpt:
      "Modern IT environments generate endless telemetry — the real advantage comes from connecting monitoring, intelligent analysis, and automation into a closed detect-to-act loop.",
    meta: "8 min read",
    color: "from-primary-950 to-accent-700",
    image: "/images/updates/blog-infrastructure-signals.jpg",
    imageAlt:
      "Operations specialist monitoring infrastructure signals across multiple screens",
    href: "/blog/turn-infrastructure-signals-into-faster-smarter-action",
  },
  {
    type: "Case Study",
    icon: Activity,
    category: "Professional Services — Monitoring & AIOps",
    title: "Turn Infrastructure Signals Into Faster, Smarter Action",
    excerpt:
      "How a growing professional services firm connected its monitoring, prioritized critical alerts, and automated predictable fixes to prevent disruption.",
    meta: "Client story",
    color: "from-primary-950 to-accent-700",
    image: "/images/updates/case-study-aiops-monitoring.jpg",
    imageAlt:
      "Operations engineer reviewing alerts and system data across a wall of monitors",
    href: "/case-studies/turn-infrastructure-signals-into-faster-smarter-action",
  },
  {
    type: "Case Study",
    icon: DatabaseBackup,
    category: "E-Commerce — Backup & Disaster Recovery",
    title: "Backups Are Only Useful When Recovery Is Tested",
    excerpt:
      "How a growing e-commerce company discovered its nightly backups couldn't actually be restored — and built a tested recovery process before the next failure hit.",
    meta: "5 min read",
    color: "from-primary-800 to-accent-700",
    image: "/images/updates/case-study-tested-recovery.jpg",
    imageAlt:
      "Server room equipment and network cabling prepared for a recovery test",
    href: "/case-studies/backups-are-only-useful-when-recovery-is-tested",
  },
];
