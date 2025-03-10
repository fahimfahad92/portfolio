import { unstable_cache } from "next/cache";
import ProjectComponent from "../components/project-component";
import { CACHING_CONSTATS } from "../constants/caching-constans";
import { getProjectsData } from "../firebase/firebase-util";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Projects",
  description: "Fahim Fahad",
};

export const getProjects = unstable_cache(
  async () => {
    return await getProjectsData();
  },
  ["projects"],
  { revalidate: CACHING_CONSTATS.SEVEN_DAY, tags: ["projects"] }
);

export default async function ProjectsPage() {
  const projects = await getProjects();

  if (!projects) {
    return (
      <div className="bg-gray-100 text-gray-700 font-semibold text-lg text-center py-6 rounded-md shadow-sm">
        Projects not found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5 p-5">
      {projects?.map((project) => (
        <ProjectComponent project={project} key={project.name} />
      ))}
    </div>
  );
}
