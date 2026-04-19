export default function DefaultLoadingPage() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
            {Array.from({length: 8}).map((_, i) => (
                <div
                    key={i}
                    className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-3 animate-pulse"
                >
                    {/* Title */}
                    <div className="h-4 bg-gray-200 rounded w-3/4"/>
                    {/* Subtitle */}
                    <div className="h-3 bg-gray-100 rounded w-1/2"/>
                    {/* Meta line */}
                    <div className="h-3 bg-gray-100 rounded w-2/3"/>

                    {/* Tag row */}
                    <div className="flex gap-2 pt-2">
                        <div className="h-5 bg-gray-100 rounded-full w-14"/>
                        <div className="h-5 bg-gray-100 rounded-full w-16"/>
                        <div className="h-5 bg-gray-100 rounded-full w-12"/>
                    </div>

                    {/* CTA button placeholder */}
                    <div className="h-7 bg-gray-100 rounded-lg w-20 mt-auto"/>
                </div>
            ))}
        </div>
    );
}