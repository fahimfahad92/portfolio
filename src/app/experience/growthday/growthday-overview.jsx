import ViewDetails from "@/app/components/view-details-component";

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
            <div
              className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm"
              key={tech}
            >
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
        <ViewDetails href="/experience/growthday" />
      </div>
    </>
  );
}
