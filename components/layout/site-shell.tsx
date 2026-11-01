import { MobileAppExperience } from "@/components/layout/mobile-app-experience";
import type { ReactNode } from "react";
import { DeploymentRecovery } from "@/components/layout/deployment-recovery";
import { HideOnOrbit } from "@/components/layout/hide-on-orbit";
import { OrbitChrome } from "@/components/layout/orbit-chrome";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteMain } from "@/components/layout/site-main";
import type { FooterConfig } from "@/lib/footer-config";
import type { FallbackNavItem } from "@/lib/site";

type SiteShellProps = {
  companyName: string;
  tagline: string;
  headerLogoSrc?: string;
  headerItems: FallbackNavItem[];
  footerItems: FallbackNavItem[];
  email?: string;
  phone?: string;
  address?: string;
  footer?: FooterConfig;
  children: ReactNode;
};

export function SiteShell({
  companyName,
  tagline,
  headerLogoSrc,
  headerItems,
  footerItems,
  email,
  phone,
  address,
  footer,
  children,
}: SiteShellProps) {
  return (
    <div className="orbit-app-shell flex min-h-full flex-col bg-[#07070b] text-[#e8eef8]">
      <MobileAppExperience />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#f0c43a] focus:px-4 focus:py-2 focus:text-sm focus:text-[#1a1408]"
      >
        Skip to content
      </a>
      <SiteHeader companyName={companyName} headerLogoSrc={headerLogoSrc} items={headerItems} email={email} phone={phone} />
      <SiteMain>{children}</SiteMain>
      <HideOnOrbit>
        <SiteFooter
          companyName={companyName}
          tagline={tagline}
          headerLogoSrc={headerLogoSrc}
          items={footerItems}
          email={email}
          phone={phone}
          address={address}
          footer={footer}
        />
      </HideOnOrbit>
      <OrbitChrome phone={phone} />
      <DeploymentRecovery />
    </div>
  );
}
