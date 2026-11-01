/**
 * Regenerate favicon, PWA icons, and default OG image from brand assets.
 * Source globe: public/brand/globe-emblem.webp (copy from design handoff if missing).
 */
import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const brand = path.join(root, "public/brand");
const icons = path.join(root, "public/icons");
const appDir = path.join(root, "app");

const GLOBE = path.join(brand, "globe-emblem.webp");
const LOGO = path.join(brand, "logo-official-gold.png");
const BG = { r: 7, g: 7, b: 11, alpha: 1 };

async function squareLogo(size, outPath, padding = 0.1) {
  const inner = Math.round(size * (1 - padding * 2));
  const logo = await sharp(LOGO).resize(inner, null, { fit: "inside" }).png().toBuffer();
  const canvas = sharp({
    create: { width: size, height: size, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  });
  await canvas.composite([{ input: logo, gravity: "centre" }]).png().toFile(outPath);
}

async function buildOgDefault() {
  const w = 1200;
  const h = 630;
  const logoBuf = await sharp(LOGO)
    .resize(720, null, { fit: "inside" })
    .png()
    .toBuffer();
  await sharp({
    create: { width: w, height: h, channels: 4, background: { r: 7, g: 7, b: 11, alpha: 1 } },
  })
    .composite([{ input: logoBuf, gravity: "centre" }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(path.join(brand, "og-default.jpg"));
}

async function main() {
  if (!existsSync(GLOBE)) {
    console.error(`Missing ${GLOBE}`);
    process.exit(1);
  }
  mkdirSync(icons, { recursive: true });

  await squareLogo(512, path.join(icons, "pwa-512.png"));
  await squareLogo(512, path.join(icons, "pwa-maskable-512.png"));
  await squareLogo(192, path.join(icons, "pwa-192.png"));
  await squareLogo(180, path.join(icons, "apple-touch-180.png"));
  await squareLogo(48, path.join(icons, "favicon-48.png"));
  await squareLogo(32, path.join(icons, "favicon-32.png"));
  await squareLogo(512, path.join(brand, "logo-emblem-square.png"));
  await squareLogo(192, path.join(brand, "google-logo-192.png"));

  await sharp(LOGO).resize(340, 340, { fit: "inside" }).webp({ quality: 92, alphaQuality: 100 }).toFile(GLOBE);

  await buildOgDefault();

  await sharp(path.join(icons, "favicon-48.png"))
    .resize(32, 32)
    .toFile(path.join(appDir, "icon.png"));

  await sharp(path.join(icons, "apple-touch-180.png")).toFile(path.join(appDir, "apple-icon.png"));

  console.log("Brand icons generated.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
