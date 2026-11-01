import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { DEFAULT_HERO, parseHeroConfig, type HeroConfig } from "@/lib/hero-config";
import { contentFile } from "@/lib/content-dir";
import { getAppEnv } from "@/lib/env";

function heroJsonPath() {
  return contentFile("hero.json");
}

export function heroUploadDir() {
  return path.join(getAppEnv().uploadDir, "hero");
}

export async function getHeroConfig(): Promise<HeroConfig> {
  try {
    const raw = await readFile(heroJsonPath(), "utf8");
    return parseHeroConfig(JSON.parse(raw));
  } catch {
    return DEFAULT_HERO;
  }
}

export async function saveHeroConfig(config: HeroConfig) {
  const file = heroJsonPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
