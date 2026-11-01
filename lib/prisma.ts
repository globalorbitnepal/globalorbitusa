import { PrismaClient } from "@prisma/client";
import { assertDatabaseTarget } from "@/lib/assert-database-target";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

assertDatabaseTarget(process.env.DATABASE_URL);

/**
 * Singleton Prisma client. Import only from server-side GlobalOrbitUSA code.
 * Refuses to initialize if DATABASE_URL does not target globalorbitusa_db.
 */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
