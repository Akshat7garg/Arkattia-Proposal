import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundParticles from "@/components/BackgroundParticles";
import MagicCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arkattia.com"),

  title: {
    default: "Arkattia — Immersive Worlds. Unforgettable Stories.",
    template: "%s | Arkattia",
  },

  description:
    "Arkattia is an independent game studio founded by ex-AAA developers creating atmospheric, narrative-driven horror and sci-fi experiences powered by Unreal Engine 5.",

  keywords: [
    "Arkattia",
    "Game Studio",
    "Indie Game Studio",
    "Psychological Horror",
    "Entity Unknown",
    "Project Fujin",
    "Unreal Engine 5",
    "AAA Horror Games",
    "Atmospheric Games",
    "Narrative Driven Games",
    "Sci-Fi Horror",
    "Immersive Worlds",
  ],

  authors: [{ name: "Arkattia Studio" }],
  creator: "Arkattia",
  publisher: "Arkattia",

  applicationName: "Arkattia",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Arkattia — Immersive Worlds. Unforgettable Stories.",
    description:
      "Independent game studio crafting cinematic horror and atmospheric narrative experiences.",
    url: "https://arkattia.com",
    siteName: "Arkattia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: "Arkattia Official Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arkattia — Immersive Worlds. Unforgettable Stories.",
    description:
      "Independent game studio crafting cinematic horror and atmospheric narrative experiences.",
    images: ["/og-image.jpg"],
    creator: "@arkattia",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased bg-[#030305] text-white`}
    >
      <body className="overflow-x-hidden bg-[#030305] text-white">
        <Header />
        <BackgroundParticles />
        <MagicCursor />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}