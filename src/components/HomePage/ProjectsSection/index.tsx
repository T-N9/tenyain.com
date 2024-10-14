'use client'
import ProjectCard from "@/components/common/cards/ProjectCardHome";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import { Button } from "flowbite-react";
import React from "react";
import Slider from "react-slick";

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
    return (

        <SectionWrapper className="mt-10 lg:mt-0">
            <div className="flex justify-between items-center mb-5">
                <h2 className="text-4xl tracking-tight font-extrabold text-primary-600 dark:text-white">Projects</h2>

                <Button size="sm" color="gray">
                    View All
                </Button>
            </div>

            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-5">
                <ProjectCard
                    logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg"
                    logoAlt="Project Logo"
                    title="Gui-Transpo"
                    livePreviewLink="https://example.com"
                    description="Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it."
                // onViewCaseStudy={handleViewCaseStudy}
                />

                <ProjectCard
                    logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg"
                    logoAlt="Project Logo"
                    title="Gui-Transpo"
                    livePreviewLink="https://example.com"
                    description="Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it."
                // onViewCaseStudy={handleViewCaseStudy}
                />

                <ProjectCard
                    logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg"
                    logoAlt="Project Logo"
                    title="Gui-Transpo"
                    livePreviewLink="https://example.com"
                    description="Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it."
                // onViewCaseStudy={handleViewCaseStudy}
                />


            </div>

            <div className="lg:hidden slider-container">
                <Slider {...settings}>
                <ProjectCard
                    logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg"
                    logoAlt="Project Logo"
                    title="Gui-Transpo"
                    livePreviewLink="https://example.com"
                    description="Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it."
                // onViewCaseStudy={handleViewCaseStudy}
                />

                <ProjectCard
                    logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg"
                    logoAlt="Project Logo"
                    title="Gui-Transpo"
                    livePreviewLink="https://example.com"
                    description="Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it."
                // onViewCaseStudy={handleViewCaseStudy}
                />

                <ProjectCard
                    logoSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/customers/netflix.svg"
                    logoAlt="Project Logo"
                    title="Gui-Transpo"
                    livePreviewLink="https://example.com"
                    description="Gui-Transpo is a place to generate or customize guitar chords and lyrics with storing the data so that you can access it and sing along with it."
                // onViewCaseStudy={handleViewCaseStudy}
                />
                </Slider>
            </div>

        </SectionWrapper>
    );
};

export default ProjectsSection;
