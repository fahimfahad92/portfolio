const techStack = [
  "Java",
  "Spring Boot",
  "MySQL",
  "Thymeleaf",
  "Javascript",
  "CSS",
  "Ajax",
];

export default function iAuditDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2 ">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            iAudit tool
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            BJIT (Oct 2016 - Apr 2017)
          </div>
          <div className="pt-3">Tech stack</div>
          <div className="space-x-2 space-y-2">
            {techStack.map((tech) => (
              <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
                {tech}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap w-52 sm:w-10 md:w-20 lg:w-52 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-xs sm:text-sm">
            <span>Demo Not Available (Internal)</span>
          </div>
        </div>
        <div>
          We used Spring web mvc, bootstrap, Thymeleaf, MySQL, Hibernate to
          develop the project. My responsibility was to add new features.
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Developed the REST APIs</li>
            <li>Developed UI using thymeleaf.</li>
            <li>Manged reagular deployment</li>
          </ul>
        </div>
      </div>
    </>
  );
}
