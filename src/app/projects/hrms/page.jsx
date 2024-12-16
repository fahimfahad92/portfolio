const techStack = [
  "Java",
  "Spring Boot",
  "MySQL",
  "Spring data Jpa",
  "Gradle",
  "Git",
];

export default function HrmsDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2 ">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            HRMS System
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            Tiger IT Bangladesh (May 2020 - Jan 2021)
          </div>
          <div className="pt-3">Tech stack</div>
          <div className="space-x-2 space-y-2">
            {techStack.map((tech) => (
              <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
                {tech}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap w-52 md:w-60 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-sm md:text-base">
            <span>Demo Not Available (Internal)</span>
          </div>
        </div>
        <div>
          A human resource management tool for managing employee attendance and
          leave. I worked in the backend service development.
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Developed the REST APIs</li>
            <li>
              Improved unit testing, internal coding structure and data flow
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li> Improved code readability.</li>
            <li> Coordinate with the DevOps team to reduce downtime.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
