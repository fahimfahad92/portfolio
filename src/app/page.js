import {
  AwsIcon,
  JavaIcon,
  NextIcon,
  ReactIcon,
  SpringBootIcon,
} from "./components/icons/skill-icons";
import ProfileImageComponent from "./components/profile-component";

export const metadata = {
  title: "Sayed MD Fahim Fahad",
  description: "Software Engineer @ Toptal",
};

export default function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 w-full min-h-screen bg-cover bg-center bg-[url('/bg.jpg')] p-5">
      {/* Profile Image */}
      <ProfileImageComponent />

      {/* Name */}
      <div className="p-2 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
          Sayed MD Fahim Fahad
        </h1>
      </div>

      {/* Job Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black text-center pb-6">
        Senior Software Engineer @ Toptal
      </h2>

      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-6">
        <JavaIcon size="50" className="sm:size-60 md:size-70 lg:size-80" />
        <SpringBootIcon
          size="50"
          className="sm:size-60 md:size-70 lg:size-80"
        />
        <AwsIcon size="50" className="sm:size-60 md:size-70 lg:size-80" />
        <ReactIcon size="50" className="sm:size-60 md:size-70 lg:size-80" />
        <NextIcon size="50" className="sm:size-60 md:size-70 lg:size-80" />
      </div>
    </div>
  );
}
