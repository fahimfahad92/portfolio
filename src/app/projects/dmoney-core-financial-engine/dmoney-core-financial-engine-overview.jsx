import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

const techStack = ["Java", "Spring Boot", "Oracle"];

export default function DmoneyCoreFinancialEngine() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          Dmoney Financial App
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          DMoney Bangladesh Ltd. (May 2017 - Jan 2020)
        </div>
        <div className="pt-3">Primary Tech stack</div>
        <div className="space-x-2">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="flex flex-row space-x-2">
          <div className="flex flex-wrap w-20 sm:w-10 md:w-16 lg:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
            <a
              href="https://www.dmoney.com.bd/"
              target="_blank"
              className="hover:text-gray-300 flex items-center space-x-1"
            >
              <span>Demo</span>
              <ArrowOutwardIcon />
            </a>
          </div>
          <div className="flex flex-wrap w-20 sm:w-10 md:w-16 lg:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
            <Link
              href={"/projects/dmoney-core-financial-engine"}
              className="hover:text-gray-300 flex items-center space-x-1"
            >
              <span>Details</span>
              <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}