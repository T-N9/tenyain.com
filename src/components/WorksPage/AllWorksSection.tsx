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
            fetchWorks(1, 6,false);
        }
    }, [fetchWorks, works.length]);

    return (
        <SectionWrapper>
            <Heading title='All Works'/>

            <div className="flex flex-col gap-10">
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
                                logoSrc={frontmatter.image}
                                logoAlt="Project Logo"
                                title={frontmatter.title}
                                livePreviewLink={frontmatter.url}
                                description={frontmatter.description}
                                technologies={frontmatter.technologies}
                                slug={slug}
                            />
                        </div>
                    ))
                }
            </div>
        </SectionWrapper>
    )
}

export default AllWorksSection