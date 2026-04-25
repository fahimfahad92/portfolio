import ViewDetails from "@/app/components/view-details-component";
import { ROUTING_CONSTANTS } from "../constants/routing-constants";
import LinkComponent from "./link-component";
import TagPill from "@/app/components/tag-pill";
import SectionLabel from "@/app/components/section-label";
import Card from "./card";

export default function ProjectComponent({ project }) {
    return (
        <Card className="p-5 flex flex-col gap-1">

            {/* Title */}
            <h2 className="font-bold text-base lg:text-lg text-gray-900 leading-snug">
                {project.displayName}
            </h2>

            {/* Company · Timeline */}
            <p className="text-sm font-medium text-gray-700">
                {project.companyName}
                {project.timeline && (
                    <span className="ml-1.5 text-xs text-gray-400 font-normal">
                        · {project.timeline}
                    </span>
                )}
            </p>

            {/* Tech Stack */}
            {project.techStack?.length > 0 && (
                <div>
                    <SectionLabel>Tech Stack</SectionLabel>
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                            <TagPill key={tech} label={tech} />
                        ))}
                    </div>
                </div>
            )}

            {/* CTAs */}
            <div className="mt-auto pt-4 flex flex-wrap gap-2">
                <LinkComponent link={project.link} external={true} />
                <ViewDetails href={`${ROUTING_CONSTANTS.PROJECTS}/${project.name}`} />
            </div>
        </Card>
    );
}
