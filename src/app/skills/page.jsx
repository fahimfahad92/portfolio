import { promises as fs } from "fs";

export default async function SkillsPage() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/skills/skill-data.json",
    "utf8"
  );
  const skillsData = JSON.parse(file);

  const primarySkills = skillsData.primarySkills;
  const awsServices = skillsData.awsServices;
  const databases = skillsData.databases;
  const cicd = skillsData.cicd;
  const testing = skillsData.testing;
  const familiarSkills = skillsData.familiarSkills;
  const others = skillsData.others;
  const personalRnd = skillsData.personalRnd;

  return (
    <>
      <div className="font-serif text-lg sm:text-xl md:text-2xl">
        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>Primary Skills</h2>
          </div>
          {primarySkills.map((skill) => (
            <div className="inline-block rounded shadow bg-green-600 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>AWS Services</h2>
          </div>
          {awsServices.map((skill) => (
            <div className="inline-block rounded shadow bg-orange-500 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>Databases</h2>
          </div>
          {databases.map((skill) => (
            <div className="inline-block rounded shadow bg-blue-500 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>Testing</h2>
          </div>
          {testing.map((skill) => (
            <div className="inline-block rounded shadow bg-purple-500 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>CICD</h2>
          </div>
          {cicd.map((skill) => (
            <div className="inline-block rounded shadow bg-lime-500 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>Others</h2>
          </div>
          {others.map((skill) => (
            <div className="inline-block rounded shadow bg-gray-500 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>Familiar Skills</h2>
          </div>
          {familiarSkills.map((skill) => (
            <div className="inline-block rounded shadow bg-indigo-400 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-start gap-2 p-5">
          <div className="w-full">
            <h2>Personal R&D</h2>
          </div>
          {personalRnd.map((skill) => (
            <div className="inline-block rounded shadow bg-rose-500 text-white px-2 py-1 text-xs sm:text-sm lg:text-lg">
              {skill.name}: {skill.exp} Years
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
