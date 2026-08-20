import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OperatingSystemServicePage } from "@/components/OperatingSystemServicePage";
import {
  getOSServicePage,
  osCategorySlug,
  osServicePages,
} from "@/lib/os-service-pages-data";

type OSServicePageProps = {
  params: { category: string; service: string };
};

export function generateStaticParams() {
  return osServicePages.map((page) => ({
    category: osCategorySlug,
    service: page.slug,
  }));
}

export function generateMetadata({ params }: OSServicePageProps): Metadata {
  if (params.category !== osCategorySlug) return {};
  const page = getOSServicePage(params.service);
  if (!page) return {};

  const canonical = `/services/${osCategorySlug}/${page.slug}`;

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "website",
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      siteName: "IT Experts Agency",
    },
  };
}

export default function OSServiceDetailPage({ params }: OSServicePageProps) {
  if (params.category !== osCategorySlug) notFound();
  const page = getOSServicePage(params.service);
  if (!page) notFound();

  const pageUrl = `https://itexpertsagency.com/services/${osCategorySlug}/${page.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "IT Experts Agency",
      url: "https://itexpertsagency.com",
    },
    serviceType: page.navTitle,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${page.navTitle} service coverage`,
      itemListElement: page.coverage.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.description,
        },
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://itexpertsagency.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Operating Systems & Endpoint Management",
        item: `https://itexpertsagency.com/services/${osCategorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.navTitle,
        item: pageUrl,
      },
    ],
  };

  return (
    <OperatingSystemServicePage
      page={page}
      schemas={[serviceSchema, breadcrumbSchema]}
    />
  );
}
