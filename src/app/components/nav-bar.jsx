import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-wrap items-center justify-center bg-black text-white font-bold font-serif h-16 px-4">
      <div className="block sm:flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:max-w-full">
        <Link href={"/"} className="hover:text-gray-300 py-2 sm:py-0">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-gray-300 py-2 sm:py-0">
          About Me
        </Link>
        <Link href={"/experience"} className="hover:text-gray-300 py-2 sm:py-0">
          Experience
        </Link>
        <Link href={"/projects"} className="hover:text-gray-300 py-2 sm:py-0">
          Projects
        </Link>
        <Link href={"/blogs"} className="hover:text-gray-300 py-2 sm:py-0">
          Blogs
        </Link>
        <Link href={"/skills"} className="hover:text-gray-300 py-2 sm:py-0">
          Skills
        </Link>
        <Link href={"/education"} className="hover:text-gray-300 py-2 sm:py-0">
          Education
        </Link>
      </div>
    </div>
  );
}
