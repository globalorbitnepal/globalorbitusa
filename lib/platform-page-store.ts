import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  getDefaultPlatformConfig,
  parsePlatformPageConfig,
  type CustomAppsConfig,
} from "@/lib/custom-apps-config";
import { contentFile } from "@/lib/content-dir";
import type { PlatformPageSlug } from "@/lib/platform-page-slugs";

function jsonPath(slug: PlatformPageSlug) {
  return contentFile(`${slug}.json`);
}

async function readConfigFile(file: string, slug: PlatformPageSlug): Promise<CustomAppsConfig> {
  try {
    const raw = await readFile(file, "utf8");
    return parsePlatformPageConfig(slug, JSON.parse(raw));
  } catch {
    if (slug === "web-apps") {
      try {
        const legacy = path.join(path.dirname(file), "custom-apps.json");
        const raw = await readFile(legacy, "utf8");
        return parsePlatformPageConfig("web-apps", JSON.parse(raw));
      } catch {
        return getDefaultPlatformConfig("web-apps");
      }
    }
    return getDefaultPlatformConfig(slug);
  }
}

export async function getPlatformPageConfig(slug: PlatformPageSlug): Promise<CustomAppsConfig> {
  return readConfigFile(jsonPath(slug), slug);
}

export async function savePlatformPageConfig(slug: PlatformPageSlug, config: CustomAppsConfig) {
  const file = jsonPath(slug);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(
    file,
    `${JSON.stringify(parsePlatformPageConfig(slug, config), null, 2)}\n`,
    "utf8",
  );
}

export async function getCustomAppsConfig() {
  return getPlatformPageConfig("web-apps");
}

export async function saveCustomAppsConfig(config: CustomAppsConfig) {
  return savePlatformPageConfig("web-apps", config);
}
