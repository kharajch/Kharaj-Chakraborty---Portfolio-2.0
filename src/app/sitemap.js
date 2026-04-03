export default function sitemap() {
  // Use environment variable if available, otherwise fallback to a placeholder domain
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Example of how to add more routes if you create them in the future:
    // {
    //   url: `${baseUrl}/projects`,
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}
