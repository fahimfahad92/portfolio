import { unstable_cache } from "next/cache";
import { CACHING_CONSTANTS } from "../constants/caching-constants";
import { getSkillsData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";
import SkillGroupCard from "../components/skill-group-card";

export const metadata = {
    title: "Skills | Fahim Fahad",
    description: "Technical skills across backend, frontend, cloud, and databases — Java, Spring Boot, AWS, React, PostgreSQL, MongoDB, and more.",
};

const getSkills = unstable_cache(
    async () => {
        return await getSkillsData();
    },
    ["skills"],
    { revalidate: CACHING_CONSTANTS.ONE_DAY, tags: ["skills"] }
);

export default async function SkillsPage() {
    const skills = await getSkills();

    if (!skills) {
        return (
            <div className="bg-gray-100 text-gray-700 font-semibold text-lg text-center py-6 rounded-md shadow-sm">
                Skills data not found
            </div>
        );
    }

    return (
        <>
            <StatsigEvent eventName="portfolio_pv_skills" metadata={{ page: "skills" }} />

            <div className="max-w-6xl mx-auto px-4 py-10">

                {/* ── Color legend ── */}
                <div className="flex flex-wrap items-center gap-5 mb-6 text-xs text-gray-500">
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                        Expert (7+ yrs)
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                        Proficient (3–6 yrs)
                    </span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                        Learning (&lt;3 yrs)
                    </span>
                </div>

                {/* ── Skill group cards ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                    {skills.map((skillData) => (
                        <SkillGroupCard
                            key={skillData.group}
                            group={skillData.group}
                            skillMap={skillData.skillMap}
                        />
                    ))}
                </div>

            </div>
        </>
    );
}
