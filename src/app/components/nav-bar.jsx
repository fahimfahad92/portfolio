"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ROUTING_CONSTANTS } from "../constants/routing-constants";

const NAV_LINKS = [
    { href: ROUTING_CONSTANTS.HOME, label: "Home" },
    { href: ROUTING_CONSTANTS.ABOUT_ME, label: "About Me" },
    { href: ROUTING_CONSTANTS.EXPERIENCE, label: "Experience" },
    { href: ROUTING_CONSTANTS.PROJECTS, label: "Projects" },
    { href: ROUTING_CONSTANTS.BLOGS, label: "Blogs" },
    { href: ROUTING_CONSTANTS.SKILLS, label: "Skills" },
    { href: ROUTING_CONSTANTS.EDUCATION, label: "Education" },
];

// ─── Hamburger Button ────────────────────────────────────────────────────────

function HamburgerButton({ isOpen, onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className={[
                "md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9 rounded-md",
                "transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                isOpen ? "bg-gray-800" : "hover:bg-gray-800",
            ].join(" ")}
        >
      <span
          className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
          }`}
      />
            <span
                className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
                    isOpen ? "opacity-0 scale-x-0" : ""
                }`}
            />
            <span
                className={`block w-5 h-0.5 bg-white rounded transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
            />
        </button>
    );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function isActivePath(pathname, href) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const hamburgerRef = useRef(null);
    const pathname = usePathname();

    // Close on click outside
    useEffect(() => {
        function handleClickOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    // Close on ESC — return focus to hamburger button for accessibility
    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
                hamburgerRef.current?.focus();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <nav ref={navRef} className="bg-black text-white font-bold text-sm font-serif">

            {/* Top bar */}
            <div className="flex items-center justify-between h-16 px-6">

                {/* Brand — links home */}
                <Link
                    href={ROUTING_CONSTANTS.HOME}
                    className="text-white hover:text-gray-300 transition-colors duration-300 text-base rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    aria-label="Home"
                >
                    Fahim Fahad
                </Link>

                {/* Desktop links — hidden on mobile */}
                <div className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={[
                                "px-3 py-2 rounded transition-colors duration-300",
                                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                                isActivePath(pathname, link.href)
                                    ? "bg-gray-800 text-white"
                                    : "text-gray-400 hover:text-white hover:bg-gray-800",
                            ].join(" ")}
                            aria-label={link.label}
                            aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger — mobile only, ref used to restore focus on ESC */}
                <div ref={hamburgerRef} tabIndex={-1}>
                    <HamburgerButton
                        isOpen={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                    />
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                id="mobile-menu"
                role="menu"
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 border-t border-gray-800" : "max-h-0"
                }`}
            >
                <div className="flex flex-col px-6 py-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            role="menuitem"
                            className={[
                                "py-3 border-b border-gray-800 last:border-b-0 transition-colors duration-300",
                                "focus-visible:outline-none focus-visible:text-gray-300",
                                isActivePath(pathname, link.href)
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white",
                            ].join(" ")}
                            aria-label={link.label}
                            aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>

        </nav>
    );
}
