import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { DEFAULT_CAREERS, parseCareersConfig, type CareersConfig } from "@/lib/careers-config";
import { contentFile } from "@/lib/content-dir";

function careersJsonPath() {
  return contentFile("careers.json");
}

export async function getCareersConfig(): Promise<CareersConfig> {
  try {
    const raw = await readFile(careersJsonPath(), "utf8");
    return parseCareersConfig(JSON.parse(raw));
  } catch {
    return DEFAULT_CAREERS;
  }
}

export async function saveCareersConfig(config: CareersConfig) {
  const file = careersJsonPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
