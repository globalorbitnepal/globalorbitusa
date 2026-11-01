import type { Metadata } from "next";
import Link from "next/link";
import { OrbitCtaBand, OrbitPageHero, OrbitPremiumPillars, OrbitPremiumTrustStrip } from "@/components/orbit/page-hero";
import { OrbitPremiumReveal } from "@/components/orbit/orbit-premium-reveal";
import { applyPageSeo } from "@/lib/apply-page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/demo", {
    title: "Software Demo",
    description: "Request a live demo of Global Orbit software products.",
  });
}

const DEMOS = [
  { title: "Billing & invoicing", body: "GST-ready billing, recurring invoices, and customer ledgers." },
  { title: "Hotel management", body: "Reservations, housekeeping, channel manager hooks, and front-desk speed." },
  { title: "Restaurant POS", body: "Floor plans, kitchen tickets, and end-of-day reporting." },
  { title: "CRM & pipelines", body: "Leads, follow-ups, and sales visibility for distributed teams." },
];

export default function DemoPage() {
  return (
    <div className="orbit-premium-page min-h-screen">
      <OrbitPageHero
        eyebrow="Demo"
        title="See the software in motion"
        lede="Book a walkthrough of billing, hotel, POS, CRM, or the SaaS suite — live from our United States studio."
        headingId="demo-hero"
      />
      <OrbitPremiumTrustStrip />
      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-[min(1000px,96vw)] gap-5 sm:grid-cols-2">
          {DEMOS.map((item, index) => (
            <OrbitPremiumReveal key={item.title} delayMs={index * 60}>
              <article className="orbit-premium-pillar h-full rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.body}</p>
              </article>
            </OrbitPremiumReveal>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-white/55">
          <Link href="/contact" className="text-[#f0c43a] underline-offset-2 hover:underline">
            Contact us
          </Link>{" "}
          to schedule — we will match you with the right product specialist.
        </p>
      </section>
      <OrbitPremiumPillars />
      <OrbitCtaBand />
    </div>
  );
}
