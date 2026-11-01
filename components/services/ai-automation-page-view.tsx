import Link from "next/link";
import type { ReactNode } from "react";
import { AboutReveal } from "@/components/about/reveal";
import { AiAutomationFlow } from "@/components/services/ai-automation-flow";
import {
  AI_CONNECT,
  AI_CTA,
  AI_FAQ,
  AI_GUARDRAILS,
  AI_HERO,
  AI_PILLARS,
  AI_PROCESS,
  AI_STATS,
  AI_USE_CASES,
} from "@/lib/ai-automation-page";

function Badge({ children }: { children: ReactNode }) {
  return <span className="orbit-about-badge">{children}</span>;
}

function Gold({ children }: { children: ReactNode }) {
  return <span className="orbit-about-gold-text">{children}</span>;
}

export function AiAutomationPageView() {
  return (
    <main className="orbit-about-page orbit-ai-page text-white">
      <section className="orbit-ai-hero relative isolate overflow-hidden px-4 pb-14 pt-[clamp(4.75rem,9vh,6.2rem)] sm:px-6 lg:px-8">
        <div className="orbit-ai-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="orbit-ai-hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="orbit-ai-hero-orb pointer-events-none absolute -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[76rem] text-center">
          <Badge>{AI_HERO.eyebrow}</Badge>
          <h1 className="orbit-about-hero-title mt-5 font-[family-name:var(--font-jakarta)]">
            <span className="text-white">{AI_HERO.titleBefore} </span>
            <Gold>{AI_HERO.titleAccent}</Gold>
            <br />
            <span className="text-white/92">{AI_HERO.titleAfter}</span>
          </h1>
          <p className="orbit-about-hero-lede mx-auto mt-5 max-w-2xl">{AI_HERO.lede}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="orbit-about-cta-primary">
              Plan an automation
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="#ai-board" className="orbit-about-cta-ghost">
              See the loop
            </Link>
          </div>
          <div className="orbit-projects-hero-stats mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AI_STATS.map((stat) => (
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
              <Badge>Why this exists</Badge>
              <h2 className="orbit-about-h2 mt-4">The floor already has a process. The model has to join it.</h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/58">
                Generic AI pages sell a prompt box. Operators in USA need a closed loop: an event, a decision,
                a write-back, and a person who can stop it. That is what we ship — gold-and-ink chrome, dense
                data, motion that does not hang the scroll.
              </p>
              <ul className="orbit-ai-pillars mt-8 grid gap-4 sm:grid-cols-3">
                {AI_PILLARS.map((item) => (
                  <li key={item.title} className="orbit-ai-pillar">
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section id="ai-board" className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="ai-loop-heading">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <header className="mb-8 text-center">
              <Badge>The loop</Badge>
              <h2 id="ai-loop-heading" className="orbit-about-h2 mt-4">
                Ingest · reason · act · prove
              </h2>
            </header>
            <AiAutomationFlow />
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <Badge>Workflows</Badge>
            <h2 className="orbit-about-h2 mt-4">Eight jobs we automate without a brochure screenshot</h2>
            <ul className="orbit-ai-cases mt-8 grid gap-4 sm:grid-cols-2">
              {AI_USE_CASES.map((item) => (
                <li key={item.title} className="orbit-ai-case">
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <div className="orbit-about-glass">
              <Badge>Connectors</Badge>
              <h2 className="orbit-about-h2 mt-4">Talk to the stack you already pay for</h2>
              <ul className="orbit-ai-connect mt-8">
                {AI_CONNECT.map((item) => (
                  <li key={item}>{item}</li>
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
              <Badge>Guardrails</Badge>
              <h2 className="orbit-about-h2 mt-4">Automation you can still explain to finance</h2>
              <ul className="orbit-ai-guard mt-8 grid gap-4 sm:grid-cols-2">
                {AI_GUARDRAILS.map((item) => (
                  <li key={item.title}>
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
            <div className="orbit-about-glass">
              <Badge>Delivery</Badge>
              <h2 className="orbit-about-h2 mt-4">From floor map to a kill switch you own</h2>
              <ol className="erp-process mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {AI_PROCESS.map((step, i) => (
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

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="ai-faq-heading">
        <div className="mx-auto max-w-[76rem]">
          <AboutReveal>
            <div className="orbit-about-glass">
              <Badge>FAQ</Badge>
              <h2 id="ai-faq-heading" className="orbit-about-h2 mt-4">
                AI automation — USA
              </h2>
              <dl className="erp-faq mt-8 space-y-6">
                {AI_FAQ.map((item) => (
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
            <h2 className="orbit-about-h2">{AI_CTA.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/55">{AI_CTA.lede}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href={AI_CTA.primaryHref} className="orbit-about-cta-primary">
                {AI_CTA.primaryLabel}
                <span aria-hidden="true">→</span>
              </Link>
              <Link href={AI_CTA.secondaryHref} className="orbit-about-cta-ghost">
                {AI_CTA.secondaryLabel}
              </Link>
            </div>
          </div>
        </AboutReveal>
      </section>
    </main>
  );
}
