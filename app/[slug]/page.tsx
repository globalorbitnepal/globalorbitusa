import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OrbitArticlePage } from "@/components/orbit/catalog-page";
import { findBySlug, ORBIT_LANDINGS } from "@/lib/orbit/catalog";
import { applyPageSeo } from "@/lib/apply-page-seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ORBIT_LANDINGS.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = findBySlug(ORBIT_LANDINGS, slug);
  if (!item) return { title: "Global Orbit" };
  return applyPageSeo(item.href, { title: item.title, description: item.summary });
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const item = findBySlug(ORBIT_LANDINGS, slug);
  if (!item) notFound();
  return <OrbitArticlePage eyebrow="USA" title={item.title} summary={item.summary} />;
}
