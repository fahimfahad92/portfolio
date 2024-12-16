import ViewDetails from "@/app/components/view-details-component";

const techStack = ["Java", "Spring Boot", "AWS", "NoSQL", "RDBMS"];

export default function Toptal() {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          Freelance Developer
        </div>
        <div className="text-base sm:text-sm lg:text-base">Toptal</div>
        <div>April 2021 - Present</div>
        <div>Dhaka, Bangladesh (Contract - Remote)</div>
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
        <div className="pt-3">Companies</div>
        <div className="space-x-2 space-y-2">
          <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
            GrowthDay
          </div>
        </div>
        <ViewDetails href="/experience/toptal" />
      </div>
    </>
  );
}
