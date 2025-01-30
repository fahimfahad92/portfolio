import Link from "next/link";
import { formatDate } from "../_lib/date-util";

export default function BlogComponent({ blog }) {
  const formattedDate = formatDate(blog.publishDate);

  return (
    <Link href={blog.link} target="_blank">
      <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4">
        <div className="bg-black text-white rounded ">
          <div className="flex justify-center items-center p-2 font-bold text-center text-sm lg:text-lg">
            {blog.title}
          </div>
          <div className="flex justify-center px-2 py-1 text-sm">
            ({formattedDate})
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {blog.tags.map((tag) => (
            <div
              key={tag}
              className="inline-block rounded shadow bg-slate-500 text-white px-2 py-1 text-xs sm:text-sm"
            >
              {tag.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
