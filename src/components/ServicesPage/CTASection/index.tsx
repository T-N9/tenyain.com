import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import { Button } from "flowbite-react";
import React from "react";

const CTASection = () => {
    return (
        <SectionWrapper className="bg-white dark:bg-secondary">
            <div className="flex flex-col justify-center">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary-600 dark:text-accent-600 md:text-5xl lg:text-6xl">
                    Your goal is my mission.
                </h1>
                <p className="mb-8 text-lg font-normal text-secondary lg:text-xl dark:text-secondary">
                    As a front-end web developer, I make sure that my website has good
                    design qualities, from colors, and typography to clean coding and
                    performance. Nowadays, there are so many ways to create web content
                    but to attract users at the very first seconds of your webpage, the
                    content has to be clear and interactive to various devices.
                </p>
                <p className="mb-8 text-lg font-normal text-secondary lg:text-xl dark:text-secondary">
                    My design is simple, minimal, and reachable to users. I build and
                    learn newer technologies to deliver fast and reliable websites.
                </p>
                <p className='mb-4 text-2xl tracking-tight font-bold text-secondary dark:text-white'>
                    “I care about your business values and targeted customers to meet your golden goals for tomorrow.”
                </p>
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <a href="mailto:tenyainmoelwin@gmail.com?subject=Hiring%20Inquiry%20for%20Front-end%20Development%20Project">
                        <Button className='primary-btn' size='xl' >
                            Hire Me
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </Button>
                    </a>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
