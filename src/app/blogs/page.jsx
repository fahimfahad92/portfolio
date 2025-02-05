import { unstable_cache } from "next/cache";
import BlogComponent from "../components/blog-component";
import { CACHING_CONSTATS } from "../constants/caching-constans";
import { getBlogData } from "../firebase/firebase-util";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Fahim's Blogs",
  description: "Fahim Fahad",
};

const getBlogs = unstable_cache(
  async () => {
    return await getBlogData();
  },
  ["blogs"],
  { revalidate: CACHING_CONSTATS.DEFAUT, tags: ["blogs"] }
);

export default async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 p-5">
      {blogs?.map((blog) => (
        <BlogComponent blog={blog} key={blog.id} />
      ))}
    </div>
  );
}
