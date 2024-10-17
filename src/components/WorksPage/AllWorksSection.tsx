'use client'
import React, { useEffect } from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import ProjectCard from '../common/cards/ProjectCardHome';
import LoadingProjectCardHome from '../common/cards/LoadingProjectCardHome';
import Heading from '../common/headings/Heading';
import { useGeneralContext } from '@/context/GeneralContext';

const AllWorksSection = () => {

    const { works, isLoading, fetchWorks } = useGeneralContext();

    useEffect(() => {
        if (works.length === 0) {
            fetchWorks(1, 6);
        }
    }, [fetchWorks, works.length]);

    return (
        <SectionWrapper>
            <Heading title='Recent Works'/>

            <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
                {isLoading ?
                    <>
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                    </>
                    :
                    works.map(({ frontmatter, slug }) => (
                        <div key={slug}>
                            <ProjectCard
                                key={slug}
                                logoSrc={frontmatter.logo}
                                logoAlt="Project Logo"
                                title={frontmatter.title}
                                livePreviewLink={frontmatter.url}
                                description={frontmatter.description}
                                technologies={frontmatter.technologies}
                                slug={slug}
                            />
                            <hr className='my-10 lg:hidden'/>
                        </div>
                    ))
                }
            </div>
        </SectionWrapper>
    )
}

export default AllWorksSection