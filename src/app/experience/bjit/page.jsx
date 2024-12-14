const techStack = ["Java", "Spring Boot", "MySQL", "Javascript", "CSS", "Ajax"];

export default function BjitDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Software Engineer
          </div>
          <div className="text-base sm:text-sm lg:text-base">BJIT</div>
          <div>Jun 2016 - Apr 2017 (11 moonths)</div>
          <div>Dhaka, Bangladesh (Full-time - On-site)</div>
          <div className="pt-3">Tech stack</div>
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
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li>Developed a tool from scratch based on client requirements.</li>
            <li> Created a client application that uses internal data.</li>
            <li>
              Collaborated within a team and reported to the senior manager for
              daily updates.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
