import Link from "next/link";
import { formatDate } from "../_lib/date-util";
import { ArrowOutwardIcon } from "./icons/common-icons";
import Card from "./card";

export default function BlogComponent({ blog }) {
    const formattedDate = formatDate(blog.publishDate);

    return (
        <Link href={blog.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
            <Card className="p-5 flex flex-col gap-3 h-full hover:border-gray-300 dark:hover:border-gray-700 transition-all">

                {/* Title */}
                <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200 flex-1">
                    {blog.title}
                </h2>

                {/* Tags */}
                {blog.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                        {blog.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2.5 py-0.5 text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer row: date · read time · arrow */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
                        {formattedDate && <span>{formattedDate}</span>}
                        {blog.readTime && (
                            <>
                                <span>·</span>
                                <span>{blog.readTime} min read</span>
                            </>
                        )}
                    </div>
                    <span className="text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-200">
                        <ArrowOutwardIcon size={14} />
                    </span>
                </div>

            </Card>
        </Link>
    );
}
