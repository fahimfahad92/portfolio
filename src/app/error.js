"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error.message);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">

            <p className="text-[9rem] sm:text-[12rem] font-extrabold text-gray-100 dark:text-gray-800 leading-none select-none">
                !
            </p>

            <div className="-mt-8 sm:-mt-12 flex flex-col items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
                    Something went wrong
                </h1>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-sm leading-relaxed">
                    An unexpected error occurred. You can try again or go back to the home page.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mt-2">
                    <button
                        onClick={reset}
                        className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
                    >
                        Try again
                    </button>
                    <Link
                        href="/"
                        className="px-5 py-2.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                        Go home
                    </Link>
                </div>
            </div>

        </div>
    );
}
