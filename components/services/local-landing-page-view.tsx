import Link from "next/link";
import type { ReactNode } from "react";
import { AboutReveal } from "@/components/about/reveal";
import type { LocalLanding } from "@/lib/local-landings";
import { USA_PHONE_DISPLAY, USA_PHONE_TEL, USA_WHATSAPP_URL } from "@/lib/contact-info";

function Badge({ children }: { children: ReactNode }) {
  return <span className="orbit-about-badge">{children}</span>;
}

function Gold({ children }: { children: ReactNode }) {
  return <span className="orbit-about-gold-text">{children}</span>;
}

export function LocalLandingPageView({ item }: { item: LocalLanding }) {
  return (
    <main className="orbit-about-page orbit-wd-page text-white">
      <div className="sw-product-crumb-wrap px-4 pt-[clamp(4.5rem,8vh,5.5rem)] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-white/45">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-white/80">
              Solutions
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white/70">{item.title}</span>
          </nav>
        </div>
      </div>

      <section className="orbit-wd-hero-section relative isolate px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <div className="orbit-about-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="orbit-about-hero-grid pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
        <div className="mx-auto max-w-[82rem]">
          <div className="max-w-3xl">
            <Badge>{item.eyebrow}</Badge>
            <h1 className="orbit-about-hero-title mt-5 text-left font-[family-name:var(--font-jakarta)]">{item.h1}</h1>
            <p className="orbit-about-hero-lede mt-5 max-w-2xl text-left">{item.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="orbit-about-cta-primary">
                Get a free quote
                <span aria-hidden="true">→</span>
              </Link>
              <a href={USA_PHONE_TEL} className="orbit-about-cta-ghost">
                Call {USA_PHONE_DISPLAY}
              </a>
              <a
                href={USA_WHATSAPP_URL}
                className="orbit-about-cta-ghost"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="orbit-about-glass orbit-about-story">
              <Badge>Why teams choose us</Badge>
              <h2 className="orbit-about-h2 mt-4">
                Local intent, <Gold>real engineering</Gold>
              </h2>
              {item.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-base leading-relaxed text-white/58">
                  {paragraph}
                </p>
              ))}
              {item.areas.length ? (
                <ul className="wd-trust-strip mt-8 flex flex-wrap gap-2">
                  {item.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="local-services-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <header className="mb-8">
              <Badge>What you get</Badge>
              <h2 id="local-services-heading" className="orbit-about-h2 mt-4">
                Services included
              </h2>
            </header>
            <ul className="wd-service-grid">
              {item.services.map((service) => (
                <li key={service.title} className="wd-service-card">
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </li>
              ))}
            </ul>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="local-pricing-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <header className="mb-8">
              <Badge>Pricing</Badge>
              <h2 id="local-pricing-heading" className="orbit-about-h2 mt-4">
                Starting prices in <Gold>USD</Gold>
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/55">
                Published starting points. Final pricing depends on page count, copywriting, and integrations — confirmed
                in writing before work starts.
              </p>
            </header>
            <ul className="wd-service-grid">
              {item.pricing.map((tier) => (
                <li key={tier.label} className="wd-service-card">
                  <h3>{tier.label}</h3>
                  <p className="orbit-about-gold-text text-lg font-semibold">{tier.price}</p>
                  <p>{tier.detail}</p>
                </li>
              ))}
            </ul>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="local-process-heading">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <header className="mb-8">
              <Badge>Process</Badge>
              <h2 id="local-process-heading" className="orbit-about-h2 mt-4">
                How the engagement runs
              </h2>
            </header>
            <ol className="wd-process-timeline">
              {item.process.map((step) => (
                <li key={step.step}>
                  <span>{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 sm:px-6 lg:px-8" aria-labelledby="local-faq-heading">
        <div className="mx-auto max-w-[52rem]">
          <AboutReveal>
            <header className="mb-8">
              <Badge>FAQ</Badge>
              <h2 id="local-faq-heading" className="orbit-about-h2 mt-4">
                Questions we get <Gold>before the call</Gold>
              </h2>
            </header>
            <div className="orbit-faq orbit-sw-product-faq mt-2">
              {item.faqs.map((faq, index) => (
                <details key={faq.q} className="orbit-faq-item" open={index === 0}>
                  <summary className="orbit-faq-trigger">
                    <span className="orbit-faq-q">{faq.q}</span>
                    <span className="orbit-faq-toggle" aria-hidden="true" />
                  </summary>
                  <div className="orbit-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-projects-tight px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[82rem]">
          <AboutReveal>
            <div className="wd-final-cta text-center">
              <h2 className="orbit-about-h2">Ready to talk specifics?</h2>
              <p className="mx-auto mt-4 max-w-xl text-white/58">
                Send the page list, the integrations you cannot change, and your launch window. You will get a written
                scope with a fixed price — not a sales deck.
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Link href="/contact" className="orbit-about-cta-primary">
                  Start your project
                  <span aria-hidden="true">→</span>
                </Link>
                <a href={USA_PHONE_TEL} className="orbit-about-cta-ghost">
                  Call {USA_PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </AboutReveal>

          <div className="mt-10">
            <h2 className="orbit-about-h2 mb-5 text-center">Related services</h2>
            <ul className="mt-5 flex flex-wrap justify-center gap-3">
              {item.related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="orbit-about-cta-ghost">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
