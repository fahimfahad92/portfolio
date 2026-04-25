import Link from "next/link";
import { AwsIcon, JavaIcon, NextIcon, ReactIcon, SpringBootIcon } from "./components/icons/skill-icons";
import ProfileImageComponent from "./components/profile-component";
import StatsigEvent from "@/app/components/statsig-event";
import { SOCIAL_LINKS } from "./constants/social-constants";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-three-snowy-36.vercel.app";

export const metadata = {
    title: "Sayed MD Fahim Fahad – Senior Software Engineer",
    description: "10+ years building scalable backend systems and full-stack SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
    openGraph: {
        title: "Sayed MD Fahim Fahad – Senior Software Engineer",
        description: "10+ years building scalable backend systems and full-stack SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
        url: siteUrl,
        siteName: "Fahim Fahad",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Sayed MD Fahim Fahad – Senior Software Engineer",
        description: "10+ years building scalable backend systems and full-stack SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
    },
};

const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sayed MD Fahim Fahad",
    jobTitle: "Senior Software Engineer",
    url: siteUrl,
    sameAs: [SOCIAL_LINKS.LINKEDIN, SOCIAL_LINKS.GITHUB, SOCIAL_LINKS.MEDIUM],
};

const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fahim Fahad – Senior Software Engineer",
    url: siteUrl,
};

export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
            />

            <StatsigEvent eventName="portfolio_pv_home" metadata={{ page: "home" }} />

            <section className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex items-center">
                <div className="max-w-5xl mx-auto px-6 py-16 w-full">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* ── Profile image ── */}
                        <div className="shrink-0">
                            <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                                <ProfileImageComponent width={240} height={240} />
                            </div>
                        </div>

                        {/* ── Content ── */}
                        <div className="flex flex-col gap-5 text-center md:text-left">

                            {/* Availability badge */}
                            <div className="flex justify-center md:justify-start">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Available for new opportunities
                                </span>
                            </div>

                            {/* Role + name */}
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                                    Senior Software Engineer @ Toptal
                                </p>
                                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
                                    Fahim Fahad
                                </h1>
                            </div>

                            {/* Tagline */}
                            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto md:mx-0">
                                10+ years building scalable backend systems and full-stack SaaS products in fintech and startups.
                                I help teams ship reliable software fast — from zero to production.
                            </p>

                            {/* CTA buttons */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <Link
                                    href="/projects"
                                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg shadow hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    href={SOCIAL_LINKS.EMAIL}
                                    className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 font-semibold rounded-lg shadow border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Contact Me
                                </Link>
                            </div>

                            {/* Skill icon strip */}
                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 pt-1">
                                <span className="text-xs text-gray-400 dark:text-gray-500 mr-1">Experties in</span>
                                <JavaIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-400" />
                                <SpringBootIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-400" />
                                <AwsIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-400" />
                                <ReactIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-400" />
                                <NextIcon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 dark:text-gray-400" />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
