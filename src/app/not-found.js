import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">

            {/* Faint large number as background element */}
            <p className="text-[9rem] sm:text-[12rem] font-extrabold text-gray-100 leading-none select-none">
                404
            </p>

            {/* Readable message sits visually over the number */}
            <div className="-mt-8 sm:-mt-12 flex flex-col items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    Page not found
                </h1>
                <p className="text-sm sm:text-base text-gray-500 max-w-sm leading-relaxed">
                    This page doesn't exist or may have been moved. Check the URL or head
                    back to safety.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-2">
                    <Link
                        href="/"
                        className="px-5 py-2.5 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                        Go home
                    </Link>
                    <Link
                        href="javascript:history.back()"
                        className="px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                    >
                        Go back
                    </Link>
                </div>
            </div>

        </div>
    );
}