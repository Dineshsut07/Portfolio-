// src/app/api/send/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const data = await request.json();
        const { email, subject, message } = data;

        // Create a Nodemailer transporter using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Gmail service
            secure: true, //
            port: 465,

            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });

        // Email options
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, // You can also set this to another recipient
            subject: subject,
            text: `Message from: ${email}\n\n${message}`,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
