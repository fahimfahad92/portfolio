import Image from "next/image";
import profilePic from "../../../public/fahim.jpg";

export default function ProfileImageComponent({
    className = "",
    priority = false,
    sizes = "100vw",
}) {
    return (
        <Image
            src={profilePic}
            alt="Fahim Fahad"
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${className}`}
        />
    );
}
