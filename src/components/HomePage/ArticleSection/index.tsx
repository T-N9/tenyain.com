'use client'
import ArticleCard from '@/components/common/cards/ArticleCard';
import LoadingArticleCard from '@/components/common/cards/LoadingArticleCard';
import Heading from '@/components/common/headings/Heading'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { useGeneralContext } from '@/context/GeneralContext';
import { Button } from 'flowbite-react';
import Link from 'next/link';
import React, { useEffect } from 'react'
import Slider from 'react-slick';

const ArticleSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 560,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
           
          ]
    };

    const { demoArticles, isLoading, fetchArticles } = useGeneralContext();

    useEffect(() => {
        if (demoArticles.length === 0) {
            fetchArticles(1, 3, true);
        }
    }, [fetchArticles, demoArticles.length]);

    return (
        <SectionWrapper>
            <div className="flex justify-between items-center mb-14">
                <Heading title="Latest Articles" align={'left'} className="!mb-0" />

                <Link href={'/writing'}>
                    <Button className='secondary-btn' size="sm" color="gray">
                        View All
                    </Button>
                </Link>
            </div>

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
                {isLoading ?
                    <>
                        <LoadingArticleCard />
                        <LoadingArticleCard />
                        <LoadingArticleCard />
                    </>
                    :
                    demoArticles.map(({ frontmatter, slug }) => (
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
                        <Slider className="space-x-4" {...settings}>
                            {
                                demoArticles.map(({ frontmatter, slug }) => (
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