import Link from "next/link";
import { getEducationData } from "../firebase/firebase-util";

export const metadata = {
  title: "Education",
  description: "Fahim Fahad",
};

export default async function EducationPage() {
  const education = await getEducationData();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
      {education?.map((educationData) => (
        <div
          className="bg-gray-100 rounded-xl shadow-md font-serif p-4 flex flex-col gap-3"
          key={educationData.degree}
        >
          <div className="font-bold text-lg text-gray-800">
            {educationData.universityName}
          </div>
          <div className="font-semibold text-base">{educationData.degree}</div>
          <div className="text-sm text-gray-600">
            Session: {educationData.session}
          </div>
          <div className="text-sm text-gray-600">
            CGPA: {educationData.cgpa}
          </div>
          <div className="text-sm text-gray-600">
            Position: {educationData.position}
          </div>

          {/* Publication Section */}
          {educationData.publicationTitle && (
            <div className="bg-gray-200 rounded-lg shadow p-3 flex flex-col gap-2 mt-4">
              <div className="font-semibold text-gray-700">Publication</div>
              <div className="font-bold text-gray-900">
                {educationData.publicationTitle}
              </div>
              <div className="text-sm text-gray-600">
                {educationData.publisherName} · {educationData.publicationDate}
              </div>
              <div className="text-sm text-gray-700">
                {educationData.publicationDetail}
              </div>
              <Link
                href={educationData.publicationLink}
                target="_blank"
                className="inline-block w-fit rounded-md shadow bg-slate-600 text-white px-3 py-1 text-sm transition hover:bg-slate-700"
              >
                View on Publication Site
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
