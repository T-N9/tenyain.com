export const SITE_URL = "https://www.tenyain.com";

export const SUPPORTED_LOCALES = ["en", "ja"] as const;
export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: SiteLocale = "en";

