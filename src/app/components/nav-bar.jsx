import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-black text-white font-bold text-sm md:text-base font-serif h-auto md:h-16 px-4">
      <div className="flex flex-wrap justify-center sm:justify-start items-center space-y-2 sm:space-y-0 sm:space-x-4 max-w-full">
        <Link
          href="/"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          About Me
        </Link>
        <Link
          href="/experience"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          Blogs
        </Link>
        <Link
          href="/skills"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          Skills
        </Link>
        <Link
          href="/education"
          className="hover:text-gray-300 px-2 py-2 sm:py-0"
          aria-label="true"
        >
          Education
        </Link>
      </div>
    </div>
  );
}
