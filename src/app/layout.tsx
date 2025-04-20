import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({subsets: ['latin'],weight:['400','700']});

export const metadata: Metadata = {
  openGraph: {
    title: "Adil - Premium Seeds & Fertilizers",
    description: "Providing high-quality agricultural medicines and seeds to help farmers grow better crops. Contact us today!",
    url: "https://yourdomain.com",
    siteName: "Adil Agro Services",
    images: {
      url: "https://yourdomain.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Agriculture Business Banner",
    },
    type: "website",
  },
  icons: {
    icon: "./leaf.png",
  },
  keywords: [
    "agriculture",
    "seeds",
    "farming products",
    "organic pesticides",
    "crop medicine",
  ],
  robots: "index, follow", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Adil Agro Services",
    "description": "Providing high-quality agricultural medicines and seeds to help farmers grow better crops.",
    "url": "https://yourdomain.com",
    "image": "https://yourdomain.com/og-image.jpg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-300-1234567", // Update with your business number
      "contactType": "Customer Support",
      "areaServed": "Pakistan",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near NaranJanu Mosque, Dosehra",
      "addressLocality": "Dosehra",
      "addressRegion": "Charsadda, KPK",
      "postalCode": "54000",
      "addressCountry": "PK"
    },
    "openingHours": "Mo-Su 07:00AM-07:00PM",
    "sameAs": [
      "https://facebook.com/yourbusiness",
      "https://instagram.com/yourbusiness"
    ]
  };
  return (
    <html lang="en">
      <head>
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet"/>
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}}
        />
      </head>
      <body
        className={inter.className}>
        {children}
      </body>
    </html>
  );
}
