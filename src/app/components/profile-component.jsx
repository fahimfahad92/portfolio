import Image from "next/image";
import profilePic from "../../../public/fahim.jpg";

export default function ProfileImageComponent() {
  return (
    <Image
      src={profilePic}
      alt="Fahim profile pic"
      className="rounded-full pt-5"
      width={300}
      height={300}
    />
  );
}
