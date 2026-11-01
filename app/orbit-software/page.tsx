import type { Metadata } from "next";
import { OrbitSoftwarePageView } from "@/components/orbit-software/orbit-software-page-view";
import { ERP_FAQ, ERP_HERO, ERP_KEYWORDS, ERP_SUITES } from "@/lib/orbit-software-page";
import { applyPageSeo } from "@/lib/apply-page-seo";
import { absoluteUrl } from "@/lib/site-origin";

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/orbit-software", {
    title: "ERP Software USA · Orbit Software",
    description:
      "Orbit Software from Global Orbit: hotel PMS, billing, OTA, warehouse, manufacturing ERP, restaurant POS, CRM, and SaaS — operator systems built in USA.",
    keywords: ERP_KEYWORDS,
  });
}

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Orbit Software · ERP",
        description: ERP_HERO.lede,
        url: absoluteUrl("/orbit-software"),
      },
      {
        "@type": "ItemList",
        itemListElement: ERP_SUITES.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.title,
          url: absoluteUrl(item.href),
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: ERP_FAQ.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}

export default function OrbitSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }} />
      <OrbitSoftwarePageView />
    </>
  );
}
