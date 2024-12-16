import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";

export default function ViewDetailsExternal({ href }) {
  return (
    <div className="flex flex-wrap w-20 sm:w-20 md:w-20 lg:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
      <a href={href} target="_blank" className="flex items-center space-x-1">
        <span>Demo</span>
        <ArrowOutwardIcon />
      </a>
    </div>
  );
}
