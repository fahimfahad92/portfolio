import { ROUTING_CONSTANTS } from "@/app/constants/routing-constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-three-snowy-36.vercel.app";

export default function sitemap() {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}${ROUTING_CONSTANTS.ABOUT_ME}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}${ROUTING_CONSTANTS.EXPERIENCE}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}${ROUTING_CONSTANTS.PROJECTS}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE_URL}${ROUTING_CONSTANTS.BLOGS}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${BASE_URL}${ROUTING_CONSTANTS.SKILLS}`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${BASE_URL}${ROUTING_CONSTANTS.EDUCATION}`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
    ];
}
