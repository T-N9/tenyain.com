'use client'
import React, { useEffect } from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import ArticleCard from '../common/cards/ArticleCard';
import LoadingArticleCard from '../common/cards/LoadingArticleCard';
import Heading from '../common/headings/Heading';
import { useGeneralContext } from '@/context/GeneralContext';

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
    const { articles, isLoading, fetchArticles } = useGeneralContext();

    useEffect(() => {
        if (articles.length === 0) {
            fetchArticles(1, 6, false);
        }
    }, [fetchArticles, articles.length]);


    return (
        <SectionWrapper>
            <Heading title='My Thoughts' />
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-4'>
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