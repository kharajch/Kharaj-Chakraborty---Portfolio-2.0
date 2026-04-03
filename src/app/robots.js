export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Disallow any private routes if you add them later:
      // disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
