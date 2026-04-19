import Link from "next/link";
import { ROUTING_CONSTANTS } from "./components/icons/../../../app/constants/routing-constants";
import {
    EmailIcon,
    GithubIcon,
    LinkedInIcon,
    MediumIcon,
    LeetCodeIcon,
} from "./components/icons/social-icons";

const NAV_LINKS = [
    { href: ROUTING_CONSTANTS.EXPERIENCE, label: "Experience" },
    { href: ROUTING_CONSTANTS.PROJECTS,   label: "Projects"   },
    { href: ROUTING_CONSTANTS.SKILLS,     label: "Skills"     },
    { href: ROUTING_CONSTANTS.EDUCATION,  label: "Education"  },
    { href: ROUTING_CONSTANTS.ABOUT_ME,   label: "About Me"   },
];

const WRITING_LINKS = [
    { href: ROUTING_CONSTANTS.BLOGS,                    label: "Blog"   },
    { href: "https://medium.com/@fahimfahad92",         label: "Medium", external: true },
];

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">

                {/* Col 1 — Brand + tagline */}
                <div className="flex flex-col gap-3">
                    <Link
                        href={ROUTING_CONSTANTS.HOME}
                        className="text-base font-bold hover:text-gray-300 transition-colors duration-200"
                    >
                        Fahim Fahad
                    </Link>
                    <p className="text-xs text-gray-400 leading-relaxed">
                        Senior Software Engineer · Java · Spring Boot · AWS · React
                    </p>
                    {/* Social icons */}
                    <div className="flex items-center gap-4 pt-1 text-gray-400">
                        <span className="hover:text-white transition-colors duration-200"><LinkedInIcon size={18} /></span>
                        <span className="hover:text-white transition-colors duration-200"><GithubIcon   size={18} /></span>
                        <span className="hover:text-white transition-colors duration-200"><MediumIcon   size={18} /></span>
                        <span className="hover:text-white transition-colors duration-200"><LeetCodeIcon size={18} /></span>
                        <span className="hover:text-white transition-colors duration-200"><EmailIcon    size={18} /></span>
                    </div>
                </div>

                {/* Col 2 — Portfolio links */}
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Portfolio
                    </p>
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                {/* Col 3 — Writing + contact */}
                <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                        Writing & Contact
                    </p>
                    {WRITING_LINKS.map(({ href, label, external }) => (
                        <Link
                            key={href}
                            href={href}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                    <Link
                        href="mailto:fahimfahad92@gmail.com"
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 mt-1"
                    >
                        fahimfahad92@gmail.com
                    </Link>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 px-6 py-4 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} Sayed MD Fahim Fahad. All rights reserved.
            </div>
        </footer>
    );
}