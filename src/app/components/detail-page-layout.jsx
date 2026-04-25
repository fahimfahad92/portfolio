import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-three-snowy-36.vercel.app";

export default function DetailPageLayout({ backHref, sectionLabel, currentPage, children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            { "@type": "ListItem", position: 2, name: sectionLabel, item: `${siteUrl}${backHref}` },
            { "@type": "ListItem", position: 3, name: currentPage },
        ],
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* ── Breadcrumb ── */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
                <Link
                    href="/"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                    Home
                </Link>
                <span className="text-gray-300 dark:text-gray-600">›</span>
                <Link
                    href={backHref}
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                >
                    {sectionLabel}
                </Link>
                <span className="text-gray-300 dark:text-gray-600">›</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium truncate max-w-[200px] sm:max-w-none">
                    {currentPage}
                </span>
            </nav>

            {children}
        </div>
    );
}
