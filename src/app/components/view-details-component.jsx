import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

export default function ViewDetails({ href }) {
  return (
    <>
      <div className="flex flex-wrap w-20 sm:w-10 md:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
        <Link
          href={href}
          className="hover:text-gray-300 flex items-center space-x-1"
        >
          <span>Details</span>
          <ArrowOutwardIcon />
        </Link>
      </div>
    </>
  );
}
