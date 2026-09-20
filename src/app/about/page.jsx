import ProfileImageComponent from "../components/profile-component";
import StatsigEvent from "@/app/components/statsig-event";
import Card from "../components/card";
import {
    GithubIcon,
    LinkedInIcon,
    MediumIcon,
    LeetCodeIcon,
} from "../components/icons/social-icons";
import CopyEmailButton from "../components/copy-email-button";
import { EMAIL_ADDRESS, MEDIUM_DISPLAY_URL, SOCIAL_LINKS } from "../constants/social-constants";
import { SITE_URL, SITE_NAME } from "../constants/site-constants";
import { PROFILE, PROFILE_STATS, PROFILE_TAGS } from "../data/profile-data";

const description = PROFILE.summaryLead;

const SOCIALS = [
    { href: SOCIAL_LINKS.LINKEDIN, label: "LinkedIn", Icon: LinkedInIcon },
    { href: SOCIAL_LINKS.GITHUB,   label: "GitHub",   Icon: GithubIcon   },
    { href: SOCIAL_LINKS.MEDIUM,   label: "Medium",   Icon: MediumIcon   },
    { href: SOCIAL_LINKS.LEETCODE, label: "LeetCode", Icon: LeetCodeIcon },
];

/** Turns the bare Medium host in body copy into a link. */
function withMediumLink(text) {
    const [before, after] = text.split(MEDIUM_DISPLAY_URL);
    if (after === undefined) return text;

    return (
        <>
            {before}
            <a
                href={`https://${MEDIUM_DISPLAY_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-900 dark:text-gray-100 underline underline-offset-2 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-200"
            >
                {MEDIUM_DISPLAY_URL}
            </a>
            {after}
        </>
    );
}

export const metadata = {
    title: `About | ${SITE_NAME}`,
    description,
    openGraph: {
        title: `About | ${SITE_NAME}`,
        description,
        url: `${SITE_URL}/about`,
        siteName: SITE_NAME,
        type: "website",
    },
    twitter: { card: "summary", title: `About | ${SITE_NAME}`, description },
    alternates: { canonical: `${SITE_URL}/about` },
};

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
                            <div className="relative w-24 h-24 rounded-full border-4 border-white dark:border-gray-900 shadow-md overflow-hidden bg-gray-100 dark:bg-gray-800 shrink-0">
                                <ProfileImageComponent sizes="96px" />
                            </div>

                            {/* Social icons */}
                            <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 pb-1">
                                {SOCIALS.map(({ href, label, Icon }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                                <CopyEmailButton email={EMAIL_ADDRESS} size={20} />
                            </div>
                        </div>

                        {/* Name & title */}
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                            {PROFILE.fullName}
                        </h1>
                        <p className="text-base text-gray-500 dark:text-gray-400 mt-1">{PROFILE.headline}</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">{PROFILE.location}</p>

                        {/* Specialty tags */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {PROFILE_TAGS.map((tag) => (
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

                {/* ── Stats row ── */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
                    {PROFILE_STATS.map(({ value, label }) => (
                        <Card key={label} className="p-4 text-center">
                            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</p>
                        </Card>
                    ))}
                </div>

                {/* ── Bio ── */}
                <Card className="p-6 sm:p-8 mt-5 flex flex-col gap-4">
                    {PROFILE.about.map((paragraph) => (
                        <p key={paragraph} className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                            {withMediumLink(paragraph)}
                        </p>
                    ))}
                </Card>

            </div>
        </>
    );
}
