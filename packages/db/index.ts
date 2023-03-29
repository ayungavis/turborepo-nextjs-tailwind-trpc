import { PrismaClient } from "@prisma/client";

export * from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const prisma =
  globalForPrisma.prisma ||
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
