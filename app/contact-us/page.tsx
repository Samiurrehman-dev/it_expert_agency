import type { Metadata } from "next";
import { Mail, MapPin, Navigation, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/section-heading";
import { WhatsAppLink } from "@/components/whatsapp-link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact IT Experts Agency for managed IT support, cloud, infrastructure, and cybersecurity services.",
  alternates: { canonical: "/contact-us" },
};

const contactActions = [
  {
    icon: Phone,
    label: "Call us",
    href: "tel:+19095456727",
  },
  {
    icon: Mail,
    label: "Email us",
    href: "mailto:info@itexpertsagency.com",
  },
];

const locations = [
  {
    city: "Waterloo",
    address: "2–94 Churchill St, Waterloo, ON N2L 2X2",
    map: "https://www.google.com/maps/search/?api=1&query=2-94+Churchill+St+Waterloo+Ontario+N2L+2X2",
  },
  {
    city: "Cambridge",
    address: "130 Guelph Ave, Unit 9, Cambridge, ON N3C 1A4",
    map: "https://www.google.com/maps/search/?api=1&query=130+Guelph+Ave+Unit+9+Cambridge+Ontario+N3C+1A4",
  },
];

export default function ContactUsPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />

      <main>
        <InnerPageHero
          eyebrow="Contact us"
          title={
            <>
              Let’s solve what’s <span className="text-accent-300">next.</span>
            </>
          }
          description="Tell us about your goals, your current IT challenges, or the support you need. Our team will help you find a practical next step."
        />

        <section className="bg-slate-50 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Start a conversation"
                title="How can we help?"
                description="Share a few details and a member of our team will be in touch to discuss the right support for your business."
              />
              <div className="mt-9">
                <ContactForm />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="lg:pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  {contactActions.map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      aria-label={action.label}
                      title={action.label}
                      className="inline-flex h-12 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 text-accent-700 shadow-card transition-all duration-300 hover:border-primary-200 hover:shadow-soft motion-safe:hover:scale-105"
                    >
                      <action.icon className="size-5" aria-hidden="true" />
                      <span className="text-sm font-extrabold text-ink">
                        {action.label}
                      </span>
                    </a>
                  ))}
                  <WhatsAppLink />
                </div>

                <div className="bg-grid relative mt-6 min-h-[330px] overflow-hidden rounded-3xl border border-primary-100 bg-primary-50 p-6 shadow-card sm:p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-primary-100/70" />
                  <div className="relative">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-primary-700">
                      Our locations
                    </p>
                    <h2 className="mt-3 text-2xl font-extrabold tracking-[-0.03em] text-ink">
                      Serving businesses across Ontario and beyond.
                    </h2>
                  </div>

                  <div className="relative mt-8 grid gap-3">
                    {locations.map((location, index) => (
                      <a
                        key={location.city}
                        href={location.map}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary-200"
                      >
                        <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-primary-900 text-white">
                          <MapPin className="size-4" />
                          {index === 0 && (
                            <span className="absolute -inset-1 -z-10 animate-pulse-soft rounded-full bg-primary-300/50" />
                          )}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-extrabold text-ink">
                            {location.city}
                          </span>
                          <span className="mt-1 block text-sm leading-6 text-slate-600">
                            {location.address}
                          </span>
                        </span>
                        <Navigation className="mt-1 size-4 shrink-0 text-primary-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
