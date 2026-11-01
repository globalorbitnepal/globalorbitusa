import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { DEFAULT_PROJECTS, parseProjectsConfig, type ProjectsConfig } from "@/lib/projects-config";
import { contentFile } from "@/lib/content-dir";

function projectsJsonPath() {
  return contentFile("projects.json");
}

export async function getProjectsConfig(): Promise<ProjectsConfig> {
  try {
    const raw = await readFile(projectsJsonPath(), "utf8");
    return parseProjectsConfig(JSON.parse(raw));
  } catch {
    return DEFAULT_PROJECTS;
  }
}

export async function saveProjectsConfig(config: ProjectsConfig) {
  const file = projectsJsonPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(config, null, 2)}\n`, "utf8");
}
