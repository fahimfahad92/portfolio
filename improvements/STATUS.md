# Improvements Status

Last updated: 2026-09-20

---

## improvement_ideas_001.md — UI, Features, SEO, Code Structure

**Status: Done** (all phases complete)

| # | Item | Status |
|---|------|--------|
| 1a | Hero section redesign — split layout, profile image inline, skill strip | ✅ Done |
| 1b | About page layout — linked social icons, bio sections | ✅ Done |
| 1c | Cards — unified `Card` component across all listing pages | ✅ Done |
| 1d | Skills page — `SkillBar` + `SkillGroupCard` extracted, animated bars | ✅ Done |
| 1e | Experience & Projects detail pages — shared `DetailPageLayout` | ✅ Done |
| 1f | Blogs page — tag filter, fix click-event double-trigger | ✅ Done |
| 1g | Nav & Footer — active link highlight, `ROUTING_CONSTANTS`, shared `SocialIcons` | ✅ Done |
| 1h | Dark mode toggle — class-based, localStorage, sun/moon button in nav | ✅ Done |
| 2a | Contact form — Nodemailer/Gmail SMTP (originally phase 4) | ✅ Done |
| 2b | Breadcrumb navigation — inside `DetailPageLayout`, includes JSON-LD | ✅ Done |
| 2c | Search/filter for Projects & Blogs — client-side tag filter | ✅ Done |
| 2d | Testimonials section | ⏭ Skipped — no real testimonials available |
| 3  | SEO — `generateMetadata()`, Open Graph, sitemap, robots.txt, JSON-LD | ✅ Done |
| 4  | Code structure — centralized constants, shared components | ✅ Done |
| 5  | Bug fixes — `generateStaticParams`, caching contradictions, social icons | ✅ Done |

---

## improvement_ideas_002.md — Polish, SEO, UX, Performance

**Status: Done** (skipped 2a OG image, 3a Resume)

| # | Item | Status |
|---|------|--------|
| 1a | Profile image fills circle — `fill` + `object-cover` | ✅ Done |
| 1b | Tag counts on filter bars — `(4)` suffix on pills | ✅ Done |
| 1c | Contact form → Gmail SMTP via Nodemailer | ✅ Done |
| 1d | Site URL in one shared constant — `site-constants.js` | ✅ Done |
| 2a | OG image for social sharing (1200×630 PNG) | ⏭ Skipped — requires external design work |
| 2b | Canonical URL in metadata — `alternates.canonical` on every page | ✅ Done |
| 3a | Resume / CV download button | ⏭ Skipped — requires PDF file in `public/` |
| 3b | "Copy email" button — `CopyEmailButton` client component | ✅ Done |
| 3c | Contact link discovery — hero CTA → `/contact`, footer link | ✅ Done |
| 3d | About page social icons properly linked | ✅ Done |
| 4a | `priority` prop on hero image | ✅ Done |
| 4b | `sizes` prop on images | ✅ Done |
| 5a | Close mobile menu on route change | ✅ Verified OK |
| 5b | `CONTACT` added back to `ROUTING_CONSTANTS` | ✅ Done |
| 5c | `saveContactMessage` — replaced with Nodemailer Server Action | ✅ Done |

---

## improvement_ideas_003.md — Code Quality

**Status: Done** (all 10 items)

| # | Item | Status |
|---|------|--------|
| 1  | JSDoc annotations on Firebase util functions and typedefs | ✅ Done |
| 2  | Remove `console.log` — `console.error` only for actual errors | ✅ Done |
| 3  | Deduplicate Firestore fetch pattern — `fetchDocs()` helper | ✅ Done |
| 4  | Magic strings → `COLLECTIONS` constant in `firebase-util.jsx` | ✅ Done |
| 5  | `unstable_cache` — add `tags` to detail-page caches | ✅ Done |
| 6  | Caching constants clarity — inline second comments, clear naming | ✅ Done |
| 7  | `contact-action.js` malformed `from` field fix | ✅ Done |
| 8  | `error.js` dark mode styles | ✅ Done |
| 9  | `not-found.js` — replace `javascript:history.back()` with client button | ✅ Done |
| 10 | CLAUDE.md updated to reflect current architecture | ✅ Done |

---

## improvement_ideas_004.md — CV-sourced content, Firestore unplug, CV download

**Status: Done**

| # | Item | Status |
|---|------|--------|
| 2a | `career/*.md` moved out of `public/` into `content/career/` (were web-served) | ✅ Done |
| 1a | `src/app/data/` modules replace Firestore for profile, experience, projects | ✅ Done |
| 1b | Experience rebuilt from the CV — 7 entries, verbatim, Toptal first | ✅ Done |
| 1c | Projects rebuilt from `LinkedIn_Projects.md` — 14 entries, verbatim | ✅ Done |
| 1d | Skills page | ⏭ Skipped — CV has no year counts; stays on Firestore |
| 1e | Education + publications | ⏭ Skipped — stays on Firestore, publication links kept |
| 1f | Home hero + About copy from the CV summary | ✅ Done |
| 1g | CV preview modal + download, `portfolio_cv_preview` / `portfolio_cv_download` | ✅ Done |
| 2f | Richer `Person` JSON-LD (`alumniOf`, `knowsAbout`, `description`) | ✅ Done |
| —  | Detail pages added to `sitemap.js` (21 new URLs) | ✅ Done |

---

## Deferred Items (open across all cycles)

| Item | From | Blocker |
|------|------|---------|
| OG image for social sharing | 002-2a | Needs 1200×630 PNG designed externally (Figma/Canva) |
| Testimonials section | 001-2d | No real testimonials available yet |

**Closed this cycle:** Resume download button (002-3a) — shipped as 004-1g.
