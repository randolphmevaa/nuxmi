// /app/api/contact/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON data from the request body
    const { fullName, email, message } = await request.json();

    // Create a transporter object using SMTP transport details.
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g., 'smtp.gmail.com'
      port: Number(process.env.SMTP_PORT), // e.g., 465 for secure, or 587 for TLS
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // your SMTP username
        pass: process.env.SMTP_PASS, // your SMTP password
      },
    });

    // Email message details
    const mailOptions = {
      from: process.env.EMAIL_FROM, // sender address (configured in your env)
      to: process.env.EMAIL_TO,     // recipient address where messages will be sent
      subject: 'Nouveau message de contact',
      text: `
        Nouveau message de contact :
        Nom: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Return a successful JSON response
    return NextResponse.json(
      { success: true, message: 'Message envoyé avec succès', info },
      { status: 200 }
    );
  } catch (error: unknown) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('Error in contact submission:', error);
    return NextResponse.json(
      { success: false, message: 'Erreur lors de l\'envoi du message', error: errorMessage },
      { status: 500 }
    );
  }
}
