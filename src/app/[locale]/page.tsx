import { Metadata } from "next";
import { Divider } from "@/components";
import {
  HeroSection,
  ArticleSection,
  ContactSection,
  ProjectsSection,
  SkillSection,
} from "@/components/HomePage";
import {
  buildLocaleAlternates,
  buildLocalePath,
  getOpenGraphLocale,
  toSiteLocale,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = toSiteLocale(params.locale);
  const path = "";

  return {
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
    },
  };
}

export default function Home({ params }: { params: { locale: string } }) {
  return (
    <main>
      <HeroSection />
      <ProjectsSection locale={params.locale} />
      <Divider />
      <SkillSection />
      <Divider />
      <ArticleSection locale={params.locale} />
      <Divider />
      <ContactSection />
    </main>
  );
}
