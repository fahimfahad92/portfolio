import ViewDetails from "@/app/components/view-details-component";

export default function ExperienceComponent({ experience }) {
  return (
    <>
      <div
        className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col"
        key={experience.companyName}
      >
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          {experience.position}
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          {experience.displayName}
        </div>
        <div>{experience.timeline}</div>
        <div>
          {experience.address} ({experience.jobType})
        </div>
        <div className="pt-3">Primary Tech stack</div>
        <div className="space-x-2">
          {experience.techStack.map((tech) => (
            <div
              className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm"
              key={tech}
            >
              {tech}
            </div>
          ))}
        </div>

        {experience.projects && <div className="pt-3">Related projects</div>}
        <div className="space-x-2 space-y-2">
          {experience.projects &&
            Object.entries(experience.projects).map(
              ([projectName, projectDisplayName]) => (
                <div
                  className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm"
                  key={projectName}
                >
                  {projectDisplayName}
                </div>
              )
            )}
        </div>

        {experience.companies && <div className="pt-3">Companies</div>}
        <div className="space-x-2 space-y-2">
          {experience.companies &&
            experience.companies.map((company) => (
              <div
                className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm"
                key={company}
              >
                {company}
              </div>
            ))}
        </div>

        <ViewDetails href={`/experience/${experience.companyName}`} />
      </div>
    </>
  );
}
