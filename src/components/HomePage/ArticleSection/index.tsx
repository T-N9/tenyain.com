'use client'
import ArticleCard from '@/components/common/cards/ArticleCard';
import LoadingArticleCard from '@/components/common/cards/LoadingArticleCard';
import Heading from '@/components/common/headings/Heading'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Article } from '@/components/WritingPage/AllArticlesSection';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

const ArticleSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await fetch("/api/articlesPage?pageNo=1&count=3");
            const data = await response.json();
            const articleArray: Article[] = data.articles;
            setArticles(articleArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
            setIsLoading(false);
        };

        fetchArticles();
    }, []);

    return (
        <SectionWrapper>
            <Heading title='Latest Articles' />

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
                {isLoading ?
                    <>
                        <LoadingArticleCard />
                        <LoadingArticleCard />
                        <LoadingArticleCard />
                    </>
                    :
                    articles.map(({ frontmatter, slug }) => (
                        <ArticleCard
                            key={slug}
                            title={frontmatter.title}
                            createdAt={frontmatter.createdAt}
                            description={frontmatter.description}
                            image={frontmatter.image}
                            tags={frontmatter.tags}
                            href={slug}
                        />
                    ))
                }
            </div>
            <div className="lg:hidden slider-container">
                {
                    isLoading ? <LoadingArticleCard /> :
                        <Slider {...settings}>
                            {
                                articles.map(({ frontmatter, slug }) => (
                                    <ArticleCard
                                        key={slug}
                                        title={frontmatter.title}
                                        createdAt={frontmatter.createdAt}
                                        description={frontmatter.description}
                                        image={frontmatter.image}
                                        tags={frontmatter.tags}
                                        href={slug}
                                    />
                                ))
                            }
                        </Slider>
                }

            </div>
        </SectionWrapper>
    )
}

export default ArticleSection