import type { SoftwareProductContent } from "@/lib/software-product-types";

export const CRM_SOFTWARE: SoftwareProductContent = {
  slug: "crm-software",
  seo: {
    title: "CRM Software | Lead & Customer Management | Global Orbit",
    description:
      "CRM software for leads, pipelines, follow-ups, deals, and sales reporting — practical customer relationship management for U.S. sales teams.",
    keywords: [
      "CRM software",
      "customer relationship management software",
      "sales CRM software",
      "lead management software",
      "customer database software",
      "CRM for small business",
      "sales pipeline management",
      "customer follow-up management software",
      "CRM software USA",
    ],
  },
  eyebrow: "Orbit Software · CRM",
  h1: "CRM Software",
  titleAccent: "your team will open",
  intro:
    "Capture leads, qualify opportunities, manage pipelines, and log follow-ups without losing context in personal chat threads. Global Orbit CRM gives sales and service teams a shared customer record — distinct from a full ERP and richer than a contact spreadsheet.",
  accent: "#818cf8",
  applicationCategory: "BusinessApplication",
  heroStats: [
    { value: "Pipeline", label: "Stage visibility" },
    { value: "Tasks", label: "Follow-up reminders" },
    { value: "History", label: "Activity log" },
    { value: "Reports", label: "Conversion view" },
  ],
  trust: {
    heading: "CRM, not a contact dump",
    paragraphs: [
      "CRM software organizes revenue work: who to call, what stage a deal is in, and what was promised last time. We ship CRM alongside billing for businesses that invoice the same accounts sales pursues.",
      "Messaging integrations (email, WhatsApp, third-party inboxes) are connected when included in your scope — we do not list channels as live without configuration.",
    ],
  },
  overview: {
    heading: "What CRM does — and what it is not",
    paragraphs: [
      "A contact database stores names. CRM adds process: stages, tasks, ownership, and history. ERP adds inventory, manufacturing, and finance depth you may not need on day one.",
      "Global Orbit CRM targets teams that need pipeline discipline — travel sellers, B2B service providers, software resellers, and export traders — without forcing manufacturing modules they will never open.",
    ],
  },
  problems: {
    title: "Sales chaos we reduce",
    items: [
      { title: "Leads die in inboxes", body: "Central capture with assignee and next action date." },
      { title: "No pipeline truth", body: "Stages everyone agrees on, not private colour codes in a notebook." },
      { title: "Forgotten follow-ups", body: "Tasks and reminders tied to deals and contacts." },
      { title: "Handoff gaps", body: "Activity history when a deal moves between reps." },
    ],
  },
  coreFeatures: {
    title: "Core CRM features",
    items: [
      { title: "Lead capture", body: "Manual entry, imports, or form hooks when website integration is built." },
      { title: "Contacts and companies", body: "People linked to organizations with roles and notes." },
      { title: "Pipeline stages", body: "Configurable funnel from inquiry to won or lost." },
      { title: "Deals and opportunities", body: "Expected value, close date, and stage movement history." },
      { title: "Tasks and reminders", body: "Calls, meetings, and todos with due dates." },
      { title: "Activity timeline", body: "Calls, notes, and emails logged on the record." },
    ],
  },
  advancedFeatures: {
    title: "Advanced capabilities",
    items: [
      { title: "Team ownership", body: "Assign leads by territory or product line." },
      { title: "Segmentation", body: "Tags and filters for campaigns when you maintain clean data." },
      { title: "Sales reports", body: "Conversion, velocity, and rep activity for managers." },
      { title: "Workflow automation", body: "Only where rules are defined — e.g., task on stage change." },
      { title: "Billing link", body: "View invoices on the account when billing module is shared." },
      { title: "Access control", body: "Managers see team pipelines; reps see owned records." },
    ],
  },
  workflow: {
    title: "Sales workflow",
    steps: [
      { title: "Capture", body: "Lead enters from call, form, or import." },
      { title: "Qualify", body: "Rep scores fit and moves to opportunity or nurture." },
      { title: "Propose", body: "Quote or proposal noted on deal with value." },
      { title: "Close", body: "Won deals trigger onboarding tasks; lost deals capture reason." },
      { title: "Retain", body: "Service check-ins for repeat revenue." },
    ],
  },
  workflowExamples: {
    title: "Examples",
    items: [
      { title: "Travel agency B2B", body: "Agent partners with seasonal targets and commission notes." },
      { title: "IT services", body: "Long-cycle deals with technical discovery milestones." },
      { title: "Wholesale sales", body: "Reorder reminders based on last invoice date from billing link." },
    ],
  },
  benefitsByRole: {
    title: "Benefits by role",
    items: [
      { title: "Sales rep", body: "One morning list of who to call." },
      { title: "Sales manager", body: "Pipeline weight and stale deal alerts." },
      { title: "Marketing", body: "Segments for campaigns when tags are disciplined." },
      { title: "Customer success", body: "History before renewal conversations." },
    ],
  },
  useCases: {
    title: "Use cases",
    items: [
      { title: "B2B services", body: "Multi-meeting cycles with proposal versions." },
      { title: "Travel and tours", body: "Inquiry to booking handoff to operations." },
      { title: "Retail key accounts", body: "Key account notes alongside order history." },
    ],
  },
  integrations: {
    heading: "Integrations",
    paragraphs: [
      "Website contact forms and Orbit billing can feed CRM when integrated.",
      "WhatsApp or email logging requires connector setup — discussed per client.",
    ],
  },
  security: {
    heading: "Security",
    paragraphs: [
      "Role-based record visibility; export rights limited to managers where configured.",
      "Hosted over HTTPS with backups per agreement.",
    ],
  },
  implementation: {
    heading: "Onboarding",
    paragraphs: [
      "Define stages that match how you already sell — not a textbook funnel.",
      "Import contacts when spreadsheets are deduplicated.",
    ],
  },
  analytics: {
    heading: "Reporting",
    paragraphs: [
      "Pipeline value, win rate, activity per rep, and ageing by stage.",
      "Dashboard previews may use sample deals for layout.",
    ],
  },
  whyOrbit: {
    heading: "Why Global Orbit",
    paragraphs: [
      "Upgrade path to billing, OTA, or warehouse modules without a new vendor.",
      "Built for teams that also need a credible public website — same studio.",
    ],
  },
  relatedSlugs: ["billing-software", "ota-management-system", "hotel-management-system", "warehouse-management"],
  faq: [
    { q: "CRM vs ERP?", a: "CRM focuses on leads and relationships; ERP adds operations and finance depth. Pick CRM when sales process is the bottleneck." },
    { q: "Small business suitable?", a: "Yes — start with a short pipeline and grow fields as needed." },
    { q: "WhatsApp integration?", a: "Possible when scoped; not default on every tenant." },
    { q: "Email sync?", a: "Discuss provider and direction (one-way log vs full sync)." },
    { q: "Automation?", a: "Basic task rules when defined; complex flows are custom." },
    { q: "Mobile?", a: "Responsive web for field reps." },
    { q: "Import from Excel?", a: "Yes with clean columns for email or phone." },
    { q: "Multiple pipelines?", a: "Configure per product line on larger contracts." },
    { q: "Link to invoices?", a: "When billing module shares customer master." },
    { q: "Demo?", a: "Walk through your stages on a live environment." },
  ],
  cta: {
    title: "Map your pipeline on CRM",
    lede: "Bring your current stages — we configure deals, tasks, and reports around them.",
  },
  longForm: [
    {
      heading: "Follow-up management that respects U.S. selling",
      paragraphs: [
        "Relationships still matter — CRM does not replace calls; it remembers them. Reps in United States and export markets share one timeline so handoffs to India or US colleagues do not restart from zero.",
      ],
    },
    {
      heading: "Customer retention after the first sale",
      paragraphs: [
        "Won deals should spawn renewal tasks. CRM makes repeat revenue visible instead of hoping someone remembers a anniversary date in a calendar app.",
      ],
    },
  ],
};
