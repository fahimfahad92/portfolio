import Link from "next/link";
import { formatDate } from "../_lib/date-util";

export default function BlogComponent({ blog }) {
  const formattedDate = formatDate(blog.publishDate);

  return (
    <Link href={blog.link} target="_blank" className="block">
      <div className="bg-white rounded-xl shadow-md font-serif p-5 flex flex-col space-y-4 transition transform hover:scale-105 hover:shadow-lg duration-300">
        {/* Title Section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-4 text-center">
          <h2 className="font-bold text-base lg:text-xl">{blog.title}</h2>
          <p className="text-xs lg:text-sm text-gray-300 mt-1">
            ({formattedDate})
          </p>
        </div>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-center gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full shadow-sm bg-gray-800 text-white px-4 py-1 text-xs sm:text-sm uppercase tracking-wide transition duration-200 hover:bg-gray-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
