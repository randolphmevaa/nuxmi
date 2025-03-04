// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
// import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import Custom Header Font
const fontHeader = localFont({
  src: [
    {
      path: "./fonts/lemfont-Bold.otf",
      // weight: "700", // Uncomment/adjust if your font has weight variants
      style: "normal",
    },
  ],
  variable: "--font-header",
  display: "swap",
});

// Import Custom Body Font
const fontBody = localFont({
  src: [
    {
      path: "./fonts/RedHatDisplayMedium.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nuxmi - Accélérez votre croissance B2B et B2C",
  description: "Notre agence se distingue des fournisseurs de leads traditionnels en générant des leads qualifiés et sur-mesure, axée sur la valeur plutôt que sur le prix.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fontHeader.variable} ${fontBody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
