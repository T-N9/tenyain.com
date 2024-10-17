'use client'
import React, { useEffect, useState } from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import { Work } from '../HomePage/ProjectsSection';
import ProjectCard from '../common/cards/ProjectCardHome';
import LoadingProjectCardHome from '../common/cards/LoadingProjectCardHome';
import Heading from '../common/headings/Heading';

const AllWorksSection = () => {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch("/api/works");
            const data: Work[] = await response.json();
            setWorks(data.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
            setWorks(data);
            setIsLoading(false);
        };

        fetchWorks();
    }, []);

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