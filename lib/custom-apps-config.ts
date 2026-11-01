import type { PlatformPageSlug } from "@/lib/platform-page-slugs";

export type CustomAppsStat = {
  value: string;
  label: string;
};

export type CustomAppsCard = {
  title: string;
  body: string;
};

export type CustomAppsStep = {
  title: string;
  body: string;
};

export type CustomAppsVideoClip = {
  title: string;
  body: string;
  videoSrc: string;
};

export type CustomAppsConfig = {
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroTitleAfter: string;
  heroLede: string;
  heroVideoSrc: string;
  appVideosEyebrow: string;
  appVideosTitle: string;
  appVideosTitleAccent: string;
  appVideosLede: string;
  appVideos: CustomAppsVideoClip[];
  stats: CustomAppsStat[];
  overviewEyebrow: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  capabilitiesEyebrow: string;
  capabilitiesTitle: string;
  capabilitiesTitleAccent: string;
  capabilitiesLede: string;
  capabilities: CustomAppsCard[];
  platformsEyebrow: string;
  platformsTitle: string;
  platforms: CustomAppsCard[];
  useCasesEyebrow: string;
  useCasesTitle: string;
  useCases: CustomAppsCard[];
  processEyebrow: string;
  processTitle: string;
  processLede: string;
  processSteps: CustomAppsStep[];
  stackEyebrow: string;
  stackTitle: string;
  stackItems: CustomAppsCard[];
  deliverablesEyebrow: string;
  deliverablesTitle: string;
  deliverablesBullets: string[];
  assuranceTitle: string;
  assuranceBullets: string[];
  ctaTitle: string;
  ctaLede: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
};

export const DEFAULT_CUSTOM_APPS: CustomAppsConfig = {
  heroEyebrow: "Orbit Software · Custom Apps",
  heroTitleBefore: "Web & mobile apps",
  heroTitleAccent: "built for operators",
  heroTitleAfter: "not demo-day slides",
  heroLede:
    "Booking portals, staff dashboards, customer apps, and field tools — engineered on Next.js and Node.js with the same premium bar as our homepage. One studio in USA, India, and the USA; deployments in 25+ countries.",
  heroVideoSrc: "/brand/custom-apps/01-customer-portal.mp4",
  appVideosEyebrow: "Live product motion",
  appVideosTitle: "Four app experiences",
  appVideosTitleAccent: "we ship",
  appVideosLede:
    "Customer portal, admin control, mobile booking, and field ops — each clip shows the motion, density, and polish of a production Global Orbit build.",
  appVideos: [
    {
      title: "Customer portal",
      body: "Self-service booking, profile, and payments — web app speed with app-like flows.",
      videoSrc: "/brand/custom-apps/01-customer-portal.mp4",
    },
    {
      title: "Admin dashboard",
      body: "Role-based tables, filters, and approvals for operators who live in the product daily.",
      videoSrc: "/brand/custom-apps/02-admin-dashboard.mp4",
    },
    {
      title: "Mobile booking",
      body: "Thumb-first UI, sticky CTAs, and offline-friendly steps for guides and guests on the move.",
      videoSrc: "/brand/custom-apps/03-mobile-booking.mp4",
    },
    {
      title: "Field operations",
      body: "Dispatch, checklists, and status sync for teams away from the desk.",
      videoSrc: "/brand/custom-apps/04-field-operations.webm",
    },
  ],
  stats: [
    { value: "120+", label: "Custom apps shipped" },
    { value: "15+", label: "Industries served" },
    { value: "99.9%", label: "Uptime targets on launch" },
    { value: "4–16 wk", label: "Typical MVP to production" },
  ],
  overviewEyebrow: "Why custom",
  overviewTitle: "When off-the-shelf software fights your floor",
  overviewParagraphs: [
    "Hotels, treks, factories, and SaaS founders need software that matches how teams already work — not the other way around. We design operator-first flows, then harden them for SEO, analytics, roles, and handover your staff can run.",
    "Every build includes documented APIs, staging environments, and a named project lead. You get web-first delivery with mobile-ready UI — PWA, responsive, or native wrappers when the roadmap calls for it.",
  ],
  capabilitiesEyebrow: "What we build",
  capabilitiesTitle: "Product surfaces",
  capabilitiesTitleAccent: "that scale",
  capabilitiesLede: "From customer-facing booking to back-office control — one codebase, one design language, one support line.",
  capabilities: [
    {
      title: "Customer portals",
      body: "Self-service booking, invoices, loyalty, and support — with auth, notifications, and payment hooks.",
    },
    {
      title: "Staff & admin apps",
      body: "Role-based dashboards for front desk, warehouse, finance, and leadership with audit trails.",
    },
    {
      title: "Field & operator tools",
      body: "Offline-tolerant workflows for guides, drivers, technicians, and sales teams on any device.",
    },
    {
      title: "Partner & B2B hubs",
      body: "Agent logins, commission rules, inventory sync, and reporting your partners actually use.",
    },
    {
      title: "Integrations layer",
      body: "Payment gateways, channel managers, SMS, WhatsApp, ERP, and legacy systems via stable APIs.",
    },
    {
      title: "Launch & aftercare",
      body: "Monitoring, error tracking, runbooks, and iteration sprints — not a silent handoff.",
    },
  ],
  platformsEyebrow: "Platforms",
  platformsTitle: "Web first. Mobile ready.",
  platforms: [
    {
      title: "Progressive web apps",
      body: "Installable, fast, and SEO-friendly — ideal for bookings and portals in USA and global markets.",
    },
    {
      title: "Responsive admin",
      body: "Dense data tables, filters, and approvals tuned for desktop and tablet operations teams.",
    },
    {
      title: "API-first backend",
      body: "Node.js services with clear contracts so mobile or third-party clients can ship later without rework.",
    },
  ],
  useCasesEyebrow: "Where it lands",
  useCasesTitle: "Categories we ship every quarter",
  useCases: [
    {
      title: "Hospitality & travel",
      body: "OTA search, hotel ops, guide assignment, and guest messaging tied to your brand site.",
    },
    {
      title: "Retail & ecommerce",
      body: "Catalog, cart, fulfillment, and vendor portals with GST-ready billing where required.",
    },
    {
      title: "Health & wellness",
      body: "Appointment flows, therapist schedules, packages, and HIPAA-aware patterns when needed.",
    },
    {
      title: "SaaS & platforms",
      body: "Multi-tenant apps, usage meters, billing, and admin consoles for your own product line.",
    },
  ],
  processEyebrow: "How we deliver",
  processTitle: "From discovery to production",
  processLede: "Fixed milestones finance can hold — with demos you can click, not decks you cannot.",
  processSteps: [
    {
      title: "Discovery & scope",
      body: "Workshops, user flows, written scope, and timeline with clear in/out of MVP.",
    },
    {
      title: "Design system",
      body: "Premium UI aligned to your brand and our homepage gold/dark language where it fits.",
    },
    {
      title: "Build & integrate",
      body: "Next.js frontends, Node APIs, tests, staging, and integration with payments and ERP.",
    },
    {
      title: "Launch & operate",
      body: "SEO pass, monitoring, training, and support sprints after go-live.",
    },
  ],
  stackEyebrow: "Engineering",
  stackTitle: "Stack on every engagement",
  stackItems: [
    { title: "Next.js", body: "App Router, SSR, edge-ready marketing and app shells." },
    { title: "Node.js", body: "REST and webhooks, Orbit-style CMS patterns, secure auth." },
    { title: "Data & auth", body: "PostgreSQL, Prisma, roles, sessions, and audit logs." },
    { title: "Quality", body: "TypeScript, CI, Core Web Vitals, and structured SEO." },
  ],
  deliverablesEyebrow: "Deliverables",
  deliverablesTitle: "What you receive at handover",
  deliverablesBullets: [
    "Production deployment with environment documentation",
    "Admin and operator training sessions recorded for your team",
    "API documentation and integration runbooks",
    "Analytics, error monitoring, and backup checklist",
    "30-day hypercare window with named engineering contact",
    "Roadmap for phase two features with estimate ranges",
  ],
  assuranceTitle: "Enterprise expectations",
  assuranceBullets: [
    "NDA and data handling aligned to your jurisdiction",
    "Weekly written status — no surprise invoices",
    "Code ownership transferred to your org or repo",
    "Same studio that ships Global Orbit’s own Orbit control plane",
  ],
  ctaTitle: "Planning a custom app?",
  ctaLede: "Share your users, integrations, and go-live date. We will reply with a milestone plan and ballpark investment.",
  ctaPrimaryLabel: "Book free consultation",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "View all Orbit software",
  ctaSecondaryHref: "/orbit-software",
};

function parseString(raw: unknown, fallback: string) {
  return typeof raw === "string" && raw.trim() ? raw : fallback;
}

function parseStringArray(raw: unknown, fallback: string[]) {
  if (!Array.isArray(raw)) return fallback;
  const items = raw.map((item) => (typeof item === "string" ? item.trim() : "")).filter(Boolean);
  return items.length ? items : fallback;
}

function parseStats(raw: unknown, fallback: CustomAppsStat[]): CustomAppsStat[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      value: parseString(data.value, fb.value),
      label: parseString(data.label, fb.label),
    };
  });
}

function parseCards(raw: unknown, fallback: CustomAppsCard[]): CustomAppsCard[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
    };
  });
}

function parseSteps(raw: unknown, fallback: CustomAppsStep[]): CustomAppsStep[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
    };
  });
}

function parseAppVideos(raw: unknown, fallback: CustomAppsVideoClip[]): CustomAppsVideoClip[] {
  if (!Array.isArray(raw)) return fallback;
  return fallback.map((fb, index) => {
    const item = raw[index];
    const data = item && typeof item === "object" ? (item as Record<string, unknown>) : {};
    return {
      title: parseString(data.title, fb.title),
      body: parseString(data.body, fb.body),
      videoSrc: parseString(data.videoSrc, fb.videoSrc),
    };
  });
}

export function parseCustomAppsConfig(raw: unknown, base: CustomAppsConfig = DEFAULT_CUSTOM_APPS): CustomAppsConfig {
  const data = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
  const str = (key: keyof CustomAppsConfig, fallback: string) => parseString(data[key], fallback);
  return {
    heroEyebrow: str("heroEyebrow", base.heroEyebrow),
    heroTitleBefore: str("heroTitleBefore", base.heroTitleBefore),
    heroTitleAccent: str("heroTitleAccent", base.heroTitleAccent),
    heroTitleAfter: str("heroTitleAfter", base.heroTitleAfter),
    heroLede: str("heroLede", base.heroLede),
    heroVideoSrc: str("heroVideoSrc", base.heroVideoSrc),
    appVideosEyebrow: str("appVideosEyebrow", base.appVideosEyebrow),
    appVideosTitle: str("appVideosTitle", base.appVideosTitle),
    appVideosTitleAccent: str("appVideosTitleAccent", base.appVideosTitleAccent),
    appVideosLede: str("appVideosLede", base.appVideosLede),
    appVideos: parseAppVideos(data.appVideos, base.appVideos),
    stats: parseStats(data.stats, base.stats),
    overviewEyebrow: str("overviewEyebrow", base.overviewEyebrow),
    overviewTitle: str("overviewTitle", base.overviewTitle),
    overviewParagraphs: parseStringArray(data.overviewParagraphs, [...base.overviewParagraphs]),
    capabilitiesEyebrow: str("capabilitiesEyebrow", base.capabilitiesEyebrow),
    capabilitiesTitle: str("capabilitiesTitle", base.capabilitiesTitle),
    capabilitiesTitleAccent: str("capabilitiesTitleAccent", base.capabilitiesTitleAccent),
    capabilitiesLede: str("capabilitiesLede", base.capabilitiesLede),
    capabilities: parseCards(data.capabilities, base.capabilities),
    platformsEyebrow: str("platformsEyebrow", base.platformsEyebrow),
    platformsTitle: str("platformsTitle", base.platformsTitle),
    platforms: parseCards(data.platforms, base.platforms),
    useCasesEyebrow: str("useCasesEyebrow", base.useCasesEyebrow),
    useCasesTitle: str("useCasesTitle", base.useCasesTitle),
    useCases: parseCards(data.useCases, base.useCases),
    processEyebrow: str("processEyebrow", base.processEyebrow),
    processTitle: str("processTitle", base.processTitle),
    processLede: str("processLede", base.processLede),
    processSteps: parseSteps(data.processSteps, base.processSteps),
    stackEyebrow: str("stackEyebrow", base.stackEyebrow),
    stackTitle: str("stackTitle", base.stackTitle),
    stackItems: parseCards(data.stackItems, base.stackItems),
    deliverablesEyebrow: str("deliverablesEyebrow", base.deliverablesEyebrow),
    deliverablesTitle: str("deliverablesTitle", base.deliverablesTitle),
    deliverablesBullets: parseStringArray(data.deliverablesBullets, [...base.deliverablesBullets]),
    assuranceTitle: str("assuranceTitle", base.assuranceTitle),
    assuranceBullets: parseStringArray(data.assuranceBullets, [...base.assuranceBullets]),
    ctaTitle: str("ctaTitle", base.ctaTitle),
    ctaLede: str("ctaLede", base.ctaLede),
    ctaPrimaryLabel: str("ctaPrimaryLabel", base.ctaPrimaryLabel),
    ctaPrimaryHref: str("ctaPrimaryHref", base.ctaPrimaryHref),
    ctaSecondaryLabel: str("ctaSecondaryLabel", base.ctaSecondaryLabel),
    ctaSecondaryHref: str("ctaSecondaryHref", base.ctaSecondaryHref),
  };
}

export const DEFAULT_WEB_APPS = parseCustomAppsConfig({
  heroEyebrow: "Orbit Software · Web Apps",
  heroTitleBefore: "Progressive web apps",
  heroTitleAccent: "that feel native",
  heroTitleAfter: "and rank on Google",
  heroLede:
    "Installable PWAs, customer portals, and admin consoles on Next.js — fast first paint, SEO built in, and one codebase for marketing plus product.",
  heroVideoSrc: "/brand/platform-apps/web/hero-main.mp4",
  appVideosEyebrow: "Web product motion",
  appVideosTitle: "Four web experiences",
  appVideosTitleAccent: "in the browser",
  appVideosLede:
    "Portal, admin, responsive booking, and installable PWA — widescreen product motion built on Next.js, not recycled mobile reels.",
  appVideos: [
    {
      title: "Customer portal",
      body: "Logged-in dashboards in the browser — auth, billing, and support in one tab.",
      videoSrc: "/brand/platform-apps/web/01-portal.mp4",
    },
    {
      title: "Operations admin",
      body: "Multi-column tables, filters, and exports for HQ teams on desktop.",
      videoSrc: "/brand/platform-apps/web/02-admin.mp4",
    },
    {
      title: "Responsive booking",
      body: "Mobile web flows that still feel at home on 27-inch monitors.",
      videoSrc: "/brand/platform-apps/web/03-responsive.mp4",
    },
    {
      title: "Installable PWA",
      body: "Add-to-home-screen, offline shell, and push-ready web app packaging.",
      videoSrc: "/brand/platform-apps/web/04-pwa.webm",
    },
  ],
  ctaTitle: "Planning a web app?",
});

export const DEFAULT_ANDROID_APPS = parseCustomAppsConfig({
  heroEyebrow: "Orbit Software · Android Apps",
  heroTitleBefore: "Android apps",
  heroTitleAccent: "built for the field",
  heroTitleAfter: "Play Store ready",
  heroLede:
    "Kotlin-forward Android builds for booking, logistics, and staff — Material motion, push notifications, and secure APIs to your Node backend.",
  heroVideoSrc: "/brand/platform-apps/android/hero-main.mp4",
  appVideosEyebrow: "Android motion",
  appVideosTitle: "Four Android builds",
  appVideosTitleAccent: "on device",
  appVideosLede:
    "Play Store, Compose UI, FCM push, and offline queues — portrait-native motion with Material rhythm, separate from our web and iOS reels.",
  appVideos: [
    {
      title: "Play Store journey",
      body: "Onboarding, permissions, and deep links from your marketing site.",
      videoSrc: "/brand/platform-apps/android/01-playstore.mp4",
    },
    {
      title: "Jetpack Compose UI",
      body: "Material motion, bottom sheets, and dark mode for long shifts.",
      videoSrc: "/brand/platform-apps/android/02-compose.mp4",
    },
    {
      title: "FCM & booking",
      body: "Thumb-first booking with push alerts tied to your Node APIs.",
      videoSrc: "/brand/platform-apps/android/03-fcm.mp4",
    },
    {
      title: "Offline queue",
      body: "Cached actions and background sync when connectivity drops.",
      videoSrc: "/brand/platform-apps/android/04-offline.mp4",
    },
  ],
  platformsTitle: "Android delivery",
  platforms: [
    { title: "Google Play", body: "Listing assets, staged rollouts, and crash reporting with Play Console." },
    { title: "Enterprise MDM", body: "Private builds and device policies for operator fleets." },
    { title: "Kotlin & Compose", body: "Modern UI toolkit with testable architecture and CI builds." },
  ],
  stackItems: [
    { title: "Kotlin", body: "Jetpack Compose, Navigation, and coroutines for responsive UI." },
    { title: "Node APIs", body: "Shared backend with web — one auth model across clients." },
    { title: "Firebase", body: "Push, analytics, and remote config when your roadmap needs it." },
    { title: "Quality", body: "Espresso tests, ProGuard rules, and Play pre-launch reports." },
  ],
  ctaTitle: "Planning an Android app?",
});

export const DEFAULT_IOS_APPS = parseCustomAppsConfig({
  heroEyebrow: "Orbit Software · iOS Apps",
  heroTitleBefore: "iOS apps",
  heroTitleAccent: "with Apple-grade polish",
  heroTitleAfter: "TestFlight to App Store",
  heroLede:
    "SwiftUI and UIKit builds for premium brands — smooth motion, Sign in with Apple, in-app purchases, and Node.js backends your web team already runs.",
  heroVideoSrc: "/brand/platform-apps/ios/hero-main.webm",
  appVideosEyebrow: "iOS motion",
  appVideosTitle: "Four Apple builds",
  appVideosTitleAccent: "native feel",
  appVideosLede:
    "App Store, SwiftUI, TestFlight, and widgets — clips tuned for iPhone aspect and Apple motion, not shared with Android or web folders.",
  appVideos: [
    {
      title: "App Store flow",
      body: "Privacy labels, onboarding, and universal links from campaigns.",
      videoSrc: "/brand/platform-apps/ios/01-store.mp4",
    },
    {
      title: "SwiftUI product",
      body: "Native navigation, haptics, and Dynamic Type for accessibility.",
      videoSrc: "/brand/platform-apps/ios/02-swiftui.mp4",
    },
    {
      title: "TestFlight beta",
      body: "Staged releases with crash logs before public launch.",
      videoSrc: "/brand/platform-apps/ios/03-testflight.mp4",
    },
    {
      title: "Widgets & sync",
      body: "Home-screen widgets and background refresh against your APIs.",
      videoSrc: "/brand/platform-apps/ios/04-widgets.mp4",
    },
  ],
  platformsTitle: "Apple platforms",
  platforms: [
    { title: "iPhone & iPad", body: "Adaptive layouts from SE to Pro Max and tablet split views." },
    { title: "App Store Connect", body: "Metadata, screenshots, and phased release management." },
    { title: "Sign in with Apple", body: "Privacy-first auth aligned with App Review guidelines." },
  ],
  stackItems: [
    { title: "SwiftUI", body: "Declarative UI with Combine and async/await networking." },
    { title: "Node APIs", body: "Shared services with web and Android — one product backend." },
    { title: "TestFlight", body: "Beta cohorts, feedback, and crash symbolication before launch." },
    { title: "Quality", body: "XCTest, accessibility audits, and App Store review prep." },
  ],
  ctaTitle: "Planning an iOS app?",
});

export function getDefaultPlatformConfig(slug: PlatformPageSlug): CustomAppsConfig {
  switch (slug) {
    case "web-apps":
      return DEFAULT_WEB_APPS;
    case "android-apps":
      return DEFAULT_ANDROID_APPS;
    case "ios-apps":
      return DEFAULT_IOS_APPS;
    default:
      return DEFAULT_WEB_APPS;
  }
}

export function parsePlatformPageConfig(slug: PlatformPageSlug, raw: unknown): CustomAppsConfig {
  return parseCustomAppsConfig(raw, getDefaultPlatformConfig(slug));
}
