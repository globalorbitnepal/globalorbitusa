import type { SoftwareProductContent } from "@/lib/software-product-types";

export const RESTAURANT_POS: SoftwareProductContent = {
  slug: "restaurant-pos",
  seo: {
    title: "Restaurant POS System | Restaurant Billing Software | Global Orbit",
    description:
      "Restaurant POS for table service, takeaway, kitchen tickets, menu management, split bills, and shift reports — built for United States service speed.",
    keywords: [
      "restaurant POS system",
      "restaurant POS software",
      "restaurant billing software",
      "restaurant management system",
      "cafe POS software",
      "restaurant order management system",
      "restaurant inventory management",
      "restaurant POS software USA",
    ],
  },
  eyebrow: "Orbit Software · Restaurant POS",
  h1: "Restaurant POS",
  titleAccent: "for dine-in and takeaway",
  intro:
    "Take orders from the floor, fire kitchen tickets, apply taxes and discounts, split bills, and close shifts with totals that match the drawer. Global Orbit restaurant POS connects front-of-house speed with back-office reporting — kitchen display and inventory tie-ins depend on your scoped modules.",
  accent: "#f87171",
  applicationCategory: "BusinessApplication",
  heroStats: [
    { value: "Table map", label: "Floor service" },
    { value: "KOT / KDS", label: "Kitchen flow" },
    { value: "Splits", label: "Flexible billing" },
    { value: "Shifts", label: "Cashier reports" },
  ],
  trust: {
    heading: "POS for real service rhythms",
    paragraphs: [
      "Restaurant deployments include cafes and multi-floor dining in USA. Preview interfaces use demo menu items; your menu, taxes, and tables are yours alone.",
      "Kitchen display systems and recipe costing are included when specified — we do not assume every site runs KDS on day one.",
    ],
  },
  overview: {
    heading: "Restaurant operations on one till",
    paragraphs: [
      "Paper chits get lost, modifiers get forgotten, and end-of-night math disagrees with what the kitchen actually served. POS software anchors orders to tables or ticket numbers, routes items to kitchen stations, and records payments with staff attribution.",
      "Global Orbit POS respects how U.S. restaurants mix dine-in, takeaway, delivery handoff, and room charges for attached hotels when integrations exist.",
    ],
  },
  problems: {
    title: "Pain points",
    items: [
      { title: "Wrong item to kitchen", body: "Modifiers and notes travel with the line item digitally." },
      { title: "Bill split arguments", body: "Split by seat, item, or amount with audit trail." },
      { title: "Discount abuse", body: "Role limits on comps and manager overrides." },
      { title: "No shift accountability", body: "Cashier sessions with opening float and close-out totals." },
    ],
  },
  coreFeatures: {
    title: "Core POS features",
    items: [
      { title: "Table and order management", body: "Open tables, merge, transfer, and track course timing." },
      { title: "Menu and modifiers", body: "Sizes, add-ons, and combo rules configured to your menu." },
      { title: "Dine-in, takeaway, delivery", body: "Order types with appropriate numbering and packaging notes." },
      { title: "Billing and taxes", body: "Service charge and tax lines per your policy." },
      { title: "Payments", body: "Cash, card, wallet, and room charge when hotel folio integration is live." },
      { title: "Receipts", body: "Print or digital customer copies." },
    ],
  },
  advancedFeatures: {
    title: "Advanced capabilities",
    items: [
      { title: "Kitchen order tickets", body: "Station routing to printer or kitchen display." },
      { title: "Split and merge bills", body: "Handle groups without manual calculator work." },
      { title: "Staff permissions", body: "Waiter versus cashier versus manager capabilities." },
      { title: "Inventory and recipes", body: "Ingredient depletion when recipe module is enabled." },
      { title: "Multi-outlet", body: "Central menu with outlet-specific pricing on enterprise contracts." },
      { title: "Customer records", body: "Optional loyalty or contact capture for marketing opt-in you control." },
    ],
  },
  workflow: {
    title: "Service workflow",
    steps: [
      { title: "Open shift", body: "Cashier starts session with float count." },
      { title: "Seat and order", body: "Wait staff build orders from menu with modifiers." },
      { title: "Produce", body: "Kitchen acknowledges and marks items ready." },
      { title: "Serve and bill", body: "Present check, apply discounts within policy, take payment." },
      { title: "Close shift", body: "Z-report style summary for manager review." },
    ],
  },
  workflowExamples: {
    title: "Examples",
    items: [
      { title: "Busy Thamel dining", body: "Rapid table turns with kitchen printer backup." },
      { title: "Cafe takeaway", body: "Counter queue with order numbers and pickup screen." },
      { title: "Hotel restaurant", body: "Room posting to guest folio when PMS link is configured." },
    ],
  },
  benefitsByRole: {
    title: "Benefits by role",
    items: [
      { title: "Owner", body: "Item-wise sales and void reports to spot training gaps." },
      { title: "Floor manager", body: "Live table status and open checks." },
      { title: "Kitchen lead", body: "Ticket order by station without shouting across rooms." },
      { title: "Cashier", body: "Fewer manual totals; payment mix at shift end." },
    ],
  },
  useCases: {
    title: "Venue types",
    items: [
      { title: "Full-service restaurants", body: "Tables, courses, and split bills." },
      { title: "Cafes and bakeries", body: "Quick SKU buttons and minimal modifiers." },
      { title: "Cloud kitchen handoff", body: "Delivery partner reference on ticket when you capture it." },
    ],
  },
  integrations: {
    heading: "How POS connects",
    paragraphs: [
      "Billing shares tax configuration when both modules run together. Hotel folio posting requires PMS integration scoped in writing.",
      "Inventory depletion needs recipe setup — we train kitchen leads on maintaining recipes if you enable the module.",
    ],
  },
  security: {
    heading: "Security",
    paragraphs: [
      "PIN or login per staff; voids and discounts logged with user ID.",
      "HTTPS for cloud deployments; local network POS setups documented per site.",
    ],
  },
  implementation: {
    heading: "Rollout",
    paragraphs: [
      "Menu build, table layout, printer tests, and a soft launch meal service before full cutover.",
      "Hardware (printers, tablets) procured locally with our compatibility checklist.",
    ],
  },
  analytics: {
    heading: "Reporting",
    paragraphs: [
      "Sales by item, category, hour, and payment type; void and discount summaries for managers.",
      "Demonstration charts are not your venue’s revenue.",
    ],
  },
  whyOrbit: {
    heading: "Why Global Orbit",
    paragraphs: [
      "We also build restaurant websites and local SEO — your POS conversation stays with engineers who know F&B timing in United States.",
      "Dark UI readable under dim dining lights; large touch targets for busy wait staff.",
    ],
  },
  relatedSlugs: ["billing-software", "hotel-management-system", "warehouse-management", "crm-software"],
  faq: [
    { q: "Works offline?", a: "Depends on deployment architecture — cloud POS needs connectivity; discuss edge/offline needs in scoping." },
    { q: "Kitchen display included?", a: "When KDS is in your contract and screens are on site." },
    { q: "Split bills?", a: "Yes — by item or amount where configured." },
    { q: "Inventory from POS?", a: "With recipe module enabled and maintained." },
    { q: "Multiple tills?", a: "Supported with centralized menu and reporting." },
    { q: "QR ordering?", a: "Optional customer-facing ordering — separate project if needed." },
    { q: "Training?", a: "Floor and kitchen sessions included in rollout plan." },
    { q: "Hardware?", a: "You buy printers/tablets; we certify models we have tested." },
    { q: "Hotel room charge?", a: "Requires PMS integration — not automatic on every license." },
    { q: "Demo?", a: "Request a demo with your menu structure." },
  ],
  cta: {
    title: "Run a service night on the POS",
    lede: "We simulate your rush hour — tables, modifiers, kitchen, and close-out.",
  },
  longForm: [
    {
      heading: "POS, kitchen, and inventory together",
      paragraphs: [
        "POS records what sold; inventory answers what is left. Without recipes, those systems diverge. We enable ingredient tracking only when kitchen leads commit to maintaining yields — otherwise we keep scope honest to billing-only POS.",
      ],
    },
  ],
};
