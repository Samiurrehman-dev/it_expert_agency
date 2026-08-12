import type { Metadata } from "next";
import {
  ArrowUpRight,
  CloudCog,
  DatabaseBackup,
  Headphones,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "IT Insights & Resources",
  description:
    "Practical articles and resources from IT Experts Agency covering managed IT, cybersecurity, cloud, infrastructure, and business continuity.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    icon: ShieldCheck,
    category: "Cybersecurity",
    title: "A practical cybersecurity checklist for growing businesses",
    excerpt:
      "The essential controls that help reduce everyday risk without adding unnecessary complexity.",
    readTime: "6 min read",
    color: "from-primary-950 to-primary-700",
  },
  {
    icon: CloudCog,
    category: "Cloud",
    title: "When is it time to move your business systems to the cloud?",
    excerpt:
      "Key signs, tradeoffs, and planning questions to consider before your next cloud move.",
    readTime: "5 min read",
    color: "from-accent-800 to-accent-500",
  },
  {
    icon: Headphones,
    category: "Managed IT",
    title: "What proactive IT support should look like in practice",
    excerpt:
      "How monitoring, maintenance, and clear support processes prevent avoidable downtime.",
    readTime: "7 min read",
    color: "from-slate-900 to-primary-800",
  },
  {
    icon: DatabaseBackup,
    category: "Business continuity",
    title: "Backups are only useful when recovery is tested",
    excerpt:
      "A straightforward guide to building a recovery process your organization can depend on.",
    readTime: "4 min read",
    color: "from-primary-800 to-accent-700",
  },
  {
    icon: Network,
    category: "Infrastructure",
    title: "Five warning signs your network is holding your team back",
    excerpt:
      "Spot the performance and reliability issues that tend to hide inside a growing environment.",
    readTime: "5 min read",
    color: "from-indigo-950 to-primary-600",
  },
  {
    icon: Sparkles,
    category: "Strategy",
    title: "How to build an IT roadmap people can actually use",
    excerpt:
      "Turn technology priorities into a clear plan that supports budgets, operations, and growth.",
    readTime: "8 min read",
    color: "from-accent-900 to-primary-800",
  },
];

export default function BlogPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <InnerPageHero
          eyebrow="Insights & resources"
          title={
            <>
              Clear thinking for a more resilient{" "}
              <span className="text-accent-300">business.</span>
            </>
          }
          description="Practical perspectives on support, security, cloud, and the technology decisions that help growing teams move forward."
        />

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="From the experts"
                title="Latest insights"
                description="Useful guidance from the people who manage, protect, and improve business technology every day."
              />
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {posts.map((post, index) => (
                <ScrollReveal
                  key={post.title}
                  delay={index * 0.05}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft">
                    <div
                      className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${post.color} p-6`}
                    >
                      <div className="absolute -right-10 -top-12 size-40 rounded-full border-[34px] border-white/10 transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute bottom-5 right-6 grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm">
                        <post.icon className="size-7" />
                      </div>
                      <span className="relative rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                        <span>Coming soon</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="mt-4 text-xl font-extrabold leading-7 tracking-[-0.025em] text-ink">
                        {post.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                        {post.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800">
                        Article in progress
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Have a technology question?"
          heading="Get practical advice for your next IT decision."
          description="Talk with an experienced specialist about support, security, infrastructure, or your next cloud project."
          buttonLabel="Ask an IT expert"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}
