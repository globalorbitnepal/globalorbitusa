export type ErpStat = { value: string; label: string };

export type ErpSuite = {
  slug: string;
  index: string;
  kicker: string;
  title: string;
  body: string;
  bullets: string[];
  href: string;
  accent: string;
  ui: "billing" | "hotel" | "ota" | "warehouse" | "factory" | "pos" | "crm" | "saas" | "web" | "android" | "ios" | "tenant";
};

export const ERP_HERO = {
  eyebrow: "Orbit Software · ERP",
  titleBefore: "Operations software",
  titleAccent: "for the floor",
  titleAfter: "not a slide deck",
  lede:
    "Billing, hotels, OTAs, warehouses, factories, restaurants, CRM, and SaaS control planes — built in United States, India, and the USA for operators in 25+ countries. Same gold-and-ink language as the Global Orbit homepage. No recycled homepage reels.",
};

export const ERP_STATS: ErpStat[] = [
  { value: "12", label: "Product lines" },
  { value: "25+", label: "Countries live" },
  { value: "99.9%", label: "Uptime targets" },
  { value: "4–16 wk", label: "Typical go-live" },
];

export const ERP_SUITES: ErpSuite[] = [
  {
    slug: "billing-software",
    index: "01",
    kicker: "Finance",
    title: "Billing Software",
    body: "GST-ready invoices, payment tracking, and tax packs for USA and export markets — one ledger your accountant can audit.",
    bullets: ["Invoice + credit notes", "eSewa / Stripe / bank refs", "Aging and GST reports"],
    href: "/orbit-software/billing-software",
    accent: "#f0c43a",
    ui: "billing",
  },
  {
    slug: "hotel-management-system",
    index: "02",
    kicker: "Hospitality",
    title: "Hotel Management",
    body: "Reservations, rooms, housekeeping, and front desk on one board — channel-ready when you grow beyond walk-ins.",
    bullets: ["Availability calendar", "Check-in / check-out", "Housekeeping queues"],
    href: "/orbit-software/hotel-management-system",
    accent: "#c4b5fd",
    ui: "hotel",
  },
  {
    slug: "ota-management-system",
    index: "03",
    kicker: "Distribution",
    title: "OTA Management",
    body: "Agency booking desk for packages, suppliers, and payments — channel connectors added when APIs and contracts are in place.",
    bullets: ["Channel mapping", "Rate plans", "Reservation inbox"],
    href: "/orbit-software/ota-management-system",
    accent: "#38bdf8",
    ui: "ota",
  },
  {
    slug: "warehouse-management",
    index: "04",
    kicker: "Inventory",
    title: "Warehouse Management",
    body: "Bins, pick lists, and stock across locations — operators see what is on the floor, not last week’s export.",
    bullets: ["Multi-location stock", "Pick / pack", "Reorder alerts"],
    href: "/orbit-software/warehouse-management",
    accent: "#34d399",
    ui: "warehouse",
  },
  {
    slug: "manufacturing-erp",
    index: "05",
    kicker: "Production",
    title: "Manufacturing ERP",
    body: "BOM, work orders, and quality gates so factory leads stop chasing WhatsApp for “where is batch 14?”",
    bullets: ["Work order board", "BOM versions", "QC hold / release"],
    href: "/orbit-software/manufacturing-erp",
    accent: "#fb923c",
    ui: "factory",
  },
  {
    slug: "restaurant-pos",
    index: "06",
    kicker: "F&B",
    title: "Restaurant POS",
    body: "Tables, KDS, splits, and close-of-day — built for United States service speed, not a generic retail till.",
    bullets: ["Table map", "Kitchen tickets", "Shift reports"],
    href: "/orbit-software/restaurant-pos",
    accent: "#f87171",
    ui: "pos",
  },
  {
    slug: "crm-software",
    index: "07",
    kicker: "Revenue",
    title: "CRM Software",
    body: "Leads, pipelines, and follow-ups your sales floor will actually open — tied to the same auth as billing.",
    bullets: ["Pipeline stages", "Task reminders", "Win / loss notes"],
    href: "/orbit-software/crm-software",
    accent: "#818cf8",
    ui: "crm",
  },
  {
    slug: "saas-business-suite",
    index: "08",
    kicker: "Platform",
    title: "SaaS Business Suite",
    body: "Billing, CRM, and analytics in one operator console when you need a product line, not five logins.",
    bullets: ["Shared roles", "Usage meters", "One dashboard"],
    href: "/orbit-software/saas-business-suite",
    accent: "#a78bfa",
    ui: "saas",
  },
  {
    slug: "web-apps",
    index: "09",
    kicker: "Clients",
    title: "Web Apps",
    body: "Portals and admin on Next.js — SEO for the marketing shell, app speed for the logged-in work.",
    bullets: ["PWA-ready", "Role dashboards", "API-first"],
    href: "/orbit-software/web-apps",
    accent: "#60a5fa",
    ui: "web",
  },
  {
    slug: "android-apps",
    index: "10",
    kicker: "Field",
    title: "Android Apps",
    body: "Kotlin field tools with push and offline queues against your Node backend — Play Store when you are ready.",
    bullets: ["Material UI", "FCM", "Offline sync"],
    href: "/orbit-software/android-apps",
    accent: "#3ddc84",
    ui: "android",
  },
  {
    slug: "ios-apps",
    index: "11",
    kicker: "Apple",
    title: "iOS Apps",
    body: "SwiftUI clients with TestFlight discipline — same APIs as web and Android, Apple-grade motion.",
    bullets: ["App Store flow", "Widgets", "Sign in with Apple"],
    href: "/orbit-software/ios-apps",
    accent: "#e4e4e7",
    ui: "ios",
  },
  {
    slug: "saas-management-system",
    index: "12",
    kicker: "Multi-tenant",
    title: "SaaS Management",
    body: "Tenants, plans, invoices, and admin for the product you sell — the control plane behind your own SaaS.",
    bullets: ["Tenant isolation", "Plan catalog", "Admin audit"],
    href: "/orbit-software/saas-management-system",
    accent: "#f0c43a",
    ui: "tenant",
  },
];

export const ERP_PILLARS = [
  {
    title: "One operator model",
    body: "Roles, audit logs, and environments documented so finance and the floor share the same source of truth.",
  },
  {
    title: "Integrations that survive launch",
    body: "Payments, OTAs, SMS, and legacy ERP via stable APIs — not a one-off Zapier maze.",
  },
  {
    title: "Handover you can run",
    body: "Staging, runbooks, and a named engineer. We do not vanish after DNS cuts over.",
  },
];

export const ERP_INDUSTRIES = [
  { title: "Hotels & lodges", body: "PMS + OTA sync for properties that sell rooms, not PDFs." },
  { title: "Treks & travel", body: "Departures, inventory, and agent commissions in one stack." },
  { title: "F&B", body: "POS, KDS, and close reports for restaurants and cafés." },
  { title: "Factories", body: "Work orders and quality when WhatsApp is the current MES." },
  { title: "Wholesale", body: "Warehouses, GST billing, and B2B credit terms." },
  { title: "SaaS founders", body: "Tenants and meters so you can sell software, not spreadsheets." },
];

export const ERP_PROCESS = [
  { title: "Floor workshop", body: "We map how teams already work before we draw screens." },
  { title: "Scope in writing", body: "In / out of MVP, integrations, and a date finance can hold." },
  { title: "Build on staging", body: "Clickable demos weekly — not decks you cannot operate." },
  { title: "Go-live & hypercare", body: "Training, monitoring, and 30 days with a named contact." },
];

export const ERP_FAQ = [
  {
    q: "Is Orbit Software a copy of the Global Orbit homepage?",
    a: "No. This page is the product catalog. Homepage videos stay on the homepage. ERP consoles here are coded UI, not marketing reels.",
  },
  {
    q: "Can we start with one module?",
    a: "Yes. Most operators begin with billing or hotel PMS, then add OTA, warehouse, or CRM on the same auth model.",
  },
  {
    q: "Do you deploy in USA?",
    a: "Yes — United States delivery with India and USA studios. Hosting can sit in your cloud or ours.",
  },
  {
    q: "Custom vs packaged?",
    a: "Packaged lines for speed; custom apps when the floor does not fit a box. Web, Android, and iOS clients share Node APIs.",
  },
];

export const ERP_CTA = {
  title: "Need software the floor will use?",
  lede: "Share your operation, integrations, and go-live. We reply with a milestone plan — not a generic brochure.",
  primaryLabel: "Book free consultation",
  primaryHref: "/contact",
  secondaryLabel: "Web Apps",
  secondaryHref: "/orbit-software/web-apps",
};

export const ERP_KEYWORDS = [
  "ERP software USA",
  "hotel management system USA",
  "billing software United States",
  "OTA channel manager USA",
  "restaurant POS USA",
  "warehouse management software",
  "manufacturing ERP USA",
  "CRM software USA",
  "Orbit Software Global Orbit",
];
