'use client'
import React, { useEffect, useState } from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import ArticleCard from '../common/cards/ArticleCard';
import LoadingArticleCard from '../common/cards/LoadingArticleCard';
import Heading from '../common/headings/Heading';

export type Frontmatter = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    createdAt: string;
};

export type Article = {
    frontmatter: Frontmatter;
    slug: string;
};

const AllArticlesSection = () => {

    const [articles, setArticles] = useState<Article[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch("/api/writing");
            const data: Article[] = await response.json();
            setArticles(data.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
            setArticles(data);
            setIsLoading(false);
        };

        fetchWorks();
    }, []);
    return (
        <SectionWrapper>
            <Heading title='My Thoughts'/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4'>
                {
                    isLoading ?
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
        </SectionWrapper>
    )
}

export default AllArticlesSection