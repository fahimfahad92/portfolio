import ItemComponent from "@/app/components/item-component";
import Card from "@/app/components/card";
import DetailPageLayout from "@/app/components/detail-page-layout";
import { PROJECTS, getProjectBySlug } from "@/app/data/projects-data";
import StatsigEvent from "@/app/components/statsig-event";

import { SITE_URL, SITE_NAME } from "@/app/constants/site-constants";

export async function generateMetadata({ params }) {
    const { projectName } = await params;
    const d = getProjectBySlug(projectName);
    const title = d ? `${d.displayName} | Projects | Fahim Fahad` : "Projects | Fahim Fahad";
    const description = d
        ? `${d.description[0].slice(0, 155)}…`
        : "Project details";
    return {
        title,
        description,
        openGraph: { title, description, url: `${SITE_URL}/projects/${projectName}`, siteName: SITE_NAME, type: "website" },
        alternates: { canonical: `${SITE_URL}/projects/${projectName}` },
        twitter: { card: "summary", title, description },
    };
}

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        projectName: project.name,
    }));
}

export default async function ProjectDetailPage({ params }) {
    const { projectName } = await params;
    const d = getProjectBySlug(projectName);

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

            <DetailPageLayout
                backHref="/projects"
                sectionLabel="Projects"
                currentPage={d.displayName}
            >

                {/* ── Overview card ── */}
                <Card className="overflow-hidden">
                    <div className="bg-gray-900 dark:bg-gray-950 text-white px-6 py-6">
                        <h1 className="text-xl font-bold leading-snug">{d.displayName}</h1>
                        <p className="text-gray-300 text-sm mt-1">
                            {d.companyName}
                            {d.timeline && (
                                <span className="text-gray-400"> · {d.timeline}</span>
                            )}
                        </p>
                    </div>

                    <div className="px-6 py-5">
                        <ItemComponent title="Tech Stack" items={d.techStack} />
                    </div>
                </Card>

                {/* ── Description ── */}
                <Card className="px-6 py-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                        About this project
                    </p>
                    <div className="flex flex-col gap-4">
                        {d.description.map((paragraph) => (
                            <p key={paragraph} className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </Card>

            </DetailPageLayout>
        </>
    );
}
