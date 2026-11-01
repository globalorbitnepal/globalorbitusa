import type { Page } from "@playwright/test";

export const PRODUCTION_ORIGIN =
  process.env.PLAYWRIGHT_BASE_URL?.replace(/\/$/, "") ||
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://globalorbit.us";

export const ALL_VIEWPORTS = [
  320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1366, 1440, 1536, 1920, 2560, 3440, 3840,
] as const;

export const KEY_VIEWPORTS = [375, 1024, 1440, 1920] as const;

export type TemplatePage = {
  path: string;
  name: string;
  h1: RegExp;
  h1MustNot?: RegExp;
};

export const TEMPLATE_PAGES: TemplatePage[] = [
  {
    path: "/",
    name: "Homepage",
    h1: /We\s+Build\s+Digital\s*Solutions/i,
  },
  { path: "/about", name: "About", h1: /About Global Orbit/i },
  { path: "/contact", name: "Contact", h1: /Contact Global Orbit/i },
  { path: "/services", name: "Services", h1: /Complete digital solutions/i },
  {
    path: "/service/website-development-usa",
    name: "Website development",
    h1: /Website Development Company in USA/i,
    h1MustNot: /Book a quiet night/i,
  },
  {
    path: "/trekking-website-development-usa",
    name: "Trekking landing",
    h1: /Trekking Website Development USA/i,
  },
  { path: "/blogs", name: "Blogs", h1: /Notes from the studio/i },
  { path: "/packages/starter-website", name: "Package", h1: /Starter Website/i },
  { path: "/orbit-software/billing-software", name: "Software", h1: /Billing Software/i },
];

export function attachDiagnostics(page: Page) {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  const failedRequests: string[] = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      const text = msg.text();
      if (text.includes("favicon")) return;
      consoleErrors.push(text);
    }
  });
  page.on("pageerror", (err) => {
    pageErrors.push(err.message);
  });
  page.on("response", (res) => {
    const url = res.url();
    if (res.status() >= 400 && res.request().resourceType() === "document") {
      failedRequests.push(`${res.status()} ${url}`);
    }
  });

  return {
    assertClean() {
      const hydration = [...consoleErrors, ...pageErrors].filter((m) =>
        /hydration|did not match/i.test(m),
      );
      return { consoleErrors, pageErrors, failedRequests, hydration };
    },
  };
}

export async function assertNoHorizontalOverflow(page: Page) {
  await page.evaluate(() =>
    new Promise<void>((resolve) => {
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    }),
  );
  return page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const clientW = doc.clientWidth;
    const scrollW = Math.max(doc.scrollWidth, body.scrollWidth);
    return scrollW > clientW + 2;
  });
}

export async function primaryH1Text(page: Page): Promise<string> {
  const h1 = page.locator("h1").first();
  await h1.waitFor({ state: "attached", timeout: 15_000 });
  return (await h1.innerText()).replace(/\s+/g, " ").trim();
}
