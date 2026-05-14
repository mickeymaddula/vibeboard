# Vibeboard

The real-time intelligence layer for vibe coding.

## Vision

Vibeboard tracks:
- AI coding models
- IDE integrations
- Research previews
- Free usage windows
- Latency shifts
- Benchmark trends
- Community sentiment
- Model deprecations

The goal is to become the Bloomberg Terminal for AI coding models.

## Planned Stack

### Frontend
- Next.js 15
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend
- Supabase
- PostgreSQL
- Edge Functions

### Automation
- Twitter/X bot
- Trend engine
- RSS ingestion
- Reddit/HN monitoring

## Initial Features

- Free Preview Radar
- Research Preview Tracker
- Meta Shift Engine
- Vibe Score System
- Live Model Leaderboard
- SEO landing pages
- Trend detection bot


## Project Structure

- `app/` - Next.js App Router entry points and global styles.
- `components/` - Dashboard sections and reusable presentation components.
- `lib/types.ts` - Vibeboard domain contracts for providers, models, sources, events, previews, benchmarks, and UI signals.
- `lib/mock-data.ts` - Seed data used by the scaffold until ingestion and database wiring are added.
- `lib/scoring.ts` - Vibe Score calculation stub that combines sentiment, benchmark momentum, and preview availability.
- `lib/sources.ts` - Initial source registry for changelog, RSS, HN, Reddit, and benchmark inputs.

## Local Development

Install dependencies and start the app:

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run typecheck
npm run build
```

## Status

Initial Next.js scaffold in progress.
