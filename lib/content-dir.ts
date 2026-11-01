import { accessSync, constants, copyFileSync, existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { getAppEnv } from "@/lib/env";

/**
 * Directory that holds editable JSON content (page copy, SEO, chrome, auth).
 *
 * Resolution order:
 * 1. `ORBIT_CONTENT_DIR` — explicit override.
 * 2. The parent of the upload directory (historical layout, e.g. /data/globalorbitusa).
 * 3. The upload directory itself (e.g. /data/globalorbitusa/uploads).
 * 4. A `content` folder inside the upload directory.
 * 5. `.data` inside the app working directory.
 *
 * Step 2 can be read-only when the parent is root-owned while the app runs as a
 * normal user, which used to make every admin save fail with EACCES. Steps 3–5
 * guarantee a writable home, and legacy files are copied forward on first use so
 * existing content is never lost.
 */

let cached: string | null = null;

const CONTENT_FILE = /\.(json|jsonl)$/i;

function isWritable(dir: string): boolean {
  try {
    mkdirSync(dir, { recursive: true });
    accessSync(dir, constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

function isReadable(dir: string): boolean {
  try {
    accessSync(dir, constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

/**
 * Copy legacy content files into the resolved directory.
 * Runs once (marker file) and never overwrites existing files.
 */
function migrateLegacy(fromDir: string, toDir: string) {
  if (path.resolve(fromDir) === path.resolve(toDir)) return;
  const marker = path.join(toDir, ".content-migrated");
  if (existsSync(marker)) return;
  if (!isReadable(fromDir)) return;

  let names: string[] = [];
  try {
    names = readdirSync(fromDir);
  } catch {
    return;
  }

  for (const name of names) {
    if (!CONTENT_FILE.test(name)) continue;
    const target = path.join(toDir, name);
    if (existsSync(target)) continue;
    try {
      copyFileSync(path.join(fromDir, name), target);
    } catch {
      /* a single unreadable file must not block boot */
    }
  }

  try {
    writeFileSync(marker, `${new Date().toISOString()} from=${fromDir}\n`, "utf8");
  } catch {
    /* marker is best-effort */
  }
}

export function contentDir(): string {
  if (cached) return cached;

  const { uploadDir } = getAppEnv();
  const legacyParent = path.dirname(uploadDir);

  const candidates: string[] = [];
  const explicit = process.env.ORBIT_CONTENT_DIR?.trim();
  if (explicit) candidates.push(explicit);
  candidates.push(legacyParent, uploadDir, path.join(uploadDir, "content"), path.join(process.cwd(), ".data"));

  const chosen = candidates.find((dir) => isWritable(dir)) ?? path.join(process.cwd(), ".data");

  if (chosen === legacyParent) {
    cached = chosen;
    return cached;
  }

  migrateLegacy(legacyParent, chosen);
  cached = chosen;
  return cached;
}

/** Absolute path for a content file stored in the content directory. */
export function contentFile(name: string): string {
  return path.join(contentDir(), name);
}
