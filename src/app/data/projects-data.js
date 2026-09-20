/**
 * Descriptions are Fahim's own wording, verbatim — do not paraphrase or tighten.
 * Array order is display order (deliberate value order, not chronological).
 * `timeline` is omitted where the source had no confirmed date.
 *
 * @typedef {{
 *   name: string,
 *   displayName: string,
 *   companyName: string,
 *   timeline?: string,
 *   techStack: string[],
 *   description: string[],
 * }} Project
 * @type {Project[]}
 */
export const PROJECTS = [
    {
        name: "core-financial-engine",
        displayName: "Core Financial Engine · Digital Payments Platform",
        companyName: "Dmoney Bangladesh",
        techStack: ["Java", "Spring Boot", "Oracle", "Microservices"],
        description: [
            "The core accounting system of a digital payments platform licensed as a PSP by Bangladesh Bank. I built it from scratch as one of the first engineers on the product, before there was a repository.",
            "The engine was the system of record for every movement of money on the platform. It handled transaction processing across wallet transfers, bill payments, merchant purchases and mobile top-ups; balance management with the consistency guarantees that implies; end-of-day merchant reconciliation against settlement; and the financial reporting the business and the regulator needed.",
            "Working on a system where every record is money changes how you build. Correctness is not negotiable, failures have to be recoverable rather than merely logged, and reconciliation has to prove the ledger agrees with the bank at the end of every day.",
            "I ran regular load tests against the engine to keep performance predictable as volume grew, and later migrated the database to optimise the payment flow.",
            "The platform went from first commit through central-bank licensing to commercial launch during my time there, reaching 50k registered users.",
        ],
    },
    {
        name: "ai-property-search-assistant",
        displayName: "AI Property Search Assistant",
        companyName: "PropStream",
        techStack: ["Java", "Spring Boot", "Anthropic API", "AWS S3", "PostgreSQL"],
        description: [
            "A conversational assistant that lets users search property listings in natural language instead of filling in filter forms.",
            "I designed and built the server side: a streaming agent on the Anthropic API using tool use, where the model calls a search tool and results stream back to the client as they arrive rather than arriving in one block at the end.",
            "The filter taxonomy the model reasons over is sourced from S3 rather than compiled into the application, so search categories and their allowed values can change without a redeploy. That mattered because the taxonomy was still moving while the feature was being built.",
            "Prompt caching brought cost per conversation down by 60%. I added per-conversation logging of token counts, cache hit rates and cost, so spend could be attributed and tracked rather than estimated.",
        ],
    },
    {
        name: "card-payment-gateway-integration",
        displayName: "Card Payment Gateway Integration",
        companyName: "PropStream",
        techStack: ["Java", "Spring Boot", "PostgreSQL", "Hibernate"],
        description: [
            "Card payment processing for a subscription platform serving 50,000+ paying users.",
            "I integrated a card gateway across two services, covering cardholder-initiated transactions for one-off purchases and merchant-initiated transactions for recurring subscription billing, with card tokenisation so card data was never stored on our side.",
            "I took the integration through the vendor's certification process, which tests the implementation against the card scheme's requirements before it is allowed into production.",
            "On the operational side I added request-trace IDs to every gateway payment log, so a support question about a specific charge could be answered by following one identifier through the system instead of reconstructing it from timestamps. I also added alerting on recurring-billing job failures, so a failed nightly run surfaced immediately rather than being discovered by customers.",
        ],
    },
    {
        name: "external-payment-gateway",
        displayName: "External Payment Gateway · Bank and Biller Integrations",
        companyName: "Dmoney Bangladesh",
        techStack: ["Java", "Spring Boot", "Oracle", "Third-party bank APIs"],
        description: [
            "The integration layer connecting a digital payments platform to the outside financial world.",
            "I built the gateway that talked to our settlement bank and to the third-party providers behind the platform's services. It enabled cash-in and cash-out, credit card bill payment, mobile recharge, utility bill payment, and ticketing for bus, train and cinema.",
            "Every integration was different. Banks and billers each had their own protocols, their own security requirements, their own failure modes and their own ideas about what a timeout meant. The work was as much about handling partner-side failure gracefully as it was about the happy path, because a payment that fails halfway is worse than one that does not start.",
            "Security mattered throughout: these were live financial transactions moving through third-party systems, at a platform operating under central-bank licensing.",
        ],
    },
    {
        name: "bulk-listing-search-api",
        displayName: "Bulk Listing Search API",
        companyName: "PropStream",
        techStack: ["Java", "Spring Boot", "PostgreSQL", "AWS"],
        description: [
            "A search API over a property dataset of billions of records, consumed by a sister company's platform.",
            "I designed it with both synchronous and asynchronous modes: small queries return inline, large ones become background jobs the caller polls for.",
            "Two problems shaped the design. First, expensive duplicate work: identical requests were hashed with SHA-256 so a repeat query could be recognised and served from the existing result rather than re-run. Second, duplicate processing under concurrency: workers claim jobs atomically, so two workers can never pick up the same job.",
            "Reads were routed to a read replica to keep heavy search traffic away from the primary, which was serving the main application at the same time.",
        ],
    },
    {
        name: "notification-service",
        displayName: "Notification Service · Consumer Platform",
        companyName: "GrowthDay",
        techStack: ["Java", "Spring Boot", "MongoDB", "AWS", "OneSignal", "Statsig"],
        description: [
            "The notification system for a consumer personal-development platform with around 150k monthly active users.",
            "Notifications started inside the core monolith and were extracted into a standalone service after they began causing performance problems there. The extraction was designed by our architect; I became the owning engineer for the service afterwards, and all notification work routed to me from that point.",
            "I designed and built new notification types as the product needed them, and ran Statsig experiments to measure whether they actually changed behaviour rather than assuming they did. Targeted push notifications drove a 5% increase in daily active users.",
            "Volume ran at 20 to 30k notifications a day in steady state and peaked around 150k on event days, so the service had to handle bursts of roughly seven times normal load without degrading.",
            "I also migrated our OneSignal data into a format that let us use one provider across SMS, push and email instead of maintaining separate paths, and spent a fair amount of time on delivery reliability, which is where most of the hard problems in notifications actually live.",
        ],
    },
    {
        name: "direct-mail-platform-rebuild",
        displayName: "Direct Mail Platform Rebuild",
        companyName: "PropStream",
        techStack: ["Java", "Spring Boot", "PostgreSQL", "REST integrations"],
        description: [
            "A rebuild of the platform's direct-mail product onto a new print vendor. I designed it and delivered it end to end.",
            "The scope covered campaign management APIs, cost preview so users could see what a campaign would cost before committing, the charging flow itself, and a payment scheduler with backoff retry for failures.",
            "Refunds were the interesting part. The obvious implementation would delete or modify the original charge record, but existing database triggers depended on those rows, so I issued refunds as credit reversal entries instead. The ledger stays append-only and the triggers keep working, at the cost of a slightly more involved query when you want a net balance.",
            "I also built webhook reconciliation against the vendor, so the state of a mail piece in our system stayed in step with the state in theirs rather than drifting silently.",
        ],
    },
    {
        name: "dnc-compliance-migration",
        displayName: "DNC Compliance Migration",
        companyName: "PropStream",
        techStack: ["Java", "Spring Boot", "PostgreSQL"],
        description: [
            "A migration of 1.5 billion public Do-Not-Call records onto a new data model.",
            "The DNC registry governs who a user is legally allowed to contact, so this data sits directly in a compliance path. The old model was not serving the product well, and changing it meant touching every writer and every read path that depended on it, at a scale where a careless migration means hours of downtime or a silently corrupted dataset.",
            "Alongside the migration I standardised US phone numbers to ten digits across all contact writes. Inconsistent formatting meant lookups could miss, and a missed DNC lookup is a compliance problem rather than a cosmetic one.",
        ],
    },
    {
        name: "signup-service",
        displayName: "Signup Service",
        companyName: "GrowthDay",
        techStack: ["Java", "Spring Boot", "MongoDB", "AWS", "Next.js", "Strapi"],
        description: [
            "A ground-up rebuild of the signup and purchase flow for a consumer subscription platform.",
            "The original flow had performance bottlenecks that were hard to fix incrementally, so I designed and built a replacement service from scratch rather than patching around them.",
            "The part with the longest-lasting value was the analytics. I instrumented event-level tracking across the whole flow, so the business could see trial conversions, upgrades, downgrades and cancellation reasons as they happened instead of inferring them from database snapshots after the fact. That turned a set of assumptions about why people were leaving into something measurable.",
            "I also worked on the frontend where time-sensitive issues came up, which is often the fastest way to unblock a launch even when it is not strictly your layer.",
        ],
    },
    {
        name: "core-platform",
        displayName: "Core Platform · Goals, Reminders, Journaling, Courses",
        companyName: "GrowthDay",
        techStack: ["Java", "Spring Boot", "MongoDB", "AWS Lambda", "SQS", "S3"],
        description: [
            "Three years of feature work on the core monolith behind a consumer personal-development platform.",
            "I owned goals and reminders end to end, and built significant parts of journaling and course delivery. Reminders in particular are harder than they look: users are spread across timezones and expect a 7am reminder at their 7am, which makes scheduling a genuinely fiddly problem rather than a cron job.",
            "Some of the work that came out of this:",
            "An image-resize Lambda that cut dashboard load time from over 10 seconds to 3 or 4, plus automatic S3 thumbnail generation for profile images.",
            "A change to the scheduler that grouped same-frequency events into single SQS messages instead of emitting one per event, which reduced both message volume and the AWS bill.",
            "Automated resolution of the customer-support issues that came up most often, which removed around 20% of ticket volume and the on-call engineering time attached to it. I was handling roughly 30% of CS issues myself at the time, so this was a problem I had good visibility into.",
        ],
    },
    {
        name: "action-tracker",
        displayName: "Action Tracker · Project Management Platform",
        companyName: "TigerIT Bangladesh",
        techStack: ["Java", "Spring Boot", "Elasticsearch", "PostgreSQL"],
        description: [
            "A project and task management platform built for a client's internal use. I led API development and designed the backend architecture.",
            "The defining requirement was search. The client wanted to filter across fields that mixed free text with internal list values, in combinations that relational queries could not serve efficiently no matter how they were indexed. I built the search layer on Elasticsearch, which fit the shape of the problem rather than fighting it.",
            "I also introduced load testing for the APIs, which had not existed on the project before, and tuned performance against what it showed.",
        ],
    },
    {
        name: "user-management-service",
        displayName: "User Management Service",
        companyName: "Dmoney Bangladesh",
        techStack: ["Java", "Spring Boot", "Oracle"],
        description: [
            "The identity service for a digital payments platform, handling user registration, credential management and login.",
            "Authentication at a licensed payment service provider carries requirements that a general consumer app does not. Credential handling has to meet the standards the platform is regulated against, and the service sits on the critical path for every user action, so availability and latency both matter.",
            "I designed and built the service, investigated and resolved production issues as they came up, and prepared the technical documentation covering its features and workflows.",
        ],
    },
    {
        name: "tigerhrms",
        displayName: "TigerHRMS · Attendance and Leave System",
        companyName: "TigerIT Bangladesh",
        techStack: ["Java", "Spring Boot", "MySQL"],
        description: [
            "An internal HR system used by 200+ employees for attendance tracking and leave management.",
            "I built the API and reporting layers. Reporting was the substantial part: attendance and leave data is only useful aggregated, and the aggregations management wanted did not map neatly onto how the data was stored.",
            "I also hardened the security of the system's daily scheduled job, which ran unattended against employee records.",
        ],
    },
    {
        name: "admin-portal-music-catalogue",
        displayName: "Admin Portal · Music Catalogue Management",
        companyName: "PianoTrax",
        timeline: "Nov 2024 – Sep 2025",
        techStack: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
            "React Query",
        ],
        description: [
            "The internal admin portal for an online sheet-music retailer, used to manage the catalogue and the content on the customer-facing site.",
            "I rebuilt the show, song and track navigation on dynamic routing. The existing flow was fragmented and lost state on page refresh, which is the kind of bug that is individually small and collectively makes a tool unpleasant to use all day.",
            "I consolidated blog and blog-content creation, which had been two separate screens, into a single form with accordion-based content editing and image handling. I also built the admin interface for coupon code management.",
        ],
    },
];

/** @param {string} projectName */
export function getProjectBySlug(projectName) {
    return PROJECTS.find((p) => p.name === projectName);
}
