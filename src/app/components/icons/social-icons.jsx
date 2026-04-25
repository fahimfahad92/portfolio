import Link from "next/link";
import { FaMedium } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { TbBrandLeetcode, TbMailFilled } from "react-icons/tb";
import { SOCIAL_LINKS } from "../../constants/social-constants";

function IconWithLink({ href, icon: Icon, size = 25 }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={size} />
    </Link>
  );
}

export function LinkedInIcon({ size = 25 }) {
  return <IconWithLink href={SOCIAL_LINKS.LINKEDIN} icon={FaLinkedin} size={size} />;
}

export function GithubIcon({ size = 25 }) {
  return <IconWithLink href={SOCIAL_LINKS.GITHUB} icon={FaGithub} size={size} />;
}

export function EmailIcon({ size = 25 }) {
  return <IconWithLink href={SOCIAL_LINKS.EMAIL} icon={TbMailFilled} size={size} />;
}

export function MediumIcon({ size = 25 }) {
  return <IconWithLink href={SOCIAL_LINKS.MEDIUM} icon={FaMedium} size={size} />;
}

export function LeetCodeIcon({ size = 25 }) {
  return <IconWithLink href={SOCIAL_LINKS.LEETCODE} icon={TbBrandLeetcode} size={size} />;
}
