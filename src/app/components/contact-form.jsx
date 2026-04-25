"use client";

import { useState, useTransition } from "react";
import { submitContact } from "../actions/contact-action";

const inputBase =
    "w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 transition";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState(null);
    const [isPending, startTransition] = useTransition();

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setStatus(null);
        startTransition(async () => {
            const result = await submitContact(form);
            if (result.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        });
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputBase}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={inputBase}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or role…"
                    className={`${inputBase} resize-none`}
                />
            </div>

            {status === "success" && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    Message sent! I&apos;ll get back to you soon.
                </p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                    Something went wrong. Please try again or email me directly.
                </p>
            )}

            <div className="flex justify-end">
                <button
                    type="submit"
                    disabled={isPending}
                    className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg text-sm hover:bg-gray-700 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                    {isPending ? "Sending…" : "Send Message →"}
                </button>
            </div>

        </form>
    );
}
