import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { AboutReveal } from "@/components/about/reveal";
import { WebsiteDevDemoShowcase } from "@/components/services/website-development/demo-showcase";
import { WebsiteDevHeroShowcase } from "@/components/services/website-development/hero-showcase";
import { WebsiteDevBreadcrumbs } from "@/components/services/website-development/wd-breadcrumbs";
import { WebsiteDevFaq } from "@/components/services/website-development/wd-faq";
import { WdIndustryMock } from "@/components/services/website-development/wd-visuals";
import type { WebsiteDevelopmentPageConfig } from "@/lib/website-development-page-config";
import { WD_CWV, WD_STACK_COMPARE, WD_STATS, WD_USA_MARKETS } from "@/lib/website-development-content";

function Badge({ children }: { children: ReactNode }) {
  return <span className="orbit-about-badge">{children}</span>;
}

export function WebsiteDevelopmentPageView({ config }: { config: WebsiteDevelopmentPageConfig }) {
  const {
    hero,
    heroComposition,
    trust,
    intro,
    services,
    industries,
    demoHeader,
    demos,
    processSteps,
    tech,
    seo,
    deliverables,
    perf,
    pricing,
    why,
    portfolio,
    related,
    faq,
    finalCta,
  } = config;

  return (
    <main className="orbit-about-page orbit-wd-page text-white">
      <div className="sw-product-crumb-wrap px-4 pt-[clamp(4.5rem,8vh,5.5rem)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <WebsiteDevBreadcrumbs />
        </div>
      </div>

      <section className="orbit-wd-hero-section relative isolate px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="orbit-about-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="orbit-about-hero-grid pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
        <div className="mx-auto grid max-w-[82rem] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-14">
          <div className="wd-hero-copy wd-hero-enter">
            <Badge>{hero.eyebrow}</Badge>
            <h1 className="orbit-about-hero-title mt-5 text-left font-[family-name:var(--font-jakarta)]">{hero.h1}</h1>
            <p className="orbit-about-hero-lede mt-5 max-w-xl text-left">{hero.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="orbit-about-cta-primary">
                {hero.primaryCta}
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={hero.secondaryHref} className="orbit-about-cta-ghost">
                {hero.secondaryCta}
              </Link>
            </div>
            <ul className="wd-trust-strip mt-10 flex flex-wrap gap-2">
              {trust.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
          <WebsiteDevHeroShowcase composition={heroComposition} />
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-label="Delivery highlights">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <ul className="wd-stats-band">
              {WD_STATS.map((stat) => (
                <li key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </li>
              ))}
            </ul>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Foundation</Badge>
              <h2 className="orbit-about-h2 mt-4">{intro.title}</h2>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-white/58">
                  {p}
                </p>
              ))}
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-usa-markets-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>United States</Badge>
              <h2 id="wd-usa-markets-heading" className="orbit-about-h2 mt-4">
                {WD_USA_MARKETS.title}
              </h2>
              {WD_USA_MARKETS.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-white/58">
                  {p}
                </p>
              ))}
              <ul className="wd-usa-links mt-8 flex flex-wrap gap-2">
                {WD_USA_MARKETS.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="wd-usa-link-pill">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-services-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <header className="mb-8">
              <Badge>Services</Badge>
              <h2 id="wd-services-heading" className="orbit-about-h2 mt-4">
                Website development services
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55">
                End-to-end delivery from discovery to launch — each line below maps to a real engagement type we scope in writing.
              </p>
            </header>
            <ul className="wd-service-grid">
              {services.map((service, index) => (
                <li key={service.title} className="wd-service-card" style={{ "--wd-i": index } as CSSProperties}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  {service.href ? (
                    <Link href={service.href} className="wd-service-link">
                      Learn more →
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-industry-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <header className="mb-10 text-center">
              <Badge>Industries</Badge>
              <h2 id="wd-industry-heading" className="orbit-about-h2 mt-4">
                Industry-specific website solutions
              </h2>
            </header>
            <ul className="wd-industry-grid">
              {industries.map((panel) => (
                <li key={panel.id} className="wd-industry-panel">
                  <div className="wd-industry-visual">
                    <WdIndustryMock id={panel.id} />
                  </div>
                  <div className="wd-industry-copy">
                    <h3>{panel.title}</h3>
                    <p>{panel.body}</p>
                    <ul>
                      {panel.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </AboutReveal>
        </div>
      </section>

      <WebsiteDevDemoShowcase demos={demos} header={demoHeader} />

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Process</Badge>
              <h2 className="orbit-about-h2 mt-4">Our website development process</h2>
              <ol className="wd-process-timeline mt-8">
                {processSteps.map((step, i) => (
                  <li key={step.title}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                      <p className="wd-process-deliverable">
                        <strong>Deliverable:</strong> {step.deliverable}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Technology</Badge>
              <h2 className="orbit-about-h2 mt-4">{tech.title}</h2>
              {tech.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-white/58">
                  {p}
                </p>
              ))}
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {tech.stacks.map((stack) => (
                  <li key={stack} className="flex gap-3 text-sm leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0c43a]" aria-hidden="true" />
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>{seo.eyebrow}</Badge>
              <h2 className="orbit-about-h2 mt-4">{seo.title}</h2>
              <div className="mt-5 space-y-3 text-base leading-relaxed text-white/58">
                {seo.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {seo.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0c43a]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-cwv-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Performance</Badge>
              <h2 id="wd-cwv-heading" className="orbit-about-h2 mt-4">
                {WD_CWV.title}
              </h2>
              {WD_CWV.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-white/58">
                  {p}
                </p>
              ))}
              <div className="wd-metric-grid mt-8">
                {WD_CWV.metrics.map((metric) => (
                  <article key={metric.name} className="wd-metric-card">
                    <p className="wd-metric-name">{metric.name}</p>
                    <p className="wd-metric-target">{metric.target}</p>
                    <p className="wd-metric-note">{metric.note}</p>
                  </article>
                ))}
              </div>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-stack-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Architecture</Badge>
              <h2 id="wd-stack-heading" className="orbit-about-h2 mt-4">
                {WD_STACK_COMPARE.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/58">{WD_STACK_COMPARE.intro}</p>
              <div className="wd-compare-table-wrap mt-8">
                <table className="wd-compare-table">
                  <thead>
                    <tr>
                      <th scope="col">Stack</th>
                      <th scope="col">Best for</th>
                      <th scope="col">Trade-off</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WD_STACK_COMPARE.rows.map((row) => (
                      <tr key={row.stack}>
                        <th scope="row">{row.stack}</th>
                        <td>{row.bestFor}</td>
                        <td>{row.tradeoff}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem] grid gap-6 lg:grid-cols-2">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story h-full">
              <Badge>Quality</Badge>
              <h2 className="orbit-about-h2 mt-4">{perf.title}</h2>
              {perf.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-white/58">
                  {p}
                </p>
              ))}
              <ul className="mt-6 grid gap-2.5">
                {perf.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0c43a]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story h-full">
              <Badge>{deliverables.eyebrow}</Badge>
              <h2 className="orbit-about-h2 mt-4">{deliverables.title}</h2>
              <ul className="mt-6 grid gap-2.5">
                {deliverables.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0c43a]" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Pricing</Badge>
              <h2 className="orbit-about-h2 mt-4">{pricing.title}</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/58">{pricing.intro}</p>
              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {pricing.factors.map((factor) => (
                  <li key={factor} className="text-sm leading-relaxed text-white/55">• {factor}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="orbit-about-cta-primary">
                  {pricing.ctaLabel}
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href={pricing.packagesHref} className="orbit-about-cta-ghost">
                  View packages
                </Link>
              </div>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Global Orbit</Badge>
              <h2 className="orbit-about-h2 mt-4">{why.title}</h2>
              {why.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-white/58">
                  {p}
                </p>
              ))}
              <p className="mt-6 text-sm text-white/50">
                <Link href={portfolio.href} className="text-[#f0c43a] hover:underline">
                  {portfolio.linkLabel}
                </Link>
                {" — "}
                {portfolio.lede}
              </p>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-related-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass">
              <Badge>Related</Badge>
              <h2 id="wd-related-heading" className="orbit-about-h2 mt-4">Related services</h2>
              <ul className="sw-product-related mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="sw-product-related-card">
                      <h3>{item.label}</h3>
                      <span>View →</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="wd-faq-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass">
              <Badge>FAQ</Badge>
              <h2 id="wd-faq-heading" className="orbit-about-h2 mt-4">
                Website development USA — frequently asked questions
              </h2>
              <WebsiteDevFaq items={faq} />
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 pb-16 sm:px-6 lg:px-8">
        <AboutReveal>
          <div className="orbit-about-cta wd-final-cta mx-auto max-w-[52rem] text-center">
            <h2 className="orbit-about-h2">{finalCta.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/55">{finalCta.lede}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className="orbit-about-cta-primary">
                {finalCta.primary}
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="orbit-about-cta-ghost">
                {finalCta.secondary}
              </Link>
              <a
                href={finalCta.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="orbit-about-cta-ghost text-sm"
              >
                {finalCta.whatsappLabel}
              </a>
            </div>
          </div>
        </AboutReveal>
      </section>
    </main>
  );
}
