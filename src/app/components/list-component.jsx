export default function ListComponent({ title, listData }) {
    if (!listData?.length) return null;

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">
                {title}
            </p>
            <ul className="flex flex-col gap-2">
                {listData.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}