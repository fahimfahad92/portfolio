import { getEducationData } from "../firebase/firebase-util";

export const metadata = {
  title: "Education",
  description: "Fahim Fahad",
};

export default async function EducationPage() {
  const education = await getEducationData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 p-5">
      {education?.map((educationData) => (
        <div
          className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4"
          key={educationData.degree}
        >
          <div className="font-bold">{educationData.universityName}</div>
          <div className="font-bold">{educationData.degree}</div>
          <div>Session: {educationData.session}</div>
          <div>CGPA: {educationData.cgpa}</div>
          <div>Position: {educationData.position}</div>
          <div className="bg-gray-200 rounded shadow p-2 flex flex-col space-y-4 relative">
            <div className="font-bold">Publication</div>
            <div className="font-bold">{educationData.publicationTitle}</div>
            <div>
              {educationData.publisherName} · {educationData.publicationDate}
            </div>
            <div>{educationData.publicationDetail}</div>
            <a href={educationData.publicationLink} target="_blank">
              <div className="flex flex-wrap w-20 sm:w-20 md:w-44 lg:w-44 rounded shadow bg-slate-500 text-white px-2 py-1 text-xs sm:text-sm">
                View On publication site
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
