import type { SoftwareProductContent } from "@/lib/software-product-types";

export const OTA_MANAGEMENT: SoftwareProductContent = {
  slug: "ota-management-system",
  seo: {
    title: "OTA Management System | Travel Booking Management | Global Orbit",
    description:
      "Online travel agency and tour operator software for centralized bookings, supplier inventory, packages, commissions, and operational reporting — from Global Orbit.",
    keywords: [
      "OTA management system",
      "online travel agency software",
      "travel agency management software",
      "booking management software",
      "travel booking management system",
      "reservation management software",
      "tour operator management software",
      "hotel channel management system",
    ],
  },
  eyebrow: "Orbit Software · Travel distribution",
  h1: "OTA Management System",
  titleAccent: "for agency operations",
  intro:
    "Centralize reservations, supplier contracts, packages, and booking finances for travel agencies and tour desks. Global Orbit OTA management software helps operators track status, changes, and payments without losing context across email threads and spreadsheets.",
  accent: "#38bdf8",
  applicationCategory: "BusinessApplication",
  heroStats: [
    { value: "Bookings hub", label: "Status tracking" },
    { value: "Suppliers", label: "Accommodation & tours" },
    { value: "Packages", label: "Product builder" },
    { value: "Finance", label: "Commissions & dues" },
  ],
  trust: {
    heading: "Clarity between PMS, OTA desk, and channel tools",
    paragraphs: [
      "An OTA management system is not the same as a hotel property management system or a channel manager. This product focuses on how travel sellers organize inventory they resell, customer bookings, and supplier settlements.",
      "Direct two-way integrations with global OTAs such as Booking.com or Agoda require provider APIs, commercial agreements, and implementation work. We describe connector status honestly in your project plan rather than listing logos without code behind them.",
    ],
  },
  overview: {
    heading: "What OTA management software does",
    paragraphs: [
      "Travel businesses sell combinations of hotels, transport, activities, and guides. Each booking has a customer, a supplier, a payment schedule, and a change history. Without a system, agents retype confirmations and finance discovers margin errors weeks later.",
      "Global Orbit OTA software gives agents a workspace to create bookings, attach travellers, record supplier references, and see which files need follow-up today.",
      "When you also run a hotel PMS, we align terminology so room inventory is not fought over by two silos — integration depth is scoped per deployment.",
    ],
  },
  problems: {
    title: "Problems travel desks face",
    items: [
      { title: "Scattered confirmations", body: "Email PDFs with no link to customer payments or supplier payables." },
      { title: "Change and cancellation chaos", body: "Amendments without audit trail confuse both traveller and supplier." },
      { title: "Commission reconciliation", body: "Agent and supplier commissions tracked manually at month-end." },
      { title: "Product catalog drift", body: "Rates in WhatsApp messages differ from the website — one catalog fixes the source." },
    ],
  },
  coreFeatures: {
    title: "Core features",
    items: [
      { title: "Booking records", body: "Central file per trip with travellers, dates, status, and supplier references." },
      { title: "Supplier and accommodation library", body: "Contracts, allotments, and notes your desk relies on." },
      { title: "Package builder", body: "Combine hotel nights, transfers, and activities with sell price and cost." },
      { title: "Customer and agent accounts", body: "B2C travellers and B2B agent partners with separate terms." },
      { title: "Payment status", body: "Customer receipts and supplier payables visible on the booking." },
      { title: "Operational calendar", body: "Arrivals and departures across files for the duty manager." },
    ],
  },
  advancedFeatures: {
    title: "Advanced capabilities",
    items: [
      { title: "Commission tracking", body: "When enabled, rules attribute margin to agents or branches for reconciliation." },
      { title: "Notifications", body: "Email or messaging hooks for confirmations — configured per project." },
      { title: "Document templates", body: "Vouchers and itineraries generated from booking data." },
      { title: "Multi-branch agencies", body: "Separate desks with consolidated reporting for ownership." },
      { title: "API exports", body: "Push booking summaries to finance or BI tools when you need them." },
      { title: "Channel sync", body: "Only where a certified connector exists — planned with technical discovery." },
    ],
  },
  workflow: {
    title: "Booking lifecycle",
    steps: [
      { title: "Quote", body: "Agent assembles package from supplier catalog with sell and net rates." },
      { title: "Confirm", body: "Customer deposit recorded; supplier booking reference stored." },
      { title: "Operate", body: "Changes logged with reason; vouchers reissued when needed." },
      { title: "Travel", body: "On-trip issues noted on the file for post-trip finance." },
      { title: "Settle", body: "Supplier invoices matched; commissions released per your rules." },
    ],
  },
  workflowExamples: {
    title: "Examples",
    items: [
      { title: "Inbound USA operator", body: "Multi-hotel treks with domestic flights and guide assignments on one booking." },
      { title: "City travel desk", body: "Weekend packages with fixed allotments from partner hotels." },
      { title: "Corporate travel", body: "Employee profiles, approval notes, and centralized billing." },
    ],
  },
  benefitsByRole: {
    title: "Benefits by role",
    items: [
      { title: "Agency owner", body: "Margin and outstanding supplier dues without opening every agent inbox." },
      { title: "Reservation agent", body: "Fewer tabs; customer history on screen during calls." },
      { title: "Finance", body: "Booking-level payment trail for audits." },
      { title: "Product manager", body: "One catalog feeding website and desk quotes when integrated." },
    ],
  },
  useCases: {
    title: "Who uses it",
    items: [
      { title: "Tour operators", body: "Complex itineraries with multiple suppliers per file." },
      { title: "Travel agencies", body: "Flight-hotel bundles and visa support services." },
      { title: "DMC partners", body: "Ground handling for overseas wholesalers." },
    ],
  },
  integrations: {
    heading: "Integrations and APIs",
    paragraphs: [
      "Hotel PMS, billing, CRM, and website booking widgets can share data within Global Orbit when licensed together.",
      "External OTA or GDS connectivity depends on vendor APIs, credentials, and mapping work — we provide a realistic integration roadmap after reviewing your partners.",
    ],
  },
  security: {
    heading: "Security",
    paragraphs: [
      "Role-based access for agents, supervisors, and finance; traveller PII limited by permission.",
      "Production hosting with HTTPS and backup policies documented in your agreement.",
    ],
  },
  implementation: {
    heading: "Implementation",
    paragraphs: [
      "Import suppliers and active bookings where data is structured; otherwise start fresh for the next season.",
      "Training covers booking status discipline — the system works when agents close loops on the same day.",
    ],
  },
  analytics: {
    heading: "Reporting",
    paragraphs: [
      "Bookings by status, revenue and cost estimates, agent activity, and supplier performance for selected periods.",
      "Demonstration dashboards use sample bookings, not your live pipeline.",
    ],
  },
  whyOrbit: {
    heading: "Why Global Orbit",
    paragraphs: [
      "We build travel websites and operator portals — your OTA desk can align with the same brand and engineering team.",
      "We will not blur the line between channel manager marketing and what your instance actually syncs.",
    ],
  },
  relatedSlugs: ["hotel-management-system", "crm-software", "billing-software", "warehouse-management"],
  faq: [
    { q: "Is this a channel manager?", a: "Not by default. Channel managers push rates to OTAs; this system manages how your agency sells and operates bookings. Connectors may be added when available." },
    { q: "Do you integrate with Booking.com?", a: "Only if scoped and technically feasible with current APIs. Otherwise you manage channel inventory separately." },
    { q: "Difference from hotel PMS?", a: "PMS runs the property; OTA software runs the seller’s bookings across suppliers." },
    { q: "Commission reports?", a: "Supported when commission rules are configured in your deployment." },
    { q: "Multi-currency?", a: "Discuss during scoping — configuration depends on your markets." },
    { q: "Customer portal?", a: "Optional web portal for vouchers or payments — separate build if needed." },
    { q: "WhatsApp notifications?", a: "Possible via messaging integrations when included in scope." },
    { q: "Can agents work remotely?", a: "Cloud web access with secure logins; policy is yours to define." },
    { q: "Data migration?", a: "We import structured exports; messy legacy files need cleanup first." },
    { q: "Request a demo?", a: "Yes — we walk through a booking from quote to settlement." },
  ],
  cta: {
    title: "See your agency workflow on one screen",
    lede: "Bring a real package you sell today — we map it into bookings, suppliers, and payments.",
  },
  longForm: [
    {
      heading: "OTA management versus hotel software",
      paragraphs: [
        "Hotels worry about room nights and folios; agencies worry about margin across suppliers. Conflating the two products creates double entry. We position OTA management for sellers and hotel PMS for properties, with integration only where it saves real time.",
      ],
    },
    {
      heading: "Distribution without false promises",
      paragraphs: [
        "Global distribution platforms move slowly on API access and certification. We would rather document a phased integration than ship a landing page that claims live sync your staff cannot find on day one.",
      ],
    },
  ],
};
