import Link from "next/link";
import type { ReactNode } from "react";
import { AboutReveal } from "@/components/about/reveal";
import { ErpSuiteList } from "@/components/orbit-software/erp-suite-list";
import {
  ERP_CTA,
  ERP_FAQ,
  ERP_HERO,
  ERP_INDUSTRIES,
  ERP_PILLARS,
  ERP_PROCESS,
  ERP_STATS,
} from "@/lib/orbit-software-page";

function Badge({ children }: { children: ReactNode }) {
  return <span className="orbit-about-badge">{children}</span>;
}

function Gold({ children }: { children: ReactNode }) {
  return <span className="orbit-about-gold-text">{children}</span>;
}

export function OrbitSoftwarePageView() {
  return (
    <main className="orbit-about-page orbit-erp-page text-white">
      <section className="orbit-projects-hero relative isolate px-4 pb-12 pt-[clamp(4.75rem,9vh,6rem)] sm:px-6 lg:px-8">
        <div className="orbit-about-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="orbit-about-hero-grid pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <div className="mx-auto max-w-[76rem] text-center">
          <Badge>{ERP_HERO.eyebrow}</Badge>
          <h1 className="orbit-about-hero-title mt-5 font-[family-name:var(--font-jakarta)]">
            <span className="text-white">{ERP_HERO.titleBefore} </span>
            <Gold>{ERP_HERO.titleAccent}</Gold>
            <br />
            <span className="text-white/92">{ERP_HERO.titleAfter}</span>
          </h1>
          <p className="orbit-about-hero-lede mx-auto mt-5 max-w-2xl">{ERP_HERO.lede}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="orbit-about-cta-primary">
              Plan an ERP build
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="#erp-suites-heading" className="orbit-about-cta-ghost">
              Browse products
            </Link>
          </div>
          <div className="orbit-projects-hero-stats mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ERP_STATS.map((stat) => (
              <div key={stat.label} className="orbit-projects-stat-card">
                <p className="orbit-projects-stat-value">{stat.value}</p>
                <p className="orbit-projects-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Why Orbit Software</Badge>
              <h2 className="orbit-about-h2 mt-4">ERP that matches how the floor already works</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/58">
                Off-the-shelf suites fight U.S. hospitality, trek ops, and factory rhythm. We ship operator
                software with the same dark premium bar as the homepage — gold accents, dense data, and motion
                that respects the product, not a looping marketing clip.
              </p>
              <ul className="erp-pillars mt-8 grid gap-4 sm:grid-cols-3">
                {ERP_PILLARS.map((item) => (
                  <li key={item.title} className="erp-pillar">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <ErpSuiteList />

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <div className="orbit-about-glass">
              <Badge>Industries</Badge>
              <h2 className="orbit-about-h2 mt-4">Where these products land every quarter</h2>
              <ul className="erp-industries mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {ERP_INDUSTRIES.map((item) => (
                  <li key={item.title} className="erp-industry">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Delivery</Badge>
              <h2 className="orbit-about-h2 mt-4">From workshop to production DNS</h2>
              <ol className="erp-process mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {ERP_PROCESS.map((step, i) => (
                  <li key={step.title}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="erp-faq-heading">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <div className="orbit-about-glass">
              <Badge>FAQ</Badge>
              <h2 id="erp-faq-heading" className="orbit-about-h2 mt-4">
                ERP and Orbit Software — USA
              </h2>
              <dl className="erp-faq mt-8 space-y-6">
                {ERP_FAQ.map((item) => (
                  <div key={item.q}>
                    <dt>{item.q}</dt>
                    <dd>{item.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 pb-16 sm:px-6 lg:px-8">
        <AboutReveal>
          <div className="orbit-about-cta mx-auto max-w-[48rem] text-center">
            <h2 className="orbit-about-h2">{ERP_CTA.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/55">{ERP_CTA.lede}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href={ERP_CTA.primaryHref} className="orbit-about-cta-primary">
                {ERP_CTA.primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={ERP_CTA.secondaryHref} className="orbit-about-cta-ghost">
                {ERP_CTA.secondaryLabel}
              </Link>
            </div>
          </div>
        </AboutReveal>
      </section>
    </main>
  );
}
