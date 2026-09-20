# Architectural Decisions

A log of key decisions made in this project — what was chosen, what was rejected, and why.
Consult before suggesting alternatives.

---

## Email / Contact form

**Decision:** Nodemailer + Gmail SMTP (sends from and to `fahimfahad92@gmail.com`)

**Rejected:**
- Formspree, EmailJS, Resend, SendGrid — require third-party account signups
- `mailto:` link — opens user's own email client, poor UX
- Google Forms embed — not integrated with the app's contact page
- Firebase `contacts` collection — stores submissions but doesn't deliver email to inbox

**Why:** Gmail SMTP uses Google's own servers with an App Password. No external service dependency, no signup, email lands directly in Gmail inbox and is reply-able.

**Env vars required:** `GMAIL_USER`, `GMAIL_APP_PASSWORD`

---

## Type system

**Decision:** JavaScript with JSDoc annotations (no TypeScript)

**Why:** Project started in JS; migration overhead not justified for a portfolio. JSDoc provides IDE autocomplete and hover docs for Firebase util functions without a full TypeScript migration.

**Where applied:** `@typedef` + `@returns` in `firebase-util.jsx` for all Firestore shapes.

---

## Database

**Decision (superseded in part — see "Content source" below):** Firebase Firestore for all data

**Why:** Already set up; real-time capability available via `onSnapshot` (used for blogs); zero-cost at portfolio scale.

**Collections still in use:** `blogs`, `skills`, `education`. (`projects`, `projectDetails`, `experience`, `experienceDetails` are no longer read; `contacts` went unused when the contact form moved to Nodemailer.)

---

## Content source (2026-09-20, cycle 004)

**Decision:** Profile copy, experience and projects are **hardcoded** in `src/app/data/`, transcribed verbatim from Fahim's CV and LinkedIn source files. Blogs, skills and education **stay on Firestore**.

**Why the split:**
- Experience and projects now have a canonical off-site source (the CV). Two sources would drift, and a Firestore read buys nothing for content that changes twice a year. Hardcoding also makes both detail routes fully static.
- **Blogs** stay: real-time `onSnapshot` path, not covered by the CV.
- **Skills** stay: the skills page renders bars from per-skill *year counts*. The CV's skills section has no numbers, and only ~20 of ~55 skills appear on a dated role line — the derivable ones understate badly (Docker and Hibernate would both read 1.0y). Anything else would be invented.
- **Education** stays: keeps the `publicationLink` values that the CV does not carry.

**Wording rule:** text in `src/app/data/` is Fahim's own — verbatim CV prose, or copy he wrote for the hero and About page. Do not paraphrase, tighten or re-voice it. The data modules are now the only copy; the source files were deleted at his request after transcription.

**Never put CV working files under `public/`.** They briefly lived at `public/career/` and were web-served, exposing private notes (NDA caveats, "keep the client anonymised", profile critique). Anything like that belongs outside `public/`.

---

## CV download

**Decision:** Served from the fixed path `public/cv/Fahim_Fahad_CV.pdf`, referenced only via `CV_CONSTANTS.PATH`. Preview opens a modal with an `<iframe>` on ≥768px and a new tab below that.

**Why the undated filename:** the CV is replaced periodically. A dated name (`..._13_09_26.pdf`) would break every shared link and split the Statsig event history on each update. To publish a new CV, overwrite the file.

**Public copy is phone-number-free.** The full CV (with phone) is archived in `content/career/`. A one-click public download puts a phone number in front of scrapers permanently; email and `/contact` remain the contact path.

**Events:** `portfolio_cv_preview` `{source, mode}` and `portfolio_cv_download` `{source}`. Buttons are on the home hero only.

---

## Caching

**Decision:** Next.js `unstable_cache` at the page level, durations from `caching-constants.jsx`

**Rejected:** React Query, SWR — unnecessary client-side complexity; all data pages are Server Components.

**Constants:**
```
DEFAULT   = 2592000  (30 days)
ONE_DAY   =   86400  (1 day)
SEVEN_DAY =  604800  (7 days)
```

---

## Analytics & feature flags

**Decision:** Statsig (client key: `NEXT_PUBLIC_STATSIG_CLIENT_KEY`)

**Rejected:** Google Analytics, Mixpanel — Statsig covers both analytics and feature flags in one SDK.

**How:** Root layout wrapped in `StatsigProviderWrapper`; `StatsigEvent` component records page-view events.

---

## Dark mode

**Decision:** Tailwind `darkMode: "class"` + `localStorage` persistence + FOUC-prevention inline script in `layout.js`

**Rejected:** CSS `prefers-color-scheme` media query only — user can't override their OS setting.

**How:** Inline script in `<head>` reads `localStorage` before hydration and sets `.dark` on `<html>`. Toggle button in `NavBar` uses `dark:hidden` / `hidden dark:block` — no React state needed.

---

## Detail page layout

**Decision:** Shared `DetailPageLayout` component for all experience and project detail pages

**Why:** Both page types share identical structure (back link → header card → tech stack → description → responsibilities → achievements). Extracting prevents duplication and automatically includes breadcrumb nav + `BreadcrumbList` JSON-LD on every detail page.

---

## ESLint

**Decision:** ESLint 9 flat config (`eslint.config.mjs`), extends `next/core-web-vitals`

**Additional rules:** `no-unused-vars` (error), `no-console` (warn, allows `.error`/`.warn`), `no-duplicate-imports`, `no-var`, `prefer-const`

**Note:** `next lint` was removed in Next.js 16. The lint script calls `eslint src/` directly.

---

## Constants strategy

**Decision:** All shared values live in constants files — never hardcoded inline.

| File | What it holds |
|------|--------------|
| `site-constants.js` | `SITE_URL`, `SITE_NAME` |
| `social-constants.js` | `SOCIAL_LINKS` map, `EMAIL_ADDRESS` |
| `routing-constants.jsx` | All route paths |
| `caching-constants.jsx` | Cache TTL durations |
| `firebase-util.jsx` (internal) | `COLLECTIONS` Firestore names |

---

## Testing

**Decision:** No test framework configured.

**Why:** Not added; portfolio scope doesn't justify the setup overhead. No plans to add unless the project grows significantly.
