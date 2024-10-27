import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { generateBaseMetadata } from "@/utils/metadata";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = generateBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <GoogleTagManager gtmId="G-8BN3464P7H" />
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-8BN3464P7H" />
    </html>
  );
}
