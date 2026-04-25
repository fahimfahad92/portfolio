export default function TagPill({ label }) {
    return (
        <span className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 text-xs font-medium">
            {label}
        </span>
    );
}
