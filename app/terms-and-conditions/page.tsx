import type { Metadata } from "next";
import { OrbitArticlePage } from "@/components/orbit/catalog-page";
import { applyPageSeo } from "@/lib/apply-page-seo";

const BODY = `These Terms & Conditions govern use of theglobalorbit.com and related services operated by Global Orbit Pvt Ltd.

By using our site or engaging our services, you agree to these terms. Project work is governed by separate statements of work or contracts that take precedence where they conflict with this page.

Content on this website is provided for general information. We strive for accuracy but do not warrant that every description, price, or timeline on the site is current; formal quotes are provided in writing.

You may not misuse the site — including attempting unauthorized access, scraping at scale, or uploading malicious code. Intellectual property in our demos, copy, and software remains ours unless assigned in writing.

Liability is limited to the extent permitted by law. We are not liable for indirect or consequential losses arising from use of the site or third-party integrations.

Governing law and disputes are handled per the jurisdiction stated in your signed agreement; otherwise USA law applies for domestic clients unless otherwise agreed.

Contact support@theglobalorbit.com for questions about these terms.`;

export async function generateMetadata(): Promise<Metadata> {
  return applyPageSeo("/terms-and-conditions", {
    title: "Terms & Conditions",
    description: "Terms of use for Global Orbit websites and services.",
  });
}

export default function TermsPage() {
  return (
    <OrbitArticlePage
      eyebrow="Legal"
      title="Terms & Conditions"
      summary="Rules for using our website and engaging Global Orbit for digital services."
      body={BODY}
    />
  );
}
