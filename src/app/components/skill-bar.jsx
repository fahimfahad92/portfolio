"use client";

import { useEffect, useRef, useState } from "react";

function barColor(years) {
    if (years >= 7) return "bg-blue-500";
    if (years >= 3) return "bg-emerald-500";
    return "bg-amber-500";
}

export default function SkillBar({ name, years, maxYears }) {
    const pct = Math.round((years / maxYears) * 100);
    const color = barColor(years);
    const [animated, setAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className="flex items-center gap-3">
            <span className="w-32 shrink-0 text-sm text-gray-700 truncate">{name}</span>

            <div
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${name}: ${years} ${years === 1 ? "year" : "years"}`}
                className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden"
            >
                <div
                    className={`h-full rounded-full transition-all duration-700 ease-out ${color}`}
                    style={{ width: animated ? `${pct}%` : "0%" }}
                />
            </div>

            <span className="w-14 shrink-0 text-right text-xs text-gray-400">
                {years} {years === 1 ? "yr" : "yrs"}
            </span>
        </div>
    );
}
