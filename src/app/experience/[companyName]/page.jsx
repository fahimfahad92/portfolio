import ItemComponent from "@/app/components/item-component";
import ListComponent from "@/app/components/list-component";
import MapComponent from "@/app/components/map-component";
import Card from "@/app/components/card";
import DetailPageLayout from "@/app/components/detail-page-layout";
import { CACHING_CONSTANTS } from "@/app/constants/caching-constants";
import { getExperienceDetailsData } from "@/app/firebase/firebase-util";
import { unstable_cache } from "next/cache";
import { getExperience } from "../page";
import StatsigEvent from "@/app/components/statsig-event";

import { SITE_URL, SITE_NAME } from "@/app/constants/site-constants";

const getExperienceDetails = unstable_cache(
    async (companyName) => {
        return await getExperienceDetailsData(companyName);
    },
    ["experience-details"],
    { revalidate: CACHING_CONSTANTS.DEFAULT, tags: ["experience-details"] }
);

export async function generateMetadata({ params }) {
    const { companyName } = await params;
    const d = await getExperienceDetails(companyName);
    const title = d ? `${d.displayName} | Experience | Fahim Fahad` : "Experience | Fahim Fahad";
    const description = d
        ? `${d.position} at ${d.displayName}${d.timeline ? ` · ${d.timeline}` : ""}.`
        : "Experience details";
    return {
        title,
        description,
        openGraph: { title, description, url: `${SITE_URL}/experience/${companyName}`, siteName: SITE_NAME, type: "website" },
        alternates: { canonical: `${SITE_URL}/experience/${companyName}` },
        twitter: { card: "summary", title, description },
    };
}

export async function generateStaticParams() {
    const experiences = await getExperience();
    return experiences.map((experience) => ({
        companyName: experience.companyName,
    }));
}

export default async function CompanyDetailPage({ params }) {
    const { companyName } = await params;
    const d = await getExperienceDetails(companyName);

    if (!d) {
        return (
            <div className="text-gray-500 text-center py-20">
                Experience details not found.
            </div>
        );
    }

    return (
        <>
            <StatsigEvent
                eventName="portfolio_pv_experience_details"
                metadata={{ company: d.displayName }}
            />

            <DetailPageLayout
                backHref="/experience"
                sectionLabel="Experience"
                currentPage={d.displayName}
            >

                {/* ── Overview card ── */}
                <Card className="overflow-hidden">
                    <div className="bg-gray-900 dark:bg-gray-950 text-white px-6 py-6">
                        <h1 className="text-xl font-bold leading-snug">{d.position}</h1>
                        <p className="text-gray-300 text-sm mt-1">{d.displayName}</p>
                    </div>

                    <div className="px-6 py-5 flex flex-col gap-4">
                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                            {d.timeline && (
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Timeline</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{d.timeline}</p>
                                </div>
                            )}
                            {d.jobType && (
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Type</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{d.jobType}</p>
                                </div>
                            )}
                            {d.address && (
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">Location</p>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-0.5">{d.address}</p>
                                </div>
                            )}
                        </div>

                        {d.techStack?.length > 0 && (
                            <ItemComponent title="Tech Stack" items={d.techStack} />
                        )}

                        {d.projects && Object.keys(d.projects).length > 0 && (
                            <MapComponent
                                title="Related Projects"
                                mapData={d.projects}
                                isLink={true}
                                linkPrefix="projects"
                            />
                        )}

                        {d.companies && Object.keys(d.companies).length > 0 && (
                            <MapComponent
                                title="Companies"
                                mapData={d.companies}
                                isLink={true}
                                linkPrefix="experience"
                            />
                        )}
                    </div>
                </Card>

                {/* ── Description ── */}
                {d.description && (
                    <Card className="px-6 py-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                            Overview
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{d.description}</p>
                    </Card>
                )}

                {/* ── Responsibilities ── */}
                {d.primaryResponsibility?.length > 0 && (
                    <ListComponent
                        title="Primary Responsibilities"
                        listData={d.primaryResponsibility}
                    />
                )}

                {/* ── Achievements ── */}
                {d.mentionableAchievement?.length > 0 && (
                    <ListComponent
                        title="Mentionable Achievements"
                        listData={d.mentionableAchievement}
                        variant="achievement"
                    />
                )}

            </DetailPageLayout>
        </>
    );
}
