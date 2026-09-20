import ExperienceComponent from "../components/experience-component";
import { EXPERIENCES } from "../data/experience-data";
import StatsigEvent from "@/app/components/statsig-event";

import { SITE_URL, SITE_NAME } from "../constants/site-constants";

const desc = "10 years as a backend engineer across payment infrastructure and high-volume data systems. Java, Spring Boot, AWS, microservices.";

export const metadata = {
    title: `Experience | ${SITE_NAME}`,
    description: desc,
    openGraph: { title: `Experience | ${SITE_NAME}`, description: desc, url: `${SITE_URL}/experience`, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary", title: `Experience | ${SITE_NAME}`, description: desc },
    alternates: { canonical: `${SITE_URL}/experience` },
};

export default function ExperiencePage() {
  return (
      <>
        <StatsigEvent eventName="portfolio_pv_experience" metadata={{page: "experience"}}/>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          {EXPERIENCES.map((experience) => (
              <ExperienceComponent
                  experience={experience}
                  key={experience.companyName}
              />
          ))}
        </div>
      </>

  );
}
