import 'dotenv/config';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

async function main() {
  const rideId = process.argv[2];

  if (!rideId) {
    console.error('Usage: npm run test:concurrency <rideId>');
    process.exit(1);
  }

  // Initialize Prisma with adapter
  const connectionString = process.env.DATABASE_URL;
  const client = new pg.Client({ connectionString });
  const adapter = new PrismaPg(client);
  const prisma = new PrismaClient({ adapter });

  // Fetch actual driver IDs from database
  const drivers = await prisma.driver.findMany({ take: 5 });
  if (drivers.length < 5) {
    console.error(`❌ Not enough drivers in database. Found: ${drivers.length}, needed: 5`);
    await prisma.$disconnect();
    process.exit(1);
  }

  const driverIds = drivers.map((d) => d.id);

  console.log(`\n🚀 Starting concurrency test for ride: ${rideId}`);
  console.log('Launching 5 concurrent accept requests...\n');
  console.log('Driver IDs:', driverIds.map((id) => id.substring(0, 8)).join(', '));

  const baseUrl = process.env.API_URL || 'http://localhost:3000';

  const results = await Promise.allSettled(
    driverIds.map((driverId) =>
      axios.post(`${baseUrl}/rides/${rideId}/accept`, { driverId }),
    ),
  );

  const assigned = results.filter(
    (r) => r.status === 'fulfilled' && r.value.data.ok === true,
  );
  const rejected = results.filter(
    (r) =>
      r.status === 'fulfilled' &&
      !r.value.data.ok &&
      r.value.data.reason === 'ALREADY_ASSIGNED_TO_OTHER',
  );
  const notSearching = results.filter(
    (r) =>
      r.status === 'fulfilled' &&
      !r.value.data.ok &&
      r.value.data.reason !== 'ALREADY_ASSIGNED_TO_OTHER',
  );

  console.log('📊 Test Results:');
  console.log(`✅ Assigned: ${assigned.length} (expected: 1)`);
  console.log(`❌ Rejected (beaten by other driver): ${rejected.length}`);
  console.log(`⚠️  Other failures: ${notSearching.length}`);
  console.log('');

  if (assigned.length === 1 && rejected.length === 4) {
    console.log('✨ CONCURRENCY GUARANTEE HOLDS - Exactly one winner!');
  } else if (assigned.length > 1) {
    console.log('🔴 RACE CONDITION DETECTED - Multiple drivers assigned!');
    process.exit(1);
  } else if (assigned.length === 0) {
    console.log('⚠️  No drivers assigned (ride may not be in SEARCHING state)');
    process.exit(1);
  }

  // Verify in database
  const ride = await prisma.ride.findUnique({
    where: { id: rideId },
    include: { offers: true },
  });

  if (ride) {
    const acceptedOffers = ride.offers.filter((o) => o.response === 'ACCEPTED');
    const rejectedOffers = ride.offers.filter((o) => o.response === 'REJECTED');

    console.log('\n📋 Database verification:');
    console.log(`Accepted offers: ${acceptedOffers.length}`);
    console.log(`Rejected offers: ${rejectedOffers.length}`);

    if (acceptedOffers.length === 1) {
      console.log(`✅ Winner: ${acceptedOffers[0].driverId.substring(0, 8)}...`);
    }
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Test failed:', e.message);
  process.exit(1);
});
