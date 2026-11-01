import type { SoftwareProductContent } from "@/lib/software-product-types";

export const HOTEL_MANAGEMENT: SoftwareProductContent = {
  slug: "hotel-management-system",
  seo: {
    title: "Hotel Management System | Hotel Operations Software | Global Orbit",
    description:
      "Hotel management software for front desk, reservations, room inventory, housekeeping, guest folios, and occupancy reporting — built for U.S. hospitality operators.",
    keywords: [
      "hotel management system",
      "hotel management software",
      "hotel booking management software",
      "hotel front desk software",
      "hotel reservation management system",
      "hotel billing software",
      "hotel property management system",
      "hotel management software USA",
    ],
  },
  eyebrow: "Orbit Software · Hospitality",
  h1: "Hotel Management System",
  titleAccent: "for front desk and housekeeping",
  intro:
    "Run reservations, room status, check-in and check-out, guest profiles, and folio billing from one operations board. Global Orbit hotel software is shaped for lodges, city hotels, and resorts that need clarity on occupancy — not another spreadsheet taped to the reception monitor.",
  accent: "#a78bfa",
  applicationCategory: "BusinessApplication",
  heroStats: [
    { value: "Room board", label: "Live availability" },
    { value: "Folio billing", label: "Guest charges" },
    { value: "Housekeeping", label: "Task queues" },
    { value: "Reports", label: "Occupancy & revenue" },
  ],
  trust: {
    heading: "Built for real front desks",
    paragraphs: [
      "We deliver property management workflows for hotels and lodges in USA and export markets. Screenshots use demonstration occupancy; your property shows your room types, rates, and guests.",
      "Channel manager connections to third-party OTAs are separate integrations — we explain what is configured in your contract instead of implying every global portal is pre-connected.",
    ],
  },
  overview: {
    heading: "Hotel operations in one place",
    paragraphs: [
      "Front desk teams juggle phone bookings, walk-ins, OTA vouchers, and housekeeping status at the same time. A hotel management system gives reception a single timeline: who arrives today, which rooms are dirty, and what each guest still owes on checkout.",
      "Unlike a marketing website alone, PMS software is the operational ledger for room nights, extras, and payments. Global Orbit focuses on the workflows U.S. properties actually run — multi-rate seasons, group holds, and folios that finance can reconcile.",
      "When you later add distribution or a channel manager, reservation records should still originate from the same inventory pool to avoid double bookings.",
    ],
  },
  problems: {
    title: "Operational pain we solve",
    items: [
      { title: "Double bookings", body: "One calendar for phone, walk-in, and imported reservations when integrations are enabled." },
      { title: "Housekeeping blind spots", body: "Room status updates flow to reception so you do not assign a dirty room to an early arrival." },
      { title: "Folio surprises at checkout", body: "Restaurant, laundry, and room charges accumulate on the guest folio with clear line detail." },
      { title: "Night audit guesswork", body: "Occupancy and revenue summaries for the business date, exportable for owners and accountants." },
    ],
  },
  coreFeatures: {
    title: "Core hotel features",
    items: [
      { title: "Reservation management", body: "Create and amend stays with arrival, departure, room type, and rate plan." },
      { title: "Room inventory", body: "Room types, physical rooms, and availability by date." },
      { title: "Check-in and check-out", body: "Assign rooms, capture guest details, and close folios with payment." },
      { title: "Guest profiles", body: "Preferences, IDs where you collect them, and stay history for returning guests." },
      { title: "Rate and season management", body: "Weekday/weekend and seasonal rates configured to your commercial rules." },
      { title: "Housekeeping coordination", body: "Cleaning tasks and room status boards for floor staff." },
    ],
  },
  advancedFeatures: {
    title: "Advanced capabilities",
    items: [
      { title: "Group and block bookings", body: "Hold room blocks for tours or events, release unsold inventory on a schedule you define." },
      { title: "Extras and POS charges", body: "Post restaurant or spa charges to room folios when POS integration is in scope." },
      { title: "Multi-property view", body: "Available when your contract covers more than one site — not assumed on every license." },
      { title: "Staff roles", body: "Front desk, housekeeping, and manager permissions with audit-friendly restrictions." },
      { title: "Document printing", body: "Registration cards, invoices, and cashier summaries formatted for your property." },
      { title: "Channel-ready inventory", body: "Foundation for future OTA sync — actual connectors depend on partner APIs and agreements." },
    ],
  },
  workflow: {
    title: "How the system works day to day",
    steps: [
      { title: "Configure property", body: "Room types, physical rooms, rate plans, taxes, and payment methods." },
      { title: "Capture bookings", body: "Phone, email, or walk-in reservations land on the availability grid." },
      { title: "Operate arrivals", body: "Check-in assigns rooms, updates housekeeping, and opens folios." },
      { title: "Service the stay", body: "Post charges, move rooms if needed, and note guest requests on the profile." },
      { title: "Depart and audit", body: "Checkout settles folios; night reports close the business date." },
    ],
  },
  workflowExamples: {
    title: "Workflow examples",
    items: [
      { title: "Boutique city hotel", body: "Same-day turnarounds, corporate billing accounts, and fast checkout for early flights." },
      { title: "Lakeside lodge", body: "Seasonal rates, package inclusions, and split folios for groups." },
      { title: "Trekker guesthouse chain", body: "Multi-bed dorm inventory with shared housekeeping queues across properties." },
    ],
  },
  benefitsByRole: {
    title: "Benefits by role",
    items: [
      { title: "General manager", body: "Occupancy and revenue trends without waiting for night audit spreadsheets." },
      { title: "Reception", body: "One screen for arrivals, departures, and room status during rush hours." },
      { title: "Housekeeping lead", body: "Clear lists of departures, stayovers, and inspections." },
      { title: "Finance", body: "Folio detail and payment types that map to your accounting process." },
    ],
  },
  useCases: {
    title: "Property types",
    items: [
      { title: "City hotels", body: "Corporate guests, OTA vouchers, and late checkout charges." },
      { title: "Resorts and spas", body: "Package rates with bundled meals or treatments on folio." },
      { title: "Guesthouses", body: "Simpler room counts with fast training for rotating seasonal staff." },
    ],
  },
  integrations: {
    heading: "Integrations",
    paragraphs: [
      "Website booking engines, payment gateways, and channel managers can connect when APIs and contracts allow. We separate hotel PMS features from third-party distribution — you will not see us claim live Booking.com sync unless it is written in your deployment plan.",
      "Billing and CRM modules from Global Orbit can share customer records when you license multiple products.",
    ],
  },
  security: {
    heading: "Security and access",
    paragraphs: [
      "Staff logins with role-based permissions; sensitive guest data limited to roles that need it.",
      "HTTPS in production, backups per hosting agreement, and activity logs for key front-desk actions where enabled.",
    ],
  },
  implementation: {
    heading: "Onboarding",
    paragraphs: [
      "We map your room types, rates, and registration fields, then train reception and housekeeping with checklists.",
      "Parallel run with your old process is common for one high season weekend before full cutover.",
    ],
  },
  analytics: {
    heading: "Reporting",
    paragraphs: [
      "Occupancy, ADR-style metrics, and revenue by room type for the periods you select.",
      "Manager exports for ownership reviews; demonstration charts on this page use sample data.",
    ],
  },
  whyOrbit: {
    heading: "Why Global Orbit for hotels",
    paragraphs: [
      "We also build hotel marketing sites and trek operator portals — your PMS conversation stays with the same engineering team.",
      "UI matches the Global Orbit software catalog: readable at night shift, dark theme, no toy icons.",
    ],
  },
  relatedSlugs: ["ota-management-system", "billing-software", "crm-software", "restaurant-pos"],
  faq: [
    { q: "Is this a full PMS?", a: "It covers core front-desk, reservations, housekeeping, and folio workflows. Scope is confirmed in your statement of work." },
    { q: "Does it connect to Booking.com or Agoda?", a: "Only when a channel integration is explicitly scoped. Otherwise inventory is managed inside this system and on each channel manually." },
    { q: "Can restaurant charges post to rooms?", a: "Yes when POS or billing integration is part of your deployment." },
    { q: "Multi-property support?", a: "Available on multi-site contracts; single-property hotels use a simplified setup." },
    { q: "Languages for staff?", a: "Training and UI can be English-first with U.S. support materials on request." },
    { q: "Guest ID storage?", a: "Fields are configurable; you define retention aligned with local law." },
    { q: "Night audit reports?", a: "Business-date summaries for occupancy and revenue are included in reporting modules." },
    { q: "Mobile for managers?", a: "Responsive web for approvals and dashboards; native apps are separate scope." },
    { q: "How long to go live?", a: "Depends on room count, integrations, and data migration — we estimate after discovery." },
    { q: "Demo available?", a: "Yes — request a walkthrough with your room types and rate structure." },
  ],
  cta: {
    title: "Walk through your property on the system",
    lede: "Bring your room chart and a busy Saturday scenario — we show check-in, housekeeping, and checkout on your terms.",
  },
  longForm: [
    {
      heading: "Front desk software that matches the rush",
      paragraphs: [
        "The worst time to test software is Saturday check-in. Global Orbit optimizes for search-first guest lookup, obvious room status colours, and folio lines that make sense to a cashier under pressure.",
        "Training focuses on the ten actions reception performs daily; advanced configuration waits until those are muscle memory.",
      ],
    },
    {
      heading: "Housekeeping as part of revenue",
      paragraphs: [
        "A room marked clean too early costs refunds; marked dirty too long costs walk-ins. Housekeeping boards tied to PMS status reduce both errors.",
        "Supervisors see progress by floor instead of chasing phone calls between reception and staff quarters.",
      ],
    },
  ],
};
