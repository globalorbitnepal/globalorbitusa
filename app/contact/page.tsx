import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/contact-page-view";
import { applyPageSeo } from "@/lib/apply-page-seo";

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/contact", {
    title: "Contact · Free Consultation",
    description:
      "Contact Global Orbit — free consultation for websites, apps, ERP, SaaS, and SEO. USA, India, and United States sales offices. WhatsApp +977-9812322339.",
  });
}

export default function ContactPage() {
  return <ContactPageView />;
}
