import Link from "next/link";
import {AwsIcon, JavaIcon, NextIcon, ReactIcon, SpringBootIcon} from "./components/icons/skill-icons";
import ProfileImageComponent from "./components/profile-component";
import StatsigEvent from "@/app/components/statsig-event";

export const metadata = {
    title: "Sayed MD Fahim Fahad – Senior Software Engineer",
    description: "10 years of experience building scalable SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
};

export default function HomePage() {
    return (
        <>
            <StatsigEvent eventName="portfolio_pv_home" metadata={{page: "home"}}/>

            <div
                className="flex flex-col items-center gap-6 w-full min-h-screen bg-cover bg-center bg-[url('/bg.jpg')] p-5">

                {/* Profile Image */}
                <ProfileImageComponent/>

                {/* Name */}
                <div className="p-2 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black">
                        Sayed MD Fahim Fahad
                    </h1>
                </div>

                {/* Job Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-black text-center">
                    Senior Software Engineer @ Toptal
                </h2>

                {/* Tagline */}
                <p className="text-sm sm:text-base md:text-lg text-gray-800 text-center max-w-xl leading-relaxed px-4">
                    10+ years building scalable backend systems and full-stack SaaS products in fintech and startups.
                    I help teams ship reliable software fast — from zero to production.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                    <Link
                        href="/projects"
                        className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition-colors duration-200 text-sm sm:text-base"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="mailto:fahimfahad92@gmail.com"
                        className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow border border-gray-300 hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
                    >
                        Contact Me
                    </Link>
                </div>

                {/* Skill Icons */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-2">
                    <JavaIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
                    <SpringBootIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
                    <AwsIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
                    <ReactIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
                    <NextIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16"/>
                </div>
            </div>
        </>
    );
}