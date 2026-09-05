/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Save } from "lucide-react";
import { api, ErrorState, useToast } from "./ui";
import { PageHeading } from "./page-heading";
import type { Kind } from "./content-list";
type Item = Record<string, unknown> & {
  id: number;
  title: string;
  slug: string;
  status: string;
  authorId: number;
  categoryId: number;
};
const cfg = {
  blogs: { label: "Blog post", api: "/api/blog" },
  "case-studies": { label: "Case study", api: "/api/case-studies" },
  ebooks: { label: "Ebook", api: "/api/ebooks" },
};
const defaults = {
  body: '{\n  "intro": [""],\n  "sections": []\n}',
  relatedService:
    '{\n  "label": "Explore our services",\n  "href": "/services",\n  "heading": "How we can help",\n  "description": ""\n}',
};
function slugify(v: string) {
  return v
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 191)
    .replace(/-+$/g, "");
}
export function ContentForm({
  kind,
  user,
  slug,
}: {
  kind: Kind;
  user: { id: number; role: string };
  slug?: string;
}) {
  const c = cfg[kind];
  const router = useRouter();
  const toast = useToast();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState(Boolean(slug));
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    if (!slug) return;
    api<Item>(`${c.api}/${encodeURIComponent(slug)}`)
      .then((x) => {
        setItem(x);
        setTitle(x.title);
        setImage(String(x.image || ""));
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [slug]);
  async function submit(
    e: FormEvent<HTMLFormElement>,
    status: "DRAFT" | "PUBLISHED",
  ) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const f = new FormData(e.currentTarget);
      const value = (n: string) => String(f.get(n) || "").trim();
      const json = (n: string, fallback?: unknown) => {
        const v = value(n);
        return v ? JSON.parse(v) : fallback;
      };
      const common = {
        title: value("title"),
        slug: value("slug") || undefined,
        excerpt: value("excerpt"),
        categoryId: Number(value("categoryId")),
        authorId: user.id,
        status,
      };
      let payload: Record<string, unknown> = common;
      if (kind === "blogs")
        payload = {
          ...common,
          subtitle: value("subtitle") || null,
          publishedDate: value("publishedDate"),
          publishedLabel: value("publishedLabel"),
          readTime: value("readTime"),
          image: value("image"),
          imageAlt: value("imageAlt"),
          body: json("body"),
          relatedService: json("relatedService"),
          relatedCaseStudy: json("relatedCaseStudy", undefined),
        };
      if (kind === "case-studies")
        payload = {
          ...common,
          format: value("format"),
          industry: value("industry"),
          subtitle: value("subtitle"),
          image: value("image"),
          imageAlt: value("imageAlt"),
          publishedDate: value("publishedDate") || null,
          publishedLabel: value("publishedLabel") || null,
          readTime: value("readTime") || null,
          clientProfile: value("clientProfile") || null,
          body: json("body"),
          relatedService: json("relatedService"),
          relatedContent: json("relatedContent", undefined),
        };
      if (kind === "ebooks")
        payload = {
          ...common,
          meta: value("meta"),
          color: value("color"),
          icon: value("icon"),
          publishedDate: value("publishedDate") || null,
        };
      Object.keys(payload).forEach(
        (k) => payload[k] === undefined && delete payload[k],
      );
      await api(item ? `${c.api}/${item.id}` : `${c.api}/create`, {
        method: item ? "PUT" : "POST",
        body: JSON.stringify(payload),
      });
      toast(`${c.label} ${item ? "updated" : "created"}.`);
      router.push(`/dashboard/${kind}`);
      router.refresh();
    } catch (e) {
      setError(
        e instanceof SyntaxError
          ? "One of the JSON fields is not valid JSON."
          : e instanceof Error
            ? e.message
            : "Save failed.",
      );
    } finally {
      setBusy(false);
    }
  }
  if (loading) return <p className="animate-pulse text-sm">Loading editor…</p>;
  if (slug && error && !item) return <ErrorState message={error} />;
  const v = (key: string, fallback = "") => String(item?.[key] ?? fallback);
  const j = (key: string, fallback = "") =>
    item?.[key] !== undefined ? JSON.stringify(item[key], null, 2) : fallback;
  return (
    <>
      <PageHeading
        title={`${item ? "Edit" : "New"} ${c.label.toLowerCase()}`}
        description="Fields map directly to the existing Prisma/API contract. JSON shapes are preserved exactly."
      />
      <form className="grid gap-6" onSubmit={(e) => submit(e, "DRAFT")}>
        <section className="dash-card grid gap-5 p-5 sm:p-7">
          <h2 className="text-lg font-extrabold">Essentials</h2>
          <label>
            <span className="field-label">Title</span>
            <input
              className="field"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label>
            <span className="field-label">Slug</span>
            <input
              className="field"
              name="slug"
              defaultValue={v("slug", slugify(title))}
              placeholder={slugify(title)}
            />
            <small className="mt-1 block text-slate-500">
              Preview: /{kind === "blogs" ? "blog" : kind}/
              {slugify(title) || "your-title"}
            </small>
          </label>
          <label>
            <span className="field-label">Excerpt</span>
            <textarea
              className="field min-h-24"
              name="excerpt"
              defaultValue={v("excerpt")}
              required
            />
          </label>
          <label>
            <span className="field-label">Category ID</span>
            <input
              className="field"
              name="categoryId"
              type="number"
              min="1"
              defaultValue={v("categoryId")}
              required
            />
            <small className="mt-1 block text-slate-500">
              The API requires an existing category ID and provides no category
              listing/create endpoint.
            </small>
          </label>
        </section>
        {kind !== "ebooks" && (
          <section className="dash-card grid gap-5 p-5 sm:p-7">
            <h2 className="text-lg font-extrabold">Presentation</h2>
            <label>
              <span className="field-label">Subtitle</span>
              <textarea
                className="field"
                name="subtitle"
                defaultValue={v("subtitle")}
                required={kind === "case-studies"}
              />
            </label>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="field-label">Cover image URL</span>
                <input
                  className="field"
                  name="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </label>
              <label>
                <span className="field-label">Image alt text</span>
                <input
                  className="field"
                  name="imageAlt"
                  defaultValue={v("imageAlt")}
                  required
                />
              </label>
            </div>
            {image && (
              <div className="relative aspect-[16/7] max-w-xl overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={image}
                  alt="Cover preview"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <div className="grid gap-5 sm:grid-cols-3">
              <label>
                <span className="field-label">Publish date</span>
                <input
                  className="field"
                  type="date"
                  name="publishedDate"
                  defaultValue={v("publishedDate").slice(0, 10)}
                  required={kind === "blogs"}
                />
              </label>
              <label>
                <span className="field-label">Published label</span>
                <input
                  className="field"
                  name="publishedLabel"
                  defaultValue={v("publishedLabel")}
                />
              </label>
              <label>
                <span className="field-label">Read time</span>
                <input
                  className="field"
                  name="readTime"
                  defaultValue={v("readTime")}
                />
              </label>
            </div>
          </section>
        )}
        {kind === "case-studies" && (
          <section className="dash-card grid gap-5 p-5 sm:p-7">
            <h2 className="text-lg font-extrabold">Case study details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="field-label">Format</span>
                <select
                  className="field"
                  name="format"
                  defaultValue={v("format", "STRUCTURED")}
                >
                  <option>STRUCTURED</option>
                  <option>NARRATIVE</option>
                </select>
              </label>
              <label>
                <span className="field-label">Industry</span>
                <input
                  className="field"
                  name="industry"
                  defaultValue={v("industry")}
                  required
                />
              </label>
            </div>
            <label>
              <span className="field-label">Client profile</span>
              <textarea
                className="field"
                name="clientProfile"
                defaultValue={v("clientProfile")}
              />
            </label>
          </section>
        )}
        {kind === "ebooks" && (
          <section className="dash-card grid gap-5 p-5 sm:p-7">
            <h2 className="text-lg font-extrabold">Ebook details</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <label>
                <span className="field-label">Meta</span>
                <input
                  className="field"
                  name="meta"
                  defaultValue={v("meta")}
                  required
                />
              </label>
              <label>
                <span className="field-label">Publish date</span>
                <input
                  className="field"
                  type="date"
                  name="publishedDate"
                  defaultValue={v("publishedDate").slice(0, 10)}
                />
              </label>
              <label>
                <span className="field-label">Color</span>
                <input
                  className="field"
                  name="color"
                  defaultValue={v("color", "orange")}
                  required
                />
              </label>
              <label>
                <span className="field-label">Icon</span>
                <input
                  className="field"
                  name="icon"
                  defaultValue={v("icon", "book-open")}
                  required
                />
              </label>
            </div>
            <p className="rounded-xl bg-amber-50 p-4 text-sm text-amber-800">
              PDF upload and download count are unavailable in the current Ebook
              schema/API.
            </p>
          </section>
        )}
        {kind !== "ebooks" && (
          <section className="dash-card grid gap-5 p-5 sm:p-7">
            <div>
              <h2 className="text-lg font-extrabold">Structured content</h2>
              <p className="mt-1 text-sm text-slate-500">
                Edit the exact JSON structure consumed by the current public
                renderers.
              </p>
            </div>
            <label>
              <span className="field-label">Body JSON</span>
              <textarea
                className="field min-h-80 font-mono text-xs leading-5"
                name="body"
                defaultValue={j("body", defaults.body)}
                required
              />
            </label>
            <label>
              <span className="field-label">Related service JSON</span>
              <textarea
                className="field min-h-40 font-mono text-xs"
                name="relatedService"
                defaultValue={j("relatedService", defaults.relatedService)}
                required
              />
            </label>
            <label>
              <span className="field-label">
                Related {kind === "blogs" ? "case study" : "content"} JSON
                (optional)
              </span>
              <textarea
                className="field min-h-32 font-mono text-xs"
                name={kind === "blogs" ? "relatedCaseStudy" : "relatedContent"}
                defaultValue={j(
                  kind === "blogs" ? "relatedCaseStudy" : "relatedContent",
                )}
              />
            </label>
          </section>
        )}
        {error && (
          <p className="rounded-xl bg-red-50 p-4 text-sm font-bold text-red-700">
            {error}
          </p>
        )}
        <div className="sticky bottom-4 flex justify-end gap-3 rounded-2xl border bg-white/90 p-3 shadow-soft backdrop-blur">
          <button type="submit" className="btn-secondary" disabled={busy}>
            <Save className="size-4" />
            Save draft
          </button>
          <button
            type="button"
            className="btn-primary"
            disabled={busy}
            onClick={(e) => {
              const form = e.currentTarget.form;
              if (form)
                void submit(
                  {
                    preventDefault: () => undefined,
                    currentTarget: form,
                  } as unknown as FormEvent<HTMLFormElement>,
                  "PUBLISHED",
                );
            }}
          >
            {busy ? "Saving…" : "Publish"}
          </button>
        </div>
      </form>
    </>
  );
}
