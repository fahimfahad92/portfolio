import ViewDetails from "@/app/components/view-details-component";

const techStack = ["Java", "Spring Boot", "Oracle"];

export default function Dmoney() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          Software Engineer
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          DMoney Bangladesh Ltd. (Startup, Fintech)
        </div>
        <div>May 2017 - Jan 2020 (2 years 9 months)</div>
        <div>Dhaka, Bangladesh (Full-time - On-site)</div>
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
            DMoney Core Financial Engine
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            Notification Service
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            External Payment Gateway
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            User Management Service
          </div>
        </div>
        <ViewDetails href="/experience/dmoney" />
      </div>
    </>
  );
}
