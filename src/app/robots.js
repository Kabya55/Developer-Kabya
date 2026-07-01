export default function robots() {
  const baseUrl = "https://developer-kabya.vercel.app";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
