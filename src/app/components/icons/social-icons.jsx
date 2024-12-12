import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { TbMailFilled, TbBrandLeetcode } from "react-icons/tb";
import { FaMedium } from "react-icons/fa";

function IconWithLink({ href, icon: Icon, size = 25 }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={size} />
    </a>
  );
}

export function LinkedInIcon({ size = 25 }) {
  return (
    <IconWithLink
      href="https://www.linkedin.com/in/fahimfahadcseju/"
      icon={FaLinkedin}
      size={size}
    />
  );
}

export function GithubIcon({ size = 25 }) {
  return (
    <IconWithLink
      href="https://github.com/fahimfahad92"
      icon={FaGithub}
      size={size}
    />
  );
}

export function EmailIcon({ size = 25 }) {
  return (
    <IconWithLink
      href="mailto:fahimfahad92@gmail.com"
      icon={TbMailFilled}
      size={size}
    />
  );
}

export function MediumIcon({ size = 25 }) {
  return (
    <IconWithLink
      href="https://medium.com/@fahimfahad92"
      icon={FaMedium}
      size={size}
    />
  );
}

export function LeetCodeIcon({ size = 25 }) {
  return (
    <IconWithLink
      href="https://leetcode.com/u/fahimfahad/"
      icon={TbBrandLeetcode}
      size={size}
    />
  );
}
