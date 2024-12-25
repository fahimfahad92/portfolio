import { getBlogData } from "../_lib/api-util";
import BlogComponent from "../components/blog-component";

export const metadata = {
  title: "Fahim's Blogs",
  description: "Fahim Fahad",
};

export default async function BlogsPage() {
  const blogs = await getBlogData();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 p-5">
        {blogs.map((blog) => (
          <BlogComponent blog={blog} key={blog.id} />
        ))}
      </div>
    </>
  );
}
