import Card from "./card";
import SkillBar from "./skill-bar";

export default function SkillGroupCard({ group, skillMap }) {
    const entries = Object.entries(skillMap).sort(([, a], [, b]) => b - a);
    const maxYears = entries[0]?.[1] ?? 1;
    const safeMaxYears = maxYears === 0 ? 1 : maxYears;

    return (
        <Card className="p-5 flex flex-col gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {group}
            </h2>
            <div className="flex flex-col gap-3">
                {entries.map(([name, years]) => (
                    <SkillBar key={name} name={name} years={years} maxYears={safeMaxYears} />
                ))}
            </div>
        </Card>
    );
}
