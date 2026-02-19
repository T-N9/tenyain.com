import type { MetadataRoute } from "next";
import { getAllArticlesSlug } from "@/lib/fetchers/writing";
import { getAllWorksSlug } from "@/lib/fetchers/works";
import { SITE_URL, SUPPORTED_LOCALES } from "@/lib/site";
import { buildLocalePath } from "@/lib/seo";

const staticRoutes = [
  "",
  "/about",
  "/works",
  "/writing",
  "/services",
  "/contact",
  "/newsletter",
  "/privacy-and-policy",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap(
    (locale) =>
      staticRoutes.map((route) => ({
        url: `${SITE_URL}${buildLocalePath(locale, route)}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
      })),
  );

  const articleSlugs = getAllArticlesSlug();
  const articleEntries: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap(
    (locale) =>
      articleSlugs.map(({ slug }) => ({
        url: `${SITE_URL}${buildLocalePath(locale, `/writing/${slug}`)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      })),
  );

  const workSlugs = getAllWorksSlug();
  const workEntries: MetadataRoute.Sitemap = SUPPORTED_LOCALES.flatMap(
    (locale) =>
      workSlugs.map(({ slug }) => ({
        url: `${SITE_URL}${buildLocalePath(locale, `/works/${slug}`)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      })),
  );

  return [...staticEntries, ...articleEntries, ...workEntries];
}

