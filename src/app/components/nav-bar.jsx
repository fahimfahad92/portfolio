import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-center bg-black text-white font-bold text-sm md:text-base font-serif h-auto md:h-16 px-6 py-4">
      <div className="flex flex-wrap justify-center sm:justify-between items-center space-y-2 sm:space-y-0 sm:space-x-6 max-w-full">
        <Link
          href="/"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="Home"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="About Me"
        >
          About Me
        </Link>
        <Link
          href="/experience"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="Experience"
        >
          Experience
        </Link>
        <Link
          href="/projects"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="Projects"
        >
          Projects
        </Link>
        <Link
          href="/blogs"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="Blogs"
        >
          Blogs
        </Link>
        <Link
          href="/skills"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="Skills"
        >
          Skills
        </Link>
        <Link
          href="/education"
          className="hover:text-gray-300 px-3 py-2 transition-colors duration-300"
          aria-label="Education"
        >
          Education
        </Link>
      </div>
    </div>
  );
}
