import Link from "next/link";
import { BrandLogo } from "@/components/brand/brand-logo";
import { FooterConnectBar } from "@/components/layout/footer-connect-bar";
import {
  FooterExploreIcon,
  FooterServiceIcon,
  FooterStatIcon,
} from "@/components/layout/footer-icons";
import { OrbitFlag } from "@/components/orbit/flags";
import type { FooterConfig } from "@/lib/footer-config";
import { DEFAULT_FOOTER_CONFIG } from "@/lib/footer-config";
import { DEFAULT_SITE_CHROME } from "@/lib/chrome-defaults";
import type { FallbackNavItem } from "@/lib/site";

type SiteFooterProps = {
  companyName: string;
  tagline: string;
  headerLogoSrc?: string;
  items: FallbackNavItem[];
  email?: string;
  phone?: string;
  address?: string;
  footer?: FooterConfig;
};

export function SiteFooter({
  companyName,
  tagline,
  headerLogoSrc,
  footer = DEFAULT_FOOTER_CONFIG,
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="orbit-footer mt-auto text-white">
      <div className="orbit-footer-scene" aria-hidden="true">
        <div className="orbit-footer-scene-base" />
        <div className="orbit-footer-scene-earth" />
        <div className="orbit-footer-scene-glow" />
      </div>

      <div className="orbit-footer-accent" aria-hidden="true" />

      <div className="orbit-footer-shell">
        <div className="orbit-footer-grid">
          <div className="orbit-footer-brand">
            <BrandLogo variant="footer" src={headerLogoSrc} />
            <p className="orbit-footer-tagline">
              {tagline?.trim() || DEFAULT_SITE_CHROME.footerTagline}
            </p>
            <div className="orbit-footer-stats">
              {footer.stats.map((stat) => (
                <div key={stat.label} className="orbit-footer-stat">
                  <FooterStatIcon kind={stat.icon} />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="orbit-footer-col">
            <h4 className="orbit-footer-heading">{footer.exploreHeading}</h4>
            <ul className="orbit-footer-links orbit-footer-links-rich">
              {footer.explore.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href}>
                    <FooterExploreIcon id={item.icon} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="orbit-footer-col">
            <h4 className="orbit-footer-heading">{footer.servicesHeading}</h4>
            <ul className="orbit-footer-links orbit-footer-links-rich">
              {footer.services.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link href={item.href}>
                    <FooterServiceIcon id={item.icon} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="orbit-footer-col orbit-footer-col-offices">
            <h4 className="orbit-footer-heading">{footer.officesHeading}</h4>
            <ul className="orbit-footer-offices">
              {footer.offices.map((office) => (
                <li key={office.code}>
                  <a href={office.phoneHref} className="orbit-footer-office-card">
                    <span className="orbit-footer-office-flag" aria-hidden="true">
                      <OrbitFlag code={office.code} name={office.country} size={34} rounded="full" />
                    </span>
                    <span className="orbit-footer-office-body">
                      <span className="orbit-footer-office-country">{office.country}</span>
                      <span className="orbit-footer-office-line">{office.phone}</span>
                      <span className="orbit-footer-office-line is-muted">{office.email}</span>
                    </span>
                    <span className="orbit-footer-office-go" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path
                          d="M9 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FooterConnectBar footer={footer} />
      </div>

      <div className="orbit-footer-bottom">
        <div className="orbit-footer-bottom-inner">
          <p className="orbit-footer-copy">
            © {year} {companyName}. All rights reserved.
          </p>

          <nav className="orbit-footer-legal" aria-label="Legal">
            {footer.legal.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
