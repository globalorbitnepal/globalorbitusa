import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isOrbitAuthed } from "@/lib/orbit-auth";
import { parseWebsiteDevelopmentPageConfig } from "@/lib/website-development-page-config";
import {
  getWebsiteDevelopmentPageConfig,
  saveWebsiteDevelopmentPageConfig,
} from "@/lib/website-development-store";

const PATH = "/service/website-development-usa";

export async function GET() {
  if (!(await isOrbitAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json(await getWebsiteDevelopmentPageConfig());
}

export async function POST(request: Request) {
  if (!(await isOrbitAuthed())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await request.json();
  const config = parseWebsiteDevelopmentPageConfig(body);
  const saved = await saveWebsiteDevelopmentPageConfig(config);
  revalidatePath(PATH);
  return NextResponse.json({ ok: true, config: saved });
}
