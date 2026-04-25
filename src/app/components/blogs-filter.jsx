"use client";

import { useState } from "react";
import BlogComponent from "./blog-component";

export default function BlogsFilter({ blogs }) {
    const [activeTag, setActiveTag] = useState(null);

    const allTags = [...new Set(blogs.flatMap((b) => b.tags ?? []))].sort();

    const filtered = activeTag
        ? blogs.filter((b) => b.tags?.includes(activeTag))
        : blogs;

    const pillBase = "px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer";
    const pillActive = "bg-gray-900 dark:bg-white text-white dark:text-gray-900";
    const pillInactive = "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700";

    return (
        <>
            {/* ── Filter bar ── */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button
                    onClick={() => setActiveTag(null)}
                    className={`${pillBase} ${!activeTag ? pillActive : pillInactive}`}
                >
                    All
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                        className={`${pillBase} ${activeTag === tag ? pillActive : pillInactive}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* ── Blog grid ── */}
            {filtered.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-10">
                    No blogs match this filter.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filtered.map((blog) => (
                        <BlogComponent blog={blog} key={blog.id} />
                    ))}
                </div>
            )}
        </>
    );
}
