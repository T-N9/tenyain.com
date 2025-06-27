'use client'
import React, { useEffect } from "react";
import LoadingProjectCardHome from "@/components/common/cards/LoadingProjectCardHome";
import ProjectCard from "@/components/common/cards/ProjectCardHome";
import Heading from "@/components/common/headings/Heading";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import { useGeneralContext } from "@/context/GeneralContext";
import { Button } from "flowbite-react";
import Link from "next/link";


export type Frontmatter = {
    title: string;
    description: string;
    type: string;
    status: string;
    role: string;
    period: string;
    url: string;
    logo: string;
    colors: string[];
    technologies: string[],
    image: string;
    tagline: string
};

export type Work = {
    frontmatter: Frontmatter;
    slug: string;
};


const ProjectsSection = () => {

    const { demoWorks, isLoading, fetchWorks } = useGeneralContext();

    useEffect(() => {
        if (demoWorks.length === 0) {
            fetchWorks(1, 3, true);
        }
    }, [fetchWorks, demoWorks.length]);


    return (

        <SectionWrapper className="lg:mt-0">
            <div className="flex justify-between items-center mb-14">
                <Heading title="Projects" className="!mb-0" />

                <Link href={'/works'}>
                    <Button className="secondary-btn" size="sm" color="gray">
                        View All
                    </Button>
                </Link>
            </div>

            <div className="flex flex-col gap-10">
                {isLoading ?
                    <>
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                    </>
                    :
                    demoWorks.map(({ frontmatter, slug }) => (
                        <ProjectCard
                            key={slug}
                            logoSrc={frontmatter.image}
                            logoAlt="Project Logo"
                            title={frontmatter.title}
                            livePreviewLink={frontmatter.url}
                            description={frontmatter.description}
                            technologies={frontmatter.technologies}
                            slug={slug}
                        // onViewCaseStudy={handleViewCaseStudy}
                        />
                    ))
                }
            </div>

        </SectionWrapper>
    );
};

export default ProjectsSection;
