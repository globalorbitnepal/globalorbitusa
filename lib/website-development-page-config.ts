import {
  WD_CWV,
  WD_FAQ_EXTENDED,
  WD_FINAL_CTA,
  WD_HERO,
  WD_INDUSTRIES,
  WD_INTRO,
  WD_STACK_COMPARE,
  WD_STATS,
  WD_USA_MARKETS,
  WD_PERF_A11Y,
  WD_PRICING,
  WD_PROCESS_STEPS,
  WD_RELATED,
  WD_SERVICES,
  WD_TECH,
  WD_TRUST,
  WD_WHY,
} from "@/lib/website-development-content";
import {
  WEBSITE_DEV_DELIVERABLES,
  WEBSITE_DEV_DEMOS,
  WEBSITE_DEV_PORTFOLIO,
  WEBSITE_DEV_SEO,
} from "@/lib/website-development-config";

export type WebsiteDevDemoConfig = {
  id: string;
  brand: string;
  tagline: string;
  story: string;
  bullets: string[];
  stack: string[];
  audience: string;
  designDirection: string;
  conversionAction: string;
  uxNote: string;
  fictionalLabel: string;
  demoUrl: string;
  /** Unused. This page never renders images; parser always clears the field. */
  previewImageSrc: string;
};

export type WebsiteDevelopmentPageConfig = {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    primaryCta: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  heroComposition: {
    caption: string;
    mainImage: string;
    mainBrowserUrl: string;
    satellites: { src: string; url: string; alt: string }[];
  };
  trust: { label: string }[];
  stats: { value: string; label: string }[];
  intro: { title: string; paragraphs: string[] };
  usaMarkets: { title: string; paragraphs: string[]; links: { label: string; href: string }[] };
  cwv: {
    title: string;
    paragraphs: string[];
    metrics: { name: string; target: string; note: string }[];
  };
  stackCompare: {
    title: string;
    intro: string;
    rows: { stack: string; bestFor: string; tradeoff: string }[];
  };
  services: { title: string; body: string; href: string }[];
  industries: {
    id: string;
    title: string;
    image: string;
    imageAlt: string;
    body: string;
    points: string[];
  }[];
  demoHeader: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    lede: string;
  };
  demos: WebsiteDevDemoConfig[];
  processSteps: { title: string; body: string; deliverable: string }[];
  tech: { title: string; paragraphs: string[]; stacks: string[] };
  seo: { eyebrow: string; title: string; paragraphs: string[]; bullets: string[] };
  deliverables: { eyebrow: string; title: string; bullets: string[] };
  perf: { title: string; paragraphs: string[]; bullets: string[] };
  pricing: {
    title: string;
    intro: string;
    factors: string[];
    packagesHref: string;
    ctaLabel: string;
  };
  why: { title: string; paragraphs: string[] };
  portfolio: {
    eyebrow: string;
    title: string;
    lede: string;
    href: string;
    linkLabel: string;
  };
  related: { label: string; href: string }[];
  faq: { q: string; a: string }[];
  finalCta: {
    title: string;
    lede: string;
    primary: string;
    secondary: string;
    whatsappHref: string;
    whatsappLabel: string;
  };
};

const DEFAULT_DEMO_URLS: Record<string, string> = {
  "summit-lodge": "summitlodge.np",
  trailhead: "trailheadexpeditions.com",
  "ember-slate": "emberandslate.com",
  norwood: "norwoodatelier.com",
  "pulse-metrics": "pulsemetrics.io",
  "haven-spa": "havenspa.com.np",
};

export function buildDefaultWebsiteDevelopmentPageConfig(): WebsiteDevelopmentPageConfig {
  return {
    hero: { ...WD_HERO },
    heroComposition: {
      caption: "Coded interface preview — no stock photography on this page",
      mainImage: "", // image-free page — never rendered
      mainBrowserUrl: "yourbrand.com",
      satellites: [
        { src: "", url: "hotel.demo", alt: "Hospitality layout concept" },
        { src: "", url: "trek.demo", alt: "Travel layout concept" },
        { src: "", url: "shop.demo", alt: "Retail layout concept" },
        { src: "", url: "app.demo", alt: "SaaS layout concept" },
      ],
    },
    trust: WD_TRUST.map((item) => ({ ...item })),
    stats: WD_STATS.map((item) => ({ ...item })),
    intro: {
      title: WD_INTRO.title,
      paragraphs: [...WD_INTRO.paragraphs],
    },
    usaMarkets: {
      title: WD_USA_MARKETS.title,
      paragraphs: [...WD_USA_MARKETS.paragraphs],
      links: WD_USA_MARKETS.links.map((link) => ({ ...link })),
    },
    cwv: {
      title: WD_CWV.title,
      paragraphs: [...WD_CWV.paragraphs],
      metrics: WD_CWV.metrics.map((metric) => ({ ...metric })),
    },
    stackCompare: {
      title: WD_STACK_COMPARE.title,
      intro: WD_STACK_COMPARE.intro,
      rows: WD_STACK_COMPARE.rows.map((row) => ({ ...row })),
    },
    services: WD_SERVICES.map((s) => ({
      title: s.title,
      body: s.body,
      href: s.href ?? "",
    })),
    industries: WD_INDUSTRIES.map((p) => ({ ...p, image: "", imageAlt: "", points: [...p.points] })),
    demoHeader: {
      eyebrow: "Fictional demos · coded UI only",
      title: "Six coded homepages,",
      titleAccent: "six distinct industries",
      lede:
        "Each frame is a working interface — navigation, forms, and product UI built with HTML and CSS placeholders instead of stock images. These are fictional brands for demonstration; your project receives original design after discovery.",
    },
    demos: WEBSITE_DEV_DEMOS.map((demo) => ({
      ...demo,
      bullets: [...demo.bullets],
      stack: [...demo.stack],
      demoUrl: DEFAULT_DEMO_URLS[demo.id] ?? "demo.test",
      previewImageSrc: "",
    })),
    processSteps: WD_PROCESS_STEPS.map((s) => ({ ...s })),
    tech: {
      title: WD_TECH.title,
      paragraphs: [...WD_TECH.paragraphs],
      stacks: [...WD_TECH.stacks],
    },
    seo: {
      eyebrow: WEBSITE_DEV_SEO.eyebrow,
      title: WEBSITE_DEV_SEO.title,
      paragraphs: [...WEBSITE_DEV_SEO.paragraphs],
      bullets: [...WEBSITE_DEV_SEO.bullets],
    },
    deliverables: {
      eyebrow: WEBSITE_DEV_DELIVERABLES.eyebrow,
      title: WEBSITE_DEV_DELIVERABLES.title,
      bullets: [...WEBSITE_DEV_DELIVERABLES.bullets],
    },
    perf: {
      title: WD_PERF_A11Y.title,
      paragraphs: [...WD_PERF_A11Y.paragraphs],
      bullets: [...WD_PERF_A11Y.bullets],
    },
    pricing: { ...WD_PRICING, factors: [...WD_PRICING.factors] },
    why: {
      title: WD_WHY.title,
      paragraphs: [...WD_WHY.paragraphs],
    },
    portfolio: { ...WEBSITE_DEV_PORTFOLIO },
    related: WD_RELATED.map((r) => ({ ...r })),
    faq: WD_FAQ_EXTENDED.map((f) => ({ ...f })),
    finalCta: { ...WD_FINAL_CTA },
  };
}

function str(value: unknown, fallback: string) {
  return typeof value === "string" ? value : fallback;
}

function strArray(value: unknown, fallback: string[]) {
  if (!Array.isArray(value)) return fallback;
  return value.map((item) => (typeof item === "string" ? item : "")).filter(Boolean);
}

export function parseWebsiteDevelopmentPageConfig(input: unknown): WebsiteDevelopmentPageConfig {
  const base = buildDefaultWebsiteDevelopmentPageConfig();
  if (!input || typeof input !== "object") return base;
  const raw = input as Partial<WebsiteDevelopmentPageConfig>;

  const mergeHero = (
    raw.hero && typeof raw.hero === "object" ? raw.hero : {}
  ) as Partial<WebsiteDevelopmentPageConfig["hero"]>;
  const mergeComposition = (
    raw.heroComposition && typeof raw.heroComposition === "object" ? raw.heroComposition : {}
  ) as Partial<WebsiteDevelopmentPageConfig["heroComposition"]>;

  return {
    hero: {
      eyebrow: str(mergeHero.eyebrow, base.hero.eyebrow),
      h1: str(mergeHero.h1, base.hero.h1),
      lede: str(mergeHero.lede, base.hero.lede),
      primaryCta: str(mergeHero.primaryCta, base.hero.primaryCta),
      secondaryCta: str(mergeHero.secondaryCta, base.hero.secondaryCta),
      secondaryHref: str(mergeHero.secondaryHref, base.hero.secondaryHref),
    },
    heroComposition: {
      caption: str(mergeComposition.caption, base.heroComposition.caption),
      mainImage: "",
      mainBrowserUrl: str(mergeComposition.mainBrowserUrl, base.heroComposition.mainBrowserUrl),
      satellites: Array.isArray(mergeComposition.satellites)
        ? mergeComposition.satellites.map((sat, i) => ({
            src: "",
            url: str(sat?.url, base.heroComposition.satellites[i]?.url ?? ""),
            alt: str(sat?.alt, base.heroComposition.satellites[i]?.alt ?? ""),
          }))
        : base.heroComposition.satellites.map((sat) => ({ ...sat, src: "" })),
    },
    trust: Array.isArray(raw.trust)
      ? raw.trust.map((t, i) => ({ label: str(t?.label, base.trust[i]?.label ?? "") })).filter((t) => t.label)
      : base.trust,
    stats: Array.isArray(raw.stats)
      ? raw.stats
          .map((item, i) => ({
            value: str(item?.value, base.stats[i]?.value ?? ""),
            label: str(item?.label, base.stats[i]?.label ?? ""),
          }))
          .filter((item) => item.value || item.label)
      : base.stats,
    intro: {
      title: str(raw.intro?.title, base.intro.title),
      paragraphs: strArray(raw.intro?.paragraphs, base.intro.paragraphs),
    },
    usaMarkets: {
      title: str(raw.usaMarkets?.title, base.usaMarkets.title),
      paragraphs: strArray(raw.usaMarkets?.paragraphs, base.usaMarkets.paragraphs),
      links: Array.isArray(raw.usaMarkets?.links)
        ? raw.usaMarkets.links
            .map((link, i) => ({
              label: str(link?.label, base.usaMarkets.links[i]?.label ?? ""),
              href: str(link?.href, base.usaMarkets.links[i]?.href ?? ""),
            }))
            .filter((link) => link.label && link.href)
        : base.usaMarkets.links,
    },
    cwv: {
      title: str(raw.cwv?.title, base.cwv.title),
      paragraphs: strArray(raw.cwv?.paragraphs, base.cwv.paragraphs),
      metrics: Array.isArray(raw.cwv?.metrics)
        ? raw.cwv.metrics.map((metric, i) => ({
            name: str(metric?.name, base.cwv.metrics[i]?.name ?? ""),
            target: str(metric?.target, base.cwv.metrics[i]?.target ?? ""),
            note: str(metric?.note, base.cwv.metrics[i]?.note ?? ""),
          }))
        : base.cwv.metrics,
    },
    stackCompare: {
      title: str(raw.stackCompare?.title, base.stackCompare.title),
      intro: str(raw.stackCompare?.intro, base.stackCompare.intro),
      rows: Array.isArray(raw.stackCompare?.rows)
        ? raw.stackCompare.rows.map((row, i) => ({
            stack: str(row?.stack, base.stackCompare.rows[i]?.stack ?? ""),
            bestFor: str(row?.bestFor, base.stackCompare.rows[i]?.bestFor ?? ""),
            tradeoff: str(row?.tradeoff, base.stackCompare.rows[i]?.tradeoff ?? ""),
          }))
        : base.stackCompare.rows,
    },
    services: Array.isArray(raw.services)
      ? raw.services.map((s, i) => ({
          title: str(s?.title, base.services[i]?.title ?? ""),
          body: str(s?.body, base.services[i]?.body ?? ""),
          href: str(s?.href, base.services[i]?.href ?? ""),
        }))
      : base.services,
    industries: Array.isArray(raw.industries)
      ? raw.industries.map((p, i) => ({
          id: str(p?.id, base.industries[i]?.id ?? `industry-${i}`),
          title: str(p?.title, base.industries[i]?.title ?? ""),
          image: "",
          imageAlt: "",
          body: str(p?.body, base.industries[i]?.body ?? ""),
          points: strArray(p?.points, base.industries[i]?.points ?? []),
        }))
      : base.industries,
    demoHeader: {
      eyebrow: str(raw.demoHeader?.eyebrow, base.demoHeader.eyebrow),
      title: str(raw.demoHeader?.title, base.demoHeader.title),
      titleAccent: str(raw.demoHeader?.titleAccent, base.demoHeader.titleAccent),
      lede: str(raw.demoHeader?.lede, base.demoHeader.lede),
    },
    demos: Array.isArray(raw.demos)
      ? raw.demos.map((d, i) => {
          const fallback = base.demos[i] ?? base.demos[0];
          return {
            id: str(d?.id, fallback.id),
            brand: str(d?.brand, fallback.brand),
            tagline: str(d?.tagline, fallback.tagline),
            story: str(d?.story, fallback.story),
            bullets: strArray(d?.bullets, fallback.bullets),
            stack: strArray(d?.stack, fallback.stack),
            audience: str(d?.audience, fallback.audience),
            designDirection: str(d?.designDirection, fallback.designDirection),
            conversionAction: str(d?.conversionAction, fallback.conversionAction),
            uxNote: str(d?.uxNote, fallback.uxNote),
            fictionalLabel: str(d?.fictionalLabel, fallback.fictionalLabel),
            demoUrl: str(d?.demoUrl, fallback.demoUrl),
            previewImageSrc: "",
          };
        })
      : base.demos,
    processSteps: Array.isArray(raw.processSteps)
      ? raw.processSteps.map((s, i) => ({
          title: str(s?.title, base.processSteps[i]?.title ?? ""),
          body: str(s?.body, base.processSteps[i]?.body ?? ""),
          deliverable: str(s?.deliverable, base.processSteps[i]?.deliverable ?? ""),
        }))
      : base.processSteps,
    tech: {
      title: str(raw.tech?.title, base.tech.title),
      paragraphs: strArray(raw.tech?.paragraphs, base.tech.paragraphs),
      stacks: strArray(raw.tech?.stacks, base.tech.stacks),
    },
    seo: {
      eyebrow: str(raw.seo?.eyebrow, base.seo.eyebrow),
      title: str(raw.seo?.title, base.seo.title),
      paragraphs: strArray(raw.seo?.paragraphs, base.seo.paragraphs),
      bullets: strArray(raw.seo?.bullets, base.seo.bullets),
    },
    deliverables: {
      eyebrow: str(raw.deliverables?.eyebrow, base.deliverables.eyebrow),
      title: str(raw.deliverables?.title, base.deliverables.title),
      bullets: strArray(raw.deliverables?.bullets, base.deliverables.bullets),
    },
    perf: {
      title: str(raw.perf?.title, base.perf.title),
      paragraphs: strArray(raw.perf?.paragraphs, base.perf.paragraphs),
      bullets: strArray(raw.perf?.bullets, base.perf.bullets),
    },
    pricing: {
      title: str(raw.pricing?.title, base.pricing.title),
      intro: str(raw.pricing?.intro, base.pricing.intro),
      factors: strArray(raw.pricing?.factors, base.pricing.factors),
      packagesHref: str(raw.pricing?.packagesHref, base.pricing.packagesHref),
      ctaLabel: str(raw.pricing?.ctaLabel, base.pricing.ctaLabel),
    },
    why: {
      title: str(raw.why?.title, base.why.title),
      paragraphs: strArray(raw.why?.paragraphs, base.why.paragraphs),
    },
    portfolio: {
      eyebrow: str(raw.portfolio?.eyebrow, base.portfolio.eyebrow),
      title: str(raw.portfolio?.title, base.portfolio.title),
      lede: str(raw.portfolio?.lede, base.portfolio.lede),
      href: str(raw.portfolio?.href, base.portfolio.href),
      linkLabel: str(raw.portfolio?.linkLabel, base.portfolio.linkLabel),
    },
    related: Array.isArray(raw.related)
      ? raw.related.map((r, i) => ({
          label: str(r?.label, base.related[i]?.label ?? ""),
          href: str(r?.href, base.related[i]?.href ?? ""),
        }))
      : base.related,
    faq: Array.isArray(raw.faq)
      ? raw.faq.map((f, i) => ({
          q: str(f?.q, base.faq[i]?.q ?? ""),
          a: str(f?.a, base.faq[i]?.a ?? ""),
        }))
      : base.faq,
    finalCta: {
      title: str(raw.finalCta?.title, base.finalCta.title),
      lede: str(raw.finalCta?.lede, base.finalCta.lede),
      primary: str(raw.finalCta?.primary, base.finalCta.primary),
      secondary: str(raw.finalCta?.secondary, base.finalCta.secondary),
      whatsappHref: str(raw.finalCta?.whatsappHref, base.finalCta.whatsappHref),
      whatsappLabel: str(raw.finalCta?.whatsappLabel, base.finalCta.whatsappLabel),
    },
  };
}
