import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_TITLE,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: process.env.NEXT_PUBLIC_OG_IMAGE!,
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_SITE_NAME} AI Chat Resume Builder`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    images: [process.env.NEXT_PUBLIC_TWITTER_IMAGE!],
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <GoogleTagManager gtmId="G-1YKVVQRTQ8" />
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-1YKVVQRTQ8" />
    </html>
  );
}
