const techStack = ["Java", "Spring Boot", "Elasticsearch", "PostgreSQL"];

export default function ActionTrackerDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2 ">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Action tracker
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            Tiger IT Bangladesh (Feb 2020 - Aug 2021)
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
          A project management application that can be used to manage both
          projects and tasks. It was a customized project management tool for
          our client. Demo is not available as it was an internal tool.{" "}
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li> Designed back</li>
            <li>end architecture</li>
            <li> Developed REST APIs</li>
            <li> Set up a load testing system.</li>
            <li>
              Led the API development team and coordinated with other teams for
              task management.
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li> Delivered the project to the client and got good feedback.</li>
            <li> Collaborated the team members successfully</li>
          </ul>
        </div>
      </div>
    </>
  );
}
