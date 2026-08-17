import type { Metadata } from "next";

import { UpdatesPageTemplate } from "@/components/UpdatesPageTemplate";

export const metadata: Metadata = {
  title: "IT Case Studies",
  description:
    "Explore IT Experts Agency case studies covering managed IT, security, Microsoft 365, backup, and business continuity.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return <UpdatesPageTemplate type="Case Study" />;
}
