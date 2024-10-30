'use client'
import React, {useEffect, useRef} from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import ArticleCard from '../common/cards/ArticleCard';
import LoadingArticleCard from '../common/cards/LoadingArticleCard';
import Heading from '../common/headings/Heading';
import { useGeneralContext } from '@/context/GeneralContext';
import { useSearchParams} from "next/navigation";
import Pagination from "@/components/common/pagination/Pagination";

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
    const { articles, isLoading, fetchArticles, fetchArticlesByTag, totalPages  } = useGeneralContext();
    const fetchedTag = useRef<string | null>(null);
    const fetchedPage = useRef<number | null>(null);
    const searchParams = useSearchParams();
    const param_page = searchParams.get('page');
    const page = param_page ? parseInt(param_page) : 1;


    useEffect(() => {
        // Trigger data fetching whenever `tag` or `page` changes
        if (tag !== fetchedTag.current || page !== fetchedPage.current) {
            if (tag) {
                fetchArticlesByTag(page, 6, tag);
                console.log('Fetching articles by tag:', tag);
            } else {
                fetchArticles(page, 6, false);
                console.log('Fetching articles without tag');
            }

            // Update refs to avoid redundant fetching
            fetchedTag.current = tag;
            fetchedPage.current = page;
        }
    }, [fetchArticlesByTag, fetchArticles, tag, page]); // Dependencies: re-run on `tag` or `page` change


    return (
        <SectionWrapper>
            <Heading title='My Thoughts' />

            {
                tag !== '' && <p className="text-center">Articles by <b className='text-primary-600 dark:text-accent-600'>#{tag}</b></p>
            }
            {
                page &&
                <Pagination totalPages={totalPages} currentPage={page} tag={tag}/>
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
            {
                articles.length === 0 && <p className='text-center text-2xl'>No data for this request.</p>
            }

            {
                page &&
                <Pagination totalPages={totalPages} currentPage={page} tag={tag}/>
            }

        </SectionWrapper>
    )
}

export default AllArticlesSection