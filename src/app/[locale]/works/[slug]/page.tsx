import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import HeroSection from "@/components/WorksPage/HeroSection";
import { getAllWorksSlug, getWorkBySlug } from "@/lib/fetchers/works";
import { Metadata } from "next";
import React from "react";
import {Breadcrumb} from "flowbite-react";
import Link from "next/link";
import {
  buildLocaleAlternates,
  buildLocalePath,
  getOpenGraphLocale,
  toSiteLocale,
} from "@/lib/seo";

export async function generateStaticParams() {
  return getAllWorksSlug();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const work = await getWorkBySlug(params.slug);
  const locale = toSiteLocale(params.locale);
  const path = `/works/${params.slug}`;

  return {
    title: work.frontmatter.title,
    description: work.frontmatter.description,
    keywords:
      "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, web development, front-end, portfolio, project",
    robots: "index, follow",
    alternates: buildLocaleAlternates(path, locale),
    themeColor: "#1192d3",
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: work.frontmatter.title,
      description: work.frontmatter.description,
      images: [{ url: "/meta-tn.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: work.frontmatter.title,
      description: work.frontmatter.description,
      images: [{ url: "/meta-tn.png" }],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

const WorkPage = async ({ params }: { params: { slug: string, locale: string },  }) => {
  const work = await getWorkBySlug(params.slug);
   const locale = params.locale;

  // console.log({work})
  return (
    <SectionWrapper>
      <div className="max-w-screen-md mx-auto">
        <HeroSection
          title={work.frontmatter.title}
          image={work.frontmatter.image}
          period={work.frontmatter.period}
          role={work.frontmatter.role}
          status={work.frontmatter.status}
          tagline={work.frontmatter.tagline}
          technologies={work.frontmatter.technologies}
          type={work.frontmatter.type}
          url={work.frontmatter.url}
        />
        <div className="mdx-wrapper">{work.content}</div>
        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-100 rounded-md px-5 py-3 dark:bg-gray-800">
          <Breadcrumb.Item>
            <Link href={`/${locale}`}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item><Link href={`/${locale}/works`}>Works</Link></Breadcrumb.Item>
          <Breadcrumb.Item className="opacity-50">{work.frontmatter.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </SectionWrapper>
  );
};

export default WorkPage;
