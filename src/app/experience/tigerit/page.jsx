const techStack = [
  "Java",
  "Spring Boot",
  "Elasticsearch",
  "PostgreSQL",
  "MySQL",
  "Minio",
  "Git",
  "Gradle",
  "ELK",
  "Kafka",
];

export default function TigerITDetailPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-5 p-5">
        <div className="rounded shadow font-serif p-2">
          <div className="font-bold text-lg sm:text-sm lg:text-xl">
            Senior Software Engineer
          </div>
          <div className="text-base sm:text-sm lg:text-base">
            Tiger IT Bangladesh
          </div>
          <div>Feb 2020 - Aug 2021 (1 year 7 moonths)</div>
          <div>Dhaka, Bangladesh (Full-time - Hybrid)</div>
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
              Action Tracker (Project Management Tool)
            </div>
            <div className="inline-block rounded shadow bg-black text-white px-1 py-1 text-xs sm:text-sm lg:text-sm">
              HRMS System
            </div>
          </div>
        </div>
        <div>
          <div className="font-bold">Primary responsibility:</div>
          <ul className="list-disc pl-5">
            <li>
              Developed new features and maintained existing ones. Fix any issue
              raised by QA team.
            </li>
            <li> Managed team members.</li>
            <li> Collaborated with other teams to deliver new features.</li>
            <li> Mentored junior developers.</li>
          </ul>
        </div>
        <div>
          <div className="font-bold">Mentionable achievements:</div>
          <ul className="list-disc pl-5">
            <li>
              Developed a project management tool that is used internally. I
              designed it from scratch and prepared API documentation.
            </li>
            <li> Improved data management for internal HRMS project.</li>
            <li> Initiated load test mechanism and improved performance.</li>
            <li>
              Conducted R&D on several conceptual ideas as a proof of concept
            </li>
            <li>
              Coordinated with other team to better understand the feature
              requirement and existing design concepts.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
