import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alunisson.eu";
  const lastModified = new Date();

  const routes = [
    "",
    "/ateliers",
    "/philosophie",
    "/creations",
    "/aider",
    "/contact",
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
