import { ArrowUpRight } from "lucide-react";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";
import { updatePosts, type UpdateType } from "@/lib/updates";

const pageContent: Record<
  UpdateType,
  {
    heroEyebrow: string;
    heroLead: string;
    heroAccent: string;
    heroDescription: string;
    sectionEyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
  }
> = {
  Ebook: {
    heroEyebrow: "Ebooks & practical guides",
    heroLead: "Clear guidance for",
    heroAccent: "smarter IT.",
    heroDescription:
      "Downloadable resources designed to make complex technology decisions easier to understand and act on.",
    sectionEyebrow: "Explore our ebooks",
    sectionTitle: "Practical guides, built for business.",
    sectionDescription:
      "Focused resources covering security, cloud, collaboration, and technology planning.",
  },
  Blog: {
    heroEyebrow: "Ideas from our experts",
    heroLead: "Useful thinking for a",
    heroAccent: "resilient business.",
    heroDescription:
      "Timely perspectives on support, security, cloud, and the technology choices growing teams make every day.",
    sectionEyebrow: "Latest blog posts",
    sectionTitle: "Straightforward answers to real IT questions.",
    sectionDescription:
      "Practical ideas from the people who manage, protect, and improve business technology.",
  },
  "Case Study": {
    heroEyebrow: "Real work. Real outcomes.",
    heroLead: "Technology solutions",
    heroAccent: "in practice.",
    heroDescription:
      "See how practical IT improvements help organizations reduce risk, work reliably, and move forward with confidence.",
    sectionEyebrow: "Client success stories",
    sectionTitle: "Challenges solved with practical technology.",
    sectionDescription:
      "A closer look at the challenges, decisions, and outcomes behind our work.",
  },
};

export function UpdatesPageTemplate({ type }: { type: UpdateType }) {
  const content = pageContent[type];
  const posts = updatePosts.filter((post) => post.type === type);

  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <InnerPageHero
          eyebrow={content.heroEyebrow}
          title={
            <>
              {content.heroLead}{" "}
              <span className="text-accent-300">{content.heroAccent}</span>
            </>
          }
          description={content.heroDescription}
        />

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow={content.sectionEyebrow}
                title={content.sectionTitle}
                description={content.sectionDescription}
              />
            </ScrollReveal>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {posts.map((post, index) => (
                <ScrollReveal
                  key={post.title}
                  delay={index * 0.06}
                  className="h-full"
                >
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft">
                    <div
                      className={`relative flex h-48 items-end overflow-hidden bg-gradient-to-br ${post.color} p-6`}
                    >
                      <div className="absolute -right-10 -top-12 size-40 rounded-full border-[34px] border-white/10 transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute bottom-5 right-6 grid size-16 place-items-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-sm">
                        <post.icon className="size-7" />
                      </div>
                      <div className="relative flex flex-wrap gap-2 pr-16">
                        <span className="rounded-full bg-primary-400 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.13em] text-white shadow-sm">
                          {post.type}
                        </span>
                        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                        <span>{post.type}</span>
                        <span>{post.meta}</span>
                      </div>
                      <h2 className="mt-4 text-xl font-extrabold leading-7 tracking-[-0.025em] text-ink">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                        {post.excerpt}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary-800">
                        {post.type} coming soon
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
