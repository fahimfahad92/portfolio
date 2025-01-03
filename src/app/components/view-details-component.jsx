import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

export default function ViewDetails({ href, placeholder = "Details" }) {
  return (
    <>
      <div className="flex flex-wrap max-w-28 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
        <Link
          href={href}
          className="hover:text-gray-300 flex items-center space-x-1"
        >
          <span>{placeholder}</span>
          <ArrowOutwardIcon />
        </Link>
      </div>
    </>
  );
}
