import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

let prisma: PrismaClient;

if (process.env.NODE_ENV !== 'production') {
  const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };
  
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ adapter });
  }
  prisma = globalForPrisma.prisma;
} else {
  prisma = new PrismaClient({ adapter });
}

export default prisma;
