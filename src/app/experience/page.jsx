import ExperienceComponent from "../components/experience-component";
import { getExperienceData } from "../firebase/firebase-util";

export const metadata = {
  title: "Experience",
  description: "Fahim Fahad",
};

export default async function ExperiencePage() {
  const experiences = await getExperienceData();

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
