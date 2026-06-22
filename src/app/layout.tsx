import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ltotrackeronline.ph"),
  title: {
    default: "LTO Tracker — Check Plate, License & MV File Status",
    template: "%s",
  },
  description:
    "Track your LTO plate number, driver's license, and MV file status online. Free LTO tracker tool for the Philippines with real-time status updates, branch finder, and renewal calculator.",
  keywords: [
    "LTO Tracker",
    "LTO plate tracker",
    "LTO license tracker",
    "MV file checker",
    "LTO Philippines",
    "check LTO plate status",
    "LTO branch",
    "LTO renewal",
    "LTO status check",
    "plate number tracking Philippines",
  ],
  authors: [{ name: "LTO Tracker", url: "https://ltotrackeronline.ph" }],
  creator: "LTO Tracker",
  publisher: "LTO Tracker",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://ltotrackeronline.ph",
    siteName: "LTO Tracker",
    title: "LTO Tracker — Check Plate, License & MV File Status Online",
    description:
      "Track your LTO plate number, driver's license, and MV file status online. Free LTO tracker for the Philippines.",
    images: [
      {
        url: "/LTO-Tracker-Banner.webp",
        width: 1200,
        height: 630,
        alt: "LTO Tracker — LTO Tracker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LTO Tracker — Check Plate, License & MV File Status Online",
    description:
      "Track your LTO plate number, driver's license, and MV file status online. Free LTO tracker for the Philippines.",
    images: ["/LTO-Tracker-Banner.webp"],
  },
  alternates: {
    canonical: "https://ltotrackeronline.ph",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link rel="icon" href="/LTO-Logo.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/LTO-Logo.webp" />
      </head>
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
