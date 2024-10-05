/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ohmyresume.com",
  generateRobotsTxt: true,
  exclude: ["/sitemap.xml"], // Exclude sitemap.xml, as we're generating it via App Router
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`],
  },
};
