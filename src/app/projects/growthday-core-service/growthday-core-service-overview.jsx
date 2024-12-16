import ViewDetails from "@/app/components/view-details-component";
import ViewDetailsExternal from "@/app/components/view-details-external-component";

const techStack = ["Java", "Spring Boot", "AWS", "MongoDB", "Elasticsearch"];

export default function GrowthDayCoreService() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          GrowthDay Core Service
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          GrowthDay (Aug 2021 - Jun 2024)
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
          <ViewDetailsExternal href="https://app.growthday.com/" />
          <ViewDetails href={"/projects/growthday-core-service"} />
        </div>
      </div>
    </>
  );
}
