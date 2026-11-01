import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { writeAdminAudit } from "@/lib/admin-audit";
import { isOrbitAuthed } from "@/lib/orbit-auth";
import {
  DEFAULT_SITE_CHROME,
  clampLogoWidth,
  getSiteChrome,
  normalizeSiteChrome,
  saveSiteChrome,
} from "@/lib/site-chrome-store";

export async function GET() {
  if (!(await isOrbitAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ chrome: (await getSiteChrome()) ?? DEFAULT_SITE_CHROME });
}

export async function POST(request: Request) {
  if (!(await isOrbitAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const chrome = normalizeSiteChrome({
    companyName: String(body.companyName || DEFAULT_SITE_CHROME.companyName).trim(),
    tagline: String(body.tagline || "").trim(),
    email: String(body.email || "").trim(),
    phone: String(body.phone || "").trim(),
    whatsapp: String(body.whatsapp || "").trim(),
    salesEmail: String(body.salesEmail || "").trim(),
    address: String(body.address || "").trim(),
    defaultSeoTitle: String(body.defaultSeoTitle || "").trim(),
    defaultSeoDescription: String(body.defaultSeoDescription || "").trim(),
    footerTagline: String(body.footerTagline || DEFAULT_SITE_CHROME.footerTagline).trim(),
    logoWidth: clampLogoWidth(body.logoWidth),
    headerLogoSrc:
      typeof body.headerLogoSrc === "string" && body.headerLogoSrc.trim()
        ? String(body.headerLogoSrc).trim()
        : undefined,
    whatsappHref:
      typeof body.whatsappHref === "string" && body.whatsappHref.trim()
        ? String(body.whatsappHref).trim()
        : undefined,
  });
  const saved = await saveSiteChrome(chrome);
  await writeAdminAudit("chrome.save");
  revalidatePath("/", "layout");
  return NextResponse.json({ ok: true, chrome: saved });
}
