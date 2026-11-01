import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import {
  DEFAULT_HOME_SURFACE,
  mergeHomeSurface,
  type HomeSurfaceConfig,
} from "@/lib/home-surface-config";
import { contentFile } from "@/lib/content-dir";

export type { HomeSurfaceConfig } from "@/lib/home-surface-config";
export { DEFAULT_HOME_SURFACE, mergeHomeSurface } from "@/lib/home-surface-config";

function storePath() {
  return contentFile("home-surface.json");
}

export async function getHomeSurfaceConfig(): Promise<HomeSurfaceConfig> {
  try {
    const raw = await readFile(storePath(), "utf8");
    return mergeHomeSurface(JSON.parse(raw) as Partial<HomeSurfaceConfig>);
  } catch {
    return DEFAULT_HOME_SURFACE;
  }
}

export async function saveHomeSurfaceConfig(next: HomeSurfaceConfig) {
  const file = storePath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(next, null, 2)}\n`, "utf8");
}
