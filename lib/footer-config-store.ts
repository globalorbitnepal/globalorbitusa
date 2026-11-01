import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  DEFAULT_FOOTER_CONFIG,
  mergeFooterConfig,
  type FooterConfig,
} from "@/lib/footer-config";
import { contentFile } from "@/lib/content-dir";

export type { FooterConfig } from "@/lib/footer-config";
export { DEFAULT_FOOTER_CONFIG, mergeFooterConfig } from "@/lib/footer-config";

function footerPath() {
  return contentFile("footer-config.json");
}

export async function getFooterConfig(): Promise<FooterConfig> {
  try {
    const raw = await readFile(footerPath(), "utf8");
    return mergeFooterConfig(JSON.parse(raw) as Partial<FooterConfig>);
  } catch {
    return DEFAULT_FOOTER_CONFIG;
  }
}

export async function saveFooterConfig(next: FooterConfig) {
  const file = footerPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(next, null, 2)}\n`, "utf8");
}
