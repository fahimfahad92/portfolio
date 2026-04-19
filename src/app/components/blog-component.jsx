import Link from "next/link";
import { formatDate } from "../_lib/date-util";

export default function BlogComponent({ blog }) {
  const formattedDate = formatDate(blog.publishDate);

  return (
      <Link href={blog.link} target="_blank" className="block">
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col space-y-4 hover:shadow-md transition-shadow duration-200">

          {/* Title Section */}
          <div className="bg-gray-900 text-white rounded-lg p-4 text-center">
            <h2 className="font-bold text-base lg:text-lg leading-snug">
              {blog.title}
            </h2>
            {formattedDate && (
                <p className="text-xs text-gray-400 mt-1">{formattedDate}</p>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {blog.tags.map((tag) => (
                <span
                    key={tag}
                    className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-3 py-0.5 text-xs font-medium uppercase tracking-wide"
                >
              {tag}
            </span>
            ))}
          </div>

        </div>
      </Link>
  );
}