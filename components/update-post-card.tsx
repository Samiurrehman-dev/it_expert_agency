import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { UpdatePost } from "@/lib/updates";

export function UpdateAccentPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-primary-400 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white shadow-sm">
      {children}
    </span>
  );
}

export function UpdatePostCard({
  post,
  headingLevel = "h2",
}: {
  post: UpdatePost;
  headingLevel?: "h2" | "h3";
}) {
  const Heading = headingLevel;
  const card = (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft">
      <div
        className={`relative flex h-48 items-end overflow-hidden ${
          post.image ? "bg-primary-950" : `bg-gradient-to-br ${post.color}`
        } p-6`}
      >
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt={post.imageAlt ?? ""}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-950/20 to-black/5" />
          </>
        ) : (
          <div className="absolute -right-10 -top-12 size-40 rounded-full border-[34px] border-white/10 transition-transform duration-500 group-hover:scale-110" />
        )}
        {post.type === "Ebook" && (
          <div className="absolute bottom-5 right-6 grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm">
            <post.icon className="size-7" aria-hidden="true" />
          </div>
        )}
        <div
          className={`relative flex flex-wrap gap-2 ${
            post.type === "Ebook" ? "pr-16" : ""
          }`}
        >
          <UpdateAccentPill>{post.category}</UpdateAccentPill>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
            {post.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center justify-between text-xs font-bold text-slate-400">
          <span>{post.type}</span>
          <span>{post.meta}</span>
        </div>
        <Heading className="mt-4 text-xl font-extrabold leading-7 tracking-[-0.025em] text-ink">
          {post.title}
        </Heading>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {post.excerpt}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800">
          {post.href
            ? post.type === "Ebook"
              ? "Download ebook"
              : post.type === "Case Study"
                ? "Read Case Study"
                : "Read article"
            : `${post.type} coming soon`}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>
    </article>
  );

  if (!post.href) return card;

  return (
    <Link
      href={post.href}
      className="block h-full"
      aria-label={`Read ${post.title}`}
    >
      {card}
    </Link>
  );
}
