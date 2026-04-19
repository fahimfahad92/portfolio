import Link from "next/link";
import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";

export default function ViewDetailsExternal({ href }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-colors duration-200"
        >
            Demo
            <ArrowOutwardIcon size={14} />
        </Link>
    );
}
