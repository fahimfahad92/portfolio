import {
  MdArrowOutward,
  MdArrowBack,
  MdLightMode,
  MdDarkMode,
  MdVisibility,
  MdDownload,
  MdClose,
} from "react-icons/md";

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

export function EyeIcon({ size = 20 }) {
  return <MdVisibility size={size} />;
}

export function DownloadIcon({ size = 20 }) {
  return <MdDownload size={size} />;
}

export function CloseIcon({ size = 20 }) {
  return <MdClose size={size} />;
}
