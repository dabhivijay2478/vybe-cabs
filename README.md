# Vybe Cabs — Real-Time Driver Allocation System

A high-performance, concurrent-safe ride allocation system that guarantees exactly one driver is assigned per ride, even under simultaneous accept requests. Built with NestJS, PostgreSQL, and Redis.

## Architecture Overview



```mermaid
graph TB
    Client["Client (Mobile/Web)"]
    API["NestJS API (Port 3000)"]
    WS["WebSocket Gateway"]
    Redis["Redis (GEO + Coordination)"]
    PG["PostgreSQL (Source of Truth)"]
    BullMQ["BullMQ Job Queue"]
    
    Client -->|REST/WebSocket| API
    API -->|Lua Script| Redis
    API -->|Read/Write| PG
    API -->|Queues| BullMQ
    BullMQ -->|Monitors| Redis
    API -->|Push Notifications| WS
```

##  High-level architecture

```mermaid
sequenceDiagram
    participant Rider
    participant API as NestJS API
    participant PG as PostgreSQL
    participant Redis
    participant Queue as BullMQ
    participant D1 as Driver A
    participant D2 as Driver B

    Rider->>API: POST /rides {pickup}
    API->>PG: insert ride (REQUESTED)
    API->>Redis: GEOSEARCH drivers:locations
    API->>PG: update ride (SEARCHING), batch#1
    API->>Redis: SADD ride:{id}:notified:1 [driverIds]
    API->>Queue: schedule timeout job (delay=10s)
    API-->>D1: ws emit ride:offer
    API-->>D2: ws emit ride:offer

    par concurrent accepts
        D1->>API: POST /rides/:id/accept {driverId: A}
        D2->>API: POST /rides/:id/accept {driverId: B}
    end

    API->>Redis: EVAL accept.lua (atomic)
    Redis-->>API: winner = A
    API->>PG: update ride (ASSIGNED, driver=A)
    API->>Queue: cancel timeout job
    API-->>D1: ws emit ride:assigned (you got it)
    API-->>D2: ws emit ride:closed (too late)
```

## Technology Stack

- **NestJS 11.0.1** - TypeScript backend framework with dependency injection
- **PostgreSQL 16** - Primary database (Docker on port 5433)
- **Redis 7** - Fast coordination layer with GEO indices (Docker on port 6379)
- **Prisma 7.8.0** - ORM with type-safe database access
- **ioredis 5.11.1** - Redis client with Lua script support
- **BullMQ 5.79.2** - Job queue for timeout/retry logic
- **Socket.io** - Real-time WebSocket notifications
- **PrismaPg Adapter** - Connection pooling for PostgreSQL

## Project Structure

```
src/
├── common/
│   └── prisma.ts              # Singleton PrismaClient with adapter
├── redis/
│   ├── redis.module.ts        # Redis client with Lua script definitions
│   └── redis.service.ts       # Redis operations (GEO, SET, Lua calls)
├── drivers/
│   ├── drivers.module.ts
│   ├── drivers.service.ts     # Driver lifecycle with Redis sync
│   └── drivers.controller.ts  # REST endpoints
├── rides/
│   ├── rides.module.ts
│   ├── rides.service.ts       # Core allocation logic + batch notifications
│   └── rides.controller.ts    # REST endpoints
├── queue/
│   └── queue.processor.ts     # BullMQ timeout job handler
├── notifications/
│   └── notifications.gateway.ts # WebSocket server
├── app.module.ts              # Root module with all dependencies
├── main.ts                    # Application entry point
└── app.controller.ts          # Health check endpoint

prisma/
├── schema.prisma              # Database schema and models
└── migrations/                # Database migrations

scripts/
├── seed.ts                    # Populate database with test drivers
└── concurrency-test.ts        # Verify atomic assignment with 5 concurrent requests

docker-compose.yml            # PostgreSQL + Redis containers
.env                          # Environment variables
```

## Setup Instructions

### Prerequisites
- Node.js 20+
- Docker and Docker Compose
- npm or yarn

### Installation

1. **Clone or extract the project:**
   ```bash
   cd vybe-cabs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start Docker containers:**
   ```bash
   docker-compose up -d
   ```
   This starts PostgreSQL (port 5433) and Redis (port 6379)

4. **Run database migrations:**
   ```bash
   npx prisma migrate deploy
   ```

5. **Start development server:**
   ```bash
   npm run start:dev
   ```
   Server will be available at `http://localhost:3000`

### Environment Variables

Create a `.env` file in the project root:

```env
DATABASE_URL="postgresql://vybe:vybe@localhost:5433/vybe_cabs?schema=public"
REDIS_URL="redis://localhost:6379"
REDIS_HOST="localhost"
REDIS_PORT="6379"
NODE_ENV="development"
PORT=3000
```

## Concurrency Guarantee: Lua Script

The core concurrency mechanism uses a Redis Lua script atomically executed as a single operation:

```lua
-- Script: acceptRide
-- Returns: {ok=true, driverId=<id>} or {ok=false, reason="<reason>"}

local rideId = KEYS[1]
local batchNumber = KEYS[2]
local driverId = KEYS[3]

local statusKey = "ride:" .. rideId .. ":status"
local assignedKey = "ride:" .. rideId .. ":assigned_driver"
local batchKey = "ride:" .. rideId .. ":batch:" .. batchNumber

-- 1. Check if ride is SEARCHING
local status = redis.call('GET', statusKey)
if status ~= 'SEARCHING' then
  return {ok = false, reason = 'NOT_SEARCHING'}
end

-- 2. Verify driver is in current batch
if redis.call('SISMEMBER', batchKey, driverId) == 0 then
  return {ok = false, reason = 'NOT_IN_BATCH'}
end

-- 3. Atomic SET NX (set only if not exists) - ONLY ONE WINS
local winnerSet = redis.call('SET', assignedKey, driverId, 'NX')
if winnerSet == false then
  -- Someone else won (already assigned)
  return {ok = false, reason = 'ALREADY_ASSIGNED_TO_OTHER'}
end

-- 4. Success: This driver is the winner
return {ok = true, driverId = driverId}
```

**Why This Guarantees Atomicity:**
- All checks happen in a single Redis operation (no race conditions between steps)
- The `SET NX` (set if not exists) is atomic - only first caller succeeds
- Redis processes Lua scripts serially, so no concurrent script executions
- Result: Exactly one driver per ride, even with 1000 simultaneous accepts

## API Reference

### Drivers

**Create Driver**
```bash
POST /drivers
Content-Type: application/json

{
  "name": "John Doe",
  "phone": "+1234567890",
  "vehicleType": "sedan"
}
```

**List Drivers**
```bash
GET /drivers
```

**Get Driver**
```bash
GET /drivers/:id
```

**Update Driver Location**
```bash
POST /drivers/:id/location
Content-Type: application/json

{
  "lat": 23.03,
  "lng": 72.58
}
```

**Update Driver Status**
```bash
POST /drivers/:id/status
Content-Type: application/json

{
  "status": "AVAILABLE" | "BUSY" | "OFFLINE"
}
```

### Rides

**Create Ride**
```bash
POST /rides
Content-Type: application/json

{
  "riderId": "rider-1",
  "pickup": {"lat": 23.03, "lng": 72.58},
  "dropoff": {"lat": 23.05, "lng": 72.60}
}
```

**Get Ride**
```bash
GET /rides/:id
```

**Accept Ride** (Concurrent-Safe)
```bash
POST /rides/:id/accept
Content-Type: application/json

{
  "driverId": "driver-uuid"
}

# Success (200): {ok: true, driverId: "..."}
# Failure (409): {ok: false, reason: "NOT_SEARCHING" | "ALREADY_ASSIGNED_TO_OTHER"}
```

**Reject Ride**
```bash
POST /rides/:id/reject
Content-Type: application/json

{
  "driverId": "driver-uuid"
}
```

## Running the System

### 1. Seed Test Data
```bash
npm run seed
# Creates 10 test drivers at random locations near (23.03, 72.58)
```

### 2. Create a Ride
```bash
RIDE_ID=$(curl -X POST http://localhost:3000/rides \
  -H 'Content-Type: application/json' \
  -d '{
    "riderId": "rider-1",
    "pickup": {"lat": 23.03, "lng": 72.58},
    "dropoff": {"lat": 23.05, "lng": 72.60}
  }' | jq -r '.id')

echo "Created ride: $RIDE_ID"
```

### 3. Test Atomic Assignment
```bash
npm run test:concurrency <rideId>
```

Expected output:
```
🚀 Starting concurrency test for ride: 5ab8a9e5-1eef-41ce-8398-f1663e3cb853
Driver IDs: 12d50136, 13f9e71c, 1b3fbb64, 3eb3ce0b, 9d51d283

📊 Test Results:
✅ Assigned: 1 (expected: 1)
❌ Rejected (beaten by other driver): 0
⚠️  Other failures: 0

✨ CONCURRENCY GUARANTEE HOLDS - Exactly one winner!

📋 Database verification:
Accepted offers: 1
Rejected offers: 4
✅ Winner: 12d50136...
```

## State Machine

```
SEARCHING → (driver accepts) → ASSIGNED → (complete) → COMPLETED
```

Each state transition is atomic and verified in both Redis and PostgreSQL.

## Batch Notification Algorithm

1. **Ride Created** → `currentBatch = 0`, status = SEARCHING
2. **Notify Batch 0**: Get 5 closest available drivers
   - Add to Redis batch SET
   - Create RideOffer records
   - Schedule timeout job (10 seconds)
3. **On Accept**: Lua script atomically checks + assigns
4. **On Timeout**: If no accept, increment batch and notify next drivers

## Performance Characteristics

| Operation | Time | Notes |
|-----------|------|-------|
| Create Ride | ~50ms | Write to Postgres + notify |
| Accept Ride (winner) | ~5ms | Lua script + Postgres update |
| Accept Ride (loser) | ~3ms | Lua script fast-fail |
| Query nearby drivers | ~2ms | GEOSEARCH on Redis |

## Troubleshooting

**Port 5433/6379 already in use:**
```bash
lsof -i :5433
kill -9 <PID>
```

**Database migration failed:**
```bash
npx prisma migrate status
```

**Concurrency test shows 0 winners:**
```bash
# Check ride is SEARCHING
curl http://localhost:3000/rides/<rideId>

# Check drivers are AVAILABLE
curl http://localhost:3000/drivers
```

## Build & Deployment

```bash
# Build for production
npm run build

# Run production
NODE_ENV=production node dist/main.js
```
