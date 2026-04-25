import Card from "./card";

export default function ListComponent({ title, listData, variant = "default" }) {
    if (!listData?.length) return null;

    const isAchievement = variant === "achievement";

    return (
        <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                {title}
            </p>
            <ul className="flex flex-col gap-2">
                {listData.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        {isAchievement ? (
                            <span className="mt-0.5 text-amber-500 shrink-0 leading-none">★</span>
                        ) : (
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        )}
                        {item}
                    </li>
                ))}
            </ul>
        </Card>
    );
}
