import ViewDetails from "@/app/components/view-details-component";
import ItemComponent from "./item-component";
import LinkComponent from "./link-component";

export default function ProjectComponent({ project }) {
  return (
    <>
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          {project.displayName}
        </div>
        <div className="text-base sm:text-sm lg:text-base">
          {project.companyName} ({project.timeline})
        </div>
        <ItemComponent title="Primary Tech stack" items={project.techStack} />
        <div className="flex flex-row space-x-2">
          <LinkComponent link={project.link} external={true} />
          <ViewDetails href={`/projects/${project.name}`} />
        </div>
      </div>
    </>
  );
}
