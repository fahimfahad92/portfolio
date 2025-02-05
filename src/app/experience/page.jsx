import { unstable_cache } from "next/cache";
import ExperienceComponent from "../components/experience-component";
import { CACHING_CONSTATS } from "../constants/caching-constans";
import { getExperienceData } from "../firebase/firebase-util";

export const metadata = {
  title: "Experience",
  description: "Fahim Fahad",
};

const getExperience = unstable_cache(
  async () => {
    return await getExperienceData();
  },
  ["experience"],
  { revalidate: CACHING_CONSTATS.DEFAUT, tags: ["experience"] }
);

export default async function ExperiencePage() {
  const experiences = await getExperience();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
      {experiences?.map((experience) => (
        <ExperienceComponent
          experience={experience}
          key={experience.companyName}
        />
      ))}
    </div>
  );
}
