import type { SoftwareProductContent } from "@/lib/software-product-types";

export const WAREHOUSE_MANAGEMENT: SoftwareProductContent = {
  slug: "warehouse-management",
  seo: {
    title: "Warehouse Management Software | Inventory Control | Global Orbit",
    description:
      "Warehouse and inventory management for receiving, stock tracking, transfers, picking, and reporting — with clear visibility for U.S. distributors and retailers.",
    keywords: [
      "warehouse management system",
      "warehouse management software",
      "inventory management system",
      "stock management software",
      "warehouse inventory management",
      "stock tracking software",
      "inventory control software",
      "warehouse management software USA",
    ],
  },
  eyebrow: "Orbit Software · Inventory",
  h1: "Warehouse Management",
  titleAccent: "with stock you can trust",
  intro:
    "Receive goods, track SKUs across locations, pick and dispatch orders, and reconcile stock without guessing what is on the shelf. Global Orbit warehouse software gives operators a live picture of inventory movement — demonstration dashboards on this page use sample quantities, not your warehouse.",
  accent: "#34d399",
  applicationCategory: "BusinessApplication",
  heroStats: [
    { value: "SKU ledger", label: "Movement history" },
    { value: "Locations", label: "Bins & warehouses" },
    { value: "Alerts", label: "Thresholds" },
    { value: "Reports", label: "Stock valuation" },
  ],
  trust: {
    heading: "Inventory visibility for the floor",
    paragraphs: [
      "Warehouse modules power distributors and retail chains we deploy in USA. Numbers in marketing previews are illustrative; your tenant shows your SKUs, locations, and on-hand counts.",
      "Barcode scanning and serial tracking are enabled when hardware and scope are included — we confirm during discovery rather than assuming every site has scanners day one.",
    ],
  },
  overview: {
    heading: "Why warehouse software matters",
    paragraphs: [
      "Stock errors show up as angry customers, emergency purchases, and auditors asking why the system says five hundred but the shelf says three hundred.",
      "A warehouse management system records every receipt, transfer, adjustment, and dispatch with who did it and when. Managers trust the count; pickers follow lists instead of memory.",
      "Global Orbit WMS pairs naturally with billing when you sell from the same catalogue, and with POS when shops pull from a central warehouse.",
    ],
  },
  problems: {
    title: "Operational issues we address",
    items: [
      { title: "Unknown on-hand quantity", body: "Real-time balances by SKU and location after each movement." },
      { title: "Slow picking", body: "Pick lists sorted by aisle or bin when location data is maintained." },
      { title: "Shrinkage without trail", body: "Adjustments require reason codes and user attribution." },
      { title: "Expiry surprises", body: "Batch and expiry tracking when those fields are enabled for your vertical." },
    ],
  },
  coreFeatures: {
    title: "Core warehouse features",
    items: [
      { title: "Product and SKU management", body: "Codes, units, categories, and optional barcodes." },
      { title: "Receiving and put-away", body: "Goods inward matched to purchase orders when PO module is used." },
      { title: "Stock transfers", body: "Move inventory between warehouses or bins with in-transit visibility." },
      { title: "Adjustments", body: "Controlled corrections after cycle counts." },
      { title: "Picking and dispatch", body: "Fulfill sales or transfer orders with quantity confirmation." },
      { title: "Supplier records", body: "Link receipts to vendors for payable reconciliation with billing." },
    ],
  },
  advancedFeatures: {
    title: "Advanced capabilities",
    items: [
      { title: "Bin and location tracking", body: "Slot-level inventory when you maintain a location map." },
      { title: "Batch and serial numbers", body: "Traceability for electronics, pharma-style lots, or warranty items." },
      { title: "Reorder alerts", body: "Minimum stock thresholds with suggested purchase quantities." },
      { title: "Barcode scanning", body: "Handheld or camera scanning when devices are provisioned." },
      { title: "Cycle counting", body: "Partial counts without shutting down the whole warehouse." },
      { title: "Role permissions", body: "Separate rights for receivers, pickers, and managers." },
    ],
  },
  workflow: {
    title: "Warehouse workflow",
    steps: [
      { title: "Receive", body: "Scan or enter incoming quantities against PO or ad-hoc receipt." },
      { title: "Store", body: "Put-away to bin locations if you use slot tracking." },
      { title: "Reserve", body: "Allocate stock to sales orders or transfers." },
      { title: "Pick & pack", body: "Confirm picked quantities; note shortages immediately." },
      { title: "Dispatch", body: "Deduct on-hand and hand off to logistics with documentation." },
    ],
  },
  workflowExamples: {
    title: "Examples",
    items: [
      { title: "FMCG distributor", body: "Fast-moving SKUs with daily van loading and returns processing." },
      { title: "Electronics wholesaler", body: "Serial capture on receipt and dispatch for warranty tracking." },
      { title: "Multi-branch retail", body: "Central warehouse replenishes shops via transfer orders." },
    ],
  },
  benefitsByRole: {
    title: "Benefits by role",
    items: [
      { title: "Warehouse manager", body: "Accuracy metrics and ageing stock reports." },
      { title: "Picker", body: "Clear lists and fewer wrong-item walks." },
      { title: "Purchasing", body: "Reorder signals tied to actual movement, not gut feel." },
      { title: "Finance", body: "Valuation exports aligned with movement history." },
    ],
  },
  useCases: {
    title: "Use cases",
    items: [
      { title: "Distribution", body: "High SKU count with van sales and returns." },
      { title: "Manufacturing support", body: "Raw material issues to production when paired with manufacturing modules." },
      { title: "Ecommerce fulfillment", body: "Pick-pack-ship with status back to order desk." },
    ],
  },
  integrations: {
    heading: "Integrations",
    paragraphs: [
      "Billing and POS can consume the same SKU master when licensed together, reducing duplicate item setup.",
      "Accounting exports and third-party logistics APIs are scoped per project.",
    ],
  },
  security: {
    heading: "Security",
    paragraphs: [
      "User attribution on movements; restricted rights to post adjustments.",
      "Backups and HTTPS per production hosting agreement.",
    ],
  },
  implementation: {
    heading: "Onboarding",
    paragraphs: [
      "Opening stock take establishes baseline; then receipts and dispatches go live.",
      "Barcode label templates and scanner pairing happen during pilot week if hardware is ready.",
    ],
  },
  analytics: {
    heading: "Reporting",
    paragraphs: [
      "Stock on hand, movement history, ageing, and ABC-style summaries where configured.",
      "Charts on this page are demonstrations — your reports reflect live transactions.",
    ],
  },
  whyOrbit: {
    heading: "Why Global Orbit",
    paragraphs: [
      "One vendor for warehouse, billing, and POS reduces integration fiction.",
      "Interfaces designed for bright warehouse lighting and long shifts — high contrast, large tap targets on tablets.",
    ],
  },
  relatedSlugs: ["billing-software", "restaurant-pos", "crm-software", "ota-management-system"],
  faq: [
    { q: "Do I need barcodes?", a: "No — keyboard entry works. Barcodes speed high-volume sites when scanners are available." },
    { q: "Multiple warehouses?", a: "Supported with transfers between sites." },
    { q: "Batch expiry?", a: "Available when batch tracking is enabled for your catalog." },
    { q: "Connect to billing?", a: "Yes when both modules are in your deployment; sales can decrement stock." },
    { q: "Cycle count without shutdown?", a: "Yes — count subsets of bins or SKUs on a schedule." },
    { q: "Mobile on floor?", a: "Responsive web on tablets; native scanner apps are separate scope." },
    { q: "Import items?", a: "Spreadsheet import when columns are consistent." },
    { q: "Negative stock?", a: "Configurable — many sites block dispatch below zero." },
    { q: "Demo data?", a: "Marketing UI may show sample SKUs; your login shows only your inventory." },
    { q: "Pricing?", a: "Based on users, locations, and modules — contact us after a demo." },
  ],
  cta: {
    title: "Tour your warehouse on the system",
    lede: "Walk through receive, pick, and dispatch with your SKU list and locations.",
  },
  longForm: [
    {
      heading: "Stock reconciliation that sticks",
      paragraphs: [
        "Cycle counts work when adjustments are easy but accountable. Reason codes and user logs turn shrinkage conversations from blame into process fixes.",
      ],
    },
    {
      heading: "Demonstration versus live data",
      paragraphs: [
        "Screenshots and embedded dashboards may display fictional NPR values and SKU names to show layout density. After go-live, the same widgets bind to your database — always label internal training materials so staff know which environment they are in.",
      ],
    },
  ],
};
