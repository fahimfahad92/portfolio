import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

export default function ViewDetailsExternal({ href }) {
  return (
    <div className="flex flex-wrap max-w-fit rounded shadow bg-slate-500 hover:text-gray-300 text-white px-2 py-1 text-sm">
      <Link href={href} target="_blank" className="flex items-center space-x-1">
        <span>Demo</span>
        <ArrowOutwardIcon />
      </Link>
    </div>
  );
}
