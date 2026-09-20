/**
 * All copy here is Fahim's own — `headline`/`summary` verbatim from his CV, `heroTagline`/`about`
 * written by him for this site. Do not paraphrase or re-voice any of it.
 * `summaryLead` is the summary's first sentence, used where a full paragraph does not fit.
 */
export const PROFILE = {
    fullName: "Sayed Md. Fahim Fahad",
    shortName: "Fahim Fahad",
    headline: "Senior Backend Engineer · Java · Spring Boot · AWS",
    location: "Dhaka, Bangladesh (UTC+6) · Open to fully remote roles",
    summary:
        "Senior backend engineer with 10 years in Java and Spring Boot on AWS, building payment infrastructure and high-volume data systems. Built the core financial engine and bank-gateway integrations for a national digital payments platform from the ground up; more recently integrated a card payment gateway with CIT and MIT support, plus card tokenisation, for a US real-estate platform. Working with US product teams through Toptal since 2021. Picks up frontend work in React and Next.js when a team needs the coverage.",
    summaryLead:
        "Senior backend engineer with 10 years in Java and Spring Boot on AWS, building payment infrastructure and high-volume data systems.",
    /** Fahim's own wording for the hero — not from the CV. */
    heroTagline:
        "Senior Backend / Software Engineer · Java, Spring Boot, AWS · Payment infrastructure and high-volume data systems · 10 years in backend, remote with US teams since 2021",
    /** Fahim's own wording for the About page — not from the CV. */
    about: [
        "I build payment infrastructure and high-volume data systems in Java and Spring Boot on AWS, and have done for 10 years.",
        "I joined a digital payments startup before the first commit and stayed through central-bank licensing and launch, building the core financial engine from scratch: transactions, balances, end-of-day merchant reconciliation. It was the system of record for every movement of money on the platform.",
        "Since 2021 I have worked with US product teams through Toptal. At GrowthDay I owned the notification service and drove a 5% increase in daily active users through targeted push. More recently, on a US real-estate platform: card gateway integration through vendor certification, a search API over billions of property records, and the server side of a conversational assistant on the Anthropic API, where prompt caching cut cost per conversation by 60%.",
        "Primarily backend, but I pick up React and Next.js when a team needs the coverage. I write about backend engineering at fahimfahad92.medium.com.",
    ],
};

/** Counted from the CV and the projects file — no estimates. */
export const PROFILE_STATS = [
    { value: "10", label: "Years experience" },
    { value: "6", label: "Companies" },
    { value: "14", label: "Projects" },
];

export const PROFILE_TAGS = ["Payments", "Fintech", "Backend", "Microservices"];
