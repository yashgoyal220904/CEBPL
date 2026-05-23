import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { QuoteModalProvider } from "@/components/QuoteModalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CEBPL | Chaurasiya Electricals & Buildwell Private Limited",
  description: "CEBPL is a premier electrical contracting and EPC infrastructure development company. We deliver HT/LT works, industrial electrical systems, and turnkey utility projects across India.",
  keywords: [
    "Chaurasiya Electricals",
    "CEBPL",
    "Electrical Contracting India",
    "HT LT Electrical works",
    "EPC services",
    "Industrial electrification",
    "Substation installation",
    "Buildwell Private Limited",
    "Turnkey electrical projects",
    "Infrastructure electrification"
  ],
  authors: [{ name: "CEBPL Engineering Team" }],
  openGraph: {
    title: "CEBPL | Chaurasiya Electricals & Buildwell Private Limited",
    description: "Leading electrical contracting & EPC infrastructure solutions for industrial, commercial, and government projects in India.",
    url: "https://www.cebpl.com",
    siteName: "CEBPL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema markup for the corporate identity
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ElectricalBusiness",
    "name": "Chaurasiya Electricals & Buildwell Private Limited",
    "alternateName": "CEBPL",
    "url": "https://www.cebpl.com",
    "logo": "https://www.cebpl.com/logo.svg",
    "email": "chaurasiyaelectricalsbuildwell@gmail.com",
    "description": "Leading electrical contracting and EPC infrastructure development company providing HT/LT electrical works, turnkey industrial installations, and commercial electrification across India.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "slogan": "Powering Progress Through Quality Electrical Solutions"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen bg-brand-dark text-white`}
      >
        <QuoteModalProvider>
          {children}
        </QuoteModalProvider>
      </body>
    </html>
  );
}
