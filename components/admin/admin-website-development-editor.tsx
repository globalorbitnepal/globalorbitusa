"use client";

import type { FormEvent } from "react";
import type { WebsiteDevelopmentPageConfig } from "@/lib/website-development-page-config";

function Field({
  label,
  value,
  onChange,
  multiline,
  hint,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  hint?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium text-[#1a1a22]">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-[#1a1a22]"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-[#1a1a22]"
        />
      )}
      {hint ? <span className="mt-1 block text-xs text-black/45">{hint}</span> : null}
    </label>
  );
}

function Panel({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="go-cms-card">
      <h3 className="text-lg font-semibold text-[#1a1a22]">{title}</h3>
      {description ? <p className="go-cms-help mt-1">{description}</p> : null}
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

type Props = {
  config: WebsiteDevelopmentPageConfig;
  busy: boolean;
  status: string;
  onChange: (next: WebsiteDevelopmentPageConfig) => void;
  onSubmit: (event: FormEvent) => void;
};

export function AdminWebsiteDevelopmentEditor({ config, busy, status, onChange, onSubmit }: Props) {
  const set = (patch: Partial<WebsiteDevelopmentPageConfig>) => onChange({ ...config, ...patch });

  return (
    <form onSubmit={onSubmit} className="space-y-6 pb-16">
      <Panel title="Hero" description="Headline and CTAs. This page never uses images — the hero is a coded browser frame.">
        <Field label="Eyebrow" value={config.hero.eyebrow} onChange={(v) => set({ hero: { ...config.hero, eyebrow: v } })} />
        <Field label="H1" value={config.hero.h1} onChange={(v) => set({ hero: { ...config.hero, h1: v } })} multiline />
        <Field label="Intro" value={config.hero.lede} onChange={(v) => set({ hero: { ...config.hero, lede: v } })} multiline />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Primary CTA" value={config.hero.primaryCta} onChange={(v) => set({ hero: { ...config.hero, primaryCta: v } })} />
          <Field label="Secondary CTA" value={config.hero.secondaryCta} onChange={(v) => set({ hero: { ...config.hero, secondaryCta: v } })} />
        </div>
        <Field label="Secondary CTA link" value={config.hero.secondaryHref} onChange={(v) => set({ hero: { ...config.hero, secondaryHref: v } })} />
        <Field
          label="Main browser URL bar"
          value={config.heroComposition.mainBrowserUrl}
          onChange={(v) => set({ heroComposition: { ...config.heroComposition, mainBrowserUrl: v } })}
        />
        <Field
          label="Hero caption"
          value={config.heroComposition.caption}
          onChange={(v) => set({ heroComposition: { ...config.heroComposition, caption: v } })}
        />
        {config.heroComposition.satellites.map((sat, index) => (
          <div key={index} className="rounded-xl border border-black/10 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wide text-black/50">Satellite label {index + 1}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Field
                label="URL bar"
                value={sat.url}
                onChange={(v) => {
                  const satellites = config.heroComposition.satellites.map((s, i) => (i === index ? { ...s, url: v, src: "" } : s));
                  set({ heroComposition: { ...config.heroComposition, mainImage: "", satellites } });
                }}
              />
              <Field
                label="Label"
                value={sat.alt}
                onChange={(v) => {
                  const satellites = config.heroComposition.satellites.map((s, i) => (i === index ? { ...s, alt: v, src: "" } : s));
                  set({ heroComposition: { ...config.heroComposition, mainImage: "", satellites } });
                }}
              />
            </div>
          </div>
        ))}
      </Panel>

      <Panel title="Delivery stats" description="Four highlight tiles under the hero">
        {config.stats.map((item, index) => (
          <div key={index} className="grid gap-3 sm:grid-cols-2">
            <Field
              label={`Stat ${index + 1} value`}
              value={item.value}
              onChange={(v) => {
                const stats = config.stats.map((s, i) => (i === index ? { ...s, value: v } : s));
                set({ stats });
              }}
            />
            <Field
              label={`Stat ${index + 1} label`}
              value={item.label}
              onChange={(v) => {
                const stats = config.stats.map((s, i) => (i === index ? { ...s, label: v } : s));
                set({ stats });
              }}
            />
          </div>
        ))}
      </Panel>

      <Panel title="Trust chips" description="Capability labels under the hero (not statistics)">
        {config.trust.map((item, index) => (
          <Field
            key={index}
            label={`Chip ${index + 1}`}
            value={item.label}
            onChange={(v) => {
              const trust = config.trust.map((t, i) => (i === index ? { label: v } : t));
              set({ trust });
            }}
          />
        ))}
      </Panel>

      <Panel title="Introduction">
        <Field label="Section title" value={config.intro.title} onChange={(v) => set({ intro: { ...config.intro, title: v } })} />
        {config.intro.paragraphs.map((p, index) => (
          <Field
            key={index}
            label={`Paragraph ${index + 1}`}
            value={p}
            multiline
            onChange={(v) => {
              const paragraphs = config.intro.paragraphs.map((para, i) => (i === index ? v : para));
              set({ intro: { ...config.intro, paragraphs } });
            }}
          />
        ))}
      </Panel>

      <Panel title="United States markets" description="Local and national copy plus internal links">
        <Field
          label="Section title"
          value={config.usaMarkets.title}
          multiline
          onChange={(v) => set({ usaMarkets: { ...config.usaMarkets, title: v } })}
        />
        {config.usaMarkets.paragraphs.map((p, index) => (
          <Field
            key={index}
            label={`Paragraph ${index + 1}`}
            value={p}
            multiline
            onChange={(v) => {
              const paragraphs = config.usaMarkets.paragraphs.map((para, i) => (i === index ? v : para));
              set({ usaMarkets: { ...config.usaMarkets, paragraphs } });
            }}
          />
        ))}
        {config.usaMarkets.links.map((link, index) => (
          <div key={index} className="grid gap-3 sm:grid-cols-2">
            <Field
              label={`Link ${index + 1} label`}
              value={link.label}
              onChange={(v) => {
                const links = config.usaMarkets.links.map((item, i) => (i === index ? { ...item, label: v } : item));
                set({ usaMarkets: { ...config.usaMarkets, links } });
              }}
            />
            <Field
              label={`Link ${index + 1} href`}
              value={link.href}
              onChange={(v) => {
                const links = config.usaMarkets.links.map((item, i) => (i === index ? { ...item, href: v } : item));
                set({ usaMarkets: { ...config.usaMarkets, links } });
              }}
            />
          </div>
        ))}
      </Panel>

      <Panel title="Services grid" description="Twelve service cards">
        {config.services.map((service, index) => (
          <div key={index} className="rounded-xl border border-black/10 p-4 space-y-3">
            <p className="text-xs font-bold text-black/45">Service {index + 1}</p>
            <Field
              label="Title"
              value={service.title}
              onChange={(v) => {
                const services = config.services.map((s, i) => (i === index ? { ...s, title: v } : s));
                set({ services });
              }}
            />
            <Field
              label="Description"
              value={service.body}
              multiline
              onChange={(v) => {
                const services = config.services.map((s, i) => (i === index ? { ...s, body: v } : s));
                set({ services });
              }}
            />
            <Field
              label="Link (optional)"
              value={service.href}
              onChange={(v) => {
                const services = config.services.map((s, i) => (i === index ? { ...s, href: v } : s));
                set({ services });
              }}
            />
          </div>
        ))}
      </Panel>

      <Panel title="Industry panels" description="Six text showcases. Layout mocks are coded — no images.">
        {config.industries.map((panel, index) => (
          <div key={panel.id} className="rounded-xl border border-black/10 p-4 space-y-3">
            <p className="text-xs font-bold text-black/45">{panel.title}</p>
            <Field
              label="Title"
              value={panel.title}
              onChange={(v) => {
                const industries = config.industries.map((p, i) => (i === index ? { ...p, title: v, image: "", imageAlt: "" } : p));
                set({ industries });
              }}
            />
            <Field
              label="Body"
              value={panel.body}
              multiline
              onChange={(v) => {
                const industries = config.industries.map((p, i) => (i === index ? { ...p, body: v, image: "", imageAlt: "" } : p));
                set({ industries });
              }}
            />
            {panel.points.map((point, pi) => (
              <Field
                key={pi}
                label={`Bullet ${pi + 1}`}
                value={point}
                onChange={(v) => {
                  const points = panel.points.map((pt, i) => (i === pi ? v : pt));
                  const industries = config.industries.map((p, i) => (i === index ? { ...p, points, image: "", imageAlt: "" } : p));
                  set({ industries });
                }}
              />
            ))}
          </div>
        ))}
      </Panel>

      <Panel title="Demo showcase" description="Six fictional coded demos. Screenshots are disabled — the page stays image-free.">
        <Field label="Section eyebrow" value={config.demoHeader.eyebrow} onChange={(v) => set({ demoHeader: { ...config.demoHeader, eyebrow: v } })} />
        <Field label="Title" value={config.demoHeader.title} onChange={(v) => set({ demoHeader: { ...config.demoHeader, title: v } })} />
        <Field label="Title accent" value={config.demoHeader.titleAccent} onChange={(v) => set({ demoHeader: { ...config.demoHeader, titleAccent: v } })} />
        <Field label="Lede" value={config.demoHeader.lede} onChange={(v) => set({ demoHeader: { ...config.demoHeader, lede: v } })} multiline />
        {config.demos.map((demo, index) => (
          <div key={demo.id} className="rounded-xl border border-black/10 p-4 space-y-3">
            <Field
              label="Brand"
              value={demo.brand}
              onChange={(v) => {
                const demos = config.demos.map((d, i) => (i === index ? { ...d, brand: v, previewImageSrc: "" } : d));
                set({ demos });
              }}
            />
            <Field
              label="Browser URL"
              value={demo.demoUrl}
              onChange={(v) => {
                const demos = config.demos.map((d, i) => (i === index ? { ...d, demoUrl: v } : d));
                set({ demos });
              }}
            />
            <Field label="Tagline" value={demo.tagline} onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, tagline: v } : d));
              set({ demos });
            }} />
            <Field label="Fiction label" value={demo.fictionalLabel} onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, fictionalLabel: v } : d));
              set({ demos });
            }} multiline />
            <Field label="Story" value={demo.story} onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, story: v } : d));
              set({ demos });
            }} multiline />
            <Field label="Audience" value={demo.audience} onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, audience: v } : d));
              set({ demos });
            }} />
            <Field label="Design direction" value={demo.designDirection} onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, designDirection: v } : d));
              set({ demos });
            }} />
            <Field label="Conversion action" value={demo.conversionAction} onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, conversionAction: v } : d));
              set({ demos });
            }} />
            <Field label="UX note" value={demo.uxNote} multiline onChange={(v) => {
              const demos = config.demos.map((d, i) => (i === index ? { ...d, uxNote: v, previewImageSrc: "" } : d));
              set({ demos });
            }} />
            {demo.bullets.map((bullet, bi) => (
              <Field
                key={`b-${bi}`}
                label={`Bullet ${bi + 1}`}
                value={bullet}
                onChange={(v) => {
                  const bullets = demo.bullets.map((item, i) => (i === bi ? v : item));
                  const demos = config.demos.map((d, i) => (i === index ? { ...d, bullets, previewImageSrc: "" } : d));
                  set({ demos });
                }}
              />
            ))}
            {demo.stack.map((item, si) => (
              <Field
                key={`s-${si}`}
                label={`Stack ${si + 1}`}
                value={item}
                onChange={(v) => {
                  const stack = demo.stack.map((entry, i) => (i === si ? v : entry));
                  const demos = config.demos.map((d, i) => (i === index ? { ...d, stack, previewImageSrc: "" } : d));
                  set({ demos });
                }}
              />
            ))}
          </div>
        ))}
      </Panel>

      <Panel title="Process">
        {config.processSteps.map((step, index) => (
          <div key={index} className="space-y-2 border-b border-black/5 pb-4">
            <Field label={`Step ${index + 1} title`} value={step.title} onChange={(v) => {
              const processSteps = config.processSteps.map((s, i) => (i === index ? { ...s, title: v } : s));
              set({ processSteps });
            }} />
            <Field label="Body" value={step.body} multiline onChange={(v) => {
              const processSteps = config.processSteps.map((s, i) => (i === index ? { ...s, body: v } : s));
              set({ processSteps });
            }} />
            <Field label="Deliverable" value={step.deliverable} onChange={(v) => {
              const processSteps = config.processSteps.map((s, i) => (i === index ? { ...s, deliverable: v } : s));
              set({ processSteps });
            }} />
          </div>
        ))}
      </Panel>

      <Panel title="Technology">
        <Field label="Title" value={config.tech.title} multiline onChange={(v) => set({ tech: { ...config.tech, title: v } })} />
        {config.tech.paragraphs.map((p, i) => (
          <Field key={i} label={`Paragraph ${i + 1}`} value={p} multiline onChange={(v) => {
            const paragraphs = config.tech.paragraphs.map((para, j) => (j === i ? v : para));
            set({ tech: { ...config.tech, paragraphs } });
          }} />
        ))}
        {config.tech.stacks.map((stack, i) => (
          <Field key={i} label={`Stack ${i + 1}`} value={stack} onChange={(v) => {
            const stacks = config.tech.stacks.map((item, j) => (j === i ? v : item));
            set({ tech: { ...config.tech, stacks } });
          }} />
        ))}
      </Panel>

      <Panel title="SEO section">
        <Field label="Eyebrow" value={config.seo.eyebrow} onChange={(v) => set({ seo: { ...config.seo, eyebrow: v } })} />
        <Field label="Title" value={config.seo.title} multiline onChange={(v) => set({ seo: { ...config.seo, title: v } })} />
        {config.seo.paragraphs.map((p, i) => (
          <Field key={i} label={`Paragraph ${i + 1}`} value={p} multiline onChange={(v) => {
            const paragraphs = config.seo.paragraphs.map((para, j) => (j === i ? v : para));
            set({ seo: { ...config.seo, paragraphs } });
          }} />
        ))}
        {config.seo.bullets.map((bullet, i) => (
          <Field key={i} label={`Bullet ${i + 1}`} value={bullet} onChange={(v) => {
            const bullets = config.seo.bullets.map((item, j) => (j === i ? v : item));
            set({ seo: { ...config.seo, bullets } });
          }} />
        ))}
      </Panel>

      <Panel title="Core Web Vitals">
        <Field label="Title" value={config.cwv.title} multiline onChange={(v) => set({ cwv: { ...config.cwv, title: v } })} />
        {config.cwv.paragraphs.map((p, i) => (
          <Field key={i} label={`Paragraph ${i + 1}`} value={p} multiline onChange={(v) => {
            const paragraphs = config.cwv.paragraphs.map((para, j) => (j === i ? v : para));
            set({ cwv: { ...config.cwv, paragraphs } });
          }} />
        ))}
        {config.cwv.metrics.map((metric, index) => (
          <div key={index} className="space-y-2 rounded-xl border border-black/10 p-4">
            <Field label="Metric name" value={metric.name} onChange={(v) => {
              const metrics = config.cwv.metrics.map((item, i) => (i === index ? { ...item, name: v } : item));
              set({ cwv: { ...config.cwv, metrics } });
            }} />
            <Field label="Target" value={metric.target} onChange={(v) => {
              const metrics = config.cwv.metrics.map((item, i) => (i === index ? { ...item, target: v } : item));
              set({ cwv: { ...config.cwv, metrics } });
            }} />
            <Field label="Note" value={metric.note} multiline onChange={(v) => {
              const metrics = config.cwv.metrics.map((item, i) => (i === index ? { ...item, note: v } : item));
              set({ cwv: { ...config.cwv, metrics } });
            }} />
          </div>
        ))}
      </Panel>

      <Panel title="Stack comparison">
        <Field label="Title" value={config.stackCompare.title} multiline onChange={(v) => set({ stackCompare: { ...config.stackCompare, title: v } })} />
        <Field label="Intro" value={config.stackCompare.intro} multiline onChange={(v) => set({ stackCompare: { ...config.stackCompare, intro: v } })} />
        {config.stackCompare.rows.map((row, index) => (
          <div key={index} className="space-y-2 rounded-xl border border-black/10 p-4">
            <Field label="Stack" value={row.stack} onChange={(v) => {
              const rows = config.stackCompare.rows.map((item, i) => (i === index ? { ...item, stack: v } : item));
              set({ stackCompare: { ...config.stackCompare, rows } });
            }} />
            <Field label="Best for" value={row.bestFor} multiline onChange={(v) => {
              const rows = config.stackCompare.rows.map((item, i) => (i === index ? { ...item, bestFor: v } : item));
              set({ stackCompare: { ...config.stackCompare, rows } });
            }} />
            <Field label="Trade-off" value={row.tradeoff} multiline onChange={(v) => {
              const rows = config.stackCompare.rows.map((item, i) => (i === index ? { ...item, tradeoff: v } : item));
              set({ stackCompare: { ...config.stackCompare, rows } });
            }} />
          </div>
        ))}
      </Panel>

      <Panel title="Quality and deliverables">
        <Field label="Quality title" value={config.perf.title} onChange={(v) => set({ perf: { ...config.perf, title: v } })} />
        {config.perf.paragraphs.map((p, i) => (
          <Field key={i} label={`Quality paragraph ${i + 1}`} value={p} multiline onChange={(v) => {
            const paragraphs = config.perf.paragraphs.map((para, j) => (j === i ? v : para));
            set({ perf: { ...config.perf, paragraphs } });
          }} />
        ))}
        {config.perf.bullets.map((bullet, i) => (
          <Field key={i} label={`Quality bullet ${i + 1}`} value={bullet} onChange={(v) => {
            const bullets = config.perf.bullets.map((item, j) => (j === i ? v : item));
            set({ perf: { ...config.perf, bullets } });
          }} />
        ))}
        <Field label="Deliverables eyebrow" value={config.deliverables.eyebrow} onChange={(v) => set({ deliverables: { ...config.deliverables, eyebrow: v } })} />
        <Field label="Deliverables title" value={config.deliverables.title} onChange={(v) => set({ deliverables: { ...config.deliverables, title: v } })} />
        {config.deliverables.bullets.map((bullet, i) => (
          <Field key={i} label={`Deliverable ${i + 1}`} value={bullet} onChange={(v) => {
            const bullets = config.deliverables.bullets.map((item, j) => (j === i ? v : item));
            set({ deliverables: { ...config.deliverables, bullets } });
          }} />
        ))}
      </Panel>

      <Panel title="Pricing">
        <Field label="Title" value={config.pricing.title} onChange={(v) => set({ pricing: { ...config.pricing, title: v } })} />
        <Field label="Intro" value={config.pricing.intro} multiline onChange={(v) => set({ pricing: { ...config.pricing, intro: v } })} />
        {config.pricing.factors.map((factor, i) => (
          <Field key={i} label={`Factor ${i + 1}`} value={factor} onChange={(v) => {
            const factors = config.pricing.factors.map((item, j) => (j === i ? v : item));
            set({ pricing: { ...config.pricing, factors } });
          }} />
        ))}
        <Field label="Packages link" value={config.pricing.packagesHref} onChange={(v) => set({ pricing: { ...config.pricing, packagesHref: v } })} />
        <Field label="CTA label" value={config.pricing.ctaLabel} onChange={(v) => set({ pricing: { ...config.pricing, ctaLabel: v } })} />
      </Panel>

      <Panel title="Why Global Orbit and related links">
        <Field label="Why title" value={config.why.title} onChange={(v) => set({ why: { ...config.why, title: v } })} />
        {config.why.paragraphs.map((p, i) => (
          <Field key={i} label={`Why paragraph ${i + 1}`} value={p} multiline onChange={(v) => {
            const paragraphs = config.why.paragraphs.map((para, j) => (j === i ? v : para));
            set({ why: { ...config.why, paragraphs } });
          }} />
        ))}
        <Field label="Portfolio eyebrow" value={config.portfolio.eyebrow} onChange={(v) => set({ portfolio: { ...config.portfolio, eyebrow: v } })} />
        <Field label="Portfolio title" value={config.portfolio.title} onChange={(v) => set({ portfolio: { ...config.portfolio, title: v } })} />
        <Field label="Portfolio lede" value={config.portfolio.lede} multiline onChange={(v) => set({ portfolio: { ...config.portfolio, lede: v } })} />
        <Field label="Portfolio link label" value={config.portfolio.linkLabel} onChange={(v) => set({ portfolio: { ...config.portfolio, linkLabel: v } })} />
        <Field label="Portfolio href" value={config.portfolio.href} onChange={(v) => set({ portfolio: { ...config.portfolio, href: v } })} />
        {config.related.map((item, index) => (
          <div key={index} className="grid gap-3 sm:grid-cols-2">
            <Field label={`Related ${index + 1} label`} value={item.label} onChange={(v) => {
              const related = config.related.map((entry, i) => (i === index ? { ...entry, label: v } : entry));
              set({ related });
            }} />
            <Field label={`Related ${index + 1} href`} value={item.href} onChange={(v) => {
              const related = config.related.map((entry, i) => (i === index ? { ...entry, href: v } : entry));
              set({ related });
            }} />
          </div>
        ))}
      </Panel>

      <Panel title="Closing CTA">
        <Field label="Title" value={config.finalCta.title} multiline onChange={(v) => set({ finalCta: { ...config.finalCta, title: v } })} />
        <Field label="Lede" value={config.finalCta.lede} multiline onChange={(v) => set({ finalCta: { ...config.finalCta, lede: v } })} />
        <Field label="Primary button" value={config.finalCta.primary} onChange={(v) => set({ finalCta: { ...config.finalCta, primary: v } })} />
        <Field label="Secondary button" value={config.finalCta.secondary} onChange={(v) => set({ finalCta: { ...config.finalCta, secondary: v } })} />
        <Field label="WhatsApp label" value={config.finalCta.whatsappLabel} onChange={(v) => set({ finalCta: { ...config.finalCta, whatsappLabel: v } })} />
        <Field label="WhatsApp link" value={config.finalCta.whatsappHref} onChange={(v) => set({ finalCta: { ...config.finalCta, whatsappHref: v } })} />
      </Panel>

      <Panel title="FAQ" description="Accordion questions — one block per item">
        {config.faq.map((item, index) => (
          <div key={index} className="space-y-2 border-b border-black/5 pb-4">
            <Field label={`Q${index + 1}`} value={item.q} onChange={(v) => {
              const faq = config.faq.map((f, i) => (i === index ? { ...f, q: v } : f));
              set({ faq });
            }} />
            <Field label="Answer" value={item.a} multiline onChange={(v) => {
              const faq = config.faq.map((f, i) => (i === index ? { ...f, a: v } : f));
              set({ faq });
            }} />
          </div>
        ))}
      </Panel>

      {status ? <p className="go-cms-status">{status}</p> : null}
      <button type="submit" className="go-cms-primary" disabled={busy}>
        {busy ? "Publishing…" : "Publish website development page"}
      </button>
    </form>
  );
}
