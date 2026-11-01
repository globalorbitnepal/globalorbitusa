import { NextResponse } from "next/server";
import { writeAdminAudit } from "@/lib/admin-audit";
import { changeOrbitPassword, clearOrbitSession, isOrbitAuthed } from "@/lib/orbit-auth";
import { clientKey, rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!(await isOrbitAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const limited = rateLimit(clientKey(request, "password"), 6, 15 * 60 * 1000);
  if (!limited.ok) {
    return NextResponse.json({ error: "Too many attempts. Try again later." }, { status: 429 });
  }

  let body: { currentPassword?: string; nextPassword?: string } = {};
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const currentPassword = String(body.currentPassword || "");
  const nextPassword = String(body.nextPassword || "");
  if (!currentPassword || !nextPassword) {
    return NextResponse.json({ error: "Current and new password are required." }, { status: 400 });
  }

  const result = await changeOrbitPassword(currentPassword, nextPassword);
  if (!result.ok) {
    await writeAdminAudit("auth.password-change-failed");
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  // Sessions are invalidated by the rotated signing secret — clear this cookie too.
  await clearOrbitSession();
  await writeAdminAudit("auth.password-change");
  return NextResponse.json({ ok: true, reauthRequired: true });
}
