export default function BlogComponent({ post }) {
  // const formattedDate = formatDate(post?.pubDate.substring(0, 10));

  return (
    <>
      <a href={post.guid} target="_blank">
        <div className="bg-gray-200 rounded shadow font-serif p-2 flex flex-col space-y-4">
          <div>
            <div className="rounded-t bg-black text-white flex justify-center items-center p-2">
              <p className="font-bold text-center text-sm lg:text-lg">
                {post.title}
              </p>
            </div>
            {/* <div className="flex justify-center bg-black text-white px-2 py-1 text-xs sm:text-sm">
              ({formattedDate})
            </div> */}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {post.categories.map((category, index) => (
              <div
                key={index}
                className="inline-block rounded shadow bg-slate-500 text-white px-2 py-1 text-xs sm:text-sm"
              >
                {category.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </a>
    </>
  );
}
