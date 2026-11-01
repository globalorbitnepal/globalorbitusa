import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import {
  APPOINTMENT_REFERRALS,
  APPOINTMENT_SERVICES,
  APPOINTMENT_STUDIOS,
} from "@/lib/appointments/constants";
import type { AppointmentInput, AppointmentRecord } from "@/lib/appointments/types";
import { contentFile } from "@/lib/content-dir";

type StoreFile = {
  appointments: AppointmentRecord[];
};

function appointmentsPath() {
  return contentFile("appointments.json");
}

async function readStore(): Promise<StoreFile> {
  try {
    const raw = await readFile(appointmentsPath(), "utf8");
    const data = JSON.parse(raw) as StoreFile;
    if (!Array.isArray(data.appointments)) return { appointments: [] };
    return data;
  } catch {
    return { appointments: [] };
  }
}

async function writeStore(store: StoreFile) {
  const file = appointmentsPath();
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, `${JSON.stringify(store, null, 2)}\n`, "utf8");
}

function str(value: unknown, max = 500) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function parseServices(value: unknown): AppointmentRecord["services"] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is AppointmentRecord["services"][number] =>
      typeof item === "string" && (APPOINTMENT_SERVICES as readonly string[]).includes(item),
  );
}

export function parseAppointmentInput(body: unknown): { ok: true; data: AppointmentInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request." };
  }
  const raw = body as Record<string, unknown>;
  const fullName = str(raw.fullName, 120);
  const whatsapp = str(raw.whatsapp, 40);
  const country = str(raw.country, 80);
  const city = str(raw.city, 80);
  const mobile = str(raw.mobile, 40);
  const officeEmail = str(raw.officeEmail, 160);
  const studio = str(raw.studio, 40) as AppointmentRecord["studio"];
  const referral = str(raw.referral, 40) as AppointmentRecord["referral"];
  const specialRequest = str(raw.specialRequest, 2000);
  const services = parseServices(raw.services);

  if (fullName.length < 2) return { ok: false, error: "Please enter your full name." };
  if (whatsapp.length < 6) return { ok: false, error: "Please enter a valid WhatsApp number." };
  if (!country) return { ok: false, error: "Please select or enter your country." };
  if (!city) return { ok: false, error: "Please enter your city." };
  if (mobile.length < 6) return { ok: false, error: "Please enter a valid mobile number." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(officeEmail)) {
    return { ok: false, error: "Please enter a valid office email." };
  }
  if (!(APPOINTMENT_STUDIOS as readonly string[]).includes(studio)) {
    return { ok: false, error: "Please choose where you would like to book." };
  }
  if (services.length === 0) return { ok: false, error: "Please select at least one service." };
  if (!(APPOINTMENT_REFERRALS as readonly string[]).includes(referral)) {
    return { ok: false, error: "Please tell us how you heard about us." };
  }

  return {
    ok: true,
    data: {
      fullName,
      whatsapp,
      country,
      city,
      mobile,
      officeEmail,
      studio,
      services,
      referral,
      specialRequest,
    },
  };
}

export async function listAppointments(): Promise<AppointmentRecord[]> {
  const store = await readStore();
  return store.appointments.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export async function countUnreadAppointments(): Promise<number> {
  const store = await readStore();
  return store.appointments.filter((item) => !item.read).length;
}

export async function addAppointment(input: AppointmentInput): Promise<AppointmentRecord> {
  const store = await readStore();
  const record: AppointmentRecord = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    read: false,
    ...input,
  };
  store.appointments.unshift(record);
  await writeStore(store);
  return record;
}

export async function markAppointmentsRead(ids: string[]): Promise<number> {
  if (!ids.length) return 0;
  const store = await readStore();
  const set = new Set(ids);
  let updated = 0;
  store.appointments = store.appointments.map((item) => {
    if (set.has(item.id) && !item.read) {
      updated += 1;
      return { ...item, read: true };
    }
    return item;
  });
  if (updated) await writeStore(store);
  return updated;
}

export async function markAllAppointmentsRead(): Promise<number> {
  const store = await readStore();
  let updated = 0;
  store.appointments = store.appointments.map((item) => {
    if (!item.read) {
      updated += 1;
      return { ...item, read: true };
    }
    return item;
  });
  if (updated) await writeStore(store);
  return updated;
}
