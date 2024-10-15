'use client'
import ProjectCard from "@/components/common/cards/ProjectCardHome";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import { getWorks } from "@/lib/fetchers/works";
import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

type Frontmatter = {
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

type Work = {
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
        autoplaySpeed: 2000,
        pauseOnHover: true
    };

    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        const fetchWorks = async () => {
            const response = await fetch("/api/works");
            const data: Work[] = await response.json();
            setWorks(data.map(({ frontmatter, slug }) => ({ frontmatter, slug })));
            setWorks(data);
        };

        fetchWorks();
    }, []);

    // console.log({ works })
    return (

        <SectionWrapper className="mt-10 lg:mt-0">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-4xl tracking-tight font-extrabold text-primary-600 dark:text-white">Projects</h2>

                <Button size="sm" color="gray">
                    View All
                </Button>
            </div>

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
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



            </div>

            <div className="lg:hidden slider-container">
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
            </div>

        </SectionWrapper>
    );
};

export default ProjectsSection;
