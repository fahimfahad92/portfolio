import ViewDetails from "@/app/components/view-details-component";

const techStack = ["Java", "Spring Boot", "MySQL", "Javascript", "CSS", "Ajax"];

export default function IAudit() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          iAudit tool
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          BJIT (Oct 2016 - Apr 2017)
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
          <div className="flex flex-wrap w-52 md:w-60 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-sm md:text-base">
            <span>Demo Not Available (Internal)</span>
          </div>
          <ViewDetails href={"/projects/iaudit"} />
        </div>
      </div>
    </>
  );
}
