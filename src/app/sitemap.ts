import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alunisson.eu"; // Utilisation du domaine principal avec www pour la cohérence
  const lastModified = new Date().toISOString();

  const routes = [
    "",
    "/ateliers",
    "/philosophie",
    "/creations",
    "/aider",
    "/contact",
    "/rejoindre",
    "/mentions-legales",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
