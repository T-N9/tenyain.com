'use client'
import React, { useEffect, useState } from 'react'
import SectionWrapper from '../common/wrappers/SectionWrapper'
import { Work } from '../HomePage/ProjectsSection';
import ProjectCard from '../common/cards/ProjectCardHome';
import LoadingProjectCardHome from '../common/cards/LoadingProjectCardHome';

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
            <h2 className="text-4xl tracking-tight font-extrabold text-center text-primary-600 dark:text-white">Recent Works</h2>

            <div className="lg:grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                {isLoading ?
                    <>
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                    </>
                    :
                    works.map(({ frontmatter, slug }) => (
                        <div>
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
                            <hr className='my-5 lg:hidden'/>
                        </div>
                    ))
                }
            </div>
        </SectionWrapper>
    )
}

export default AllWorksSection