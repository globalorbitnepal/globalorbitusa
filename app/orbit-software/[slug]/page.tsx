import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { CustomAppsPageView } from "@/components/orbit-software/custom-apps-page-view";
import { SoftwareProductPageView } from "@/components/orbit-software/software-product-page-view";
import { OrbitArticlePage } from "@/components/orbit/catalog-page";
import { findBySlug, ORBIT_SOFTWARE } from "@/lib/orbit/catalog";
import { getSoftwareProductContent, softwareProductTitle } from "@/lib/software-products";
import { softwareProductJsonLd } from "@/lib/software-product-jsonld";
import { isSoftwareProductSlug, softwareProductPath } from "@/lib/software-product-slugs";
import { getSiteSettings } from "@/lib/db/site-settings";
import { getPlatformPageConfig } from "@/lib/platform-page-store";
import {
  isPlatformPageSlug,
  platformPagePath,
  type PlatformPageSlug,
} from "@/lib/platform-page-slugs";
import { applyPageSeo } from "@/lib/apply-page-seo";
import { buildPageMetadata } from "@/lib/seo";
import { FALLBACK_SITE } from "@/lib/site";
import { absoluteUrl, SITE_ORIGIN } from "@/lib/site-origin";

type Props = { params: Promise<{ slug: string }> };

const PLATFORM_SEO: Record<
  PlatformPageSlug,
  { title: string; keywords: string[]; serviceName: string; breadcrumb: string }
> = {
  "web-apps": {
    title: "Web Apps · Next.js & PWA",
    serviceName: "Web application development",
    breadcrumb: "Web Apps",
    keywords: ["web app development USA", "Next.js PWA", "progressive web app United States", "Global Orbit"],
  },
  "android-apps": {
    title: "Android Apps · Kotlin & Play Store",
    serviceName: "Android application development",
    breadcrumb: "Android Apps",
    keywords: ["Android app development USA", "Kotlin app United States", "Play Store launch", "Global Orbit"],
  },
  "ios-apps": {
    title: "iOS Apps · SwiftUI & App Store",
    serviceName: "iOS application development",
    breadcrumb: "iOS Apps",
    keywords: ["iOS app development USA", "SwiftUI app", "TestFlight App Store", "Global Orbit"],
  },
};

export function generateStaticParams() {
  return ORBIT_SOFTWARE.filter((item) => item.slug !== "custom-apps").map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "custom-apps") {
    return buildPageMetadata({
      title: "Web Apps",
      description: "Redirect to Global Orbit Web Apps.",
      path: "/orbit-software/web-apps",
    });
  }
  if (isPlatformPageSlug(slug)) {
    const config = await getPlatformPageConfig(slug);
    const meta = PLATFORM_SEO[slug];
    const description = `${config.heroTitleBefore} ${config.heroTitleAccent}. ${config.heroLede}`.trim().slice(0, 160);
    return applyPageSeo(platformPagePath(slug), {
      title: meta.title,
      description,
      keywords: meta.keywords,
    });
  }
  if (isSoftwareProductSlug(slug)) {
    const content = getSoftwareProductContent(slug);
    return applyPageSeo(softwareProductPath(slug), {
      title: content.seo.title,
      description: content.seo.description,
      keywords: content.seo.keywords,
    });
  }
  const item = findBySlug(ORBIT_SOFTWARE, slug);
  if (!item) return { title: "Software" };
  return applyPageSeo(item.href, { title: item.title, description: item.summary });
}

function renderSoftwareProductPage(slug: Parameters<typeof getSoftwareProductContent>[0]) {
  const content = getSoftwareProductContent(slug);
  const productName = softwareProductTitle(slug);
  const { breadcrumbLd, webPageLd, softwareLd } = softwareProductJsonLd(content, productName);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />
      <SoftwareProductPageView content={content} />
    </>
  );
}

async function renderPlatformPage(slug: PlatformPageSlug) {
  const [config, settings] = await Promise.all([getPlatformPageConfig(slug), getSiteSettings()]);
  const companyName = settings?.companyName || FALLBACK_SITE.companyName;
  const meta = PLATFORM_SEO[slug];
  const pageUrl = absoluteUrl(platformPagePath(slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: meta.serviceName,
    description: config.heroLede,
    provider: { "@type": "Organization", name: companyName, url: SITE_ORIGIN },
    areaServed: ["NP", "IN", "US"],
    url: pageUrl,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "ERP Software", item: absoluteUrl("/orbit-software") },
      { "@type": "ListItem", position: 3, name: meta.breadcrumb, item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <link rel="preload" href={config.heroVideoSrc} as="video" fetchPriority="high" />
        <CustomAppsPageView config={config} platform={slug} />
    </>
  );
}

export default async function SoftwareDetailPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "custom-apps") {
    permanentRedirect("/orbit-software/web-apps");
  }

  if (isPlatformPageSlug(slug)) {
    return renderPlatformPage(slug);
  }

  if (isSoftwareProductSlug(slug)) {
    return renderSoftwareProductPage(slug);
  }

  const item = findBySlug(ORBIT_SOFTWARE, slug);
  if (!item) notFound();
  return <OrbitArticlePage eyebrow="ERP Software" title={item.title} summary={item.summary} />;
}
