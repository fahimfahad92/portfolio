import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/app/footer";
import NavBar from "./components/nav-bar";
import StatsigProviderWrapper from "@/app/providers/statsig-provider";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const viewport = {
    width: "device-width",
    initialScale: 1,
};

export const metadata = {
    title: "Sayed MD Fahim Fahad – Senior Software Engineer",
    description:
        "8 years of experience building scalable SaaS products in fintech and startups. Java, Spring Boot, AWS, React, Next.js.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/favicon.png" sizes="any" />
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
        >
        <div>
            {/*<StatsigProviderWrapper>*/}
                <NavBar />
                <main className="min-h-[87vh] overflow-y-auto">{children}</main>
                <Footer />
            {/*</StatsigProviderWrapper>*/}
        </div>
        </body>
        </html>
    );
}