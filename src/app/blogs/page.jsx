import { unstable_cache } from "next/cache";
import BlogsFilter from "../components/blogs-filter";
import { CACHING_CONSTANTS } from "../constants/caching-constants";
import { getBlogData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

export const metadata = {
    title: "Blogs | Fahim Fahad",
    description:
        "Technical articles on Java, Spring Boot, AWS, microservices, and software engineering best practices.",
};

const getBlogs = unstable_cache(
    async () => {
        return await getBlogData();
    },
    ["blogs"],
    { revalidate: CACHING_CONSTANTS.ONE_DAY, tags: ["blogs"] }
);

export default async function BlogsPage() {
    const blogs = await getBlogs();

    // Serialize Date objects before passing to the client component
    const serializedBlogs = blogs?.map((b) => ({
        ...b,
        publishDate: b.publishDate instanceof Date ? b.publishDate.toISOString() : b.publishDate,
    })) ?? [];

    return (
        <>
            <StatsigEvent eventName="portfolio_pv_blogs" metadata={{ page: "blogs" }} />

            <div className="max-w-5xl mx-auto px-4 py-10">
                <BlogsFilter blogs={serializedBlogs} />
            </div>
        </>
    );
}
