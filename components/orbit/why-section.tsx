import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

type WhyCard = {
  title: string;
  body: string;
  bullets: string[];
  accent: { color: string; glow: string; soft: string; solid: string };
  icon: "bolt" | "search" | "phone" | "chart" | "shield" | "growth";
};

const CARDS: WhyCard[] = [
  {
    title: "Ultra Fast Websites",
    body: "Sub-second loading times with optimized code and CDN delivery.",
    bullets: ["Optimized performance", "Global CDN", "Better user experience"],
    accent: { color: "#f0c43a", glow: "rgba(240,196,58,0.5)", soft: "rgba(240,196,58,0.2)", solid: "#d4a017" },
    icon: "bolt",
  },
  {
    title: "SEO Optimized Structure",
    body: "Every website built with SEO-first architecture for maximum visibility.",
    bullets: ["Clean code & schema", "Keyword optimized", "Higher search rankings"],
    accent: { color: "#c084fc", glow: "rgba(168,85,247,0.5)", soft: "rgba(168,85,247,0.2)", solid: "#7c3aed" },
    icon: "search",
  },
  {
    title: "Mobile Responsive Design",
    body: "Perfect experience on every device, from mobile to 4K displays.",
    bullets: ["Mobile-first approach", "Pixel-perfect design", "Seamless across all screens"],
    accent: { color: "#60a5fa", glow: "rgba(59,130,246,0.5)", soft: "rgba(59,130,246,0.2)", solid: "#2563eb" },
    icon: "phone",
  },
  {
    title: "Google Ranking Focused",
    body: "Data-driven strategies that consistently achieve first-page rankings.",
    bullets: ["Advanced keyword strategy", "Quality content structure", "Long-term growth"],
    accent: { color: "#4ade80", glow: "rgba(34,197,94,0.5)", soft: "rgba(34,197,94,0.2)", solid: "#16a34a" },
    icon: "chart",
  },
  {
    title: "Secure Development",
    body: "Enterprise-grade security protocols protecting your business and users.",
    bullets: ["SSL & security hardening", "Regular updates", "Threat monitoring"],
    accent: { color: "#f87171", glow: "rgba(239,68,68,0.5)", soft: "rgba(239,68,68,0.2)", solid: "#dc2626" },
    icon: "shield",
  },
  {
    title: "Business Growth Strategy",
    body: "Not just websites — we build complete digital growth systems.",
    bullets: ["Conversion focused design", "Analytics & insights", "Ongoing support & guidance"],
    accent: { color: "#f0c43a", glow: "rgba(240,196,58,0.5)", soft: "rgba(240,196,58,0.2)", solid: "#ca8a04" },
    icon: "growth",
  },
];

const STATS = [
  { label: "United States engineering", icon: "people" },
  { label: "3 Global Offices", icon: "globe" },
  { label: "Web · Apps · SEO", icon: "uptime" },
  { label: "One accountable team", icon: "bars" },
] as const;

function CardIcon({ name }: { name: WhyCard["icon"] }) {
  const p = {
    className: "h-[18px] w-[18px]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const icons: Record<WhyCard["icon"], ReactNode> = {
    bolt: (
      <svg {...p}>
        <path d="M13 3 5.5 13.5H12l-1 7.5L18.5 10H12l1-7z" />
      </svg>
    ),
    search: (
      <svg {...p}>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m16 16 4 4" />
      </svg>
    ),
    phone: (
      <svg {...p}>
        <rect x="8" y="3.5" width="8" height="17" rx="2" />
        <path d="M11 18.5h2" />
      </svg>
    ),
    chart: (
      <svg {...p}>
        <path d="M4 19V10M9 19V6M14 19v-5M19 19V8" />
      </svg>
    ),
    shield: (
      <svg {...p}>
        <path d="M12 3.5 5 6.5v5.2c0 4.4 2.9 7.7 7 9.3 4.1-1.6 7-4.9 7-9.3V6.5L12 3.5z" />
      </svg>
    ),
    growth: (
      <svg {...p}>
        <path d="M4 17 10 11l3.5 3.5L20 8" />
        <path d="M14.5 8H20v5.5" />
      </svg>
    ),
  };
  return icons[name];
}

function StatIcon({ name }: { name: (typeof STATS)[number]["icon"] }) {
  const p = {
    className: "h-5 w-5 text-[#f0c43a]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "people") {
    return (
      <svg {...p}>
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16" cy="9" r="2" />
        <path d="M3.8 18a5.2 5.2 0 0 1 10.4 0M14.4 15.8a4.2 4.2 0 0 1 5.8 2.4" />
      </svg>
    );
  }
  if (name === "globe") {
    return (
      <svg {...p}>
        <circle cx="12" cy="12" r="8" />
        <path d="M4 12h16M12 4c2.5 2.4 2.5 13.6 0 16M12 4c-2.5 2.4-2.5 13.6 0 16" />
      </svg>
    );
  }
  if (name === "uptime") {
    return (
      <svg {...p}>
        <path d="M12 3.5 5 6.5v5.2c0 4.4 2.9 7.7 7 9.3 4.1-1.6 7-4.9 7-9.3V6.5L12 3.5z" />
        <path d="m9.2 12.2 2 2 3.8-4" />
      </svg>
    );
  }
  return (
    <svg {...p}>
      <path d="M4 19V10M9 19V6M14 19v-5M19 19V8" />
    </svg>
  );
}

export function OrbitWhySection() {
  return (
    <section
      className="orbit-why-section relative isolate overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="why-heading"
    >
      <div className="orbit-why-waves pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#040a16] via-[#07122a] to-[#040a16]" />

      <div className="relative z-[1] mx-auto w-full max-w-[1280px]">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#f0c43a]">Global Orbit</p>
          <h2
            id="why-heading"
            className="mt-4 font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,4vw,3rem)] font-extrabold tracking-tight text-white"
          >
            Why operators <span className="text-[#f0c43a]">stay</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-white/65 sm:text-[15px] sm:leading-8">
            Speed, structure, and aftercare — the unglamorous reasons a site still works on a Tuesday.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 min-[700px]:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {CARDS.map((card, index) => {
            const num = String(index + 1).padStart(2, "0");
            return (
              <article
                key={card.title}
                className="orbit-soft-card group relative flex min-h-0 flex-col overflow-hidden rounded-[22px] p-4 sm:min-h-[270px] sm:flex-row sm:p-5"
                style={
                  {
                    "--soft-accent": card.accent.color,
                    "--soft-glow": card.accent.glow,
                    "--soft-soft": card.accent.soft,
                  } as CSSProperties
                }
              >
                <div className="relative z-[1] flex w-full min-w-0 flex-col sm:w-[52%]">
                  <div className="flex items-start gap-3">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px]"
                      style={{
                        background: `linear-gradient(145deg, ${card.accent.solid}, ${card.accent.color})`,
                        boxShadow: `0 8px 20px ${card.accent.glow}`,
                      }}
                    >
                      <CardIcon name={card.icon} />
                    </span>
                    <h3 className="pt-1.5 text-[15px] font-semibold leading-snug text-white sm:text-[16px]">{card.title}</h3>
                  </div>
                  <p className="mt-3 text-[12px] leading-5 text-white/65 sm:text-[13px]">{card.body}</p>
                  <ul className="mt-3 space-y-1.5">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-[12px] text-white/78">
                        <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#f0c43a] text-[9px] font-bold text-[#1a1408]">
                          ✓
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pointer-events-none relative mt-4 h-36 w-full sm:absolute sm:inset-y-2 sm:right-2 sm:mt-0 sm:h-auto sm:w-[50%]">
                  <Image
                    src={`/brand/why-previews/${num}.png`}
                    alt=""
                    fill
                    unoptimized
                    sizes="(max-width:700px) 48vw, 260px"
                    className="object-contain object-right-bottom drop-shadow-[0_16px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-[1.03]"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 sm:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-2.5 text-center sm:justify-center">
              <StatIcon name={stat.icon} />
              <p className="text-[12px] font-semibold text-[#f0c43a] sm:text-[13px]">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-[10px] font-semibold uppercase tracking-[0.32em] text-white/55">
          Building a smarter tomorrow
        </p>
      </div>
    </section>
  );
}
