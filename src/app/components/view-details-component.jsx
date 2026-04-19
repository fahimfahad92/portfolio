import Link from "next/link";
import { ArrowOutwardIcon } from "./icons/common-icons";

export default function ViewDetails({ href, placeholder = "Details" }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
        >
            {placeholder}
            <ArrowOutwardIcon size={14} />
        </Link>
    );
}
