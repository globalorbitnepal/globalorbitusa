import type { Metadata } from "next";
import { ContactPageView } from "@/components/contact/contact-page-view";
import { applyPageSeo } from "@/lib/apply-page-seo";
import { USA_PHONE_DISPLAY } from "@/lib/contact-info";

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/contact", {
    title: "Contact · Free Consultation",
    description:
      `Contact Global Orbit — free consultation for websites, apps, ERP, SaaS, and SEO. USA, India, and United States sales offices. Call or WhatsApp ${USA_PHONE_DISPLAY}.`,
  });
}

export default function ContactPage() {
  return <ContactPageView />;
}
