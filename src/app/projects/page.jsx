import ProjectsFilter from "../components/projects-filter";
import { PROJECTS } from "../data/projects-data";
import StatsigEvent from "@/app/components/statsig-event";
import { SITE_URL, SITE_NAME } from "../constants/site-constants";

const desc = "Payment infrastructure, high-volume data systems and consumer platforms built with Java, Spring Boot, AWS, React and Next.js.";

export const metadata = {
    title: `Projects | ${SITE_NAME}`,
    description: desc,
    openGraph: { title: `Projects | ${SITE_NAME}`, description: desc, url: `${SITE_URL}/projects`, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary", title: `Projects | ${SITE_NAME}`, description: desc },
    alternates: { canonical: `${SITE_URL}/projects` },
};

export default function ProjectsPage() {
    return (
        <>
            <StatsigEvent eventName="portfolio_pv_projects" metadata={{ page: "projects" }} />

            <div className="max-w-5xl mx-auto px-4 py-10">
                <ProjectsFilter projects={PROJECTS} />
            </div>
        </>
    );
}
