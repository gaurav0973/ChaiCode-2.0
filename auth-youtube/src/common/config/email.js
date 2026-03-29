import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendMail = async (to, subject, html) => {
    await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to,
        subject,
        html,
    });
};

export const sendVerificationEmail = async(email, token) => {
    const subject = "Verify your email";
    const html = `
            <h2>Email Verification</h2>
            <p>Click below to verify your email:</p>
            <a href="http://localhost:7000/api/auth/verify-email/${token}">
                Verify Email
            </a>
        `;
    await sendMail(email, subject, html)
}

