export default function TagPill({label}) {
    return (
        <span
            className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 text-xs font-medium">
      {label}
    </span>
    );
}