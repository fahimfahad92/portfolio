# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Next.js 16)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint (eslint src/)
npm run lint:fix   # Auto-fix ESLint violations
```

No test framework is configured.

## Architecture

**Stack:** Next.js 16 App Router, React 19, Firebase Firestore, Tailwind CSS (dark mode: class), Statsig (feature flags/analytics), Nodemailer (contact form via Gmail SMTP).

**Path alias:** `@/*` → `./src/*` (configured in `jsconfig.json`).

### Constants

| File | Purpose |
|------|---------|
| `src/app/constants/site-constants.js` | `SITE_URL`, `SITE_NAME` — single source for the domain; reads `NEXT_PUBLIC_SITE_URL` env var |
| `src/app/constants/social-constants.js` | `SOCIAL_LINKS` map + `EMAIL_ADDRESS` raw string |
| `src/app/constants/routing-constants.jsx` | All route paths (`HOME`, `ABOUT_ME`, `EXPERIENCE`, `PROJECTS`, `BLOGS`, `SKILLS`, `EDUCATION`, `CONTACT`) |
| `src/app/constants/caching-constants.jsx` | `CACHING_CONSTANTS.DEFAULT` (30 days), `ONE_DAY` (1 day), `SEVEN_DAY` (7 days) — all in seconds |

### Data layer

All data lives in Firebase Firestore. Fetching utilities are in `src/app/firebase/firebase-util.jsx`:
- Private `fetchDocs(query)` helper eliminates repeated try/catch/forEach boilerplate.
- Collection names are in a private `COLLECTIONS` constant — never use raw strings.
- Every public function returns the data array or `false` on error.
- Every fetch is wrapped in `unstable_cache()` at the page level using durations from `caching-constants.jsx`.

Firestore collections: `projects`, `projectDetails`, `experience`, `experienceDetails`, `blogs`, `skills`, `education`, `contacts`.

Blogs additionally support real-time updates via `onSnapshot` (`getBlogDataSnapshot()`).

### Routing & pages

Pages live under `src/app/`. Dynamic segments use `[companyName]` and `[projectName]` with `generateStaticParams()` for static generation. All dynamic detail pages also export `generateMetadata()` for per-page Open Graph and canonical tags.

### Component model

- Pages are **Server Components** — they fetch Firestore data directly.
- Client components use `"use client"`: `NavBar`, `StatsigEvent`, `BlogsFilter`, `ProjectsFilter`, `ContactForm`, `CopyEmailButton`, `SkillBar`, `NotFound`.
- `DetailPageLayout` — shared layout for all detail pages; renders breadcrumb nav + BreadcrumbList JSON-LD automatically.
- Icons split by category: `skill-icons.jsx`, `social-icons.jsx`, `common-icons.jsx`.

### Contact form

`src/app/contact/page.jsx` → `ContactForm` client component → `src/app/actions/contact-action.js` (Server Action) → Nodemailer → Gmail SMTP.

Requires env vars: `GMAIL_USER` and `GMAIL_APP_PASSWORD` (Gmail App Password, not account password).

### SEO

- Open Graph + Twitter card metadata on every page.
- `alternates.canonical` on every page.
- JSON-LD `Person` + `WebSite` schemas on home page; `BreadcrumbList` on every detail page (via `DetailPageLayout`).
- `src/app/sitemap.js` and `src/app/robots.js` both import `SITE_URL` from `site-constants.js`.

### Analytics & feature flags

Statsig wraps the root layout via `src/app/providers/statsig-provider.jsx`. The `StatsigEvent` component records page-view events. Browser user identity is collected in `src/app/_lib/statsig-util.js`.

### ESLint

Config: `eslint.config.mjs` — ESLint 9 flat config format, extends `next/core-web-vitals`. Additional rules: `no-unused-vars` (error), `no-console` (warn, allows `.error`/`.warn`), `no-duplicate-imports`, `no-var`, `prefer-const`.

Note: `next lint` was removed in Next.js 16. Use `npm run lint` which calls `eslint src/` directly.

### Dark mode

Enabled via `darkMode: "class"` in `tailwind.config.mjs`. A FOUC-prevention inline script in `layout.js` reads `localStorage` before hydration and toggles the `.dark` class on `<html>`. Toggle button in `NavBar` uses `dark:hidden` / `hidden dark:block` — no React state needed.

### Environment variables

Required in `.env`:
- `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`, `FIREBASE_MESSAGE_SENDER_ID`, `FIREBASE_APP_ID`
- `NEXT_PUBLIC_STATSIG_CLIENT_KEY`
- `NEXT_PUBLIC_SITE_URL` (optional fallback: `https://portfolio-three-snowy-36.vercel.app`)
- `GMAIL_USER` — Gmail address for sending contact form emails
- `GMAIL_APP_PASSWORD` — Gmail App Password (generated at Google Account → Security → App Passwords)
