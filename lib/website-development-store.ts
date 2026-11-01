import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  parseWebsiteDevelopmentPageConfig,
  type WebsiteDevelopmentPageConfig,
} from "@/lib/website-development-page-config";
import { getAppEnv } from "@/lib/env";

function storePath() {
  return path.join(path.dirname(getAppEnv().uploadDir), "website-development-usa.json");
}

export async function getWebsiteDevelopmentPageConfig(): Promise<WebsiteDevelopmentPageConfig> {
  try {
    const raw = await readFile(storePath(), "utf8");
    return parseWebsiteDevelopmentPageConfig(JSON.parse(raw));
  } catch {
    return parseWebsiteDevelopmentPageConfig(null);
  }
}

export async function saveWebsiteDevelopmentPageConfig(config: WebsiteDevelopmentPageConfig) {
  const file = storePath();
  const parsed = parseWebsiteDevelopmentPageConfig(config);
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");
  return parsed;
}
