import ViewDetails from "@/app/components/view-details-component";

export default function ExperienceComponent({ experience }) {
  return (
    <div
      className="bg-gray-100 rounded-xl shadow-md font-serif p-4 flex flex-col gap-2"
      key={experience.companyName}
    >
      <div className="font-bold text-lg sm:text-base lg:text-xl">
        {experience.position}
      </div>
      <div className="text-base sm:text-sm lg:text-lg text-gray-700">
        {experience.displayName}
      </div>
      <div className="text-sm text-gray-600">{experience.timeline}</div>
      <div className="text-sm text-gray-600">
        {experience.address}
        <span className="font-medium">({experience.jobType})</span>
      </div>

      {/* Tech Stack */}
      {experience.techStack.length > 0 && (
        <div>
          <div className="font-medium pt-3">Primary Tech Stack</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {experience.techStack.map((tech) => (
              <span
                className="rounded-lg shadow-sm bg-black text-white px-2 py-1 text-xs sm:text-sm"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Related Projects */}
      {experience.projects && Object.keys(experience.projects).length > 0 && (
        <div>
          <div className="font-medium pt-3">Related Projects</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {Object.entries(experience.projects).map(
              ([projectName, projectDisplayName]) => (
                <span
                  className="rounded-lg shadow-sm bg-black text-white px-2 py-1 text-xs sm:text-sm"
                  key={projectName}
                >
                  {projectDisplayName}
                </span>
              )
            )}
          </div>
        </div>
      )}

      {/* Companies */}
      {experience.companies && experience.companies.length > 0 && (
        <div>
          <div className="font-medium pt-3">Companies</div>
          <div className="flex flex-wrap gap-2 mt-1">
            {experience.companies.map((company) => (
              <span
                className="rounded-lg shadow-sm bg-black text-white px-2 py-1 text-xs sm:text-sm"
                key={company}
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      )}

      <ViewDetails href={`/experience/${experience.companyName}`} />
    </div>
  );
}
