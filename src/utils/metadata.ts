import { Metadata } from "next";

export function generateBaseMetadata(pageTitle?: string): Metadata {
  const title = pageTitle
    ? `${pageTitle} | ${process.env.NEXT_PUBLIC_SITE_NAME}`
    : process.env.NEXT_PUBLIC_SITE_TITLE;

  return {
    title,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    keywords: process.env.NEXT_PUBLIC_SITE_KEYWORDS,
    openGraph: {
      title,
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
      title,
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
}
