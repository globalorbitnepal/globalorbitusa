import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { DEFAULT_WORK, parseWorkConfig, type WorkConfig } from "@/lib/work-config";
import { contentFile } from "@/lib/content-dir";

function workJsonPath() {
  return contentFile("work.json");
}

export async function getWorkConfig(): Promise<WorkConfig> {
  try {
    const raw = await readFile(workJsonPath(), "utf8");
    return parseWorkConfig(JSON.parse(raw));
  } catch {
    return DEFAULT_WORK;
  }
}

export async function saveWorkConfig(config: WorkConfig) {
  const file = workJsonPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
