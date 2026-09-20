# Improvement Ideas — 004

> Status: **Approved** — decisions recorded in section 4, implementation in progress.

**Source of truth for this cycle:**
- `public/career/Sayed_Md_Fahim_Fahad_CV_13_09_26.pdf`
- `public/career/LinkedIn_Experience.md`
- `public/career/LinkedIn_Projects.md`

**Hard constraint you gave:** use the exact sentences from those files. No rewording. Anything that
cannot be copied verbatim is listed in section 4 as a question, not resolved silently.

---

## Table of Contents

1. [Your Requirements](#1-your-requirements)
   - [1a. Move content off Firestore into hardcoded data modules](#1a-move-content-off-firestore-into-hardcoded-data-modules)
   - [1b. Rebuild Experience from the CV](#1b-rebuild-experience-from-the-cv)
   - [1c. Rebuild Projects from LinkedIn_Projects.md](#1c-rebuild-projects-from-linkedin_projectsmd)
   - [1d. Skills — stays on Firestore](#1d-skills--stays-on-firestore)
   - [1e. Rebuild Education + add Publications](#1e-rebuild-education--add-publications)
   - [1f. Home + About copy from the CV summary](#1f-home--about-copy-from-the-cv-summary)
   - [1g. CV preview + download with Statsig events](#1g-cv-preview--download-with-statsig-events)
2. [Claude's Suggestions](#2-claudes-suggestions)
3. [Priority Suggestion](#3-priority-suggestion)
4. [Decisions](#4-decisions)

---

## 1. Your Requirements

### 1a. Move content off Firestore into hardcoded data modules

**Current state:** every page is a Server Component that calls `src/app/firebase/firebase-util.jsx`
wrapped in `unstable_cache()`. Collections: `projects`, `projectDetails`, `experience`,
`experienceDetails`, `blogs`, `skills`, `education`, `contacts`.

**Problem:** content is now maintained in the CV, not in Firestore. Two sources will drift, and a
Firestore read on every cache miss buys nothing for data that changes twice a year.

**Proposed:** new `src/app/data/` directory holding plain exported constants. Pages import them
directly — no `async`, no `unstable_cache`, no network.

```
src/app/data/
  profile-data.js      // name, headline, location, summary paragraph, stats, tags
  experience-data.js   // 7 entries: list fields + detail fields in one object each
  projects-data.js     // 14 projects: list fields + detail fields in one object each
```

**What stays on Firebase:** `blogs`, `skills` **and `education`**. Blogs has the `onSnapshot`
real-time path and is not covered by the CV; skills is staying because the CV supplies no per-skill
year counts (1d); education is staying by request, with its publication links intact (1e).
`contacts` is already dead — the contact form goes through Nodemailer.

**Changes needed:**
- Add the three data modules above.
- `experience/page.jsx`, `experience/[companyName]/page.jsx`, `projects/page.jsx`,
  `projects/[projectName]/page.jsx` — swap the cached Firestore call for a direct import; drop
  `unstable_cache` from those files. `skills/page.jsx` and `education/page.jsx` are untouched.
- `generateStaticParams()` in both detail routes reads from the data module — becomes fully static.
- `firebase-util.jsx` — delete `getProjectsData`, `getProjectDetailsData`, `getExperienceData`,
  `getExperienceDetailsData` and their `COLLECTIONS` entries. Keep `getBlogData`,
  `getBlogDataSnapshot`, `getSkillsData` and `getEducationData`.
- `caching-constants.jsx` — `DEFAULT` and `SEVEN_DAY` lose all callers; `ONE_DAY` is still used by
  blogs and skills. Trim the dead keys.
- Update CLAUDE.md (data layer + collections list + component model).

**Effort:** Medium

---

### 1b. Rebuild Experience from the CV

**Current state:** 6-ish Firestore docs with `primaryResponsibility` ("Develop and maintain new and
existing features", etc.) and `mentionableAchievement` arrays.

**Proposed:** CV order and CV wording, one card per company, with Toptal kept first (your call, see
D7):

| # | Company | Title | Location | Dates |
|---|---------|-------|----------|-------|
| 0 | Toptal | Senior Software Engineer | Remote | Apr 2021 – Present |
| 1 | PropStream | Senior Software Engineer | US, Remote (via Toptal) | Oct 2025 – Present |
| 2 | PianoTrax | Frontend Developer (part-time) | US, Remote (via Toptal) | Nov 2024 – Sep 2025 |
| 3 | GrowthDay | Backend Engineer | US, Remote | May 2021 – Jun 2024 |
| 4 | TigerIT Bangladesh | Software Engineer, promoted to Senior Software Engineer | Dhaka, Hybrid | Feb 2020 – Aug 2021 |
| 5 | Dmoney Bangladesh | Software Engineer | Dhaka, On-site | May 2017 – Jan 2020 |
| 6 | BJIT Ltd. | Software Engineer | Dhaka, On-site | Jun 2016 – Apr 2017 |

Each entry carries, verbatim from the CV: the italic context line as `description`, the bullet list
as `highlights`, and the tech line as `techStack`.

**Component change (no wording change):** the detail page currently renders two lists,
"Primary Responsibilities" and "Mentionable Achievements". The CV has one bullet list per role, and
`LinkedIn_Experience.md` explicitly kills both of those headings. So: one list, heading
**"Highlights"**. `ListComponent` stays as is; only the props change.

**Slug note:** `companyName` is the URL segment. New slugs (`propstream`, `pianotrax`, `growthday`,
`tigerit`, `dmoney`, `bjit`) will not match whatever is in Firestore today, so old detail URLs 404.
Portfolio traffic is small and these pages are not deep-linked anywhere I can see — I'd let them
break rather than carry a redirect map. Say the word if you want redirects in `next.config`.

**Effort:** Medium

---

### 1c. Rebuild Projects from LinkedIn_Projects.md

**Current state:** `projects` + `projectDetails` collections, filtered client-side by tech tag.

**Proposed:** all 14 entries, in the value order the file already uses. Description copied verbatim
(multi-paragraph), `techStack` from the bold tech line, `companyName` from "Associated with".

1. Core Financial Engine · Digital Payments Platform — Dmoney
2. AI Property Search Assistant — PropStream
3. Card Payment Gateway Integration — PropStream
4. External Payment Gateway · Bank and Biller Integrations — Dmoney
5. Bulk Listing Search API — PropStream
6. Notification Service · Consumer Platform — GrowthDay
7. Direct Mail Platform Rebuild — PropStream
8. DNC Compliance Migration — PropStream
9. Signup Service — GrowthDay
10. Core Platform · Goals, Reminders, Journaling, Courses — GrowthDay
11. Action Tracker · Project Management Platform — TigerIT
12. User Management Service — Dmoney
13. TigerHRMS · Attendance and Leave System — TigerIT
14. Admin Portal · Music Catalogue Management — PianoTrax

**Two component-level notes:**
- Project descriptions are now 3–5 paragraphs. The detail page renders `description` in a single
  `<p>`. I'll store it as a string array and render one `<p>` per paragraph — same text, correct
  spacing.
- `ProjectComponent` renders `<LinkComponent link={project.link} external />` unconditionally. None
  of the 14 have a live link (all private/internal systems), so that needs a guard or it renders an
  empty CTA. Fix regardless.
- `ordering`: the file is in deliberate value order, not chronological. I'll add an explicit `order`
  field so the array order is the display order.

**Cross-linking:** the `projects` / `companies` maps on experience details still work — I'll wire
each company to its project slugs so the existing "Related Projects" section keeps functioning.

**Effort:** Medium-High (14 long descriptions, transcribed exactly)

---

### 1d. Skills — stays on Firestore

**Current state:** `skills` collection stores `{ group, skillMap: { "Java": 10, ... } }` — a
**years-of-experience number per skill**, which `SkillBar` turns into a bar width, and the page
legend maps to Expert / Proficient / Learning.

**Problem:** the CV skills section has no numbers. It is 10 labelled categories with comma-separated
lists. Per-skill year counts cannot be derived from it — only ~20 of ~55 skills appear on a dated
role line, and those understate badly (Docker and Hibernate would both read 1.0y because they only
appear on PropStream's tech line).

**Decision (D5): skills stays on Firestore, unchanged.** No data module, no component change,
`getSkillsData` and `ONE_DAY` caching stay exactly as they are. The CV skills table is not
transcribed at all — the existing year-bar page is better than anything derivable from it.

**Effort:** None (out of scope this cycle)

---

### 1e. Education + Publications — stays on Firestore

**Decision (D6): not changed this cycle.** `education/page.jsx` and `getEducationData` are untouched,
and the `publicationLink` values already in Firestore are preserved. The CV transcription below was
built and then reverted at Fahim's request — kept here only as a record of what the CV says.

**CV content, for reference:**

Education (verbatim):
- MSc, Computer Science and Engineering · 2015 – 2016 — Jahangirnagar University · CGPA 3.95 · ranked 1st
- BSc, Computer Science and Engineering · 2010 – 2014 — Jahangirnagar University · CGPA 3.79 · ranked 1st

Publications (verbatim):
- Cloud-Based Solution for Improvement of Response Time of MySQL RDBMS — International Workshop on Computational Intelligence (IWCI), 2016
- Reform Based Version Management System for XML Data — International Journal of Computer and Information Technology, 2014

**Known wart, left alone:** `education/page.jsx` is `export const dynamic = "force-static"` but
`await`s an uncached Firestore call. Pre-existing; out of scope now that the page stays as it is.

**Effort:** None (out of scope this cycle)

---

### 1f. Home + About copy from the CV summary

**Current state — all invented, none of it from the CV:**
- Home tagline: *"10+ years building scalable backend systems and full-stack SaaS products in fintech
  and startups. I help teams ship reliable software fast — from zero to production."*
- Home role line: *"Senior Software Engineer @ Toptal"*
- About `BIO`: three hand-written blocks (Background / Core skills / Specialization).
- About `STATS`: `10+ Years experience`, `2 Startup products launched`, `10+ Technologies`.
- Page `metadata.description` on all 8 pages: invented.

**Proposed:** replace the hero tagline and the About bio with the CV summary paragraph, verbatim:

> Senior backend engineer with 10 years in Java and Spring Boot on AWS, building payment
> infrastructure and high-volume data systems. Built the core financial engine and bank-gateway
> integrations for a national digital payments platform from the ground up; more recently integrated
> a card payment gateway with CIT and MIT support, plus card tokenisation, for a US real-estate
> platform. Working with US product teams through Toptal since 2021. Picks up frontend work in React
> and Next.js when a team needs the coverage.

Headline becomes **"Senior Backend Engineer · Java · Spring Boot · AWS"** and the location line
**"Dhaka, Bangladesh (UTC+6) · Open to fully remote roles"** — both verbatim from the CV.

**This is where your no-rewording rule bites hardest**, so it is Q1/Q2 below: the summary is one
paragraph written in third person ("Picks up frontend work…"), while the About page's three-block
layout and the hero's short tagline both want something shorter and first-person. I will not rewrite
it. Options are in section 4.

**Effort:** Low (once Q1/Q2 are answered)

---

### 1g. CV preview + download with Statsig events

**Proposed UI** — one shared client component, `CvActions`, placed on Home (hero, next to "View My
Work") and About (next to the social icons):

```
┌──────────────────────────────────────────────┐
│  [ View My Work ]  [ Contact Me ]            │
│  [ 👁 Preview CV ]  [ ⬇ Download CV ]         │
└──────────────────────────────────────────────┘

Preview click →  full-screen modal, PDF in an <iframe>, Esc / backdrop closes,
                 "Download" button inside the modal too.
                 Mobile (< 768px, no reliable inline PDF): opens the PDF in a new tab instead.
```

**File placement:** the PDF must live under `public/` to be served. I'd copy it to
`public/cv/Fahim_Fahad_CV.pdf` — a **stable, undated path**, so replacing the CV later does not break
the link or the Statsig event's URL. The dated original stays where it is. Path goes in a new
`CV_CONSTANTS` in `src/app/constants/` (per the project's "no inline shared values" rule), and the
download uses `<a download="Sayed_Md_Fahim_Fahad_CV.pdf">` so the saved filename stays presentable.

**Statsig events** — the existing `StatsigEvent` component only fires on mount, so this needs a
click-time logger via `useStatsigClient()`:

| Event | Fires when | Metadata |
|-------|-----------|----------|
| `portfolio_cv_preview` | Preview button clicked (modal opened, or tab opened on mobile) | `{ source: "home" \| "about" \| "nav", mode: "modal" \| "new_tab" }` |
| `portfolio_cv_download` | Download button clicked | `{ source: "home" \| "about" \| "nav" \| "preview_modal" }` |

Naming follows the existing `portfolio_pv_*` convention.

**Changes needed:**
- `public/cv/Fahim_Fahad_CV.pdf` (copy).
- `src/app/constants/cv-constants.js`.
- `src/app/components/cv-actions.jsx` — `"use client"`, both buttons, modal, Statsig logging.
- Home hero + About page wire-up; optional nav link (Q7).
- `sitemap.js` — no change needed unless we add a `/cv` route.

**Effort:** Medium

---

## 2. Claude's Suggestions

**2a. Move the source files out of `public/` — do this one regardless.**
`public/` is served verbatim. Right now anyone can fetch
`yoursite.com/career/LinkedIn_Experience.md` and read the coaching notes inside it — *"PropStream
stays anonymised"*, *"Only include the NID line if you're confident it's discussable publicly"*,
*"If there's any NDA doubt, cut it"*, plus the whole "Notes on what changed from your current
profile" section. Same for `LinkedIn_Projects.md`. That is not content you want indexed next to your
name. **Proposal:** move both `.md` files to `content/career/` (outside `public/`), keep only the
PDF in `public/cv/`. Nothing in the app imports them at runtime — they are source material for this
cycle only.

**2b. The CV PDF has your phone number on it.** `+880 1631 893763` is on page 1. A public,
one-click-download CV puts it in front of scrapers. Three options: ship as-is, ship a
phone-number-free variant as the public CV, or keep the phone and accept it. Your call — flagging,
not deciding.

**2c. Closes two long-deferred items.** `STATUS.md` has *"Resume download button — needs
public/resume.pdf"* open since cycle 002. 1g closes it. The OG-image item is still open and still
blocked on design.

**2d. `SkillBar` becomes dead code under Option A** — delete it and `skill-group-card.jsx` rather
than leaving them unimported.

**2e. Per-page `metadata.description`.** Eight pages currently describe themselves with invented
copy ("I help teams ship reliable software fast"). Once the CV summary lands, those should be
derived from CV sentences for consistency. Low effort, easy to fold in — but it is a wording change,
so it waits on Q1.

**2f. JSON-LD gets richer for free.** With hardcoded data, the `Person` schema on the home page can
carry `alumniOf`, `knowsAbout` (the CV skill categories) and `worksFor`. Pure SEO gain, no new
content.

---

## 3. Priority Suggestion

| # | Item | Effort | Impact |
|---|------|--------|--------|
| 1 | 2a — move `career/*.md` out of `public/` | Very Low | High (privacy) |
| 2 | 1g — CV preview + download + Statsig events | Medium | High (your ask; closes 002-3a) |
| 3 | 1a — data modules + unplug Firestore | Medium | High (foundation for 1b–1f) |
| 4 | 1b — Experience from CV | Medium | High |
| 5 | 1c — Projects, 14 entries | Medium-High | High |
| 6 | 1d — Skills | Low | Medium |
| 7 | 1e — Education + Publications | Low | Medium |
| 8 | 1f — Home + About copy | Low | Medium |
| 9 | 2e — per-page metadata descriptions | Low | Low-Medium |
| 10 | 2f — richer JSON-LD | Low | Low |

Suggested order: 2a → 1a → 1b/1c/1d/1e → 1f → 1g → 2e/2f. (1g can jump the queue if you want the
download live sooner; it does not depend on the data work.)

---

## 4. Decisions

Each of these was a place where the three source files disagree, contain a placeholder, or where the
site needs text the CV does not supply. All resolved by Fahim on 2026-09-20 unless marked.

| # | Question | Decision |
|---|----------|----------|
| D1 | Home hero tagline | CV summary's **first sentence only**, verbatim |
| D2 | About page bio | Drop the 3-block layout; full CV summary paragraph, verbatim |
| D3 | PropStream named or anonymised | **Named.** Follow the CV, not the LinkedIn files |
| D4 | GrowthDay / TigerIT — one entry or two | **One each**, per the CV. No `[month] 2022` placeholder to resolve |
| D5 | Skills page | **Stays on Firestore, untouched.** CV supplies no year counts and only ~20 of ~55 skills are derivable from dated role lines |
| D6 | Education + publications | **Stay on Firestore, untouched**, publication links kept. Reverted mid-implementation at Fahim's request |
| D7 | Toptal | **Keep** a Toptal entry, listed **first**, titled **"Senior Software Engineer"** (not "Member"). Its detail page links out to PropStream, PianoTrax and GrowthDay via the existing `companies` map |
| D8 | TigerIT NID line | **Cut.** Follows the CV; avoids the NDA question entirely |
| D9 | Project dates | **Omit** where the source has a placeholder. Company + company dates already show on every project card |
| D10 | Phone number on public CV | **Strip.** Fahim re-exports a phone-free PDF; until then the current file is copied to the stable path so the button works |
| D11 | CV button placement | **Home hero only** |
| D12 | About stats row | **Re-cut from CV facts** — countable values only, nothing invented |

**Still open:** nothing. D10's phone-free PDF was supplied by Fahim during implementation and is the
file now served at `/cv/Fahim_Fahad_CV.pdf`.
