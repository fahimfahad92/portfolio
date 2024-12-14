import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

const techStack = ["Java", "Spring Boot", "Elasticsearch", "PostgreSQL"];

export default function TigerIT() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          Senior Software Engineer
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          Tiger IT Bangladesh
        </div>
        <div>Feb 2020 - Aug 2021 (1 year 7 months)</div>
        <div>Dhaka, Bangladesh (Full-time - Hybrid)</div>
        <div className="pt-3">Primary Tech stack</div>
        <div className="space-x-2">
          {techStack.map((tech) => (
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              {tech}
            </div>
          ))}
        </div>
        <div className="pt-3">Related projects</div>
        <div className="space-x-2 space-y-2">
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            Action Tracker (Project Management Tool)
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            HRMS System
          </div>
        </div>
        <div className="flex flex-wrap w-20 sm:w-10 md:w-16 lg:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
          <Link
            href={"/experience/tigerit"}
            className="hover:text-gray-300 flex items-center space-x-1"
          >
            <span>Details</span>
            <ArrowOutwardIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
