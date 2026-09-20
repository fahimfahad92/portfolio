/**
 * Descriptions and highlights are Fahim's own wording, verbatim — do not paraphrase or tighten.
 * Array order is display order — Toptal first, then newest.
 *
 * @typedef {{
 *   companyName: string,
 *   displayName: string,
 *   position: string,
 *   timeline: string,
 *   jobType: string,
 *   address: string,
 *   description: string,
 *   techStack?: string[],
 *   highlights?: string[],
 *   projects?: Record<string, string>,
 *   companies?: Record<string, string>,
 * }} Experience
 * @type {Experience[]}
 */
export const EXPERIENCES = [
    {
        companyName: "toptal",
        displayName: "Toptal",
        position: "Senior Software Engineer",
        timeline: "Apr 2021 – Present",
        jobType: "Freelance",
        address: "Remote",
        description:
            "Working with US product teams on backend systems since 2021, through the Toptal network.",
        companies: {
            propstream: "PropStream",
            pianotrax: "PianoTrax",
            growthday: "GrowthDay",
        },
    },
    {
        companyName: "propstream",
        displayName: "PropStream",
        position: "Senior Software Engineer",
        timeline: "Oct 2025 – Present",
        jobType: "Contract",
        address: "US, Remote (via Toptal)",
        description:
            "US real-estate data platform for property investors: search, CRM, marketing and billing. Led feature delivery across teams of three to four engineers, owning design, design review and code review.",
        techStack: [
            "Java 11",
            "JEE (WildFly)",
            "Spring Boot",
            "Hibernate",
            "PostgreSQL (JSONB, spatial)",
            "AWS (ECS, S3)",
            "React/Redux",
            "Docker",
        ],
        highlights: [
            "Designed and built the server side of the conversational property-search assistant on the Anthropic API: a streaming tool-use agent with an S3-sourced filter taxonomy that updates without redeploy. Prompt caching cut LLM cost per conversation by 60%",
            "Designed the rebuilt direct-mail product on a new print vendor and delivered it end to end, covering campaign APIs, cost preview, a payment scheduler with backoff retry, and refunds issued as credit reversals to stay correct under existing DB triggers",
            "Designed the bulk listing-search API consumed by a sister company's platform, synchronous and asynchronous, with SHA-256 request deduplication, atomic job claiming to prevent duplicate processing, and reads served from a replica over a dataset of billions of property records",
            "Took the Commerce Hub/PNC gateway integration through vendor certification across the CRM and pricing services, serving 50,000+ paying users, with request-trace IDs on every gateway payment log and Slack alerting on recurring-billing job failures",
            "Migrated 1.5 billion public Do-Not-Call records onto a new data model, updated every writer and read path, and standardised US phone numbers to ten digits across all contact writes",
            "Rewrote the queries behind the platform's three slowest endpoints and resolved a pattern of concurrent long-running queries exhausting database connections. Added a shared feature-toggle layer that removed redeploys for flag changes",
            "Shipped the dialer and click-to-dial feature set across the backend, microservices and React client, including BatchDialer webhook integration and XLSX campaign exports",
        ],
        projects: {
            "ai-property-search-assistant": "AI Property Search Assistant",
            "card-payment-gateway-integration": "Card Payment Gateway Integration",
            "bulk-listing-search-api": "Bulk Listing Search API",
            "direct-mail-platform-rebuild": "Direct Mail Platform Rebuild",
            "dnc-compliance-migration": "DNC Compliance Migration",
        },
    },
    {
        companyName: "pianotrax",
        displayName: "PianoTrax",
        position: "Frontend Developer (part-time)",
        timeline: "Nov 2024 – Sep 2025",
        jobType: "Part-time",
        address: "US, Remote (via Toptal)",
        description:
            "Internal admin portal for an online sheet-music retailer, used to manage catalogue and site content.",
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "React Query",
        ],
        highlights: [
            "Rebuilt the show, song and track navigation on dynamic routing, unifying a fragmented flow and fixing state loss on page refresh",
            "Consolidated separate blog and blog-content creation screens into a single form with accordion-based content editing and image handling",
            "Built the admin interface for coupon code management",
        ],
        projects: {
            "admin-portal-music-catalogue": "Admin Portal · Music Catalogue Management",
        },
    },
    {
        companyName: "growthday",
        displayName: "GrowthDay",
        position: "Backend Engineer",
        timeline: "May 2021 – Jun 2024",
        jobType: "Full-time",
        address: "US, Remote",
        description:
            "Consumer personal-development platform, around 150k monthly active users. One of four backend engineers in a 17-person team. Joined via Toptal as a contractor, hired permanently after the first year with growing design ownership.",
        techStack: [
            "Java 21",
            "Spring Boot 3",
            "MongoDB",
            "AWS (Lambda, SQS, S3, EventBridge)",
            "OneSignal",
            "Statsig",
            "Next.js",
            "Strapi",
        ],
        highlights: [
            "Became the owning engineer for the notification service after its extraction from the core monolith, taking all subsequent notification work. Designed new notification types, ran Statsig experiments against them, and drove a 5% increase in daily active users through targeted push. Steady volume of 20 to 30k notifications a day, peaking at 150k on event days",
            "Owned the goals and reminders features end to end, and built significant parts of journaling and course delivery, in a MongoDB-backed Spring Boot monolith",
            "Designed and built the signup service from scratch, replacing a flow with known performance bottlenecks, and instrumented event-level analytics across trial conversion, upgrade, downgrade and cancellation reasons",
            "Upgraded the platform from Java 8 to Java 21 and Spring Boot 2 to 3, including the javax to jakarta namespace migration",
            "Cut dashboard load time from over 10 seconds to 3 to 4 seconds with an image-resize Lambda, and added automatic S3 thumbnail generation for profile images",
            "Automated resolution of recurring customer-support issues, removing around 20% of ticket volume and the on-call engineering time attached to it",
            "Reduced AWS spend by batching same-frequency scheduler events into single SQS messages",
        ],
        projects: {
            "notification-service": "Notification Service · Consumer Platform",
            "signup-service": "Signup Service",
            "core-platform": "Core Platform · Goals, Reminders, Journaling, Courses",
        },
    },
    {
        companyName: "tigerit",
        displayName: "TigerIT Bangladesh",
        position: "Software Engineer, promoted to Senior Software Engineer",
        timeline: "Feb 2020 – Aug 2021",
        jobType: "Full-time",
        address: "Dhaka, Hybrid",
        description: "Enterprise software company.",
        techStack: ["Java", "Spring Boot", "PostgreSQL", "Elasticsearch", "MySQL"],
        highlights: [
            "Led API development and designed the backend architecture for Action Tracker, a project and task management platform built for a client's internal use",
            "Built the search layer on Elasticsearch to meet client requirements for filtering across free-text fields and internal list values, which relational queries could not serve efficiently",
            "Introduced load testing for the Action Tracker APIs and tuned performance against the results",
            "Built the API and reporting layers for TigerHRMS, an attendance and leave system used by 200+ employees, and hardened the security of its daily scheduled job",
        ],
        projects: {
            "action-tracker": "Action Tracker · Project Management Platform",
            tigerhrms: "TigerHRMS · Attendance and Leave System",
        },
    },
    {
        companyName: "dmoney",
        displayName: "Dmoney Bangladesh",
        position: "Software Engineer",
        timeline: "May 2017 – Jan 2020",
        jobType: "Full-time",
        address: "Dhaka, On-site",
        description:
            "Founding engineer at a digital payments startup. Joined pre-repository and stayed through the Bangladesh Bank PSP licence and commercial launch, reaching 50k registered users in an engineering team that grew to 25+.",
        techStack: ["Java", "Spring Boot", "Oracle", "microservices"],
        highlights: [
            "Built the core financial engine from scratch: transaction processing, balance management, end-of-day merchant reconciliation and financial reporting. This was the system of record for every movement of money on the platform",
            "Built the external payment gateway integrating the settlement bank and third-party providers, enabling cash-in and cash-out, credit card bill payment, mobile recharge, utility bills, and bus, train and cinema ticketing",
            "Designed and built the user management service covering registration, credential handling and login",
            "Built the notification service delivering real-time transaction alerts triggered by user activity",
            "Ran regular load testing across the platform and migrated the database to optimise the payment flow",
        ],
        projects: {
            "core-financial-engine": "Core Financial Engine · Digital Payments Platform",
            "external-payment-gateway": "External Payment Gateway · Bank and Biller Integrations",
            "user-management-service": "User Management Service",
        },
    },
    {
        companyName: "bjit",
        displayName: "BJIT Ltd.",
        position: "Software Engineer",
        timeline: "Jun 2016 – Apr 2017",
        jobType: "Full-time",
        address: "Dhaka, On-site",
        description:
            "Outsourced product development. Built an internal data tool to client specification, in a team reporting to a senior manager.",
        techStack: ["Java", "Spring Boot", "MySQL"],
    },
];

/** @param {string} companyName */
export function getExperienceBySlug(companyName) {
    return EXPERIENCES.find((e) => e.companyName === companyName);
}
