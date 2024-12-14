import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

const techStack = ["Java", "Spring Boot", "AWS", "MongoDB", "Elasticsearch"];

export default function GrowthDay() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          Backend Developer
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          GrowthDay (Startup)
        </div>
        <div>May 2021 - Jun 2024 (3 years 2 months)</div>
        <div>California, United States (Full-time - Remote)</div>
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
            GrowthDay Core Service
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            Notification Service
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            Signup APP
          </div>
        </div>
        <div className="flex flex-wrap w-20 sm:w-10 md:w-16 lg:w-20 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
          <Link
            href={"/experience/growthday"}
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
