import ItemComponent from "@/app/components/item-component";
import LinkComponent from "@/app/components/link-component";
import ListComponent from "@/app/components/list-component";
import { CACHING_CONSTATS } from "@/app/constants/caching-constans";
import { getProjectDetailsData } from "@/app/firebase/firebase-util";
import { unstable_cache } from "next/cache";
import { getProjects } from "../page";

let projectName = "";

const getProjectDetails = unstable_cache(
  async (projectName) => {
    return await getProjectDetailsData(projectName);
  },
  [projectName],
  { revalidate: CACHING_CONSTATS.DEFAUT, tags: [projectName] }
);

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    projectDetails: getProjectDetails(project.name),
  }));
}

export default async function ProjectDetailPage({ params }) {
  projectName = (await params).projectName;
  const projectDetails = await getProjectDetails(projectName);

  if (!projectDetails) {
    return (
      <div className="bg-gray-100 text-gray-700 font-semibold text-lg text-center py-6 rounded-md shadow-sm">
        No project details found for this project.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 p-6 font-serif text-gray-800">
      {/* Project Overview */}
      <div className="bg-white rounded-lg shadow-md p-3 space-y-1">
        <h2 className="font-bold text-lg md:text-xl">
          {projectDetails.displayName}
        </h2>
        <p className="text-sm md:text-base text-gray-700">
          {projectDetails.companyName}
          <span className="font-medium text-gray-600">
            ({projectDetails.timeline})
          </span>
        </p>

        {/* Tech Stack */}
        <ItemComponent title="Tech Stack" items={projectDetails.techStack} />

        {/* Project Link */}
        <div className="pt-2">
          <LinkComponent link={projectDetails.link} external={true} />
        </div>
      </div>

      {/* Project Description */}
      {projectDetails.description && (
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-gray-800">Project Description</h3>
          <p className="text-base text-gray-700">
            {projectDetails.description}
          </p>
        </div>
      )}

      {/* Responsibilities */}
      {projectDetails.primaryResponsibility && (
        <ListComponent
          title="Primary Responsibilities"
          listData={projectDetails.primaryResponsibility}
        />
      )}

      {/* Achievements */}
      {projectDetails.mentionableAchievements && (
        <ListComponent
          title="Mentionable Achievements"
          listData={projectDetails.mentionableAchievements}
        />
      )}
    </div>
  );
}
