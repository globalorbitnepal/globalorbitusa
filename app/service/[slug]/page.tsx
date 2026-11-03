import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrbitArticlePage } from "@/components/orbit/catalog-page";
import { AiAutomationPageView } from "@/components/services/ai-automation-page-view";
import { WebsiteDevelopmentPageView } from "@/components/services/website-development-page-view";
import { AI_FAQ, AI_HERO, AI_KEYWORDS } from "@/lib/ai-automation-page";
import { findBySlug, ORBIT_SERVICE_PAGES } from "@/lib/orbit/catalog";
import { applyPageSeo } from "@/lib/apply-page-seo";
import { SITE_ORIGIN } from "@/lib/site-origin";
import { getWebsiteDevelopmentPageConfig } from "@/lib/website-development-store";

type Props = { params: Promise<{ slug: string }> };

const WEBSITE_DEV_SLUG = "website-development-usa";
const AI_AUTOMATION_SLUG = "ai-automation";

const WEBSITE_DEV_KEYWORDS = [
  "website development usa",
  "web design united states",
  "custom website usa",
  "professional website development",
  "Next.js website usa",
  "SEO friendly website usa",
  "business website united states",
  "affordable website design usa",
  "hire website developer usa",
  "website design denver",
  "custom wordpress developer usa",
  "Global Orbit web development",
];

export function generateStaticParams() {
  return ORBIT_SERVICE_PAGES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(ORBIT_SERVICE_PAGES, slug);
  if (!item) return { title: "Service" };

  if (slug === WEBSITE_DEV_SLUG) {
    return applyPageSeo(item.href, {
      title: "Website Development USA | Custom Business Websites · Global Orbit",
      description:
        "Long-form guide to professional website development in the USA — custom design, Next.js and WordPress builds, e-commerce, hospitality, technical SEO, Core Web Vitals, pricing factors, and FAQs. Denver-based Global Orbit. Call +1 (303) 217-6150.",
      keywords: WEBSITE_DEV_KEYWORDS,
    });
  }

  if (slug === AI_AUTOMATION_SLUG) {
    return applyPageSeo(item.href, {
      title: "AI Automation USA · Workflows, WhatsApp, Invoice Capture",
      description: AI_HERO.lede,
      keywords: AI_KEYWORDS,
    });
  }

  return applyPageSeo(item.href, { title: item.title, description: item.summary });
}

function aiAutomationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "AI Automation USA",
        description: AI_HERO.lede,
        provider: {
          "@type": "Organization",
          name: "Global Orbit",
          areaServed: { "@type": "Country", name: "USA" },
        },
        areaServed: "USA",
        serviceType: "AI workflow automation",
      },
      {
        "@type": "FAQPage",
        mainEntity: AI_FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

async function websiteDevJsonLd() {
  const config = await getWebsiteDevelopmentPageConfig();
  const pageUrl = `${SITE_ORIGIN}/service/website-development-usa`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${SITE_ORIGIN}/services` },
          { "@type": "ListItem", position: 3, name: "Website Development USA", item: pageUrl },
        ],
      },
      {
        "@type": "WebPage",
        name: "Website Development USA | Global Orbit",
        description: config.hero.lede,
        url: pageUrl,
      },
      {
        "@type": "Service",
        name: "Website Development USA",
        description: config.hero.lede,
        provider: {
          "@type": "Organization",
          name: "Global Orbit",
          areaServed: { "@type": "Country", name: "USA" },
        },
        areaServed: "USA",
        serviceType: "Website design and development",
        url: pageUrl,
      },
      {
        "@type": "FAQPage",
        mainEntity: config.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = findBySlug(ORBIT_SERVICE_PAGES, slug);
  if (!item) notFound();

  if (slug === WEBSITE_DEV_SLUG) {
    const [config, jsonLd] = await Promise.all([
      getWebsiteDevelopmentPageConfig(),
      websiteDevJsonLd(),
    ]);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <WebsiteDevelopmentPageView config={config} />
      </>
    );
  }

  if (slug === AI_AUTOMATION_SLUG) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aiAutomationJsonLd()) }}
        />
        <AiAutomationPageView />
      </>
    );
  }

  return <OrbitArticlePage eyebrow="Service" title={item.title} summary={item.summary} />;
}
