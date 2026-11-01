import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { contentFile } from "@/lib/content-dir";

function auditPath() {
  return contentFile("admin-audit.jsonl");
}

export async function writeAdminAudit(action: string, detail?: string) {
  const line = JSON.stringify({
    at: new Date().toISOString(),
    action,
    detail: detail ? detail.slice(0, 240) : undefined,
  });
  try {
    const file = auditPath();
    await mkdir(path.dirname(file), { recursive: true });
    await appendFile(file, `${line}\n`, "utf8");
  } catch {
    /* audit must never block the request */
  }
}
