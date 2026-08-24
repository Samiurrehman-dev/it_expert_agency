import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { GRCServicePage } from "@/components/GRCServicePage";
import { OperatingSystemServicePage } from "@/components/OperatingSystemServicePage";
import {
  getGRCServicePage,
  grcCategorySlug,
  grcServicePages,
} from "@/lib/grc-service-pages-data";
import {
  getOSServicePage,
  osCategorySlug,
  osServicePages,
} from "@/lib/os-service-pages-data";

type OSServicePageProps = {
  params: { category: string; service: string };
};

export function generateStaticParams() {
  return [
    ...osServicePages.map((page) => ({
      category: osCategorySlug,
      service: page.slug,
    })),
    ...grcServicePages.map((page) => ({
      category: grcCategorySlug,
      service: page.slug,
    })),
  ];
}

export function generateMetadata({ params }: OSServicePageProps): Metadata {
  const page =
    params.category === osCategorySlug
      ? getOSServicePage(params.service)
      : params.category === grcCategorySlug
        ? getGRCServicePage(params.service)
        : undefined;
  if (!page) return {};

  const canonical = `/services/${params.category}/${page.slug}`;

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
  const isOSPage = params.category === osCategorySlug;
  const isGRCPage = params.category === grcCategorySlug;
  if (!isOSPage && !isGRCPage) notFound();

  const page = isOSPage
    ? getOSServicePage(params.service)
    : getGRCServicePage(params.service);
  if (!page) notFound();

  const categorySlug = isOSPage ? osCategorySlug : grcCategorySlug;
  const categoryName = isOSPage
    ? "Operating Systems & Endpoint Management"
    : "Governance, Risk & Compliance";
  const pageUrl = `https://itexpertsagency.com/services/${categorySlug}/${page.slug}`;
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
        name: categoryName,
        item: `https://itexpertsagency.com/services/${categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.navTitle,
        item: pageUrl,
      },
    ],
  };

  if (isGRCPage) {
    const grcPage = getGRCServicePage(params.service);
    if (!grcPage) notFound();

    const faqSchema = grcPage.faqs
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: grcPage.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : undefined;

    return (
      <GRCServicePage
        page={grcPage}
        schemas={[
          serviceSchema,
          breadcrumbSchema,
          ...(faqSchema ? [faqSchema] : []),
        ]}
      />
    );
  }

  const osPage = getOSServicePage(params.service);
  if (!osPage) notFound();

  return (
    <OperatingSystemServicePage
      page={osPage}
      schemas={[serviceSchema, breadcrumbSchema]}
    />
  );
}
