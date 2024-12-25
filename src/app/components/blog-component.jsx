import { formatDate } from "../_lib/date-util";

export default function BlogComponent({ blog }) {
  console.log("building blog content");
  const formattedDate = formatDate(blog.publishDate);

  return (
    <>
      <a href={blog.link} target="_blank">
        <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4">
          <div>
            <div className="rounded-t bg-black text-white flex justify-center items-center p-2">
              <p className="font-bold text-center text-sm lg:text-lg">
                {blog.title}
              </p>
            </div>
            <div className="flex justify-center bg-black text-white px-2 py-1 text-xs sm:text-sm">
              ({formattedDate})
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {blog.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-block rounded shadow bg-slate-500 text-white px-2 py-1 text-xs sm:text-sm"
              >
                {tag.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </a>
    </>
  );
}
