import {unstable_cache} from "next/cache";
import {CACHING_CONSTATS} from "../constants/caching-constans";
import {getSkillsData} from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Sayed MD Fahim Fahad – Senior Software Engineer",
    description: "10 years of experience building scalable SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
};

const getSkills = unstable_cache(
    async () => {
        return await getSkillsData();
    },
    ["skills"],
    {revalidate: CACHING_CONSTATS.ONE_DAY, tags: ["skills"]}
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
            <StatsigEvent eventName="portfolio_pv_skills" metadata={{page: "skills"}}/>

            {skills?.map((skillData) => (
                <div
                    className="p-5 font-serif text-lg sm:text-xl md:text-2xl space-y-3"
                    key={skillData.group}
                >
                    {/* Skill Group Title */}
                    <h2 className="w-full font-semibold text-gray-800">
                        {skillData.group}
                    </h2>

                    {/* Skill List */}
                    <div className="flex flex-wrap gap-3">
                        {Object.entries(skillData.skillMap)
                            .sort()
                            .map(([name, year]) => (
                                <div
                                    className="inline-block rounded-lg shadow-md text-white px-3 py-2 text-sm sm:text-base lg:text-lg bg-blue-600"
                                    key={name}
                                >
                                    {name}: {year} Years
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </>
    );
}
