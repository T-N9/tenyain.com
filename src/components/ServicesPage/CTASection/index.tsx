'use client'
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import React, { useEffect, useRef } from "react";
import { heading_font } from "@/fonts/fonts";
import VerticalCutReveal, { VerticalCutRevealRef } from "@/components/animation/VerticalCutReveal";
import { useInView } from "framer-motion";
import { TNButton } from "@/components/common/buttons/TNButton";

const CTASection = () => {
    const ref = useRef(null)
    const textRef = useRef<VerticalCutRevealRef>(null)
    const isInView = useInView(ref, { once: false })

    useEffect(() => {
        if (isInView) {
            textRef.current?.startAnimation()
        } else {
            textRef.current?.reset()
        }
    }, [isInView])
    return (
        <SectionWrapper className="bg-white dark:bg-secondary">
            <div className="flex flex-col justify-center">
                <h1 ref={ref} className={`${heading_font.className} uppercase mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary-600 dark:text-accent-600 md:text-5xl lg:text-6xl`}>
                    <VerticalCutReveal
                        splitBy="characters"
                        staggerDuration={0.002}
                        staggerFrom="random"
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 35,
                        }}
                        ref={textRef}
                        autoStart={false}
                        containerClassName="text-[#00000] leading-snug">Your goal is my mission.</VerticalCutReveal>

                </h1>
                <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-500">
                    I&apos;m a front-end developer who believes that design is more than just aesthetics — it&apos;s about clarity, performance, and experience. From color and typography to clean, scalable code, every detail matters.
                    In today&apos;s web landscape, users form impressions within seconds. That&apos;s why I focus on clear content, responsive design, and engaging interactions — across all devices.
                </p>
                <p className="mb-8 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-500">
                    My approach is simple: minimalist, user-centered, and fast. I continuously explore modern technologies to build websites that are not only visually appealing but also reliable and lightning-fast.
                </p>
                <p className='mb-4 text-2xl tracking-tight font-bold text-primary-600 dark:!text-accent-600'>
                    “I care about your business values and targeted customers to meet your golden goals for tomorrow.”
                </p>
                <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                    <a href="mailto:tenyainmoelwin@gmail.com?subject=Hiring%20Inquiry%20for%20Front-end%20Development%20Project">
                        <TNButton  label="Hire Me" />

                    </a>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTASection;
