import { MdArrowOutward, MdArrowBack, MdLightMode, MdDarkMode } from "react-icons/md";

export function ArrowOutwardIcon({ size = 20 }) {
  return <MdArrowOutward size={size} />;
}

export function BackArrowIcon({ size = 20 }) {
  return <MdArrowBack size={size} />;
}

export function SunIcon({ size = 20 }) {
  return <MdLightMode size={size} />;
}

export function MoonIcon({ size = 20 }) {
  return <MdDarkMode size={size} />;
}
