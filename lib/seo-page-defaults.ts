import {
  ORBIT_LANDINGS,
  ORBIT_PACKAGES,
  ORBIT_SERVICE_PAGES,
  ORBIT_SOFTWARE,
  type OrbitCard,
} from "@/lib/orbit/catalog";
import { SERVICE_CATALOG } from "@/lib/content/services";
import { LOCAL_LANDINGS } from "@/lib/local-landings";
import { keywordsCsv, keywordsString, USA_AGENCY_KEYWORDS } from "@/lib/seo-keywords";

export type PageSeoDefaults = {
  title: string;
  description: string;
  keywords: string[];
  focusKeyword: string;
};

function trimDesc(text: string, max = 158): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1).trim()}…`;
}

function cardSeo(card: OrbitCard, focus: string, extraKw: string[] = [], titleOverride?: string): PageSeoDefaults {
  const title = titleOverride ?? `${card.title} | Global Orbit USA`;
  const description = trimDesc(
    `${card.summary} USA-based studio: websites, SEO, apps, ERP, and digital marketing with measurable delivery.`,
  );
  return {
    title,
    description,
    keywords: keywordsCsv([focus, ...extraKw]),
    focusKeyword: focus,
  };
}

const STATIC: Record<string, PageSeoDefaults> = {
  "/": {
    title: "Global Orbit | Web Development & Software Company in USA",
    description: trimDesc(
      "Global Orbit helps businesses in USA with website development, custom software, mobile apps, SEO and digital marketing. Contact our United States team for a consultation.",
    ),
    keywords: keywordsCsv(),
    focusKeyword: "web development company usa",
  },
  "/about": {
    title: "About Global Orbit · Web & Software Studio USA",
    description: trimDesc(
      "Enterprise websites, custom apps, ERP, and SEO from United States with teams in USA, India, and global clients — one accountable studio.",
    ),
    keywords: keywordsCsv(["about Global Orbit", "software company usa"]),
    focusKeyword: "web development company usa",
  },
  "/contact": {
    title: "Contact · Free Website & SEO Consultation USA",
    description: trimDesc(
      "Free consultation for website development, SEO, social media ads, and web apps. United States sales office — WhatsApp, phone, and email.",
    ),
    keywords: keywordsCsv(["contact web developer usa", "free website consultation united states"]),
    focusKeyword: "website consultation usa",
  },
  "/projects": {
    title: "Portfolio · Websites & Apps Built in USA",
    description: trimDesc(
      "Selected websites, ecommerce, hotel, trek, SaaS, and ERP projects shipped by Global Orbit USA — performance, SEO, and polish.",
    ),
    keywords: keywordsCsv(["web design portfolio usa", "website examples united states"]),
    focusKeyword: "website portfolio usa",
  },
  "/services": {
    title: "Digital Solutions USA · Web, SEO, Ads & Automation",
    description: trimDesc(
      "Website development, ecommerce, SEO, Google ranking, digital marketing, social ads, and AI automation — one USA studio.",
    ),
    keywords: keywordsCsv(["digital solutions usa", "it services united states"]),
    focusKeyword: "digital marketing usa",
  },
  "/orbit-software/web-apps": {
    title: "Web Apps USA · Next.js, PWA & Cloud Dashboards",
    description: trimDesc(
      "Custom web applications, PWAs, and operator dashboards from United States — Next.js, secure APIs, and SEO-ready delivery for USA, India, and the US.",
    ),
    keywords: keywordsCsv(["web app development usa", "PWA usa", "next.js agency united states"]),
    focusKeyword: "web app development usa",
  },
  "/orbit-software/android-apps": {
    title: "Android App Development USA · Kotlin & Play Store",
    description: trimDesc(
      "Native Android apps for U.S. businesses — Kotlin, Play Store launch, billing, and aftercare from Global Orbit United States.",
    ),
    keywords: keywordsCsv(["android app development usa", "kotlin app united states", "play store usa"]),
    focusKeyword: "android app development usa",
  },
  "/orbit-software/ios-apps": {
    title: "iOS App Development USA · SwiftUI & App Store",
    description: trimDesc(
      "iPhone and iPad apps with SwiftUI, TestFlight, and App Store launch — designed and engineered in United States for USA, India, and US clients.",
    ),
    keywords: keywordsCsv(["ios app development usa", "swiftui united states", "app store usa"]),
    focusKeyword: "ios app development usa",
  },
  "/orbit-software": {
    title: "ERP & Business Software USA · Billing, Hotel, POS, CRM",
    description: trimDesc(
      "Billing, hotel PMS, warehouse, restaurant POS, CRM, and SaaS suites built and supported from USA for operators who need reliability.",
    ),
    keywords: keywordsCsv(["erp usa", "billing software usa", "hotel software usa"]),
    focusKeyword: "erp software usa",
  },
  "/packages": {
    title: "Website & SEO Packages USA · Transparent Pricing",
    description: trimDesc(
      "Starter to enterprise website packages and SEO retainers in USD — clear scope, mobile-first builds, and search foundations.",
    ),
    keywords: keywordsCsv(["website package price usa", "seo package usa"]),
    focusKeyword: "website package usa",
  },
  "/blogs": {
    title: "Blog · SEO, Web Development & Digital Marketing USA",
    description: trimDesc(
      "Guides on websites, SEO, ads, and software from Global Orbit — practical notes for U.S. businesses growing online.",
    ),
    keywords: keywordsCsv(["seo blog usa", "web development tips usa"]),
    focusKeyword: "seo tips usa",
  },
  "/careers": {
    title: "Careers · Web, SEO & Software Jobs United States",
    description: trimDesc(
      "Join Global Orbit USA — developers, designers, and SEO specialists building world-class websites and software.",
    ),
    keywords: keywordsCsv(["web developer jobs usa", "seo jobs united states"]),
    focusKeyword: "web developer jobs usa",
  },
  "/studio": {
    title: "Design Studio USA · Premium Websites & Brand UI",
    description: trimDesc(
      "Ultra HD website design, motion, and brand systems from United States — built for conversion and search visibility.",
    ),
    keywords: keywordsCsv(["website design studio usa", "ui ux usa"]),
    focusKeyword: "website design usa",
  },
  "/inside-orbit": {
    title: "Inside Orbit · How We Ship Websites & Software",
    description: trimDesc(
      "Process, tools, and standards behind Global Orbit deliveries — from discovery to SEO launch and aftercare.",
    ),
    keywords: keywordsCsv(["software development process usa"]),
    focusKeyword: "web development usa",
  },
  "/demo": {
    title: "Software Demo · ERP, Hotel, POS & SaaS",
    description: trimDesc(
      "Book a live demo of billing, hotel, POS, CRM, or SaaS products from Global Orbit USA.",
    ),
    keywords: keywordsCsv(["erp demo usa"]),
    focusKeyword: "software demo usa",
  },
  "/privacy-policy": {
    title: "Privacy Policy · Global Orbit USA",
    description: "How Global Orbit Pvt Ltd handles data for website, app, and marketing clients.",
    keywords: keywordsCsv(["privacy policy usa"]),
    focusKeyword: "privacy policy",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions · Global Orbit USA",
    description: "Terms for website development, software, SEO, and digital marketing services.",
    keywords: keywordsCsv(["terms of service usa"]),
    focusKeyword: "terms and conditions",
  },
};

const SERVICE_FOCUS: Record<string, string> = {
  "website-development-usa": "website development usa",
  "seo-optimization-usa": "seo services usa",
  "ecommerce-development-usa": "ecommerce website usa",
  "google-ranking-services-usa": "google ranking usa",
  "erp-crm-software-usa": "crm software usa",
  "digital-marketing-usa": "digital marketing usa",
  "ai-automation": "ai automation usa",
};

const LANDING_FOCUS: Record<string, string> = {
  "website-development-usa": "website development usa",
  "custom-software-development-usa": "custom software development usa",
  "web-development-usa": "web development usa",
  "erp-software-usa": "erp software usa",
  "seo-services-usa": "seo services usa",
  "local-seo-usa": "local seo usa",
  "hotel-website-development-usa": "hotel website usa",
  "trekking-website-development-usa": "trekking website usa",
  "travel-website-development-usa": "travel website usa",
  "restaurant-website-development-usa": "restaurant website usa",
  "resort-website-development-usa": "resort website usa",
  "spa-website-development-usa": "spa website usa",
  "ecommerce-website-development-usa": "ecommerce development usa",
  "booking-website-development-usa": "booking website usa",
};

function buildDynamicMap(): Record<string, PageSeoDefaults> {
  const map: Record<string, PageSeoDefaults> = { ...STATIC };

  for (const item of ORBIT_SERVICE_PAGES) {
    const focus = SERVICE_FOCUS[item.slug] ?? `${item.slug.replace(/-/g, " ")} usa`;
    // Service funnel pages: commercial “company / services” framing
    map[item.href] = cardSeo(item, focus, [], `${item.title} Services | United States · Global Orbit`);
  }

  for (const item of ORBIT_LANDINGS) {
    const focus = LANDING_FOCUS[item.slug] ?? `${item.slug.replace(/-/g, " ")}`;
    // Industry / long-tail landings: distinct from /service/* to avoid title cannibalization
    map[item.href] = cardSeo(item, focus, [], `${item.title} | USA Guide · Global Orbit`);
  }

  for (const item of ORBIT_PACKAGES) {
    map[item.href] = cardSeo(item, `${item.slug.replace(/-/g, " ")} usa`, ["website price usa"]);
  }

  const softwareSeen = new Set<string>();
  for (const item of ORBIT_SOFTWARE) {
    if (softwareSeen.has(item.href)) continue;
    softwareSeen.add(item.href);
    map[item.href] = cardSeo(item, `${item.title.toLowerCase()} usa`);
  }

  for (const landing of LOCAL_LANDINGS) {
    map[`/${landing.slug}`] = {
      title: landing.seoTitle,
      description: trimDesc(landing.seoDescription),
      keywords: keywordsCsv(landing.keywords),
      focusKeyword: landing.focusKeyword,
    };
  }

  for (const svc of SERVICE_CATALOG) {
    const path = `/services/${svc.slug}`;
    map[path] = {
      title: `${svc.seoTitle} · Global Orbit`,
      description: trimDesc(svc.seoDescription),
      keywords: keywordsCsv([svc.slug.replace(/-/g, " "), ...USA_AGENCY_KEYWORDS.slice(0, 8)]),
      focusKeyword: svc.slug.replace(/-/g, " "),
    };
  }

  return map;
}

const SEO_BY_PATH = buildDynamicMap();

export function getPageSeoDefaults(pathname: string): PageSeoDefaults | undefined {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return SEO_BY_PATH[path];
}

export function listSeoDefaultPaths(): string[] {
  return Object.keys(SEO_BY_PATH).sort();
}

/** Legacy homepage titles that must not win over current USA SEO defaults. */
const STALE_TITLES = new Set([
  "Web Developer USA · Website, SEO, Apps & Digital Marketing",
  "Web Developer USA · Website, SEO, Apps & Digital Marketing | Global Orbit",
]);

export function mergeSeoFallback(
  pathname: string,
  fallback: { title: string; description: string; keywords?: string[] },
): { title: string; description: string; keywords?: string[]; focusKeyword?: string } {
  const defaults = getPageSeoDefaults(pathname);
  if (!defaults) return fallback;
  const fallbackTitle = fallback.title?.trim() || "";
  const useDefaultsTitle = !fallbackTitle || STALE_TITLES.has(fallbackTitle);
  return {
    title: useDefaultsTitle ? defaults.title : fallbackTitle,
    description: fallback.description?.trim() ? fallback.description : defaults.description,
    keywords: fallback.keywords?.length ? fallback.keywords : defaults.keywords,
    focusKeyword: defaults.focusKeyword,
  };
}

export { keywordsString };
