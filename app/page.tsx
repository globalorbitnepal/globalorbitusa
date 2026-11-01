import { OrbitHomeView } from "@/components/orbit/home-view";
import { getHeroConfig } from "@/lib/hero-store";
import { getNeedConfig } from "@/lib/need-store";
import { getWorkConfig } from "@/lib/work-store";
import { getSoftwareConfig } from "@/lib/software-store";
import { getHomeSurfaceConfig } from "@/lib/home-surface-store";
import { applyPageSeo } from "@/lib/apply-page-seo";
import { getPageSeoDefaults } from "@/lib/seo-page-defaults";
import { FALLBACK_SITE } from "@/lib/site";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  // Prefer code SEO defaults (and Admin page-seo overrides) over chrome/settings
  // so sitewide defaultSeoTitle cannot silently replace homepage intent.
  const defaults = getPageSeoDefaults("/") ?? {
    title: FALLBACK_SITE.defaultSeoTitle,
    description: FALLBACK_SITE.defaultSeoDescription,
    keywords: [],
    focusKeyword: "web development company usa",
  };
  const meta = await applyPageSeo("/", {
    title: defaults.title,
    description: defaults.description,
    keywords: defaults.keywords,
  });
  return meta;
}

export default async function HomePage() {
  const [hero, need, work, software, surface] = await Promise.all([
    getHeroConfig(),
    getNeedConfig(),
    getWorkConfig(),
    getSoftwareConfig(),
    getHomeSurfaceConfig(),
  ]);
  const videoSrc = hero.videoSrc || "/brand/hero-product.mp4";

  return (
    <>
      <link rel="preload" href={videoSrc} as="video" type="video/mp4" fetchPriority="high" />
      <OrbitHomeView hero={hero} need={need} work={work} software={software} surface={surface} />
    </>
  );
}
