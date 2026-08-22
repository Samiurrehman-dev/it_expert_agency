import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";
import { UpdatePostCard } from "@/components/update-post-card";
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
                  <UpdatePostCard post={post} />
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
