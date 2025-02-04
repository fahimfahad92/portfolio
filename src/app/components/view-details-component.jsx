import Link from "next/link";
import { ArrowOutwardIcon } from "./icons/common-icons";

export default function ViewDetails({ href, placeholder = "Details" }) {
  return (
    <div className="max-w-fit min-w-0 bg-slate-500 rounded-lg shadow-md transition-all">
      <Link
        href={href}
        className="hover:text-gray-300 items-center flex flex-wrap max-w-fit rounded shadow text-white px-2 py-1 text-sm"
      >
        <p className="flex flex-row">
          {placeholder}
          <ArrowOutwardIcon />
        </p>
      </Link>
    </div>
  );
}
