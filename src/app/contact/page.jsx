import ContactForm from "../components/contact-form";
import StatsigEvent from "@/app/components/statsig-event";
import { SITE_URL, SITE_NAME } from "@/app/constants/site-constants";

export const metadata = {
    title: `Contact | ${SITE_NAME}`,
    description: "Get in touch with Fahim Fahad — senior software engineer available for full-time and contract opportunities.",
    openGraph: {
        title: `Contact | ${SITE_NAME}`,
        description: "Get in touch with Fahim Fahad — senior software engineer available for full-time and contract opportunities.",
        url: `${SITE_URL}/contact`,
        siteName: SITE_NAME,
        type: "website",
    },
    twitter: {
        card: "summary",
        title: `Contact | ${SITE_NAME}`,
        description: "Get in touch with Fahim Fahad — senior software engineer available for full-time and contract opportunities.",
    },
    alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
    return (
        <>
            <StatsigEvent eventName="portfolio_pv_contact" metadata={{ page: "contact" }} />

            <div className="max-w-2xl mx-auto px-4 py-12 sm:py-16">

                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                        Get in Touch
                    </h1>
                </div>

                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-sm p-6 sm:p-8">
                    <ContactForm />
                </div>

            </div>
        </>
    );
}
