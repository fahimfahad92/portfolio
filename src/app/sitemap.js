import { ROUTING_CONSTANTS } from "@/app/constants/routing-constants";
import { SITE_URL } from "@/app/constants/site-constants";

export default function sitemap() {
    return [
        { url: SITE_URL,                                        lastModified: new Date(), changeFrequency: "monthly", priority: 1   },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.ABOUT_ME}`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.EXPERIENCE}`,   lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.PROJECTS}`,     lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.BLOGS}`,        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.7 },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.SKILLS}`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.EDUCATION}`,    lastModified: new Date(), changeFrequency: "yearly",  priority: 0.5 },
        { url: `${SITE_URL}${ROUTING_CONSTANTS.CONTACT}`,      lastModified: new Date(), changeFrequency: "yearly",  priority: 0.4 },
    ];
}
