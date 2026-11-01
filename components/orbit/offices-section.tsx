"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type CSSProperties } from "react";
import { OrbitFlag } from "@/components/orbit/flags";
import { ORBIT_BRAND } from "@/lib/orbit/brand";

function OfficeTitle() {
  return (
    <>
      USA, India &amp; the{" "}
      <span className="orbit-offices-title-gold">United States</span>
    </>
  );
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16v10H4V7Zm0 0 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function OrbitOfficesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="orbit-offices-section orbit-studio-surface relative isolate overflow-hidden px-4 py-[clamp(3.75rem,9vh,5.75rem)] sm:px-8"
      aria-labelledby="offices-heading"
    >
      <div className="pointer-events-none absolute inset-0 orbit-studio-surface-glow" aria-hidden="true" />

      <div className="orbit-offices-inner relative z-[1] mx-auto w-full max-w-[min(1480px,96vw)]">
        <header className="orbit-offices-head mx-auto max-w-3xl text-center">
          <p className="orbit-work-badge mx-auto">
            <span className="orbit-work-badge-num">7</span>
            Sales Offices
          </p>
          <h2 id="offices-heading" className="orbit-offices-title">
            <OfficeTitle />
          </h2>
          <div className="orbit-offices-rule" aria-hidden="true">
            <span className="orbit-offices-rule-line" />
            <span className="orbit-offices-rule-gem" />
            <span className="orbit-offices-rule-line" />
          </div>
          <p className="orbit-offices-lede">
            Three sales offices on three continents — same premium delivery, local time zones, and on-the-ground
            support.
          </p>
        </header>

        <ul className="orbit-offices-grid">
          {ORBIT_BRAND.salesOffices.map((office, index) => (
            <li
              key={office.code}
              className="orbit-offices-item"
              style={{ "--office-i": index } as CSSProperties}
            >
              <article className="orbit-offices-card">
                <div className="orbit-offices-visual">
                  <Image
                    src={office.image}
                    alt={`${office.city} — ${office.country} sales office`}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 460px"
                    className="orbit-offices-photo object-cover object-center"
                    loading={index === 1 ? "eager" : "lazy"}
                    priority={index === 1}
                  />
                  <div className="orbit-offices-visual-shade" aria-hidden="true" />
                  <div className="orbit-offices-chip">
                    <OrbitFlag code={office.code} name={office.country} hd variant="hero" />
                    <span>{office.code === "us" ? "USA" : office.country.toUpperCase()}</span>
                  </div>
                </div>

                <div className="orbit-offices-body">
                  <div className="orbit-offices-body-row">
                    <div className="orbit-offices-meta">
                      <p className="orbit-offices-kicker">Sales office</p>
                      <h3 className="orbit-offices-country">{office.country}</h3>
                      <p className="orbit-offices-city">{office.city}</p>
                    </div>
                    <Link
                      href="/contact"
                      className="orbit-offices-cta"
                      aria-label={`Contact ${office.country} sales office`}
                    >
                      <IconArrow />
                    </Link>
                  </div>
                  <div className="orbit-offices-contact">
                    <a href={office.phoneHref} className="orbit-offices-contact-line">
                      <IconPhone />
                      <span>{office.phone}</span>
                    </a>
                    <a href={`mailto:${office.email}`} className="orbit-offices-contact-line">
                      <IconMail />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
