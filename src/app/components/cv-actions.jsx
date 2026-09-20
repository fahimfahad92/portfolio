"use client";

import { useEffect, useState } from "react";
import { useStatsigClient } from "@statsig/react-bindings";
import { CV_CONSTANTS, CV_EVENTS } from "../constants/cv-constants";
import { CloseIcon, DownloadIcon, EyeIcon } from "./icons/common-icons";

export default function CvActions({ source }) {
    const { client } = useStatsigClient();
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    useEffect(() => {
        if (!isPreviewOpen) return;

        function handleKeyDown(e) {
            if (e.key === "Escape") setIsPreviewOpen(false);
        }
        document.addEventListener("keydown", handleKeyDown);

        const { overflow } = document.body.style;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = overflow;
        };
    }, [isPreviewOpen]);

    function handlePreview() {
        // Inline PDF rendering is unreliable on mobile browsers — hand those off to a new tab.
        const canRenderInline = window.matchMedia("(min-width: 768px)").matches;

        client.logEvent(CV_EVENTS.PREVIEW, null, {
            source,
            mode: canRenderInline ? "modal" : "new_tab",
        });

        if (canRenderInline) {
            setIsPreviewOpen(true);
        } else {
            window.open(CV_CONSTANTS.PATH, "_blank", "noopener,noreferrer");
        }
    }

    function handleDownload(downloadSource) {
        client.logEvent(CV_EVENTS.DOWNLOAD, null, { source: downloadSource });
    }

    const buttonBase =
        "inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg shadow transition-colors duration-200 text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500";
    const buttonSecondary =
        "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700";

    return (
        <>
            <button onClick={handlePreview} className={`${buttonBase} ${buttonSecondary} cursor-pointer`}>
                <EyeIcon size={18} />
                Preview CV
            </button>

            <a
                href={CV_CONSTANTS.PATH}
                download={CV_CONSTANTS.DOWNLOAD_FILENAME}
                onClick={() => handleDownload(source)}
                className={`${buttonBase} ${buttonSecondary}`}
            >
                <DownloadIcon size={18} />
                Download CV
            </a>

            {isPreviewOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="CV preview"
                    onClick={() => setIsPreviewOpen(false)}
                    className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 sm:p-8"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl h-full flex flex-col overflow-hidden"
                    >
                        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                Curriculum Vitae
                            </p>
                            <div className="flex items-center gap-2">
                                <a
                                    href={CV_CONSTANTS.PATH}
                                    download={CV_CONSTANTS.DOWNLOAD_FILENAME}
                                    onClick={() => handleDownload("preview_modal")}
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                                >
                                    <DownloadIcon size={16} />
                                    Download
                                </a>
                                <button
                                    onClick={() => setIsPreviewOpen(false)}
                                    aria-label="Close preview"
                                    className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer"
                                >
                                    <CloseIcon size={20} />
                                </button>
                            </div>
                        </div>

                        <iframe
                            src={CV_CONSTANTS.PATH}
                            title="CV preview"
                            className="flex-1 w-full border-0 bg-gray-100 dark:bg-gray-800"
                        />
                    </div>
                </div>
            )}
        </>
    );
}
