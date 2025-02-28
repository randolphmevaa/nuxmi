// /app/api/leads/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON data from the request body
    const { nom, email, telephone, entreprise, activite, leadsParSemaine } = await request.json();

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
      to: process.env.EMAIL_TO,     // recipient address where leads will be sent
      subject: 'Nouveau lead reçu',
      text: `
        Nouveau lead reçu :
        Nom: ${nom}
        Email: ${email}
        Téléphone: ${telephone}
        Entreprise: ${entreprise}
        Activité: ${activite}
        Leads par semaine: ${leadsParSemaine}
      `,
      html: `
        <h2>Nouveau lead reçu</h2>
        <p><strong>Nom:</strong> ${nom}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${telephone}</p>
        <p><strong>Entreprise:</strong> ${entreprise}</p>
        <p><strong>Activité:</strong> ${activite}</p>
        <p><strong>Leads par semaine:</strong> ${leadsParSemaine}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    // Return a successful JSON response
    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully', info },
      { status: 200 }
    );
  } catch (error: unknown) {
    let errorMessage = 'An unknown error occurred';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('Error in lead submission:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting lead', error: errorMessage },
      { status: 500 }
    );
  }
}
