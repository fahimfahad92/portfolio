import { unstable_cache } from "next/cache";
import BlogComponent from "../components/blog-component";
import { CACHING_CONSTATS } from "../constants/caching-constans";
import { getBlogData } from "../firebase/firebase-util";
import StatsigEvent from "@/app/components/statsig-event";

export const dynamic = "force-dynamic";

export const metadata = {
    title: "Sayed MD Fahim Fahad – Senior Software Engineer",
    description: "10 years of experience building scalable SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
};

const getBlogs = unstable_cache(
  async () => {
    return await getBlogData();
  },
  ["blogs"],
  { revalidate: CACHING_CONSTATS.ONE_DAY, tags: ["blogs"] }
);

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
      <>
        <StatsigEvent eventName="portfolio_pv_blogs" metadata={{page: "blogs"}}/>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 p-5">
          {blogs?.map((blog) => (
              <BlogComponent blog={blog} key={blog.id} />
          ))}
        </div>
      </>

  );
}
