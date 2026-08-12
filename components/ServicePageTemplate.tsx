import type { ReactElement, ReactNode } from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { CTASection } from "./CTASection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ScrollReveal } from "./ScrollReveal";

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type ServicePageDescription = string | readonly string[] | ReactElement;

export type ServicePageTemplateProps = {
  title: string;
  subtitle: string;
  heroImage: ImageProps["src"];
  heroImageClassName?: string;
  description: ServicePageDescription;
  features: readonly ServiceFeature[];
  ctaText: string;
  introEyebrow?: string;
  introHeading?: string;
  featuresEyebrow?: string;
  featuresHeading?: string;
  children?: ReactNode;
};

function ServiceDescription({
  description,
}: Pick<ServicePageTemplateProps, "description">) {
  if (Array.isArray(description)) {
    return (
      <div className="space-y-5">
        {description.map((paragraph, index) => (
          <p key={`${index}-${paragraph.slice(0, 24)}`}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (typeof description === "string") {
    return <p>{description}</p>;
  }

  return <div>{description}</div>;
}

export function ServicePageTemplate({
  title,
  subtitle,
  heroImage,
  heroImageClassName = "object-cover",
  description,
  features,
  ctaText,
  introEyebrow = "How we can help",
  introHeading = "Practical expertise, built around your business.",
  featuresEyebrow = "What you get",
  featuresHeading = "Support that covers every critical detail.",
  children,
}: ServicePageTemplateProps) {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-primary-950 py-20 sm:min-h-[560px] sm:py-24 lg:min-h-[620px]">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={["-z-20", heroImageClassName].join(" ")}
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-950 via-primary-950/85 to-primary-950/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-950/80 via-transparent to-primary-950/20" />
          <div className="absolute -right-24 -top-24 -z-10 size-80 rounded-full border-[64px] border-white/5" />

          <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
            <div className="max-w-4xl [animation-fill-mode:both] motion-safe:animate-fade-up">
              <p className="mb-5 text-xs font-extrabold uppercase tracking-[0.22em] text-accent-300 sm:text-sm">
                IT Experts Agency
              </p>
              <h1 className="text-balance text-4xl font-extrabold leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-8 text-blue-100/85 sm:text-xl sm:leading-9">
                {subtitle}
              </p>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="service-introduction"
          className="bg-white py-20 sm:py-28"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <ScrollReveal>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                {introEyebrow}
              </p>
              <h2
                id="service-introduction"
                className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl"
              >
                {introHeading}
              </h2>
              <div className="mt-7 text-pretty text-base leading-8 text-slate-600 sm:text-lg sm:leading-9 [&_a]:font-bold [&_a]:text-primary-800 [&_a]:underline [&_a]:decoration-primary-200 [&_a]:underline-offset-4 [&_li]:pl-2 [&_p+p]:mt-5 [&_strong]:font-extrabold [&_strong]:text-ink [&_ul]:mt-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                <ServiceDescription description={description} />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          aria-labelledby="service-features"
          className="bg-slate-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-accent-700">
                  {featuresEyebrow}
                </p>
                <h2
                  id="service-features"
                  className="mt-4 text-balance text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl lg:text-5xl"
                >
                  {featuresHeading}
                </h2>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const remainingCards = features.length % 3;
                const centerLastCard =
                  remainingCards === 1 && index === features.length - 1;
                const centerLastPair =
                  remainingCards === 2 && index === features.length - 2;

                return (
                  <ScrollReveal
                    key={`${feature.title}-${index}`}
                    delay={index * 0.06}
                    className={[
                      "h-full lg:col-span-2",
                      centerLastCard ? "lg:col-start-3" : "",
                      centerLastPair ? "lg:col-start-2" : "",
                    ].join(" ")}
                  >
                    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-soft sm:p-8">
                      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent-400 transition-transform duration-300 group-hover:scale-x-100" />
                      <span className="grid size-12 place-items-center rounded-2xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-primary-900 group-hover:text-white">
                        <Icon aria-hidden className="size-5" />
                      </span>
                      <h3 className="mt-6 text-xl font-extrabold tracking-[-0.025em] text-ink">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {children}

        <CTASection
          eyebrow="Let’s solve IT together"
          heading={ctaText}
          description="Start with a no-pressure conversation about your goals, challenges, and the right next step for your technology."
          buttonLabel="Get Free Consultation"
          buttonHref="/contact-us"
        />
      </main>

      <Footer />
    </div>
  );
}

export default ServicePageTemplate;
