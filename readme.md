# House control

A residential building management web application for an apartment building. It helps a building management committee track ownership records and conduct legally valid General Meetings of Owners.

## Features

**Flat Registry** — displays all apartments with their cadastral numbers, floor, porch, area, and owner contact details (Telegram, phone). Filterable by any column.

**Voting Sessions** — manages multiple named voting rounds. Each apartment row has a voted checkbox that persists in real time to the database. Supports paper ballots. A sticky footer shows live quorum statistics: voted count, total voted area (m²), and percentage of the building's m² — the threshold required for a legally binding decision.

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | Vue 3, TypeScript, Pinia, Vue Router, Vite, SCSS |
| Backend | Node.js, Express 5 |
| Database | MongoDB 8 |

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [Docker](https://www.docker.com/) (recommended for MongoDB) **or** a local MongoDB 7/8 installation

## Setup

### 1. Start MongoDB

**Option A — Docker (recommended)**

```bash
docker compose up -d
```

This starts a MongoDB 8 container on `127.0.0.1:27017` with a persistent named volume.

**Option B — Local MongoDB**

```bash
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\mongodb\db"
```

---

### 2. Seed the database

Import the JSON seed files into MongoDB (database name: `pzdb`):

```bash
mongoimport --db pzdb --collection rooms  --file be/data/rooms.json  --jsonArray
mongoimport --db pzdb --collection owners --file be/data/owners.json --jsonArray
mongoimport --db pzdb --collection vote3e --file be/data/vote3e.json --jsonArray
```

---

### 3. Start the backend

```bash
cd be
npm install
npm start
```

The API server starts on `http://localhost:3000`.

---

### 4. Start the frontend

```bash
cd fe
npm install
npm run dev
```

The app is available at `http://localhost:5173`.

## API

All endpoints are under `/v1/api/`:

| Method | Path | Description |
|---|---|---|
| GET | `/accounts` | Rooms joined with owners |
| GET | `/voting/:voteId` | All records for a named vote session |
| PUT | `/voting/votestatus` | Update `hasVoted` on a vote record |
| PUT | `/voting` | Update arbitrary fields on a vote record |

## Frontend Scripts

Run from the `fe/` directory:

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run test:unit` | Run unit tests with Vitest |
| `npm run test:e2e` | Run end-to-end tests with Playwright |
| `npm run lint` | Lint and auto-fix source files |
| `npm run format` | Format source files with Prettier |
