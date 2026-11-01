import type { Metadata } from "next";
import { OrbitCatalogPage } from "@/components/orbit/catalog-page";
import { ORBIT_SOLUTIONS } from "@/lib/orbit/catalog";
import { applyPageSeo } from "@/lib/apply-page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/services", {
    title: "Digital Solutions USA · Web, SEO, Ads & Automation",
    description: "Web development, ecommerce, SEO, ads, and automation from Global Orbit USA.",
  });
}

export default function ServicesPage() {
  return (
    <OrbitCatalogPage
      eyebrow="Solutions"
      title="Complete digital solutions for your business"
      lede="From websites to Google rankings — one studio across the United States, India, and Nepal."
      items={ORBIT_SOLUTIONS}
    />
  );
}
