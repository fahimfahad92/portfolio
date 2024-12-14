import { ArrowOutwardIcon } from "@/app/components/icons/common-icons";
import Link from "next/link";

const techStack = ["Java", "Spring Boot", "AWS", "NoSQL", "RDBMS"];

export default function ToptalDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Freelance Developer
          </div>
          <div className="text-base sm:text-sm lg:text-base">Toptal</div>
          <div>April 2021 - Present</div>
          <div>Dhaka, Bangladesh (Contract - Remote)</div>
          <div className="pt-3">Tech stack</div>
          <div className="space-x-2">
            {techStack.map((tech) => (
              <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
                {tech}
              </div>
            ))}
          </div>
          <div className="pt-3">Company I worked for:</div>
          <div className="flex flex-wrap w-28  rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
            <Link
              href={"/experience/growthday"}
              className="hover:text-gray-300 flex items-center space-x-1"
            >
              <span>Growthday</span>
              <ArrowOutwardIcon />
            </Link>
          </div>
        </div>
        <div>
          <div>
            I am working as a freelance developer at Toptal. Above, you can see
            the company I worked for in the past. You will get more detail if
            you go to the company detail page.
          </div>
        </div>
      </div>
    </>
  );
}
