import {unstable_cache} from "next/cache";
import {CACHING_CONSTATS} from "../constants/caching-constans";
import {getSkillsData} from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Skills | Fahim Fahad",
    description: "Technical skills across backend, frontend, cloud, and databases — Java, Spring Boot, AWS, React, PostgreSQL, MongoDB, and more.",
};

const getSkills = unstable_cache(
    async () => {
        return await getSkillsData();
    },
    ["skills"],
    {revalidate: CACHING_CONSTATS.ONE_DAY, tags: ["skills"]}
);

// ─── Skill Bar Row ────────────────────────────────────────────────────────────

function SkillBar({name, years, maxYears}) {
    const pct = Math.round((years / maxYears) * 100);

    return (
        <div className="flex items-center gap-3">
            {/* Skill name — fixed width so all bars start at the same x */}
            <span className="w-32 shrink-0 text-sm text-gray-700 truncate">
                {name}
            </span>

            {/* Bar track */}
            <div role="progressbar"
                 aria-valuenow={pct}
                 aria-valuemin={0}
                 aria-valuemax={100}
                 className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                    className="h-full bg-gray-800 rounded-full"
                    style={{width: `${pct}%`}}
                />
            </div>

            {/* Years label */}
            <span className="w-14 shrink-0 text-right text-xs text-gray-400">
                {years} {years == 1 ? "yr" : "yrs"}
            </span>
        </div>
    );
}

// ─── Skill Group Card ─────────────────────────────────────────────────────────

function SkillGroupCard({group, skillMap}) {
    const entries = Object.entries(skillMap).sort(([, a], [, b]) => b - a);
    const maxYears = entries[0]?.[1] ?? 1;

    return (
        <div
            className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
            {/* Group heading */}
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {group}
            </h2>

            {/* Skill bars */}
            <div className="flex flex-col gap-3">
                {entries.map(([name, years]) => (
                    <SkillBar
                        key={name}
                        name={name}
                        years={years}
                        maxYears={maxYears}
                    />
                ))}
            </div>
        </div>
    );
}

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

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 p-5">
                {skills.map((skillData) => (
                    <SkillGroupCard
                        key={skillData.group}
                        group={skillData.group}
                        skillMap={skillData.skillMap}
                    />
                ))}
            </div>
        </>
    );
}
