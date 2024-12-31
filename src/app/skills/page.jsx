import { unstable_cache } from "next/cache";
import { getSkillsData } from "../firebase/firebase-util";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Skills",
  description: "Fahim Fahad",
};

const getSkills = unstable_cache(
  async () => {
    return await getSkillsData();
  },
  ["skills"],
  { revalidate: 3600 }
);

export default async function SkillsPage() {
  const skills = await getSkills();

  return (
    <>
      {skills?.map((skillData) => (
        <div
          className="flex flex-wrap justify-start gap-2 p-5 font-serif text-lg sm:text-xl md:text-2xl"
          key={skillData.group}
        >
          <div className="w-full">
            <h2>{skillData.group}</h2>
          </div>

          {Object.entries(skillData.skillMap)
            .sort()
            .map(([name, year]) => (
              <div
                className={`inline-block rounded shadow text-white px-2 py-1 text-xs sm:text-sm lg:text-lg ${skillData.color}`}
                key={name}
              >
                {name}: {year} Years
              </div>
            ))}
        </div>
      ))}
    </>
  );
}
