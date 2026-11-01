export const AI_HERO = {
  eyebrow: "Global Orbit · AI Automation USA",
  titleBefore: "Automation that",
  titleAccent: "closes the loop",
  titleAfter: "not a chatbot parked on a landing page",
  lede:
    "We wire models into the work you already run — WhatsApp, invoices, PMS, POS, and CRM — with audit logs, human gates, and United States delivery. No stock photos. No mystery black box.",
};

export const AI_STATS = [
  { value: "12+", label: "Live workflows" },
  { value: "< 8s", label: "Typical handoff" },
  { value: "Human", label: "In the loop" },
  { value: "4–10 wk", label: "First production run" },
];

export const AI_PILLARS = [
  {
    title: "Trigger on real events",
    body: "A booking, a WhatsApp ping, an overdue invoice, a low-stock SKU — not a weekly CSV dump someone forgot to attach.",
  },
  {
    title: "Decide with a model",
    body: "Classify, extract, draft, or score. The model proposes; your policy decides what can fire without a person.",
  },
  {
    title: "Write back to the system of record",
    body: "PMS, billing, WMS, CRM. If it does not land in the same ledger your floor already trusts, it is a demo — not automation.",
  },
];

export const AI_FLOW = [
  { step: "01", title: "Ingest", body: "Webhook, inbox, or queue from the product you already pay for." },
  { step: "02", title: "Reason", body: "Extract fields, rank intent, draft a reply, or flag risk." },
  { step: "03", title: "Act", body: "Create the ticket, folio, pick list, or payment reminder." },
  { step: "04", title: "Prove", body: "Who ran it, which model, which policy, what it wrote." },
];

export const AI_JOBS = [
  { id: "JOB-1842", source: "WhatsApp", task: "Booking intent · Summit Lodge", latency: "2.1s", status: "Done" },
  { id: "JOB-1841", source: "Inbox", task: "GST invoice extract · INV-2048", latency: "4.8s", status: "Review" },
  { id: "JOB-1840", source: "WMS", task: "Reorder rice 25kg · bin A-12", latency: "1.4s", status: "Done" },
  { id: "JOB-1838", source: "CRM", task: "Lead score · Trailhead Exp.", latency: "0.9s", status: "Queued" },
];

export const AI_USE_CASES = [
  {
    index: "01",
    title: "Guest messaging",
    body: "WhatsApp and web chat that know room type, arrival, and balance — then hand off to a person when the guest is angry or the request is odd.",
  },
  {
    index: "02",
    title: "Invoice capture",
    body: "PDF and photo invoices into GST-ready lines. A clerk confirms the exception pile; the rest posts.",
  },
  {
    index: "03",
    title: "Front-desk assist",
    body: "Night audit notes, walk-in quotes, and housekeeping flags drafted from the PMS — not a second spreadsheet.",
  },
  {
    index: "04",
    title: "Warehouse alerts",
    body: "Reorder drafts from bin levels and vendor lead times. Purchasing still hits approve.",
  },
  {
    index: "05",
    title: "Sales follow-up",
    body: "CRM tasks from stalled deals, with a draft in the owner’s voice and a reason the model used.",
  },
  {
    index: "06",
    title: "Support triage",
    body: "Ticket routing by product, language, and severity. Finance never sees a password-reset thread again.",
  },
  {
    index: "07",
    title: "Content ops",
    body: "First drafts for trek departures and room copy, with a human editor and a brand sheet — not unreviewed blog sludge.",
  },
  {
    index: "08",
    title: "Internal Q&A",
    body: "Staff search over your runbooks and SOPs. Answers cite the paragraph. No hallucinated policy.",
  },
];

export const AI_CONNECT = [
  "WhatsApp Business",
  "Gmail / Outlook",
  "Orbit Billing",
  "Orbit PMS",
  "Orbit WMS",
  "Orbit CRM",
  "POS / KDS",
  "Sheets & Drive",
  "Webhooks",
  "Slack / Teams",
];

export const AI_GUARDRAILS = [
  {
    title: "Human gates",
    body: "Refunds, rate changes, and guest-facing copy above a threshold wait for a named role.",
  },
  {
    title: "Data stay",
    body: "You choose the model host. We do not train public weights on your folios or invoices.",
  },
  {
    title: "Replay",
    body: "Every action can be replayed: prompt version, tool call, and the row it wrote.",
  },
  {
    title: "Kill switch",
    body: "One toggle pauses a workflow without taking the rest of the product offline.",
  },
];

export const AI_PROCESS = [
  { title: "Floor map", body: "We sit with the people who already do the work and list the ten jobs that waste the most hours." },
  { title: "Policy in writing", body: "What the model may do alone, what needs a person, and what is never automated." },
  { title: "Shadow week", body: "The workflow proposes; staff still click. We measure precision before it writes." },
  { title: "Go-live", body: "Production queue, alerts, and a named engineer for the first thirty days." },
];

export const AI_FAQ = [
  {
    q: "Is this ChatGPT pasted into our website?",
    a: "No. We build workflows against your systems — PMS, billing, WhatsApp, WMS — with logs and gates. A widget that answers FAQs is a small piece, not the product.",
  },
  {
    q: "Will it replace our staff?",
    a: "It takes the copy-paste and night-shift queue. People keep exceptions, guests, and money. That is the design, not a slogan.",
  },
  {
    q: "Can we start with one workflow?",
    a: "Yes. Most operators start with WhatsApp booking intent or invoice capture, then add a second job on the same auth and audit model.",
  },
  {
    q: "Where does this run?",
    a: "United States delivery with India and USA studios. Hosting can sit in your cloud. Models can be API or self-hosted depending on the data class.",
  },
  {
    q: "How do you price it?",
    a: "A scoped first workflow with a go-live date, then a monthly ops retainer for model, queue, and changes. We quote in writing after the floor map.",
  },
];

export const AI_CTA = {
  title: "Name the job you want off the floor",
  lede: "Tell us the system, the trigger, and who must approve. We reply with a workflow plan — not a generic AI brochure.",
  primaryLabel: "Book an automation workshop",
  primaryHref: "/contact",
  secondaryLabel: "Orbit Software",
  secondaryHref: "/orbit-software",
};

export const AI_KEYWORDS = [
  "AI automation USA",
  "WhatsApp chatbot hotel USA",
  "workflow automation United States",
  "invoice OCR GST USA",
  "AI for ERP USA",
  "business automation Global Orbit",
];
