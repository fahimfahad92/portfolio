import ViewDetails from "@/app/components/view-details-component";
import {ROUTING_CONSTANTS} from "../constants/routing-constants";
import TagPill from "@/app/components/tag-pill";
import SectionLabel from "@/app/components/section-label";


export default function ExperienceComponent({experience}) {
    return (
        <div
            className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-1 hover:shadow-md transition-shadow duration-200">

            {/* Position */}
            <h2 className="font-bold text-base lg:text-lg text-gray-900 leading-snug">
                {experience.position}
            </h2>

            {/* Company */}
            <p className="text-sm font-medium text-gray-700">
                {experience.displayName}
            </p>

            {/* Timeline · Job type */}
            <p className="text-xs text-gray-500">
                {experience.timeline}
                {experience.jobType && (
                    <span className="ml-1.5 text-gray-400">· {experience.jobType}</span>
                )}
            </p>

            {/* Address */}
            {experience.address && (
                <p className="text-xs text-gray-400">{experience.address}</p>
            )}

            {/* Tech Stack */}
            {experience.techStack?.length > 0 && (
                <div>
                    <SectionLabel>Tech Stack</SectionLabel>
                    <div className="flex flex-wrap gap-1.5">
                        {experience.techStack.map((tech) => (
                            <TagPill key={tech} label={tech}/>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Projects */}
            {experience.projects && Object.keys(experience.projects).length > 0 && (
                <div>
                    <SectionLabel>Related Projects</SectionLabel>
                    <div className="flex flex-wrap gap-1.5">
                        {Object.entries(experience.projects).map(([name, displayName]) => (
                            <TagPill key={name} label={displayName}/>
                        ))}
                    </div>
                </div>
            )}

            {/* Companies */}
            {experience.companies?.length > 0 && (
                <div>
                    <SectionLabel>Companies</SectionLabel>
                    <div className="flex flex-wrap gap-1.5">
                        {experience.companies.map((company) => (
                            <TagPill key={company} label={company}/>
                        ))}
                    </div>
                </div>
            )}

            {/* CTA */}
            <div className="mt-auto pt-4">
                <ViewDetails
                    href={`${ROUTING_CONSTANTS.EXPERIENCE}/${experience.companyName}`}
                />
            </div>
        </div>
    );
}
