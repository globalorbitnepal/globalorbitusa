import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Admin console UI tests: sign in, then exercise the controls that previously
 * failed silently (footer save, header/footer identity, logo width).
 */
function envValue(key: string): string {
  try {
    const raw = readFileSync(join(process.cwd(), ".env"), "utf8");
    for (const line of raw.split("\n")) {
      if (!line.startsWith(`${key}=`)) continue;
      return line.slice(key.length + 1).trim().replace(/^["']|["']$/g, "");
    }
  } catch {
    /* fall through */
  }
  return process.env[key] ?? "";
}

const USER = envValue("ORBIT_EDITOR_USERNAME");
const PASS = envValue("ORBIT_EDITOR_PASSWORD");

/**
 * Sign in once per file and reuse the cookie — repeated logins hit the API rate
 * limit (8 attempts / 15 min) and would fail the suite for the wrong reason.
 */
let sessionCookie = "";

test.beforeAll(async ({ playwright, baseURL }) => {
  const request = await playwright.request.newContext();
  const res = await request.post(`${baseURL}/api/orbit/login`, {
    data: { username: USER, password: PASS, remember: true },
  });
  expect(res.status(), "admin login").toBe(200);
  const header = res.headers()["set-cookie"] ?? "";
  sessionCookie = header.split(";")[0];
  await request.dispose();
});

function signIn(page: import("@playwright/test").Page, baseURL: string) {
  const [name, ...rest] = sessionCookie.split("=");
  const { hostname, protocol } = new URL(baseURL!);
  return page.context().addCookies([
    {
      name,
      value: rest.join("="),
      domain: hostname,
      path: "/",
      httpOnly: true,
      secure: protocol === "https:",
      sameSite: "Lax",
    },
  ]);
}

test.describe("admin console", () => {
  test.skip(!PASS, "Requires ORBIT_EDITOR_PASSWORD in .env");

  test.beforeEach(async ({ page, baseURL }) => {
    await signIn(page, baseURL!);
    await page.goto("/admin", { waitUntil: "domcontentloaded" });
    await page.waitForLoadState("networkidle");
    await expect(page.locator(".go-cms")).toBeVisible({ timeout: 30_000 });
  });
  test("logo width slider changes the preview and persists", async ({ page }) => {
    await page.goto("/admin#view=chrome", { waitUntil: "domcontentloaded" });
    const slider = page.locator("#go-cms-logo-width");
    await expect(slider).toBeVisible({ timeout: 20_000 });

    const frame = page.locator(".go-cms-logo-preview-frame");
    await slider.fill("320");
    await expect(frame).toHaveAttribute("style", /--orbit-logo-w:\s*320px/);

    await page.locator("button", { hasText: /Publish changes/i }).first().click();
    await expect(page.locator(".go-cms-toast")).toContainText(/published/i, { timeout: 20_000 });

    const saved = await page.evaluate(async () => {
      const res = await fetch("/api/orbit/chrome");
      const data = (await res.json()) as { chrome?: { logoWidth?: number } };
      return data.chrome?.logoWidth ?? null;
    });
    expect(saved).toBe(320);

    // Restore the production default so the test leaves no side effects.
    await slider.fill("240");
    await page.locator("button", { hasText: /Publish changes/i }).first().click();
    await expect(page.locator(".go-cms-toast")).toContainText(/published/i, { timeout: 20_000 });
  });

  test("footer save succeeds and reports success", async ({ page }) => {
    await page.goto("/admin#view=chrome", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /Footer content/i })).toBeVisible({ timeout: 20_000 });

    await page.locator("button", { hasText: /Publish footer/i }).first().click();
    await expect(page.locator(".go-cms-toast")).toContainText(/Footer content published/i, { timeout: 20_000 });
    await expect(page.locator(".go-cms-toast")).not.toContainText(/Could not save/i);
  });

  test("account view exposes password change", async ({ page }) => {
    await page.goto("/admin#view=account", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: /^Security$/ })).toBeVisible({ timeout: 20_000 });
    await expect(page.locator("#go-account-new")).toBeVisible();
    await expect(page.locator("#go-account-confirm")).toBeVisible();
    await expect(page.locator("#go-account-current")).toBeVisible();
  });
});
