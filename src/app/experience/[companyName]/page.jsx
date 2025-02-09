import ItemComponent from "@/app/components/item-component";
import ListComponent from "@/app/components/list-component";
import MapComponent from "@/app/components/map-component";
import { CACHING_CONSTATS } from "@/app/constants/caching-constans";
import { getExperienceDetailsData } from "@/app/firebase/firebase-util";
import { unstable_cache } from "next/cache";
import { getExperience } from "../page";

let companyName = "";

const getExperienceDetails = unstable_cache(
  async (companyName) => {
    return await getExperienceDetailsData(companyName);
  },
  [companyName],
  { revalidate: CACHING_CONSTATS.DEFAUT, tags: [companyName] }
);

export async function generateStaticParams() {
  const experiences = await getExperience();

  return experiences.map((experience) => ({
    experienceDetails: getExperienceDetails(experience.companyName),
  }));
}

export default async function CompanyDetailPage({ params }) {
  companyName = (await params).companyName;
  const experienceDetails = await getExperienceDetails(companyName);

  if (!experienceDetails) {
    return (
      <div className="bg-gray-100 text-gray-700 font-semibold text-lg text-center py-6 rounded-md shadow-sm">
        Experience details not found
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 p-6 font-serif text-gray-800">
      {/* Experience Overview */}
      <div className="bg-white rounded-lg shadow-md p-5 space-y-3">
        <h2 className="font-bold text-lg lg:text-xl">
          {experienceDetails.position}
        </h2>
        <p className="text-sm lg:text-base">{experienceDetails.displayName}</p>
        <p className="text-gray-600 text-sm">{experienceDetails.timeline}</p>
        <p className="text-gray-700 text-sm">
          {experienceDetails.address}
          <span className="font-semibold">({experienceDetails.jobType})</span>
        </p>

        {/* Tech Stack Section */}
        <ItemComponent title="Tech Stack" items={experienceDetails.techStack} />

        {/* Related Projects */}
        {experienceDetails.projects && (
          <MapComponent
            title="Related Projects"
            mapData={experienceDetails.projects}
            isLink={true}
            linkPrefix={"projects"}
          />
        )}

        {/* Companies */}
        {experienceDetails.companies && (
          <MapComponent
            title="Companies"
            mapData={experienceDetails.companies}
            isLink={true}
            linkPrefix={"experience"}
          />
        )}
      </div>

      {/* Description Section */}
      {experienceDetails.description && (
        <div className="bg-gray-100 rounded-lg shadow-sm p-4">
          <h3 className="font-semibold text-gray-800">Description</h3>
          <p className="text-sm text-gray-700">
            {experienceDetails.description}
          </p>
        </div>
      )}

      {/* Responsibilities */}
      {experienceDetails.primaryResponsibility && (
        <ListComponent
          title="Primary Responsibilities"
          listData={experienceDetails.primaryResponsibility}
        />
      )}

      {/* Achievements */}
      {experienceDetails.mentionableAchievement && (
        <ListComponent
          title="Mentionable Achievements"
          listData={experienceDetails.mentionableAchievement}
        />
      )}
    </div>
  );
}
