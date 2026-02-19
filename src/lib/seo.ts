import { DEFAULT_LOCALE, SiteLocale } from "@/lib/site";

export function toSiteLocale(locale: string): SiteLocale {
  return locale === "ja" ? "ja" : "en";
}

export function buildLocalePath(locale: SiteLocale, path = ""): string {
  const normalized = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";
  return `/${locale}${normalized}`;
}

export function buildLocaleAlternates(path: string, locale: SiteLocale) {
  return {
    canonical: buildLocalePath(locale, path),
    languages: {
      en: buildLocalePath("en", path),
      ja: buildLocalePath("ja", path),
      "x-default": buildLocalePath(DEFAULT_LOCALE, path),
    },
  };
}

export function getOpenGraphLocale(locale: SiteLocale): string {
  return locale === "ja" ? "ja_JP" : "en_US";
}

