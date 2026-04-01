import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alunisson.fr";
  const lastModified = new Date();

  const routes = [
    "",
    "/ateliers",
    "/initiations",
    "/aider",
    "/philosophie",
    "/infos",
    "/rejoindre",
    "/mentions-legales",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
