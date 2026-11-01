"use client";

import type { SiteChrome } from "@/lib/chrome-types";
import { LOGO_WIDTH_MAX, LOGO_WIDTH_MIN, logoHeightFor } from "@/lib/logo-size";

type Props = {
  chrome: SiteChrome;
  busy: boolean;
  onChange: (next: SiteChrome) => void;
  onSave: () => void;
  onUpload: (file: File) => void;
};

const PRESETS = [160, 200, 240, 320, 400] as const;

/**
 * Header & footer identity editor: logo asset, logo width (100–480px),
 * and the contact details that render site-wide.
 */
export function AdminChromeEditor({ chrome, busy, onChange, onSave, onUpload }: Props) {
  const logoWidth = chrome.logoWidth ?? 240;

  return (
    <section className="go-cms-card">
      <h2>Header, footer & identity</h2>
      <p className="go-cms-help">
        Site-wide brand details. Changes publish to the live header, footer, admin sidebar and login screen.
      </p>

      <div className="go-cms-logo-preview">
        <div
          className="go-cms-logo-preview-frame"
          style={{ ["--orbit-logo-w" as string]: `${logoWidth}px` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={chrome.headerLogoSrc || "/brand/logo-official-gold.png"}
            alt="Global Orbit"
            className="go-cms-logo-preview-img"
            decoding="async"
          />
        </div>
        <div className="go-cms-logo-preview-meta">
          <strong>Live preview</strong>
          <span>
            {logoWidth}px wide · height scales automatically ({logoHeightFor(logoWidth)}px at this width)
          </span>
          <label className="go-cms-file-btn">
            {busy ? "Uploading…" : "Replace logo file"}
            <input
              type="file"
              accept="image/png,image/webp,image/jpeg,image/svg+xml"
              disabled={busy}
              hidden
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) onUpload(file);
                event.target.value = "";
              }}
            />
          </label>
        </div>
      </div>

      <div className="go-cms-logo-size">
        <label htmlFor="go-cms-logo-width">
          Logo width
          <span className="go-cms-logo-size-value">{logoWidth}px</span>
        </label>
        <input
          id="go-cms-logo-width"
          type="range"
          min={LOGO_WIDTH_MIN}
          max={LOGO_WIDTH_MAX}
          step={10}
          value={logoWidth}
          onChange={(event) => onChange({ ...chrome, logoWidth: Number(event.target.value) })}
        />
        <div className="go-cms-logo-presets">
          {PRESETS.map((width) => (
            <button
              key={width}
              type="button"
              className={logoWidth === width ? "is-active" : ""}
              onClick={() => onChange({ ...chrome, logoWidth: width })}
            >
              {width}px
            </button>
          ))}
        </div>
        <p className="go-cms-help">
          Range {LOGO_WIDTH_MIN}–{LOGO_WIDTH_MAX}px. Phones scale the logo down automatically so it never overlaps the menu.
        </p>
      </div>

      <div className="go-cms-form">
        {(
          [
            ["companyName", "Company name"],
            ["tagline", "Header support line"],
            ["footerTagline", "Footer tagline"],
            ["email", "Support email"],
            ["salesEmail", "Sales email"],
            ["phone", "Primary phone (USA)"],
            ["whatsapp", "WhatsApp number (display)"],
            ["whatsappHref", "WhatsApp link (wa.me/…)"],
            ["address", "Address"],
            ["defaultSeoTitle", "Default SEO title"],
            ["defaultSeoDescription", "Default SEO description"],
          ] as const
        ).map(([key, label]) => (
          <label key={key}>
            {label}
            {key.includes("tagline") || key === "address" || key === "defaultSeoDescription" ? (
              <textarea
                value={chrome[key] ?? ""}
                onChange={(event) => setChromeField(onChange, chrome, key, event.target.value)}
              />
            ) : (
              <input
                value={chrome[key] ?? ""}
                onChange={(event) => setChromeField(onChange, chrome, key, event.target.value)}
              />
            )}
          </label>
        ))}
        <button type="button" disabled={busy} onClick={onSave}>
          {busy ? "Publishing…" : "Publish changes"}
        </button>
      </div>
    </section>
  );
}

function setChromeField(
  onChange: (next: SiteChrome) => void,
  chrome: SiteChrome,
  key: keyof SiteChrome,
  value: string,
) {
  onChange({ ...chrome, [key]: value });
}
