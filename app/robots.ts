import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://jesadakorn.com/sitemap.xml",
    host: "https://jesadakorn.com",
  };
}
