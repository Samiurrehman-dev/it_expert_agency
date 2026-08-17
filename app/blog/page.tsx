import type { Metadata } from "next";

import { UpdatesPageTemplate } from "@/components/UpdatesPageTemplate";

export const metadata: Metadata = {
  title: "IT Blog",
  description:
    "Practical IT articles from IT Experts Agency covering managed IT, cybersecurity, cloud, and infrastructure.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <UpdatesPageTemplate type="Blog" />;
}
