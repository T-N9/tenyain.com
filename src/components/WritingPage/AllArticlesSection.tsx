'use client'
import React, {useEffect, useRef} from 'react'
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

const AllArticlesSection = ({tag = ''} :{tag ?:string}  ) => {
    const { articles, isLoading, fetchArticles, fetchArticlesByTag } = useGeneralContext();
    const fetchedTag = useRef<string | null>(null); // Track the last fetched tag

    useEffect(() => {
        if (tag !== '' && tag !== fetchedTag.current) {

            fetchArticlesByTag(1, 6, tag);
            fetchedTag.current = tag;
            console.log('Tag is fetching');
        } else if (tag === '' && fetchedTag.current !== '') {

            fetchArticles(1, 6, false);
            fetchedTag.current = '';
            console.log('Non Tag is fetching');
        }
    }, [fetchArticlesByTag, fetchArticles, tag]);


    return (
        <SectionWrapper>
            <Heading title='My Thoughts' />

            {
                tag !== '' && <p className="text-center">Articles by <b className='text-primary-600 dark:text-accent-600'>#{tag}</b></p>
            }
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4'>
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