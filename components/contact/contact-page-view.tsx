import Link from "next/link";
import type { ReactNode } from "react";
import { AboutReveal } from "@/components/about/reveal";
import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { OrbitOfficesSection } from "@/components/orbit/offices-section";
import {
  CONTACT_BRIEF_POINTS,
  CONTACT_CHANNELS,
  CONTACT_FAQ,
  CONTACT_HERO,
  CONTACT_PROCESS,
  CONTACT_STATS,
  CONTACT_TOPICS,
} from "@/lib/contact-page";

function Badge({ children }: { children: ReactNode }) {
  return <span className="orbit-about-badge">{children}</span>;
}

function Gold({ children }: { children: ReactNode }) {
  return <span className="orbit-about-gold-text">{children}</span>;
}

const CHANNEL_ICON: Record<string, string> = {
  whatsapp: "💬",
  phone: "📞",
  email: "✉",
  webmail: "🔐",
};

export function ContactPageView() {
  return (
    <main className="orbit-contact-page orbit-about-page overflow-x-clip text-white">
      <section className="orbit-contact-hero relative isolate overflow-hidden px-4 pb-16 pt-[clamp(4.75rem,9vh,6.5rem)] sm:px-6 lg:px-8">
        <div className="orbit-about-hero-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="orbit-about-hero-grid pointer-events-none absolute inset-0 -z-10 opacity-35" aria-hidden="true" />
        <div className="orbit-contact-hero-orb pointer-events-none absolute -z-10" aria-hidden="true" />
        <div className="mx-auto max-w-[76rem] text-center">
          <Badge>{CONTACT_HERO.eyebrow}</Badge>
          <h1 className="orbit-about-hero-title mt-6 font-[family-name:var(--font-jakarta)]">
            Contact Global Orbit — {CONTACT_HERO.titleBefore}{" "}
            <Gold>{CONTACT_HERO.titleAccent}</Gold>{" "}
            <span className="text-white/92">{CONTACT_HERO.titleAfter}</span>
          </h1>
          <p className="orbit-about-hero-lede mx-auto mt-6 max-w-2xl">{CONTACT_HERO.lede}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact-form" className="orbit-about-cta-primary">
              Send your brief
              <span aria-hidden="true">→</span>
            </a>
            <a href={CONTACT_CHANNELS[0].href} className="orbit-about-cta-ghost" target="_blank" rel="noreferrer">
              WhatsApp now
            </a>
          </div>
          <div className="orbit-projects-hero-stats mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_STATS.map((stat) => (
              <div key={stat.label} className="orbit-projects-stat-card orbit-contact-stat">
                <p className="orbit-projects-stat-value">{stat.value}</p>
                <p className="orbit-projects-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="orbit-about-section px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <header className="mb-10 text-center">
            <Badge>Reach us directly</Badge>
            <h2 className="orbit-about-h2 mt-5">
              Pick the channel that <Gold>fits your day</Gold>
            </h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CHANNELS.map((channel, index) => (
              <AboutReveal key={channel.id} delay={index * 60}>
                <a
                  href={channel.href}
                  className="orbit-contact-channel"
                  target={channel.external ? "_blank" : undefined}
                  rel={channel.external ? "noreferrer" : undefined}
                >
                  <span className="orbit-contact-channel-icon" aria-hidden="true">
                    {CHANNEL_ICON[channel.id]}
                  </span>
                  <strong>{channel.title}</strong>
                  <small>{channel.hint}</small>
                  <span className="orbit-contact-channel-value">{channel.value}</span>
                </a>
              </AboutReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="orbit-about-section px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[76rem] gap-8 lg:grid-cols-12 lg:gap-10">
          <AboutReveal className="lg:col-span-5">
            <div className="orbit-about-glass orbit-contact-brief h-full p-6 sm:p-8">
              <Badge>Before you write</Badge>
              <h2 className="orbit-about-h2 mt-5">A strong brief saves weeks</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                The more context you share up front, the faster we can quote accurately and avoid rework after launch.
              </p>
              <ul className="orbit-contact-checklist mt-6 space-y-3">
                {CONTACT_BRIEF_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="mt-8 text-xs leading-relaxed text-white/40">
                Prefer voice? WhatsApp voice notes are welcome — we transcribe and file them with your enquiry.
              </p>
            </div>
          </AboutReveal>
          <AboutReveal className="lg:col-span-7" delay={80}>
            <div className="orbit-about-glass orbit-contact-form-shell p-6 sm:p-8">
              <Badge>Project enquiry</Badge>
              <h2 className="orbit-about-h3 mt-4">Send a message</h2>
              <p className="mt-2 text-sm text-white/50">All fields marked required help us route your brief to the right lead.</p>
              <div className="mt-6">
                <ContactForm premium />
              </div>
            </div>
          </AboutReveal>
        </div>
      </section>

      <section className="orbit-about-section px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <header className="mb-12 text-center">
            <Badge>How it works</Badge>
            <h2 className="orbit-about-h2 mt-5">From first hello to <Gold>production</Gold></h2>
          </header>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_PROCESS.map((item, index) => (
              <AboutReveal key={item.step} delay={index * 70}>
                <article className="orbit-about-glass orbit-contact-step h-full p-6">
                  <p className="orbit-contact-step-num">{item.step}</p>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/52">{item.body}</p>
                </article>
              </AboutReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="orbit-about-section px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[76rem]">
          <header className="mb-10 text-center">
            <Badge>What we discuss</Badge>
            <h2 className="orbit-about-h2 mt-5">Common reasons teams <Gold>contact us</Gold></h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTACT_TOPICS.map((topic, index) => (
              <AboutReveal key={topic.title} delay={index * 50}>
                <article className="orbit-about-glass orbit-contact-topic h-full p-6">
                  <h3 className="font-bold text-white">{topic.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/52">{topic.body}</p>
                </article>
              </AboutReveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/service/website-development-usa" className="orbit-about-cta-ghost">
              Website development
            </Link>
            <Link href="/orbit-software" className="orbit-about-cta-ghost">
              ERP & software
            </Link>
            <Link href="/service/ai-automation" className="orbit-about-cta-ghost">
              AI automation
            </Link>
            <Link href="/projects" className="orbit-about-cta-ghost">
              See our work
            </Link>
          </div>
        </div>
      </section>

      <OrbitOfficesSection />

      <section className="orbit-about-section px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[48rem]">
          <header className="mb-8 text-center">
            <Badge>FAQ</Badge>
            <h2 className="orbit-about-h2 mt-5">Questions before you reach out</h2>
          </header>
          <ContactFaq items={CONTACT_FAQ} />
        </div>
      </section>

      <section className="orbit-contact-cta-band px-4 py-16 text-center sm:px-6">
        <h2 className="font-[family-name:var(--font-jakarta)] text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-tight text-white">
          Ready when you are.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/58">
          USA, India, and global clients — one firm for websites, apps, ERP, and SEO.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#contact-form" className="orbit-about-cta-primary">
            Send enquiry
            <span aria-hidden="true">→</span>
          </a>
          <a href="https://wa.me/9779812322339" className="orbit-about-cta-ghost" target="_blank" rel="noreferrer">
            WhatsApp +977-9812322339
          </a>
        </div>
      </section>
    </main>
  );
}
