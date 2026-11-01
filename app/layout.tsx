import type { Metadata, Viewport } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { GlobalJsonLd } from "@/components/seo/global-json-ld";
import { listVisibleNavItems } from "@/lib/db/nav-items";
import { getSiteSettings } from "@/lib/db/site-settings";
import { getFooterConfig } from "@/lib/footer-config-store";
import { getSiteChrome } from "@/lib/site-chrome-store";
import {
  FALLBACK_FOOTER_NAV,
  FALLBACK_HEADER_NAV,
  FALLBACK_SITE,
  type FallbackNavItem,
} from "@/lib/site";
import { SITE_ORIGIN, absoluteUrl } from "@/lib/site-origin";
import { keywordsString } from "@/lib/seo-keywords";
import "./globals.css";

export const dynamic = "force-dynamic";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#07070b",
};

function toNavItems(
  items: { label: string; href: string; location: "HEADER" | "FOOTER" }[],
  fallback: FallbackNavItem[],
): FallbackNavItem[] {
  if (items.length === 0) {
    return fallback;
  }

  return items.map((item) => ({
    label: item.label,
    href: item.href,
    location: item.location,
  }));
}

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const title = settings?.defaultSeoTitle || FALLBACK_SITE.defaultSeoTitle;
  const description =
    settings?.defaultSeoDescription || FALLBACK_SITE.defaultSeoDescription;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: title,
      template: `%s · ${settings?.companyName || FALLBACK_SITE.companyName}`,
    },
    description,
    keywords: keywordsString(),
    openGraph: {
      title,
      description,
      locale: "en_US",
      type: "website",
      url: SITE_ORIGIN,
      images: [
        {
          url: absoluteUrl("/brand/og-default.jpg"),
          width: 1200,
          height: 630,
          alt: "Global Orbit — website development, apps, SEO and digital marketing in USA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/brand/og-default.jpg")],
    },
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: settings?.companyName || FALLBACK_SITE.companyName,
    },
    icons: {
      icon: [
        { url: "/icons/favicon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/brand/logo-emblem-square.png", sizes: "512x512", type: "image/png" },
        { url: "/icons/pwa-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/icons/apple-touch-180.png", sizes: "180x180", type: "image/png" }],
      shortcut: [{ url: "/icons/favicon-48.png", type: "image/png" }],
    },
    other: {
      "mobile-web-app-capable": "yes",
    },
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const [settings, chrome, footerRows, footer] = await Promise.all([
    getSiteSettings(),
    getSiteChrome(),
    listVisibleNavItems("FOOTER"),
    getFooterConfig(),
  ]);

  const companyName = chrome?.companyName || settings?.companyName || FALLBACK_SITE.companyName;
  const tagline = chrome?.footerTagline || chrome?.tagline || settings?.tagline || FALLBACK_SITE.tagline;

  return (
    <html lang="en" className="orbit-font-root orbit-app-mode h-full antialiased">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){function s(){document.documentElement.style.setProperty('--app-vh',(window.innerHeight*0.01)+'px');}s();window.addEventListener('resize',s,{passive:true});window.addEventListener('orientationchange',s,{passive:true});})();",
          }}
        />
      </head>
      <body className="orbit-app-body min-h-full overflow-x-clip antialiased">
        <GlobalJsonLd
          companyName={companyName}
          description={settings?.defaultSeoDescription || FALLBACK_SITE.defaultSeoDescription}
          email={chrome?.email || settings?.email || FALLBACK_SITE.email}
          phone={chrome?.phone || settings?.phone || FALLBACK_SITE.phone}
          address={chrome?.address || settings?.address || FALLBACK_SITE.address}
        />
        <SiteShell
          companyName={companyName}
          tagline={tagline}
          headerLogoSrc={chrome?.headerLogoSrc}
          headerItems={FALLBACK_HEADER_NAV}
          footerItems={toNavItems(footerRows, FALLBACK_FOOTER_NAV)}
          email={chrome?.email || settings?.email || FALLBACK_SITE.email}
          phone={chrome?.phone || settings?.phone || FALLBACK_SITE.phone}
          address={chrome?.address || settings?.address || FALLBACK_SITE.address}
          footer={footer}
        >
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
