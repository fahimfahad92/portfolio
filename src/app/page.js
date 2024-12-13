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
    <>
      <div className="absolute flex flex-col items-center gap-5 w-full min-h-full bg-cover bg-center bg-[url('/bg.jpg')] p-5">
        {/* Profile Image */}
        <ProfileImageComponent />

        {/* Name Section */}
        <div className="p-2 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Sayed MD Fahim Fahad
          </h1>
        </div>

        {/* Title */}
        <h2 className="pb-5 text-lg sm:text-xl md:text-2xl font-medium text-black">
          Software Engineer @ Toptal
        </h2>

        {/* Icon Section */}
        <div className="flex flex-wrap justify-center gap-4">
          <JavaIcon size="50" />
          <SpringBootIcon size="50" />
          <AwsIcon size="50" />
          <ReactIcon size="50" />
          <NextIcon size="50" />
        </div>
      </div>
    </>
  );
}
