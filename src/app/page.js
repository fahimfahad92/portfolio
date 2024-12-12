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
      <div className='absolute flex flex-col gap-5 items-center w-full min-h-full bg-[url("/bg.jpg")]'>
        <ProfileImageComponent />
        <div className="p-2">
          <h1>Sayed MD Fahim Fahad</h1>
        </div>
        <h2 className="pb-5">Software Engineer @ Toptal</h2>

        <div className="flex flex-row space-x-6">
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
