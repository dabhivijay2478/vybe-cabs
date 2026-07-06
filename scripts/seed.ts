import 'dotenv/config';
import { PrismaClient, Driver } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import { Redis } from 'ioredis';

async function main() {
  const connectionString = process.env.DATABASE_URL;
  const client = new pg.Client({ connectionString });
  const adapter = new PrismaPg(client);
  const prisma = new PrismaClient({ adapter });
  const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

  // Create sample drivers
  const drivers: Driver[] = [];
  for (let i = 1; i <= 10; i++) {
    const lastLat = 23.03 + (Math.random() - 0.5) * 0.05;
    const lastLng = 72.58 + (Math.random() - 0.5) * 0.05;

    const driver = await prisma.driver.create({
      data: {
        name: `Driver ${i}`,
        phone: `555000${String(i).padStart(2, '0')}`,
        vehicleType: i % 2 === 0 ? 'sedan' : 'suv',
        status: 'AVAILABLE',
        lastLat,
        lastLng,
      },
    });
    drivers.push(driver);

    // Add to Redis GEO and available set
    await redis.geoadd(
      'drivers:locations',
      lastLng,
      lastLat,
      driver.id,
    );
    await redis.sadd('drivers:available', driver.id);

    console.log(`Created driver: ${driver.id} - ${driver.name}`);
  }

  await redis.quit();
  await prisma.$disconnect();

  console.log(`\nSeeded ${drivers.length} drivers`);
  console.log('Sample coordinates:');
  console.log('Pickup: 23.03, 72.58');
  console.log('Dropoff: 23.05, 72.60');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
