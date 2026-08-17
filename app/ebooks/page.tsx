import type { Metadata } from "next";

import { UpdatesPageTemplate } from "@/components/UpdatesPageTemplate";

export const metadata: Metadata = {
  title: "IT Ebooks & Guides",
  description:
    "Downloadable IT guides from IT Experts Agency covering cybersecurity, cloud, Microsoft 365, and technology planning.",
  alternates: { canonical: "/ebooks" },
};

export default function EbooksPage() {
  return <UpdatesPageTemplate type="Ebook" />;
}
