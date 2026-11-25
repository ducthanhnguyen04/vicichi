import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/experience", "/blog", "/contact"].map(
    (route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: "2026-11-25",
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projectsData.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified: "2026-11-25",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
