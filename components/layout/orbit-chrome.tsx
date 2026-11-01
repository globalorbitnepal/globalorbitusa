"use client";

import { USA_PHONE_DISPLAY, USA_WHATSAPP_URL, phoneToWhatsApp } from "@/lib/contact-info";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PwaInstallPrompt } from "@/components/layout/pwa-install-prompt";
import { isOrbitAdminPath } from "@/lib/is-orbit-admin-route";

export function OrbitChrome({ phone }: { phone?: string }) {
  const pathname = usePathname();
  const hide = isOrbitAdminPath(pathname);
  const [showTop, setShowTop] = useState(false);
  const displayPhone = phone?.trim() || USA_PHONE_DISPLAY;
  const whatsappHref = phone?.trim() ? phoneToWhatsApp(displayPhone) : USA_WHATSAPP_URL;

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > 420);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function scrollToHero() {
    const target = document.getElementById("home-hero-heading");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (hide) return null;

  return (
    <>
      <a
        className="orbit-wa-fab"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label={`WhatsApp ${displayPhone}`}
      >
        <span className="orbit-wa-fab-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M19.11 17.47c-.28-.14-1.64-.81-1.9-.9s-.44-.14-.62.14-.72.9-.88 1.08-.32.21-.6.07a7.6 7.6 0 0 1-2.24-1.38 8.37 8.37 0 0 1-1.55-1.93c-.16-.28 0-.43.12-.57s.28-.32.42-.49.14-.28.21-.46.03-.35-.04-.49-.62-1.5-.85-2.05c-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.46.07-.7.35s-.92.9-.92 2.2.94 2.55 1.07 2.73 1.85 2.82 4.48 3.95c.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.64-.67 1.87-1.32s.23-1.2.16-1.32-.25-.21-.53-.35z"
            />
            <path
              fill="currentColor"
              d="M16.02 3.2A12.8 12.8 0 0 0 4.4 21.4L3.2 28.8l7.55-1.18A12.8 12.8 0 1 0 16.02 3.2zm0 23.3a10.5 10.5 0 0 1-5.35-1.47l-.38-.22-4.48.7.71-4.37-.25-.4a10.5 10.5 0 1 1 9.75 5.76z"
            />
          </svg>
        </span>
        <span className="orbit-wa-fab-copy">
          <strong>WhatsApp</strong>
          <small>{displayPhone}</small>
        </span>
      </a>

      <button
        type="button"
        className={`orbit-gold-fab${showTop ? " is-visible" : ""}`}
        aria-label="Back to top"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        onClick={scrollToHero}
      >
        <span className="orbit-gold-fab-shine" aria-hidden="true" />
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 14.5 12 8.8l5.5 5.7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <PwaInstallPrompt />
    </>
  );
}
