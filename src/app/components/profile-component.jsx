import profilePic from "../../../public/fahim.jpg";
import Image from "next/image";

export default function ProfileImageComponent() {
  return (
    <>
      <div className="pt-5">
        <Image
          src={profilePic}
          alt="Fahim profile pic"
          className="rounded-full"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
