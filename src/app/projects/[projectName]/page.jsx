import ItemComponent from "@/app/components/item-component";
import LinkComponent from "@/app/components/link-component";
import ListComponent from "@/app/components/list-component";
import Card from "@/app/components/card";
import DetailPageLayout from "@/app/components/detail-page-layout";
import { CACHING_CONSTANTS } from "@/app/constants/caching-constants";
import { getProjectDetailsData } from "@/app/firebase/firebase-util";
import { unstable_cache } from "next/cache";
import { getProjects } from "../page";
import StatsigEvent from "@/app/components/statsig-event";

const getProjectDetails = unstable_cache(
    async (projectName) => {
        return await getProjectDetailsData(projectName);
    },
    ["project-details"],
    { revalidate: CACHING_CONSTANTS.DEFAULT }
);

export async function generateStaticParams() {
    const projects = await getProjects();
    return projects.map((project) => ({
        projectName: project.name,
    }));
}

export default async function ProjectDetailPage({ params }) {
    const { projectName } = await params;
    const d = await getProjectDetails(projectName);

    if (!d) {
        return (
            <div className="text-gray-500 text-center py-20">
                No project details found.
            </div>
        );
    }

    return (
        <>
            <StatsigEvent
                eventName="portfolio_pv_project_details"
                metadata={{ project: d.displayName }}
            />

            <DetailPageLayout backHref="/projects" backLabel="Back to Projects">

                {/* ── Overview card ── */}
                <Card className="overflow-hidden">
                    {/* Header banner */}
                    <div className="bg-gray-900 text-white px-6 py-6">
                        <h1 className="text-xl font-bold leading-snug">{d.displayName}</h1>
                        <p className="text-gray-300 text-sm mt-1">
                            {d.companyName}
                            {d.timeline && (
                                <span className="text-gray-400"> · {d.timeline}</span>
                            )}
                        </p>
                    </div>

                    {/* Meta */}
                    <div className="px-6 py-5 flex flex-col gap-4">
                        {d.techStack?.length > 0 && (
                            <ItemComponent title="Tech Stack" items={d.techStack} />
                        )}

                        {d.link && (
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                    Live link
                                </p>
                                <LinkComponent link={d.link} external={true} />
                            </div>
                        )}
                    </div>
                </Card>

                {/* ── Description ── */}
                {d.description && (
                    <Card className="px-6 py-5">
                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                            About this project
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">{d.description}</p>
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
                {d.mentionableAchievements?.length > 0 && (
                    <ListComponent
                        title="Mentionable Achievements"
                        listData={d.mentionableAchievements}
                        variant="achievement"
                    />
                )}

            </DetailPageLayout>
        </>
    );
}
