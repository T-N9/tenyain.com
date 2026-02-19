import { Divider } from "@/components";
import MusicSection from "@/components/MusicSection";
import AllWorksSection from "@/components/WorksPage/AllWorksSection";
import NewsletterSection from "@/components/WritingPage/NewsletterSection/NewsletterForm";
import { Metadata } from "next";
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
  const path = "/works";

  return {
    title: "Works | My project experience",
    description:
      "Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas.",
    keywords:
      "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative",
    robots: "index, follow",
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: "Works | My project experience",
      description:
        "Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas.",
      images: [{ url: "/meta-tn.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Works | My project experience",
      description:
        "Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas.",
      images: ["/meta-tn.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const WorksPage = () => {
  return (
    <>
      <AllWorksSection />
      <Divider />
      <MusicSection />
      <Divider />
      <NewsletterSection />
    </>
  );
};

export default WorksPage;

