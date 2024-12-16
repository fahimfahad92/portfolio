import ViewDetails from "@/app/components/view-details-component";

const techStack = ["Java", "Spring Boot", "MySQL", "Javascript", "CSS", "Ajax"];

export default function BJIT() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          Software Engineer
        </div>
        <div className="text-base sm:text-sm lg:text-base">BJIT</div>
        <div>Jun 2016 - Apr 2017 (11 months)</div>
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
            TVC Project (ERP solution)
          </div>
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            iAudit Tool
          </div>
        </div>
        <ViewDetails href="/experience/bjit" />
      </div>
    </>
  );
}
