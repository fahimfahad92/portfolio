import { FaJava, FaAws, FaReact } from "react-icons/fa6";
import { SiSpringboot, SiNextdotjs } from "react-icons/si";

export function JavaIcon({ size = 20 }) {
  return <FaJava size={size} />;
}

export function SpringBootIcon({ size = 20 }) {
  return <SiSpringboot size={size} />;
}

export function AwsIcon({ size = 20 }) {
  return <FaAws size={size} />;
}

export function ReactIcon({ size = 20 }) {
  return <FaReact size={size} />;
}

export function NextIcon({ size = 20 }) {
  return <SiNextdotjs size={size} />;
}
