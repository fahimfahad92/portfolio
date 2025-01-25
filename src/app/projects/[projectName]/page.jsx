import ItemComponent from "@/app/components/item-component";
import LinkComponent from "@/app/components/link-component";
import ListComponent from "@/app/components/list-component";
import { getProjectDetailsData } from "@/app/firebase/firebase-util";
import { unstable_cache } from "next/cache";

export default async function ProjectDetailPage({ params }) {
  const projectName = (await params).projectName;

  const getProjectDetails = unstable_cache(
    async (projectName) => {
      return await getProjectDetailsData(projectName);
    },
    [projectName],
    { revalidate: 3600 }
  );

  const projectDetails = await getProjectDetails(projectName);

  if (!projectDetails) {
    return (
      <div className="font-bold text-lg text-center">
        No project details found for this project
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 p-5">
      <div className="rounded shadow font-serif p-2 ">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          {projectDetails.displayName}
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          {projectDetails.companyName} ({projectDetails.timeline})
        </div>

        <ItemComponent title="Tech Stack" items={projectDetails.techStack} />
        <LinkComponent link={projectDetails.link} external={true} />
      </div>

      {projectDetails.description && <div>{projectDetails.description}</div>}

      {projectDetails.primaryResponsibility && (
        <ListComponent
          title="Primary responsibility:"
          listData={projectDetails.primaryResponsibility}
        />
      )}

      {projectDetails.mentionableAchievements && (
        <ListComponent
          title="Mentionable achievements:"
          listData={projectDetails.mentionableAchievements}
        />
      )}
    </div>
  );
}
