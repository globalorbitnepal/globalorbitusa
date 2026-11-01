import type { Metadata } from "next";
import Link from "next/link";
import { OrbitCtaBand, OrbitPageHero } from "@/components/orbit/page-hero";
import { ORBIT_PACKAGES } from "@/lib/orbit/catalog";
import { applyPageSeo } from "@/lib/apply-page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/packages", {
    title: "Packages",
    description: "Website and SEO packages from Global Orbit USA.",
  });
}

export default function PackagesPage() {
  return (
    <>
      <OrbitPageHero
        eyebrow="Packages"
        title="Clear starting prices"
        lede="Landing pages from NPR 15,000. Business sites NPR 25,000–80,000. Custom ecommerce and ERP from NPR 1,00,000+."
        headingId="packages-hero"
      />
      <section className="mx-auto grid max-w-[1280px] gap-5 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {ORBIT_PACKAGES.map((item) => (
          <Link key={item.slug} href={item.href} className="orbit-card rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm font-semibold text-[#f0c43a]">{item.price}</p>
            <p className="mt-2 text-sm text-white/65">{item.summary}</p>
          </Link>
        ))}
      </section>
      <OrbitCtaBand />
    </>
  );
}
