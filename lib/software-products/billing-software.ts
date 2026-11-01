import type { SoftwareProductContent } from "@/lib/software-product-types";

export const BILLING_SOFTWARE: SoftwareProductContent = {
  slug: "billing-software",
  seo: {
    title: "Billing Software | Business Billing & Invoicing | Global Orbit",
    description:
      "Billing and invoice management for retailers, distributors, and service businesses — sales and purchase invoices, tax-ready documents, payment tracking, and reports from Global Orbit.",
    keywords: [
      "billing software",
      "billing software for small business",
      "invoice management software",
      "business billing software",
      "VAT billing software",
      "GST billing software",
      "billing software USA",
      "billing software for retail shops",
      "sales and purchase management software",
    ],
  },
  eyebrow: "Orbit Software · Billing",
  h1: "Billing Software",
  titleAccent: "for daily invoicing",
  intro:
    "Issue sales invoices, record purchases, track who owes what, and close the month without reconciling three spreadsheets. Global Orbit billing software is built for shops, distributors, and service teams that need structured documents, clear tax lines, and reports finance can audit.",
  accent: "#6366f1",
  applicationCategory: "BusinessApplication",
  heroStats: [
    { value: "Sales + purchase", label: "Single ledger view" },
    { value: "Tax-ready", label: "Configurable tax lines" },
    { value: "Multi-user", label: "Role-based access" },
    { value: "Print + PDF", label: "Invoice delivery" },
  ],
  trust: {
    heading: "Production billing, not a mock-up",
    paragraphs: [
      "Global Orbit ships billing modules inside live operator deployments — retail counters, wholesale desks, and service businesses that print or email invoices every day. Dashboards on this page use demonstration figures; your workspace reflects your customers, products, and tax configuration.",
      "We scope tax behaviour with your accountant during implementation. The system supports structured tax lines and document types common in USA and export markets; exact compliance depends on how your business is registered and which reports you require.",
    ],
  },
  overview: {
    heading: "What billing software should solve",
    paragraphs: [
      "Most growing businesses outgrow handwritten bills and shared Excel files at the same moment: a customer asks for a corrected invoice, a supplier statement does not match your notebook, or month-end takes three days because payments live in a different tab than sales.",
      "A billing system gives every invoice a number, every customer a balance, and every payment a reference back to the bill it clears. Staff stop retyping product names. Managers see outstanding receivables without calling the cashier. Owners get summaries that match what was actually issued — not what someone remembers from yesterday.",
      "Global Orbit billing is designed to sit next to inventory or POS when you need stock to decrement on sale, and to stand alone when you only need finance documents and ledgers.",
    ],
  },
  problems: {
    title: "Common billing problems we hear on discovery calls",
    items: [
      {
        title: "Duplicate or skipped invoice numbers",
        body: "Manual numbering breaks when two people bill at once. The system assigns sequential document IDs and keeps an audit trail of voids and credit notes.",
      },
      {
        title: "Tax lines that do not match filings",
        body: "Free-form spreadsheets hide tax in a single column. Structured line items separate taxable value, exempt lines, and adjustments so exports align with how your accountant files.",
      },
      {
        title: "No single view of receivables",
        body: "Payments recorded in a notebook while invoices sit in email threads. Payment allocation ties receipts to open bills and surfaces aging by customer.",
      },
      {
        title: "Purchase side ignored until month-end",
        body: "Sales get attention; supplier bills arrive late. Purchase invoices live in the same system so payables and margins are visible before the bank statement.",
      },
    ],
  },
  coreFeatures: {
    title: "Core billing features",
    items: [
      {
        title: "Customer and supplier records",
        body: "Central contacts with billing addresses, tax identifiers where you capture them, payment terms, and notes your desk staff actually read.",
      },
      {
        title: "Sales invoices and quotations",
        body: "Line items with quantity, rate, discounts, and tax per row. Convert quotes to invoices without re-entry when a deal closes.",
      },
      {
        title: "Purchase invoices and expenses",
        body: "Record supplier bills and operating expenses so payables reports reflect what you owe, not only what customers owe you.",
      },
      {
        title: "Credit notes and returns",
        body: "Issue credit documents linked to original invoices when goods return or prices adjust — keeps customer balances honest.",
      },
      {
        title: "Payment recording",
        body: "Log cash, bank transfer, card, and wallet references against open invoices. Partial payments stay visible until the bill clears.",
      },
      {
        title: "Product and service catalogue",
        body: "Reusable items with default rates and tax treatment speed up counter billing and reduce typos on busy days.",
      },
    ],
  },
  advancedFeatures: {
    title: "Advanced capabilities",
    items: [
      {
        title: "Inventory-linked billing",
        body: "When inventory is enabled, sales can adjust stock on hand. Scope depends on your deployment — we confirm during implementation.",
      },
      {
        title: "Discounts and price lists",
        body: "Line or document discounts with visibility on printed invoices. Optional price tiers for wholesale versus retail counters.",
      },
      {
        title: "User permissions",
        body: "Separate roles for billing, approvals, and reporting so junior staff cannot alter closed periods without authorization.",
      },
      {
        title: "Approval workflows",
        body: "Optional review steps for large discounts or credit notes — configured to match how your finance lead already signs off.",
      },
      {
        title: "Export and print layouts",
        body: "PDF and printer-friendly templates with your logo and legal text. Digital share via email or messaging where you wire it.",
      },
      {
        title: "Multi-branch visibility",
        body: "Consolidated reporting across counters or warehouses when your contract includes multi-location setup.",
      },
    ],
  },
  workflow: {
    title: "How billing works, step by step",
    steps: [
      {
        title: "Set up masters",
        body: "Import or create customers, products, tax codes, and payment methods. Finance confirms opening balances if you migrate mid-year.",
      },
      {
        title: "Issue documents",
        body: "Counter staff or back office creates sales invoices from the catalogue. Purchases are recorded as supplier bills arrive.",
      },
      {
        title: "Collect and allocate",
        body: "Payments are logged against open invoices. Partial receipts stay on the customer statement until cleared.",
      },
      {
        title: "Adjust when reality changes",
        body: "Returns and corrections use credit notes tied to source bills — not silent edits that confuse auditors.",
      },
      {
        title: "Close the period",
        body: "Run receivables, payables, and tax summaries. Export to spreadsheet or hand to accounting software if you integrate later.",
      },
    ],
  },
  workflowExamples: {
    title: "Practical workflows",
    items: [
      {
        title: "Retail shop counter",
        body: "Morning opening float, walk-in sales with printed receipts, end-of-day cash tally matched to system totals before close.",
      },
      {
        title: "Wholesale distributor",
        body: "Credit customers with payment terms, delivery notes followed by tax invoices, supplier GRN matched to purchase bills.",
      },
      {
        title: "Service business",
        body: "Milestone invoices per project phase, time and materials lines, retainer balances visible on the customer account.",
      },
      {
        title: "Import and trading desk",
        body: "Land cost lines on purchase invoices, margin reports comparing purchase value to sales by SKU where inventory is linked.",
      },
    ],
  },
  benefitsByRole: {
    title: "Benefits by role",
    items: [
      {
        title: "Owner / director",
        body: "Daily sales and outstanding cash position without opening five chats with staff.",
      },
      {
        title: "Finance lead",
        body: "Document numbering, tax lines, and period reports that support filings — scoped with your accountant.",
      },
      {
        title: "Counter staff",
        body: "Fast search, barcode or SKU pick lists, fewer keystrokes during rush hours.",
      },
      {
        title: "Warehouse or dispatch",
        body: "Invoice status visible before goods leave when billing ties to stock modules.",
      },
    ],
  },
  useCases: {
    title: "Industries and use cases",
    items: [
      { title: "Retail and FMCG", body: "High-volume SKUs, VAT or GST lines on every bill, daily Z-read style summaries." },
      { title: "Electronics and hardware", body: "Serial or batch tracking when inventory module is enabled alongside billing." },
      { title: "Pharmacy and regulated goods", body: "Structured lines and audit logs; regulatory claims require your compliance review." },
      { title: "B2B services", body: "Quotations, pro-forma invoices, and milestone billing on longer contracts." },
    ],
  },
  integrations: {
    heading: "Integrations and connected systems",
    paragraphs: [
      "Billing can export summaries for accounting tools or connect to warehouse and POS modules within the same Global Orbit stack when you license multiple products.",
      "Payment gateway hooks (card, wallet, bank file import) are scoped per project — we document what is live in your contract rather than implying every connector is switched on by default.",
      "If you already run a separate ERP, we discuss API or scheduled exports during discovery instead of promising a pre-built plug-in that may not exist for your version.",
    ],
  },
  security: {
    heading: "Security, access, and data handling",
    paragraphs: [
      "Role-based logins limit who can create, edit, or void invoices. Sensitive actions can require elevated permissions configured during setup.",
      "Production deployments use HTTPS, server-side validation, and database backups according to your hosting agreement. Ask us for the current retention and restore process for your environment.",
      "We do not claim certifications we have not documented; if you need a security questionnaire for procurement, we complete it against the actual deployment model.",
    ],
  },
  implementation: {
    heading: "Implementation and onboarding",
    paragraphs: [
      "Typical rollouts start with a workshop: document types you use today, tax rules, users, and whether inventory or POS should connect.",
      "We migrate opening balances and master data where files are clean, run parallel billing for a short window when you need confidence, then cut over with training in U.S. or English.",
      "Timelines depend on locations, integrations, and data quality — we give a written plan after discovery rather than a one-size-fits-all week count.",
    ],
  },
  analytics: {
    heading: "Reporting and business insights",
    paragraphs: [
      "Dashboards highlight sales, net collections, receivables, and payables with trend lines for the period you select — demonstration charts on marketing pages use sample NPR figures.",
      "Drill into customer statements, item-wise sales, and tax summaries. Export to spreadsheet for board packs or accountant handoff.",
      "Managers configure which reports each role sees so counter staff are not distracted by company-wide margin data.",
    ],
  },
  whyOrbit: {
    heading: "Why choose Global Orbit",
    paragraphs: [
      "We build and support billing alongside hotel, warehouse, and POS products — one team if you expand modules later.",
      "Engineering, design, and SEO sit in-house in United States with delivery overlap for India and the United States. You speak to people who ship code, not a reseller reading a manual.",
      "The interface follows the same dark, high-contrast Global Orbit design language you see on our homepage — dense data, readable type, no clipart dashboards.",
    ],
  },
  relatedSlugs: [
    "warehouse-management",
    "restaurant-pos",
    "crm-software",
    "hotel-management-system",
  ],
  faq: [
    {
      q: "Is this billing software suitable for small retail shops in USA?",
      a: "Yes. We configure tax lines, products, and receipt layouts for single-counter shops and scale to multi-branch wholesale when you need it.",
    },
    {
      q: "Does it support VAT or GST invoices?",
      a: "The system supports structured tax lines and document types used in USA and other markets. Your accountant should confirm labels and reports match your registration before go-live.",
    },
    {
      q: "Can I manage both sales and purchase invoices?",
      a: "Yes. Sales, purchases, credit notes, and payment allocation live in one workspace so receivables and payables are visible together.",
    },
    {
      q: "Is inventory required?",
      a: "No. Many service businesses use billing without stock. Inventory-linked billing is available when you enable the warehouse or POS modules.",
    },
    {
      q: "Can multiple users bill at the same time?",
      a: "Yes, with unique logins. Invoice numbering and permissions are handled server-side to reduce collisions.",
    },
    {
      q: "Do you integrate with eSewa, Khalti, or Stripe?",
      a: "Payment connectors are project-specific. We confirm which gateways are implemented for your deployment during scoping.",
    },
    {
      q: "Can I print invoices for walk-in customers?",
      a: "Yes. PDF and printer layouts include your branding and line detail. Hardware drivers depend on your local printers.",
    },
    {
      q: "How do migrations from Excel work?",
      a: "We import customers and products when spreadsheets are consistent, then enter opening balances in a controlled checklist with finance sign-off.",
    },
    {
      q: "Is there a mobile view?",
      a: "The web application is responsive for phones and tablets. Native mobile apps are a separate scope if you need offline counter mode.",
    },
    {
      q: "How is pricing determined?",
      a: "Licensing depends on users, branches, and modules. Request a demo and we share a written quote after a short discovery call.",
    },
  ],
  cta: {
    title: "See billing with your products and tax rules",
    lede: "Walk through invoice creation, payments, and reports with our team — using scenarios from your shop or desk, not generic demo data.",
  },
  longForm: [
    {
      heading: "Invoice management without the end-of-month panic",
      paragraphs: [
        "Invoice management is more than generating a PDF. It is the system of record for what you sold, at what price, to whom, and whether money arrived. When those four facts disagree, owners lose sleep and accountants lose weekends.",
        "Global Orbit treats every document as immutable history: edits happen through credit notes or controlled adjustments, not silent overwrites. That discipline sounds strict until you need last quarter’s numbers for a bank review.",
      ],
    },
    {
      heading: "Reducing billing errors before they reach customers",
      paragraphs: [
        "Wrong rates, missing discounts, and tax on the wrong line are usually typing problems, not intent. Catalogues, default tax codes, and customer-specific price lists remove repeated keystrokes.",
        "Optional approvals catch large variances before a bill leaves the building. Even without formal workflow, role separation stops casual users from altering closed days.",
      ],
    },
    {
      heading: "Billing software versus a spreadsheet",
      paragraphs: [
        "Spreadsheets flex until they do not — concurrent edits, broken formulas, and version files named final_v3_real.xlsx. Billing software enforces relationships: invoices know their payments; customers know their balances.",
        "You can still export to Excel anytime for ad-hoc analysis. The difference is the export starts from consistent data, not a fragile template.",
      ],
    },
  ],
};
