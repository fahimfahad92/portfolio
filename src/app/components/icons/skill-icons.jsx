import { FaJava, FaAws, FaReact } from "react-icons/fa6";
import { SiSpringboot, SiNextdotjs } from "react-icons/si";

function SkillIcon({ icon: Icon, className = "" }) {
  return (
      <span className={`flex items-center justify-center ${className}`}>
      <Icon className="w-full h-full" />
    </span>
  );
}

export function JavaIcon({ className }) {
  return <SkillIcon icon={FaJava} className={className} />;
}

export function SpringBootIcon({ className }) {
  return <SkillIcon icon={SiSpringboot} className={className} />;
}

export function AwsIcon({ className }) {
  return <SkillIcon icon={FaAws} className={className} />;
}

export function ReactIcon({ className }) {
  return <SkillIcon icon={FaReact} className={className} />;
}

export function NextIcon({ className }) {
  return <SkillIcon icon={SiNextdotjs} className={className} />;
}