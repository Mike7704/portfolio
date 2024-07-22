"use server";
import nodemailer from "nodemailer";

interface EmailOptions {
  name: string;
  email: string;
  message: string;
}

interface SendEmailResponse {
  ok: boolean;
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.PASSWORD,
  },
});

export async function sendEmail({ name, email, message }: EmailOptions): Promise<SendEmailResponse> {
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_RECEIVER,
    subject: "New Message From Portfolio Website",
    text: `${name} sent a message:\n\n${message}\n\nSent from: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { ok: true };
  } catch (error) {
    console.error(error);
    return { ok: false };
  }
}
