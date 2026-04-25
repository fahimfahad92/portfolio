"use client";

import { useState } from "react";
import { TbMailFilled, TbCheck } from "react-icons/tb";

export default function CopyEmailButton({ email, size = 20 }) {
    const [copied, setCopied] = useState(false);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch { /* ignore — clipboard unavailable */ }
    }

    return (
        <button
            onClick={handleCopy}
            title={copied ? "Copied!" : email}
            aria-label={copied ? "Email address copied" : "Copy email address"}
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
        >
            {copied ? <TbCheck size={size} /> : <TbMailFilled size={size} />}
        </button>
    );
}
