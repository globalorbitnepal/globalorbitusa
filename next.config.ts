import type { NextConfig } from "next";

const distDir = process.env.NEXT_DIST_DIR?.trim() || ".next";

const nextConfig: NextConfig = {
  distDir,
  experimental: {
    useTypeScriptCli: false,
    webpackBuildWorker: false,
  },
  // Prisma is already on Next.js' default server-external list.
  serverExternalPackages: ["@prisma/client"],
  images: {
    qualities: [75, 96, 100],
    remotePatterns: [
      { protocol: "https", hostname: "flagcdn.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/icons/favicon-48.png" }];
  },
  async redirects() {
    const legacyNepalSlugs = [
      { source: "/service/:slug-nepal", destination: "/service/:slug-usa", permanent: true },
      { source: "/:slug-nepal", destination: "/:slug-usa", permanent: true },
      { source: "/blog/rank-nepali-businesses-page-1-google", destination: "/blog/rank-us-businesses-page-1-google", permanent: true },
      { source: "/blog/right-tech-stack-nepali-startup-2026", destination: "/blog/right-tech-stack-us-startup-2026", permanent: true },
    ];
    return [
      ...legacyNepalSlugs,
      { source: "/news", destination: "/blogs", permanent: true },
      { source: "/news/:slug", destination: "/blogs", permanent: true },
      { source: "/portfolio", destination: "/projects", permanent: true },
      { source: "/request-a-quote", destination: "/contact", permanent: true },
      { source: "/services/website-development-usa", destination: "/service/website-development-usa", permanent: true },
      { source: "/services/website-design-usa", destination: "/studio", permanent: true },
      { source: "/services/software-development-usa", destination: "/custom-software-development-usa", permanent: true },
      { source: "/services/web-application-development", destination: "/web-development-usa", permanent: true },
      { source: "/services/mobile-app-development", destination: "/orbit-software/web-apps", permanent: true },
      { source: "/services/ecommerce-website-development", destination: "/service/ecommerce-development-usa", permanent: true },
      { source: "/services/trekking-travel-website-development", destination: "/trekking-website-development-usa", permanent: true },
      { source: "/services/hotel-website-development", destination: "/hotel-website-development-usa", permanent: true },
      { source: "/services/booking-system-development", destination: "/booking-website-development-usa", permanent: true },
      { source: "/services/seo-services-usa", destination: "/service/seo-optimization-usa", permanent: true },
      { source: "/services/digital-marketing-usa", destination: "/service/digital-marketing-usa", permanent: true },
      { source: "/services/google-ads-management", destination: "/service/digital-marketing-usa", permanent: true },
      { source: "/services/social-media-marketing", destination: "/service/digital-marketing-usa", permanent: true },
      { source: "/services/website-maintenance", destination: "/services/hosting", permanent: true },
    ];
  },
};

export default nextConfig;
