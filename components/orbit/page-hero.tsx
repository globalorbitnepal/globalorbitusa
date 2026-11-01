import Link from "next/link";
import { OrbitPremiumReveal } from "@/components/orbit/orbit-premium-reveal";

type OrbitPageHeroProps = {
  eyebrow?: string;
  title: string;
  lede: string;
  headingId: string;
};

export function OrbitPageHero({ eyebrow, title, lede, headingId }: OrbitPageHeroProps) {
  return (
    <section className="orbit-premium-hero orbit-net relative isolate overflow-hidden px-4 py-[clamp(3.5rem,9vh,5.5rem)] text-center sm:px-6 sm:py-[clamp(4rem,10vh,6.25rem)]">
      <div className="orbit-premium-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <div className="orbit-premium-hero-grid pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
      <OrbitPremiumReveal className="mx-auto max-w-[min(52rem,96vw)]">
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#f0c43a]">{eyebrow}</p>
        ) : null}
        <h1
          id={headingId}
          className="mt-3 font-[family-name:var(--font-display)] text-[clamp(1.85rem,5.2vw,3.35rem)] leading-[1.08] tracking-tight text-white"
        >
          {title}
        </h1>
        <div className="orbit-gold-rule mx-auto" />
        <p className="mx-auto mt-5 max-w-2xl text-[clamp(0.94rem,1.35vw,1.05rem)] leading-[1.75] text-white/72">
          {lede}
        </p>
      </OrbitPremiumReveal>
    </section>
  );
}

const TRUST_STATS = [
  { value: "120+", label: "Sites & apps shipped" },
  { value: "3", label: "Studios · NP · IN · US" },
  { value: "SEO+", label: "Technical search built-in" },
  { value: "24/7", label: "Ops-minded support" },
];

export function OrbitPremiumTrustStrip() {
  return (
    <section className="orbit-premium-trust border-y border-white/[0.06] px-4 py-10 sm:px-6" aria-label="Studio highlights">
      <div className="mx-auto grid max-w-[min(1100px,96vw)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_STATS.map((stat, index) => (
          <OrbitPremiumReveal key={stat.label} delayMs={index * 60}>
            <div className="orbit-premium-stat h-full rounded-2xl px-5 py-6 text-center">
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.65rem,3vw,2.1rem)] font-semibold text-[#f0c43a]">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] leading-snug text-white/55">{stat.label}</p>
            </div>
          </OrbitPremiumReveal>
        ))}
      </div>
    </section>
  );
}

const KEYWORD_PILLARS = [
  {
    title: "Website development USA",
    body: "Custom business, hotel, trek, restaurant, and ecommerce sites — mobile-perfect, fast, and structured for Google.",
  },
  {
    title: "SEO & Google ranking",
    body: "Technical SEO, local SEO United States, metadata, schema, sitemaps, and content plans you can measure.",
  },
  {
    title: "Digital marketing & ads",
    body: "Facebook, Instagram, and Google Ads campaigns with landing pages that match your offer and analytics.",
  },
  {
    title: "Web apps & ERP software",
    body: "Portals, billing, hotel PMS, POS, CRM, and SaaS backends — built to run every day, not just demo day.",
  },
];

export function OrbitPremiumPillars() {
  return (
    <section className="orbit-premium-pillars px-4 py-[clamp(3rem,8vh,5rem)] sm:px-6">
      <div className="mx-auto max-w-[min(1200px,96vw)]">
        <OrbitPremiumReveal>
          <header className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f0c43a]/90">USA · Digital studio</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(1.55rem,4vw,2.35rem)] text-white">
              Everything you search for — one accountable team
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-white/62">
              From “web developer near me” to enterprise ERP — we ship ultra HD experiences with SEO and performance baked in from
              day one.
            </p>
          </header>
        </OrbitPremiumReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {KEYWORD_PILLARS.map((item, index) => (
            <OrbitPremiumReveal key={item.title} delayMs={index * 70}>
              <article className="orbit-premium-pillar h-full rounded-2xl p-6 sm:p-8">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{item.body}</p>
              </article>
            </OrbitPremiumReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrbitCtaBand() {
  return (
    <section className="orbit-premium-cta orbit-net relative isolate overflow-hidden px-4 py-[clamp(3.5rem,9vh,5.5rem)] text-center sm:px-6">
      <div className="orbit-premium-hero-glow pointer-events-none absolute inset-0 -z-10 opacity-70" aria-hidden="true" />
      <OrbitPremiumReveal className="mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.7rem,4.5vw,2.85rem)] font-semibold text-white">
          Ready to brief the studio?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/68">
          USA, India, and global clients. Free consultation for websites, SEO, social ads, and software — no commitment.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="orbit-btn-gold inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold">
            Get Free Consultation
          </Link>
          <Link href="/contact" className="orbit-btn-dark inline-flex h-12 items-center rounded-full px-7 text-sm font-semibold">
            Contact Now
          </Link>
        </div>
      </OrbitPremiumReveal>
    </section>
  );
}
