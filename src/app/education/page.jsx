import Link from "next/link";
import { getEducationData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";
import { ArrowOutwardIcon } from "../components/icons/common-icons";
import Card from "../components/card";

export const metadata = {
    title: "Education | Fahim Fahad",
    description:
        "Academic background in Computer Science and Engineering, including publications in software research.",
};

export const dynamic = "force-static";

export default async function EducationPage() {
    const education = await getEducationData();

    return (
        <>
            <StatsigEvent eventName="portfolio_education" metadata={{ page: "education" }} />

            <div className="max-w-4xl mx-auto px-4 py-10">
                <div className="flex flex-col gap-5">
                    {education?.map((ed) => (
                        <Card key={ed.degree} className="overflow-hidden">

                            {/* Card header */}
                            <div className="bg-gray-900 text-white px-6 py-5">
                                <h2 className="text-lg font-bold leading-snug">{ed.universityName}</h2>
                                <p className="text-sm text-gray-300 mt-1">{ed.degree}</p>
                            </div>

                            {/* Card body */}
                            <div className="px-6 py-5 flex flex-col gap-4">

                                {/* Meta row */}
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {ed.session && (
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Session</p>
                                            <p className="text-sm text-gray-700 mt-0.5">{ed.session}</p>
                                        </div>
                                    )}
                                    {ed.cgpa && (
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">CGPA</p>
                                            <p className="text-sm text-gray-700 mt-0.5">{ed.cgpa}</p>
                                        </div>
                                    )}
                                    {ed.position && (
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">Class position</p>
                                            <p className="text-sm text-gray-700 mt-0.5">{ed.position}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Publication */}
                                {ed.publicationTitle && (
                                    <div className="border border-gray-200 rounded-lg p-4 flex flex-col gap-2 bg-gray-50">
                                        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                            Publication
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900 leading-snug">
                                            {ed.publicationTitle}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            {ed.publisherName}
                                            {ed.publicationDate && ` · ${ed.publicationDate}`}
                                        </p>
                                        {ed.publicationDetail && (
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {ed.publicationDetail}
                                            </p>
                                        )}
                                        {ed.publicationLink && (
                                            <Link
                                                href={ed.publicationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 w-fit text-sm font-medium text-gray-700 border border-gray-300 rounded-lg px-3 py-1.5 hover:bg-gray-100 transition-colors duration-200 mt-1"
                                            >
                                                View publication
                                                <ArrowOutwardIcon size={14} />
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    );
}
