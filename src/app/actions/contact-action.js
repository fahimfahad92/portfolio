"use server";

import nodemailer from "nodemailer";

export async function submitContact({ name, email, message }) {
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return { success: false };
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    try {
        await transporter.sendMail({
            from: `"Portfolio Contact" ${name.trim()}`,
            to: process.env.GMAIL_USER,
            replyTo: `"${name.trim()}" <${email.trim()}>`,
            subject: `Portfolio message from ${name.trim()}`,
            text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
            html: `
                <p><strong>Name:</strong> ${name.trim()}</p>
                <p><strong>Email:</strong> ${email.trim()}</p>
                <hr />
                <p>${message.trim().replace(/\n/g, "<br>")}</p>
            `,
        });
        return { success: true };
    } catch (err) {
        console.error("Email send error:", err);
        return { success: false };
    }
}
