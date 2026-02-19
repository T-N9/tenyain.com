import { Metadata } from 'next'

/* Components */
import { Divider, ListenRecommendation } from "@/components";
import { HeroSection } from "@/components/AboutPage";
import { MottoSection, SkillSection, TestimonialSection } from "@/components/HomePage";
import ExperienceSection from '@/components/AboutPage/ExperienceSection';
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
  const path = "/about";

  return {
    title: "About Te Nyain Moe Lwin | Who am I?",
    description:
      "I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites.",
    keywords:
      "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative",
    robots: "index, follow",
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: "About Te Nyain Moe Lwin | Who am I?",
      description:
        "I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites.",
      images: [{ url: "/meta-tn.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Te Nyain Moe Lwin | Who am I?",
      description:
        "I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites.",
      images: ["/meta-tn.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      {/* <TimelineSection /> */}
      <Divider />
      <ExperienceSection />
      <SkillSection />
      <Divider />
      <TestimonialSection />
      <Divider />
      <MottoSection />
      <Divider />
      <ListenRecommendation />
    </>
  )
}

export default AboutPage
