import ItemComponent from "@/app/components/item-component";
import ListComponent from "@/app/components/list-component";
import MapComponent from "@/app/components/map-component";
import { getExperienceDetailsData } from "@/app/firebase/firebase-util";
import { unstable_cache } from "next/cache";

export default async function CompanyDetailPage({ params }) {
  const companyName = (await params).companyName;

  const getExperienceDetails = unstable_cache(
    async () => {
      return await getExperienceDetailsData(companyName);
    },
    [companyName],
    { revalidate: 3600 }
  );

  const experienceDetails = await getExperienceDetails();

  return (
    <div className="grid grid-cols-1 gap-5 p-5 font-base font-serif">
      <div className="rounded shadow p-2">
        <div className="font-bold text-lg sm:text-sm lg:text-xl">
          {experienceDetails.position}
        </div>
        <div className="sm:text-sm lg:text-base">
          {experienceDetails.displayName}
        </div>
        <div>{experienceDetails.timeline}</div>
        <div>
          {experienceDetails.address} ({experienceDetails.jobType})
        </div>
        <ItemComponent title="Tech Stack" items={experienceDetails.techStack} />

        {experienceDetails.projects && (
          <MapComponent
            title="Related projects"
            mapData={experienceDetails.projects}
            isLink={false}
          />
        )}

        {experienceDetails.companies && (
          <MapComponent
            title="Companies:"
            mapData={experienceDetails.companies}
            isLink={true}
          />
        )}
      </div>

      {experienceDetails.description && (
        <div>{experienceDetails.description}</div>
      )}

      {experienceDetails.primaryResponsibility && (
        <ListComponent
          title="Primary responsibility:"
          listData={experienceDetails.primaryResponsibility}
        />
      )}

      {experienceDetails.mentionableAchievement && (
        <ListComponent
          title="Mentionable achievements:"
          listData={experienceDetails.mentionableAchievement}
        />
      )}
    </div>
  );
}
