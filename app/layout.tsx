import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import FloatingSocials from "@/app/components/FloatingSocials";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://invictus-class.vercel.app"),

  title: {
    default: "INVICTUS — The Unconquered Generation",
    template: "%s | INVICTUS",
  },

  description:
    "A digital monument dedicated to the memories, journey, and legacy of Invictus.",

  keywords: [
    "Invictus",
    "Invictus Class",
    "Class Website",
    "Class Memories",
    "Student Website",
    "Digital Yearbook",
  ],

  authors: [
    {
      name: "Invictus",
    },
  ],

  creator: "Invictus",

  openGraph: {
    title: "INVICTUS — The Unconquered Generation",
    description:
      "More than a class. More than a name. A digital monument of the Invictus generation.",
    type: "website",
    locale: "en_US",
    siteName: "INVICTUS",
    images: [
      {
        url: "/images/logoinvictus.png",
        width: 1200,
        height: 630,
        alt: "Invictus — The Unconquered Generation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "INVICTUS — The Unconquered Generation",
    description:
      "A digital monument dedicated to the journey and legacy of Invictus.",
    images: ["/images/logoinvictus.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#050508",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} min-h-screen antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          {children}
          <FloatingSocials />
        </div>
      </body>
    </html>
  );
}