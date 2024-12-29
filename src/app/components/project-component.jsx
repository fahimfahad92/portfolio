import ViewDetails from "@/app/components/view-details-component";
import ItemComponent from "./item-component";
import ViewDetailsExternal from "./view-details-external-component";

export default function ProjectComponent({ project }) {
  const linkContent = project.link ? (
    <ViewDetailsExternal href={project.link} />
  ) : (
    <div className="flex flex-wrap w-52 md:w-60 rounded shadow bg-slate-500 text-white px-2 py-1 mt-2 text-sm md:text-base">
      <span>Demo Not Available (Internal)</span>
    </div>
  );

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
          {linkContent}
          <ViewDetails href={`/projects/${project.name}`} />
        </div>
      </div>
    </>
  );
}
