import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { DEFAULT_SOFTWARE, parseSoftwareConfig, type SoftwareConfig } from "@/lib/software-config";
import { contentFile } from "@/lib/content-dir";

function softwareJsonPath() {
  return contentFile("software.json");
}

export async function getSoftwareConfig(): Promise<SoftwareConfig> {
  try {
    const raw = await readFile(softwareJsonPath(), "utf8");
    return parseSoftwareConfig(JSON.parse(raw));
  } catch {
    return DEFAULT_SOFTWARE;
  }
}

export async function saveSoftwareConfig(config: SoftwareConfig) {
  const file = softwareJsonPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
