import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, message, privacy } = await req.json();

  if (!name || !email || !message || !privacy) {
    return NextResponse.json({ error: 'Dati mancanti' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: 'mail.tophost.it',
    port: 587,
    secure: false, // STARTTLS
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_RECEIVER!,
      to: process.env.EMAIL_RECEIVER!,
      replyTo: email,
      subject: `Messaggio da: ${name}, dal modulo contatti`,
      text: `Nome: ${name}\nEmail: ${email}\nMessaggio:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Errore invio email:', error);
    return NextResponse.json({ error: 'Errore invio email' }, { status: 500 });
  }
}