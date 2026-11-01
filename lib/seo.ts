import type { Metadata } from "next";
import { absoluteUrl, DEFAULT_OG_IMAGE_PATH, SITE_ORIGIN } from "@/lib/site-origin";
import { FALLBACK_SITE } from "@/lib/site";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  canonical?: string;
  robotsIndex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  canonical,
  robotsIndex = true,
  ogTitle,
  ogDescription,
  ogImage,
}: PageMetaInput): Metadata {
  const pathNormalized = path.startsWith("/") ? path : `/${path}`;
  const url = path.startsWith("http") ? path : absoluteUrl(pathNormalized);
  const trimmedDescription = description.trim().slice(0, 160);
  const ogDesc = (ogDescription || trimmedDescription).slice(0, 200);
  const canonicalPath = canonical?.trim() || pathNormalized;
  const canonicalUrl = canonicalPath.startsWith("http") ? canonicalPath : absoluteUrl(canonicalPath);
  const ogImageUrl = ogImage?.trim() ? absoluteUrl(ogImage.trim()) : absoluteUrl(DEFAULT_OG_IMAGE_PATH);

  return {
    metadataBase: new URL(SITE_ORIGIN),
    // Absolute so root layout `title.template` does not append the company name twice.
    title: { absolute: title },
    description: trimmedDescription,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle?.trim() || title,
      description: ogDesc,
      locale: "en_US",
      type: "website",
      url,
      images: [{ url: ogImageUrl, alt: "Global Orbit — websites, apps, and SEO in USA" }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle?.trim() || title,
      description: ogDesc,
      images: [ogImageUrl],
    },
    robots: {
      index: robotsIndex,
      follow: robotsIndex,
    },
  };
}

export function organizationJsonLd(input: {
  name: string;
  description: string;
  email?: string;
  phone?: string;
  address?: string;
  url?: string;
}) {
  const url = input.url || SITE_ORIGIN;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}/#organization`,
    name: input.name,
    url,
    logo: absoluteUrl("/brand/logo-emblem-square.png"),
    image: absoluteUrl("/brand/og-default.jpg"),
    description: input.description || FALLBACK_SITE.defaultSeoDescription,
    alternateName: ["Global Orbit USA", "Website development company United States"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "United States",
      addressCountry: "US",
      streetAddress: input.address || undefined,
    },
    email: input.email || undefined,
    telephone: input.phone || undefined,
    areaServed: [{ "@type": "Country", name: "United States" }, "IN", "NP"],
    sameAs: [] as string[],
  };
}

export function websiteJsonLd(input: { name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: input.name,
    description: input.description,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_ORIGIN}/blogs?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessJsonLd(input: {
  name: string;
  description: string;
  email?: string;
  phone?: string;
  address?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: input.name,
    description: input.description,
    url: SITE_ORIGIN,
    image: absoluteUrl("/brand/og-default.jpg"),
    logo: absoluteUrl("/brand/logo-emblem-square.png"),
    email: input.email,
    telephone: input.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "United States",
      addressCountry: "US",
      streetAddress: input.address,
    },
    areaServed: { "@type": "Country", name: "USA" },
    priceRange: "$$",
    knowsAbout: [
      "Website development USA",
      "SEO services USA",
      "Digital marketing USA",
      "Mobile app development USA",
      "Custom software development USA",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital services in USA",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website development USA" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Google ranking USA" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital marketing USA" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile app development USA" } },
      ],
    },
  };
}
