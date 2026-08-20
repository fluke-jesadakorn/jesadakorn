import type { MetadataRoute } from "next";

import { projects } from "./work/project-data";

const baseUrl = "https://jesadakorn.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/resume`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  return [
    ...staticRoutes,
    ...projects.map((project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: project.type === "live" ? 0.9 : 0.8,
    })),
  ];
}
