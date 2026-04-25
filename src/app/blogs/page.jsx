import {unstable_cache} from "next/cache";
import BlogComponent from "../components/blog-component";
import {CACHING_CONSTANTS} from "../constants/caching-constants";
import {getBlogData} from "../firebase/firebase-util";
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
    {revalidate: CACHING_CONSTANTS.ONE_DAY, tags: ["blogs"]}
);

export default async function BlogsPage() {
    const blogs = await getBlogs();

    return (
        <>
            <StatsigEvent eventName="portfolio_pv_blogs" metadata={{page: "blogs"}}/>

            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {blogs?.map((blog) => (
                        <BlogComponent blog={blog} key={blog.id}/>
                    ))}
                </div>
            </div>
        </>
    );
}