import Link from "next/link";
import { BackArrowIcon } from "./icons/common-icons";

export default function DetailPageLayout({ backHref, backLabel, children }) {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col gap-5">
            <Link
                href={backHref}
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors w-fit"
            >
                <BackArrowIcon size={16} />
                {backLabel}
            </Link>
            {children}
        </div>
    );
}
