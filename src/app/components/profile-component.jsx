import Image from "next/image";
import profilePic from "../../../public/fahim.jpg";

export default function ProfileImageComponent({ width = 300, height = 300, className = "" }) {
  return (
    <Image
      src={profilePic}
      alt="Fahim Fahad"
      className={`object-cover ${className}`}
      width={width}
      height={height}
    />
  );
}
