import { expect, test } from "@playwright/test";
import {
  ALL_VIEWPORTS,
  attachDiagnostics,
  assertNoHorizontalOverflow,
  KEY_VIEWPORTS,
  primaryH1Text,
  PRODUCTION_ORIGIN,
  TEMPLATE_PAGES,
} from "./helpers";

test.beforeEach(async ({}, testInfo) => {
  const base = testInfo.project.use?.baseURL ?? process.env.PLAYWRIGHT_BASE_URL;
  if (!String(base).includes("theglobalorbit.com") && process.env.CI) {
    test.skip(true, "CI must target production PLAYWRIGHT_BASE_URL");
  }
});

test.describe("metadata and DOM (desktop)", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  for (const tpl of TEMPLATE_PAGES) {
    test(`${tpl.name} — title, canonical, H1`, async ({ page }) => {
      const diag = attachDiagnostics(page);
      const response = await page.goto(tpl.path, { waitUntil: "domcontentloaded", timeout: 45_000 });
      expect(response?.status()).toBe(200);

      const h1 = await primaryH1Text(page);
      expect(h1).toMatch(tpl.h1);
      if (tpl.h1MustNot) expect(h1).not.toMatch(tpl.h1MustNot);

      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveCount(1);
      await expect(canonical).toHaveAttribute("href", new RegExp(`^${PRODUCTION_ORIGIN.replace(/\./g, "\\.")}`));

      expect((await page.title()).length).toBeGreaterThan(10);
      await expect(page.locator('meta[name="description"]')).toHaveCount(1);

      const { consoleErrors, pageErrors, hydration } = diag.assertClean();
      expect(hydration, `hydration issues on ${tpl.path}`).toHaveLength(0);
      expect(pageErrors, `page errors on ${tpl.path}`).toHaveLength(0);
      const ignored = /Failed to load resource|favicon|third-party|cookie/i;
      expect(consoleErrors.filter((e) => !ignored.test(e)), `console on ${tpl.path}: ${consoleErrors.join("; ")}`).toHaveLength(0);
    });
  }

  test("website-development — no lodge demo as document H1", async ({ page }) => {
    await page.goto("/service/website-development-usa", { waitUntil: "domcontentloaded" });
    const h1 = await primaryH1Text(page);
    expect(h1).toMatch(/Website Development Company in USA/i);
    expect(h1).not.toMatch(/Book a quiet night|above the ridge/i);
    const allH1 = await page.locator("h1").allInnerTexts();
    const lodge = allH1.filter((t) => /Book a quiet night/i.test(t));
    expect(lodge).toHaveLength(0);
  });

  test("homepage SSR includes home-hero H1 in HTML", async ({ request }) => {
    const res = await request.get("/");
    const html = await res.text();
    expect(html).toContain('id="home-hero-heading"');
    expect(html).toMatch(/We\s+Build\s+Digital/i);
  });

  test("blog article", async ({ page }) => {
    await page.goto("/blogs", { waitUntil: "domcontentloaded" });
    const link = page.locator('a[href^="/blog/"]').first();
    const href = await link.getAttribute("href");
    test.skip(!href, "No published blog on /blogs");
    const response = await page.goto(href!, { waitUntil: "domcontentloaded" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
  });
});

test.describe("sitemap, robots, redirects", () => {
  test("sitemap.xml", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("<urlset");
    expect(body).toContain("/orbit-software/billing-software");
    const locs = body.match(/<loc>[^<]+<\/loc>/g) ?? [];
    expect(new Set(locs).size).toBe(locs.length);
    expect(locs.length).toBeGreaterThanOrEqual(60);
  });

  test("robots.txt", async ({ request }) => {
    const body = await (await request.get("/robots.txt")).text();
    expect(body).toContain(`Sitemap: ${PRODUCTION_ORIGIN}/sitemap.xml`);
    expect(body).toContain("Disallow: /demo");
  });

  test("redirect /portfolio", async ({ request }) => {
    const res = await request.get("/portfolio", { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers().location).toBe("/projects");
  });

  test("redirect /services/website-development-usa", async ({ request }) => {
    const res = await request.get("/services/website-development-usa", { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers().location).toBe("/service/website-development-usa");
  });
});

test.describe("horizontal overflow — homepage all viewports", () => {
  for (const width of ALL_VIEWPORTS) {
    test(`homepage @ ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: Math.min(1200, width < 768 ? 844 : 900) });
      await page.goto("/", { waitUntil: "load", timeout: 60_000 });
      expect(await assertNoHorizontalOverflow(page)).toBe(false);
    });
  }
});

test.describe("horizontal overflow — key templates", () => {
  const paths = [
    "/about",
    "/contact",
    "/services",
    "/service/website-development-usa",
    "/trekking-website-development-usa",
  ];

  for (const width of KEY_VIEWPORTS) {
    for (const path of paths) {
      test(`${path} @ ${width}px`, async ({ page }) => {
        await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
        await page.goto(path, { waitUntil: "load", timeout: 45_000 });
        expect(await assertNoHorizontalOverflow(page)).toBe(false);
      });
    }
  }
});

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("header menu opens", async ({ page }) => {
    await page.goto("/", { waitUntil: "load", timeout: 60_000 });
    const menuBtn = page.locator("button.orbit-header-menu-btn");
    await expect(menuBtn).toBeVisible();
    await menuBtn.click({ timeout: 10_000 });
    await expect(menuBtn).toHaveAttribute("aria-expanded", "true", { timeout: 10_000 });
    const nav = page.locator(".orbit-mobile-menu.is-open #mobile-nav");
    await expect(nav).toBeVisible({ timeout: 10_000 });
    await expect(nav.locator("a").first()).toBeVisible();
  });
});

test.describe("images load on homepage", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("hero and logo images respond", async ({ page }) => {
    const bad: string[] = [];
    page.on("response", (res) => {
      if (res.request().resourceType() === "image" && res.status() >= 400) {
        bad.push(`${res.status()} ${res.url()}`);
      }
    });
    await page.goto("/", { waitUntil: "domcontentloaded", timeout: 60_000 });
    await page.locator("img").first().waitFor({ state: "visible", timeout: 30_000 });
    await page.waitForTimeout(1500);
    expect(bad).toHaveLength(0);
  });
});
