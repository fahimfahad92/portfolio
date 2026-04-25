# Fahim Fahad — Portfolio

Personal portfolio for **Sayed MD Fahim Fahad**, Senior Software Engineer with 10+ years of experience in fintech and SaaS startups.

Live: [portfolio-three-snowy-36.vercel.app](https://portfolio-three-snowy-36.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS, react-icons |
| Data | Firebase Firestore |
| Analytics | Statsig |
| Email | Nodemailer + Gmail SMTP |
| Linting | ESLint 9 (flat config) |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file at the project root:

```env
# Firebase
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGE_SENDER_ID=
FIREBASE_APP_ID=

# Statsig
NEXT_PUBLIC_STATSIG_CLIENT_KEY=

# Site URL (used for OG tags, sitemap, canonical URLs)
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Contact form — Gmail SMTP
GMAIL_USER=your@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
```

> **Getting a Gmail App Password:** Google Account → Security → 2-Step Verification → App Passwords.

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

```bash
npm run dev        # Development server with hot reload
npm run build      # Production build
npm run start      # Serve production build
npm run lint       # ESLint (eslint src/)
npm run lint:fix   # ESLint with auto-fix
```

---

## Project Structure

```
src/app/
├── actions/          # Server Actions (contact form)
├── _lib/             # Statsig utility
├── components/       # Shared UI components
│   └── icons/        # Icon sets (skill, social, common)
├── constants/        # App-wide constants
│   ├── caching-constants.jsx   # Cache TTL values
│   ├── routing-constants.jsx   # Route paths
│   ├── site-constants.js       # SITE_URL, SITE_NAME
│   └── social-constants.js     # Social URLs, email address
├── firebase/         # Firestore client + fetch utilities
├── providers/        # Statsig provider wrapper
├── about/
├── blogs/
├── contact/
├── education/
├── experience/
│   └── [companyName]/
├── projects/
│   └── [projectName]/
└── skills/
```

---

## Features

- **Dark mode** — system preference + manual toggle, no flash on load (FOUC-free inline script)
- **Contact form** — sends directly to Gmail inbox via Nodemailer, no third-party relay
- **Filter bars** — client-side tag filtering with counts on Projects and Blogs pages
- **SEO** — Open Graph, Twitter card, JSON-LD (`Person`, `WebSite`, `BreadcrumbList`), canonical URLs, sitemap, robots.txt
- **Skill bars** — animated on scroll via IntersectionObserver
- **Breadcrumb nav** — on all detail pages, with matching JSON-LD structured data
