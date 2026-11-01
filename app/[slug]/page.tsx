import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrbitArticlePage } from "@/components/orbit/catalog-page";
import { LocalLandingPageView } from "@/components/services/local-landing-page-view";
import { findBySlug, ORBIT_LANDINGS } from "@/lib/orbit/catalog";
import { applyPageSeo } from "@/lib/apply-page-seo";
import {
  findLocalLanding,
  LOCAL_LANDINGS,
  localLandingJsonLd,
} from "@/lib/local-landings";
import { SITE_ORIGIN } from "@/lib/site-origin";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...ORBIT_LANDINGS.map((item) => ({ slug: item.slug })),
    ...LOCAL_LANDINGS.map((item) => ({ slug: item.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const local = findLocalLanding(slug);
  if (local) {
    return applyPageSeo(`/${local.slug}`, {
      title: local.seoTitle,
      description: local.seoDescription,
      keywords: local.keywords,
    });
  }

  const item = findBySlug(ORBIT_LANDINGS, slug);
  if (!item) return { title: "Global Orbit" };
  return applyPageSeo(item.href, { title: item.title, description: item.summary });
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;

  const local = findLocalLanding(slug);
  if (local) {
    const jsonLd = localLandingJsonLd(local, SITE_ORIGIN);
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LocalLandingPageView item={local} />
      </>
    );
  }

  const item = findBySlug(ORBIT_LANDINGS, slug);
  if (!item) notFound();
  return <OrbitArticlePage eyebrow="USA" title={item.title} summary={item.summary} />;
}
