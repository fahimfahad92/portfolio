import { getMediumBlogData } from "../_lib/api-util";
import BlogComponent from "../components/blog-component";

export const metadata = {
  title: "Fahim's Blogs",
  description: "Fahim Fahad",
};

export default async function BlogsPage() {
  const posts = await getMediumBlogData();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-5 p-5">
        {posts.items.map((post) => (
          <BlogComponent post={post} key={post.title} />
        ))}
      </div>
    </>
  );
}
