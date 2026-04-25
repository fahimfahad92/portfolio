import { unstable_cache } from "next/cache";
import ProjectsFilter from "../components/projects-filter";
import { CACHING_CONSTANTS } from "../constants/caching-constants";
import { getProjectsData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

export const metadata = {
    title: "Projects | Fahim Fahad",
    description: "Projects built with Java, Spring Boot, AWS, React, and Next.js across fintech and SaaS startups.",
};

export const getProjects = unstable_cache(
    async () => {
        return await getProjectsData();
    },
    ["projects"],
    { revalidate: CACHING_CONSTANTS.SEVEN_DAY, tags: ["projects"] }
);

export default async function ProjectsPage() {
    const projects = await getProjects();

    if (!projects) {
        return (
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold text-lg text-center py-6 rounded-md shadow-sm">
                Projects not found
            </div>
        );
    }

    return (
        <>
            <StatsigEvent eventName="portfolio_pv_projects" metadata={{ page: "projects" }} />

            <div className="max-w-5xl mx-auto px-4 py-10">
                <ProjectsFilter projects={projects} />
            </div>
        </>
    );
}
