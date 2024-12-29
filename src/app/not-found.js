import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-lg text-gray-600 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href="/">
        <div className="mt-6 px-6 py-3 text-white bg-blue-600 w-40 rounded-lg shadow-lg hover:bg-blue-700 transition">
          Go Back Home
        </div>
      </Link>
    </div>
  );
}
