import ViewDetails from "@/app/components/view-details-component";
import ItemComponent from "./item-component";
import LinkComponent from "./link-component";

export default function ProjectComponent({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md font-serif p-4 flex flex-col space-y-1">
      {/* Project Title */}
      <h2 className="font-bold text-lg md:text-xl">{project.displayName}</h2>

      {/* Company Name & Timeline */}
      <p className="text-sm md:text-base text-gray-700">
        {project.companyName}
        <span className="font-medium text-gray-600">({project.timeline})</span>
      </p>

      {/* Tech Stack */}
      <ItemComponent title="Primary Tech Stack" items={project.techStack} />

      {/* Links Section */}
      <div className="flex flex-wrap gap-3 pt-2">
        <LinkComponent link={project.link} external={true} />
        <ViewDetails href={`/projects/${project.name}`} />
      </div>
    </div>
  );
}
