import { unstable_cache } from "next/cache";
import ExperienceComponent from "../components/experience-component";
import { CACHING_CONSTATS } from "../constants/caching-constans";
import { getExperienceData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

export const metadata = {
    title: "Sayed MD Fahim Fahad – Senior Software Engineer",
    description: "10 years of experience building scalable SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
};

export const getExperience = unstable_cache(
  async () => {
    return await getExperienceData();
  },
  ["experience"],
  { revalidate: CACHING_CONSTATS.SEVEN_DAY, tags: ["experience"] }
);

export default async function ExperiencePage() {
  const experiences = await getExperience();

  if (!experiences) {
    return (
      <div className="bg-gray-100 text-gray-700 font-semibold text-lg text-center py-6 rounded-md shadow-sm">
        Experience data not found
      </div>
    );
  }

  return (
      <>
        <StatsigEvent eventName="portfolio_pv_experience" metadata={{page: "experience"}}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {experiences?.map((experience) => (
              <ExperienceComponent
                  experience={experience}
                  key={experience.companyName}
              />
          ))}
        </div>
      </>

  );
}
