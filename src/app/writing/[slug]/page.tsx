import ArticleHero from '@/components/ArticlePage/ArticleHero'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { getAllArticlesSlug, getArticleBySlug } from '@/lib/fetchers/writing'

export async function generateStaticParams() {
    return getAllArticlesSlug()
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