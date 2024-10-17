import ArticleHero from '@/components/ArticlePage/ArticleHero'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { getAllArticlesSlug, getArticleBySlug } from '@/lib/fetchers/writing'
import { Metadata } from 'next';

export async function generateStaticParams() {
    return getAllArticlesSlug()
}



export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);

  return {
    title: `${article.frontmatter.title} | Te Nyain Moe Lwin`,
    description: article.frontmatter.description,
    keywords: article.frontmatter.tags || [],
    openGraph: {
      type: 'article',
      locale: 'en-US',
      url: `https://www.tenyain.com/writing/${params.slug}`,
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [
        {
          url: article.frontmatter.image || 'default-image.png',
          alt: article.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      images: [article.frontmatter.image || 'default-image.png'],
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
    params: { slug: string }
}) => {
    const article = await getArticleBySlug(params.slug)
    return (
        <>
            <SectionWrapper>

                <div className='max-w-3xl mx-auto flex flex-col gap-5'>
                    <ArticleHero
                        title={article.frontmatter.title}
                        createdAt={article.frontmatter.createdAt}
                        tags={article.frontmatter.tags}
                        image={article.frontmatter.image}
                    />
                    <div className='mdx-wrapper'>
                        {article.content}
                    </div>
                </div>

            </SectionWrapper>
        </>
    )
}

export default ArticlePage