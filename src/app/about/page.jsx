import ProfileImageComponent from "../components/profile-component";
import StatsigEvent from "@/app/components/statsig-event";
import Card from "../components/card";
import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    MediumIcon,
    LeetCodeIcon,
} from "../components/icons/social-icons";

export const metadata = {
    title: "About | Fahim Fahad",
    description:
        "Senior software engineer with 10+ years of experience in fintech and SaaS startups. Specialising in Java, Spring Boot, AWS, microservices, and full-stack development.",
};

const TAGS = ["SaaS", "Fintech", "Startup", "Microservices"];

const STATS = [
    { value: "10+", label: "Years experience" },
    { value: "2",   label: "Products launched" },
    { value: "10+", label: "Technologies" },
];

const BIO = [
    {
        label: "Background",
        text: "I'm a software engineer with 10+ years of experience building and shipping SaaS products from the ground up. I've worked across fintech and life-coaching startups, joining both from the very beginning and helping them grow to active, paying user bases.",
    },
    {
        label: "Core skills",
        text: "My core stack is Java and Spring Boot on the backend, with AWS. On the frontend I'm comfortable with React and Next.js, which lets me contribute across the full stack when the team needs it.",
    },
    {
        label: "Specialization",
        text: "I specialize in microservices architecture, designing scalable systems and debugging production issues with root-cause analysis. I've also worked with Oracle, PostgreSQL, MongoDB, and Elasticsearch.",
    },
];

export default function AboutMePage() {
    return (
        <>
            <StatsigEvent eventName="portfolio_pv_about_me" metadata={{ page: "about_me" }} />

            <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">

                {/* ── Hero card ── */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm">

                    {/* Top banner */}
                    <div className="h-24 bg-gray-900 dark:bg-gray-950" />

                    {/* Profile row */}
                    <div className="px-6 sm:px-8 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12 mb-6">

                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                                <ProfileImageComponent width={96} height={96} />
                            </div>

                            {/* Social icons */}
                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 pb-1">
                                <span className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"><LinkedInIcon size={20} /></span>
                                <span className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"><GithubIcon   size={20} /></span>
                                <span className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"><MediumIcon   size={20} /></span>
                                <span className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"><LeetCodeIcon size={20} /></span>
                                <span className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"><EmailIcon    size={20} /></span>
                            </div>
                        </div>

                        {/* Name & title */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                            Sayed MD Fahim Fahad
                        </h1>
                        <p className="text-base text-gray-500 dark:text-gray-400 mt-1">Senior Software Engineer · Toptal</p>

                        {/* Specialty tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {TAGS.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Stats row — 2-up on mobile, 3-up on sm+ ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
                    {STATS.map(({ value, label }) => (
                        <Card key={label} className="p-4 text-center">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
                        </Card>
                    ))}
                </div>

                {/* ── Bio — structured paragraphs ── */}
                <Card className="p-6 sm:p-8 mt-5 flex flex-col gap-6">
                    {BIO.map(({ label, text }) => (
                        <div key={label}>
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                                {label}
                            </p>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                {text}
                            </p>
                        </div>
                    ))}
                </Card>

            </div>
        </>
    );
}
