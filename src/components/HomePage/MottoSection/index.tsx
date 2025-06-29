'use client'
import { Blockquote } from "flowbite-react";
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import { heading_font } from "@/fonts/fonts";
import VerticalCutReveal, { VerticalCutRevealRef } from "@/components/animation/VerticalCutReveal";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";


function MottoSection() {
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
        <SectionWrapper className='my-7 lg:my-14'>
            <Blockquote className='text-center text-secondary/40 dark:text-slate-200 text-3xl lg:text-6xl'>
                <svg
                    className="mb-4 mx-auto h-8 w-8 fill-primary-600 dark:fill-accent-600  dark:text-secondary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <div ref={ref} className={`${heading_font.className} font-black  hidden lg:block`}>
                    <VerticalCutReveal
                        splitBy="characters"
                        staggerDuration={0.002}
                        staggerFrom="random"
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 35,
                            // delay: 0.4,
                        }}
                        ref={textRef}
                        autoStart={false}
                        containerClassName="text-[#00000] justify-center leading-snug">
                        If I cannot build a wall, I will lay a brick every day one by one until it becomes a wall.
                    </VerticalCutReveal>



                </div>

                <div className={`${heading_font.className} font-black  lg:hidden block`}>
                    <h1> 
                        If I cannot build a wall, I will lay a brick every day one by one until it becomes a wall.
                    </h1>
                </div>

            </Blockquote>
        </SectionWrapper>
    );
}

export default MottoSection;


