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
      <div className="flex flex-col items-center gap-5 w-full min-h-screen bg-cover bg-center bg-[url('/bg.jpg')] p-5">
        <ProfileImageComponent />

        <div className="p-2 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            Sayed MD Fahim Fahad
          </h1>
        </div>

        <h2 className="pb-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black text-center">
          Software Engineer @ Toptal
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <JavaIcon size="40" className="sm:size-50 md:size-60 lg:size-70" />
          <SpringBootIcon
            size="40"
            className="sm:size-50 md:size-60 lg:size-70"
          />
          <AwsIcon size="40" className="sm:size-50 md:size-60 lg:size-70" />
          <ReactIcon size="40" className="sm:size-50 md:size-60 lg:size-70" />
          <NextIcon size="40" className="sm:size-50 md:size-60 lg:size-70" />
        </div>
      </div>
    </>
  );
}
