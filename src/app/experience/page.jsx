import { unstable_cache } from "next/cache";
import ExperienceComponent from "../components/experience-component";
import { CACHING_CONSTANTS } from "../constants/caching-constants";
import { getExperienceData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-three-snowy-36.vercel.app";

export const metadata = {
    title: "Experience | Fahim Fahad",
    description: "10+ years of experience as a senior software engineer at fintech and SaaS startups. Java, Spring Boot, AWS, microservices.",
    openGraph: {
        title: "Experience | Fahim Fahad",
        description: "10+ years of experience as a senior software engineer at fintech and SaaS startups. Java, Spring Boot, AWS, microservices.",
        url: `${siteUrl}/experience`,
        siteName: "Fahim Fahad",
        type: "website",
    },
    twitter: {
        card: "summary",
        title: "Experience | Fahim Fahad",
        description: "10+ years of experience as a senior software engineer at fintech and SaaS startups. Java, Spring Boot, AWS, microservices.",
    },
};

export const getExperience = unstable_cache(
  async () => {
    return await getExperienceData();
  },
  ["experience"],
  { revalidate: CACHING_CONSTANTS.SEVEN_DAY, tags: ["experience"] }
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
