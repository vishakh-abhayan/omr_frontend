import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://blog.ohmyresume.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 2,
    },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/waitlist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 3,
    },
  ];
}
