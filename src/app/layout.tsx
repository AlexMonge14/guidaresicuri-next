import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import  "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./globals.css";

import { Anton, Montserrat } from 'next/font/google';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anton',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "Guidare Sicuri ASD – Scuola di Pilotaggio",
  description:
    "Partecipa ai corsi di guida sicura, sportiva e avanzata con istruttori professionisti. Formazione per privati e aziende con esercitazioni pratiche in pista.",
  keywords: [
    "guida sicura",
    "corso guida sportiva",
    "teambuilding aziendale",
    "formazione alla guida",
    "skid car",
    "corsi per aziende",
    "guida su pista",
    "educazione stradale"
  ],
  alternates: {
    canonical: "https://guidaresicuriasd.it/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
