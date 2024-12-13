import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-auto items-center justify-center space-x-4 max-w-full h-16  bg-black text-white font-bold font-serif">
        <Link href={"/"} className="hover:text-gray-300">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-gray-300">
          About Me
        </Link>
        <Link href={"/experience"} className="hover:text-gray-300">
          Experience
        </Link>
        <Link href={"/projects"} className="hover:text-gray-300">
          Projects
        </Link>
        <Link href={"/blogs"} className="hover:text-gray-300">
          Blogs
        </Link>
        <Link href={"/skills"} className="hover:text-gray-300">
          Skills
        </Link>
        <Link href={"/education"} className="hover:text-gray-300">
          Education
        </Link>
      </div>
    </>
  );
}
