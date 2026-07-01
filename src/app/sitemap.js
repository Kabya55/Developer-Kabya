export default async function sitemap() {
  // Replace with your actual live production URL once deployed
  const baseUrl = "https://developer-kabya.vercel.app"; 
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
