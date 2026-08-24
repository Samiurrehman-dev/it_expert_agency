import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryPillarPage } from "@/components/CategoryPillarPage";
import { GovernanceRiskComplianceLandingPage } from "@/components/GovernanceRiskComplianceLandingPage";
import { OperatingSystemsLandingPage } from "@/components/OperatingSystemsLandingPage";
import {
  categoryPageContent,
  getCategoryPageContent,
} from "@/lib/category-pages-data";
import { serviceCategories } from "@/lib/services-data";

type CategoryPageProps = {
  params: { category: string };
};

export function generateStaticParams() {
  return categoryPageContent.map((page) => ({ category: page.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const content = getCategoryPageContent(params.category);

  if (!content) return {};

  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    alternates: {
      canonical: `/services/${content.slug}`,
    },
    openGraph: {
      type: "website",
      title: content.metaTitle,
      description: content.metaDescription,
      url: `/services/${content.slug}`,
      siteName: "IT Experts Agency",
    },
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const content = getCategoryPageContent(params.category);
  const category = serviceCategories.find(
    (item) => item.slug === params.category,
  );

  if (!content || !category) notFound();

  const relatedCategories = content.relatedSlugs
    .map((slug) => serviceCategories.find((item) => item.slug === slug))
    .filter((item): item is (typeof serviceCategories)[number] =>
      Boolean(item),
    );

  const pageUrl = `https://itexpertsagency.com/services/${content.slug}`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: category.title,
    description: content.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "IT Experts Agency",
      url: "https://itexpertsagency.com",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Place", name: "Gulf Cooperation Council (GCC)" },
    ],
    serviceType: category.title,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${category.title} capabilities`,
      itemListElement: category.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
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
        name: "Services",
        item: "https://itexpertsagency.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.title,
        item: pageUrl,
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  if (content.slug === "operating-systems-endpoint-management") {
    return (
      <OperatingSystemsLandingPage
        category={category}
        content={content}
        schemas={[serviceSchema, breadcrumbSchema]}
      />
    );
  }

  if (content.slug === "governance-risk-compliance") {
    return (
      <GovernanceRiskComplianceLandingPage
        category={category}
        schemas={[serviceSchema, breadcrumbSchema, faqSchema]}
      />
    );
  }

  return (
    <CategoryPillarPage
      category={category}
      content={content}
      relatedCategories={relatedCategories}
      schemas={[serviceSchema, breadcrumbSchema, faqSchema]}
    />
  );
}
