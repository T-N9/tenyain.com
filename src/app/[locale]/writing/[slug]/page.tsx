import ArticleHero from '@/components/ArticlePage/ArticleHero'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { getAllArticlesSlug, getArticleBySlug } from '@/lib/fetchers/writing'
import { Metadata } from 'next';
import {Breadcrumb} from "flowbite-react";
import Link from "next/link";
import React from "react";
import {
  buildLocaleAlternates,
  buildLocalePath,
  getOpenGraphLocale,
  toSiteLocale,
} from "@/lib/seo";

export async function generateStaticParams() {
    return getAllArticlesSlug()
}



export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  const locale = toSiteLocale(params.locale);
  const path = `/writing/${params.slug}`;

  return {
    title: `${article.frontmatter.title} | Te Nyain Moe Lwin`,
    description: article.frontmatter.description,
    keywords: article.frontmatter.tags || [],
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: 'article',
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [
        {
          url: article.frontmatter.image || '/meta-tn.png',
          alt: article.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [article.frontmatter.image || '/meta-tn.png'],
    },
    robots: 'index, follow',
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1192d3',
    icons: {
      icon: '/favicon.ico',
    },
  };
}


const ArticlePage = async ({
    params,
}: {
    params: { slug: string, locale: string };
}) => {
    const article = await getArticleBySlug(params.slug)
    const locale = params.locale;
    return (
        <>
            <SectionWrapper>

                <div className='max-w-screen-md mx-auto flex flex-col gap-5'>
                    <ArticleHero
                        title={article.frontmatter.title}
                        createdAt={article.frontmatter.createdAt}
                        tags={article.frontmatter.tags}
                        image={article.frontmatter.image}
                    />
                    <div className='mdx-wrapper'>
                        {article.content}
                    </div>
                    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-100 rounded-md px-5 py-3 dark:bg-gray-800">
                        <Breadcrumb.Item>
                            <Link href={`/${locale}`}>Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item><Link href={`/${locale}/writing`}>Writing</Link></Breadcrumb.Item>
                        <Breadcrumb.Item className="opacity-70"><span className={'line-clamp-1'}>{article.frontmatter.title}</span></Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </SectionWrapper>
        </>
    )
}

export default ArticlePage
