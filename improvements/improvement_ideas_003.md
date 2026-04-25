# Improvement Ideas — 003 (Code Quality)

> Status: **Done** — all 10 items implemented.

---

## What's Already Done

- `eslint.config.mjs` created with `next/core-web-vitals` + custom rules.
- `npm run lint` now works (`eslint src/`). `npm run lint:fix` added for auto-fix.
- `next lint` was removed in Next.js 16 — the script has been updated accordingly.
- All current violations are fixed (was only one: unescaped `'` in `not-found.js`).

---

## Suggested Code Improvements

---

### 1. Type safety without TypeScript — JSDoc annotations

**Current state:**
The project is JavaScript with no type annotations. Props accepted by components and return shapes of Firebase functions are not documented anywhere. This causes IDEs to show `any` for everything and makes refactoring risky.

**Proposed:**
Add `@param` / `@returns` JSDoc to the Firebase utility functions and `@typedef` for shared shapes. This gives VS Code full autocomplete and hover docs without migrating to TypeScript.

```js
// firebase-util.jsx — proposed
/**
 * @typedef {{ id: string, name: string, techStack: string[], link?: string }} Project
 * @returns {Promise<Project[] | false>}
 */
export async function getProjectsData() { ... }
```

For components, prop shapes can be documented with `@param`:
```js
/**
 * @param {{ blog: { id: string, title: string, tags: string[], publishDate: string } }} props
 */
export default function BlogComponent({ blog }) { ... }
```

**Effort:** Low per function; medium overall. Can be done incrementally.

---

### 2. Consolidate all `console.log` calls

**Current state:**
Every Firebase fetch function uses `console.log` for tracing:
```js
console.log("Calling firestore to get projects data");
console.log(`Error for project data ${err}`);
```

These fire in production — `console.log` is visible to anyone with DevTools open.

**Proposed:**
Replace tracing logs with `console.error` for actual errors (already allowed by ESLint rule), and remove the informational `console.log` calls entirely. They add no value once the app is live.

```js
// Before
console.log("Calling firestore to get projects data");
// After — remove entirely

// Before
console.log(`Error for project data ${err}`);
// After
console.error("[getProjectsData]", err);
```

**Files:** `src/app/firebase/firebase-util.jsx` — all 8 fetch functions.
**Effort:** Very low.

---

### 3. `firebase-util.jsx` — duplicated fetch pattern

**Current state:**
Every Firestore fetch function repeats the exact same try/catch/forEach structure:

```js
export async function getProjectsData() {
    try {
        const q = query(collection(db, "projects"), orderBy("order", "desc"));
        const querySnapshot = await getDocs(q);
        let data = [];
        querySnapshot.forEach((doc) => { data.push({ id: doc.id, ...doc.data() }); });
        return data;
    } catch (err) {
        console.log(`Error for project data ${err}`);
        return false;
    }
}
// × 5 more functions with same structure
```

**Proposed:**
Extract a shared `fetchCollection(queryFn)` helper:

```js
async function fetchDocs(q) {
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getProjectsData() {
    try {
        return await fetchDocs(query(collection(db, "projects"), orderBy("order", "desc")));
    } catch (err) {
        console.error("[getProjectsData]", err);
        return false;
    }
}
```

Reduces `firebase-util.jsx` from ~185 lines to ~80 and makes error messages consistent.

**Effort:** Low — mechanical refactor, no behavior change.

---

### 4. Magic strings for Firestore collection names

**Current state:**
Firestore collection names are hardcoded strings scattered across `firebase-util.jsx`:
`"projects"`, `"projectDetails"`, `"experience"`, `"experienceDetails"`, `"blogs"`, `"skills"`, `"education"`, `"contacts"`.

A typo silently returns an empty array with no error.

**Proposed:**
```js
// firebase-util.jsx — top of file
const COLLECTIONS = {
    PROJECTS: "projects",
    PROJECT_DETAILS: "projectDetails",
    EXPERIENCE: "experience",
    EXPERIENCE_DETAILS: "experienceDetails",
    BLOGS: "blogs",
    SKILLS: "skills",
    EDUCATION: "education",
    CONTACTS: "contacts",
};
```

**Effort:** Very low.

---

### 5. `unstable_cache` key uniqueness

**Current state:**
`getExperienceDetails` and `getProjectDetails` are cached with static keys:
```js
unstable_cache(async (companyName) => { ... }, ["experience-details"], ...)
unstable_cache(async (projectName) => { ... }, ["project-details"], ...)
```

These functions receive a dynamic argument (`companyName`, `projectName`) but the cache key is static. Next.js does include the arguments in the actual cache key, but the static string makes it hard to reason about cache invalidation and tag-based revalidation later.

**Proposed:**
Add the `tags` option so you can revalidate by tag:
```js
unstable_cache(
    async (companyName) => getExperienceDetailsData(companyName),
    ["experience-details"],
    { revalidate: CACHING_CONSTANTS.DEFAULT, tags: ["experience-details"] }
)
```

**Effort:** Very low — add `tags` to the two detail-page caches.

---

### 6. `caching-constants.jsx` — confusing naming

**Current state:**
```js
export const CACHING_CONSTANTS = {
    DEFAULT: ...,
    ONE_DAY: ...,
    SEVEN_DAY: ...,
};
```

The actual values are unclear — is `DEFAULT` 1 day, 30 days, something else? `ONE_DAY` tells you the unit but not the value. Anyone adding a new cache call must open the file to know what they're setting.

**Proposed:**
Name constants by what they represent and add the value as a comment:
```js
export const CACHING_CONSTANTS = {
    DEFAULT:    2592000, // 30 days in seconds
    ONE_DAY:       86400, // 1 day
    SEVEN_DAY:    604800, // 7 days
};
```

Or rename to make the value self-documenting:
```js
export const CACHE_TTL = {
    THIRTY_DAYS: 2592000,
    SEVEN_DAYS:   604800,
    ONE_DAY:       86400,
};
```

**Effort:** Very low — rename + update all usages.

---

### 7. `contact-action.js` — `from` field is malformed

**Current state:**
The linter modified the `from` field when the action was saved:
```js
from: `"Portfolio Contact" ${name.trim()}`,   // missing angle brackets
```

This will cause the email to have a malformed `From` header and may be rejected by Gmail SMTP or land in spam.

**Proposed fix:**
```js
from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
```

**Effort:** One-line fix. **Should be fixed immediately.**

---

### 8. Error page (`error.js`) missing dark mode styles

**Current state:**
The error boundary page likely uses hardcoded light-mode colors without dark variants.

**Proposed:**
Add `dark:` variants consistent with the rest of the app.

**Effort:** Very low.

---

### 9. `not-found.js` — `javascript:history.back()` href

**Current state:**
```jsx
<Link href="javascript:history.back()">Go back</Link>
```

Using `javascript:` protocol in `href` is an anti-pattern flagged by security linters (XSS vector in general, though benign here). Next.js `<Link>` is also not designed for non-URL hrefs.

**Proposed:**
Replace with a client-side button:
```jsx
"use client";
<button onClick={() => window.history.back()}>Go back</button>
```

**Effort:** Very low.

---

### 10. CLAUDE.md is out of date

**Current state:**
`CLAUDE.md` still shows the old caching constant names and doesn't reflect the new files added across Phases 1–4: `site-constants.js`, `social-constants.js`, `actions/`, `contact/`, ESLint config.

**Proposed:**
Update the architecture section to reflect the current state of the codebase.

**Effort:** Very low.

---

## Priority

| # | Item | Effort | Type |
|---|------|--------|------|
| 7 | Fix malformed `from` field in contact action | One line | **Bug** |
| 9 | Fix `javascript:history.back()` in not-found | Very low | Bug |
| 2 | Remove `console.log` from firebase-util | Very low | Code quality |
| 4 | Magic strings → `COLLECTIONS` constant | Very low | Code quality |
| 5 | Add `tags` to detail-page caches | Very low | Correctness |
| 3 | Deduplicate Firestore fetch pattern | Low | Refactor |
| 6 | Rename caching constants | Very low | Readability |
| 8 | Dark mode on error page | Very low | UI |
| 1 | JSDoc annotations | Medium | DX |
| 10 | Update CLAUDE.md | Very low | Docs |
