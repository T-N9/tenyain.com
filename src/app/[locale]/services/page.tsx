import AllServicesSection from '@/components/ServicesPage/AllServicesSection'
import CTASection from '@/components/ServicesPage/CTASection'
import React from 'react'

import { Metadata } from 'next';
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
  const path = "/services";

  return {
    title: "Services | Features and Technologies I provide",
    description:
      "As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
    keywords: [
      "Te Nyain Moe Lwin",
      "Te Nyain",
      "Moe Lwin",
      "Moe",
      "web",
      "web developer",
      "web development",
      "front-end",
      "UI",
      "Myanmar",
      "junior web developer",
      "job",
      "freelance",
      "promoting",
      "branding",
      "product branding",
      "creative",
    ],
    icons: {
      icon: "/favicon.ico",
    },
    robots: "index, follow",
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: "Services | Features and Technologies I provide",
      description:
        "As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
      images: [
        {
          url: "/meta-tn.png",
          alt: "Te Nyain Moe Lwin Services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Services | Features and Technologies I provide",
      description:
        "As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
      images: ["/meta-tn.png"],
    },
  };
}

const ServicesPage = () => {
  return (
    <>
        <AllServicesSection/>
        <CTASection/>
    </>
  )
}

export default ServicesPage
