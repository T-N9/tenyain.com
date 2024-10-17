'use client'
import LoadingProjectCardHome from "@/components/common/cards/LoadingProjectCardHome";
import ProjectCard from "@/components/common/cards/ProjectCardHome";
import Heading from "@/components/common/headings/Heading";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import { Button } from "flowbite-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

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
    technologies: string[]
};

export type Work = {
    frontmatter: Frontmatter;
    slug: string;
};


const ProjectsSection = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch("/api/worksPage?pageNo=1&count=3");
            const data = await response.json();
            const worksArray: Work[] = data.works;
            setWorks(worksArray.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
            setIsLoading(false);
        };

        fetchWorks();
    }, []);

    return (

        <SectionWrapper className="mt-20 lg:mt-0">
            <div className="flex justify-between items-center mb-14">
                <Heading title="Projects" className="!mb-0" />

                <Link href={'/works'}>
                    <Button size="sm" color="gray">
                        View All
                    </Button>
                </Link>
            </div>

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
                {isLoading ?
                    <>
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                        <LoadingProjectCardHome />
                    </>
                    :
                    works.map(({ frontmatter, slug }) => (
                        <ProjectCard
                            key={slug}
                            logoSrc={frontmatter.logo}
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

            <div className="lg:hidden slider-container">
                {
                    isLoading ? <LoadingProjectCardHome /> :
                        <Slider {...settings}>
                            {
                                works.map(({ frontmatter, slug }) => (
                                    <ProjectCard
                                        key={slug}
                                        logoSrc={frontmatter.logo}
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
                        </Slider>
                }

            </div>

        </SectionWrapper>
    );
};

export default ProjectsSection;
