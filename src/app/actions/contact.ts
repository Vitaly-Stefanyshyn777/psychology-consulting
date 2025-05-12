"use server";

import nodemailer from "nodemailer";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "edanurnair@gmail.com",
      pass: "yufa dtaw futv fiht",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  // Compose the email
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "edanurnair@gmail.com",
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Subject: ${subject}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Form submitted successfully!" };
  } catch (error) {
    console.error("Email submission error:", error);
    return {
      success: false,
      message: "Form submission failed. Please try again.",
    };
  }
}
