# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server (Next.js)
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

No test framework is configured.

## Architecture

**Stack:** Next.js 15 App Router, React 19, Firebase Firestore, Tailwind CSS, Statsig (feature flags/analytics), Vercel Analytics.

**Path alias:** `@/*` → `./src/*` (configured in `jsconfig.json`).

### Data layer

All data lives in Firebase Firestore. Fetching utilities are in `src/app/firebase/firebase-util.jsx`. Every fetch is wrapped in Next.js `unstable_cache()` with durations from `src/app/constants/caching-constants.jsx`:

- `DEFAULT_REVALIDATE` — 30 days
- `ONE_DAY_REVALIDATE`, `SEVEN_DAY_REVALIDATE`

Firestore collections: `projects`, `projectDetails`, `experience`, `experienceDetails`, `blogs`, `skills`, `education`.

Blogs additionally support real-time updates via `onSnapshot` (`getBlogDataSnapshot()`).

### Routing

Pages follow App Router conventions under `src/app/`. Dynamic segments use `[companyName]` and `[projectName]` with `generateStaticParams()` for static generation at build time. Route constants are in `src/app/constants/routing-constants.jsx`.

### Component model

- Pages are **Server Components** — they fetch Firestore data directly.
- Interactive/analytics components use `"use client"`: `NavBar`, `StatsigProvider`, `StatsigEvent`.
- Reusable presentational components (`ItemComponent`, `ListComponent`, `MapComponent`, `TagPill`, etc.) are in `src/app/components/`.
- Icons are split by category: `skill-icons.jsx`, `social-icons.jsx`, `common-icons.jsx`.

### Analytics & feature flags

Statsig wraps the root layout via `src/app/providers/statsig-provider.jsx`. The `StatsigEvent` component records page-view events. Browser user identity (localStorage UUID + device info) is collected in `src/app/_lib/statsig-util.js`.

### Environment variables

Firebase credentials (`FIREBASE_*`) and `NEXT_PUBLIC_STATSIG_CLIENT_KEY` must be present in `.env`. No `.env.example` exists — check `.env` for the full list of required keys.
