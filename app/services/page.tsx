import type { Metadata } from "next";

import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InnerPageHero } from "@/components/inner-page-hero";
import { ServicesSection } from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Infrastructure, Cloud & Managed IT Services",
  description:
    "Explore IT Experts Agency services across infrastructure, cloud, operating systems, application platforms, security, and managed operations.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="overflow-x-clip bg-white">
      <Header />
      <main>
        <InnerPageHero
          eyebrow="Services"
          title="Every layer of IT, covered."
          description="From physical infrastructure to cloud platforms, application engineering, security, and 24×7 managed operations—build the exact delivery model your business needs."
        />
        <ServicesSection />
        <CTASection
          eyebrow="Build your delivery team"
          heading="Need complete coverage or one hard-to-find specialist?"
          description="Tell us about your environment, toolchain, and coverage goals. We’ll shape a practical team and service model around them."
          buttonLabel="Talk to an expert"
          buttonHref="/contact-us"
        />
      </main>
      <Footer />
    </div>
  );
}
