import { unstable_cache } from "next/cache";
import ProjectComponent from "../components/project-component";
import { getProjectsData } from "../firebase/firebase-util";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
  description: "Fahim Fahad",
};

const getProjects = unstable_cache(
  async () => {
    return await getProjectsData();
  },
  ["projects"],
  { revalidate: 3600 }
);

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-4 gap-5 p-5">
        {projects?.map((project) => (
          <ProjectComponent project={project} key={project.name} />
        ))}
      </div>
    </>
  );
}
