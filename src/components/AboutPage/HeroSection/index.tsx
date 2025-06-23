import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import Image from 'next/image'
import React from 'react'
import { heading_font } from "@/fonts/fonts";

const HeroSection = () => {
    return (
        <SectionWrapper>
            <div className="gap-8 items-center py-8 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div className='h-full relative'>
                    <div className='sticky top-20'>
                        <div className='relative'>
                            <Image className='rounded-lg lg:rounded-sm relative z-10' src={'/assets/profile.webp'} width={360} height={437} alt='My Picture' />

                            <div className='absolute hidden lg:flex justify-center items-center left-[20%] top-0 z-0 w-[437px] h-[437px] rounded-full bg-primary-100 dark:bg-accent-800'>
                                <div className=' w-[200px] h-[200px] rounded-full bg-primary-600 dark:bg-accent-600'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-normal">I am <span className='font-extrabold text-primary-600 dark:text-accent-600'>Te Nyain Moe Lwin</span>, a creative front-end web developer. I am here to help</h2>
                    <h1 className={`${heading_font.className} uppercase mb-4 text-4xl lg:text-6xl tracking-tight font-bold text-secondary dark:text-white`}>
                        Turn your <span className=' text-primary-600 dark:text-accent-600'>idea</span> into life.
                    </h1>
                    <p className="mb-6 text-lg font-normal text-secondary lg:text-xl dark:text-secondary">Since 2020, I have enjoyed learning digital design, web development, and content creation to deliver implicit and reachable information.</p>

                    <p className="mb-6 text-lg font-normal text-secondary lg:text-xl dark:text-secondary">I am a <a className="font-bold" href="https://en.wikipedia.org/wiki/Karen_people">Karen</a>, a computer science student from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea.</p>

                    <p className='mb-6 text-lg font-normal text-secondary lg:text-xl dark:text-secondary'>
                        Currently, pursuing a Bachelor of Computing at the <a className="font-bold text-primary-600 dark:text-accent-600" href="https://www.gre.ac.uk/">University of Greenwich, UK</a>.
                    </p>

                    <p className='mb-4 text-2xl tracking-tight font-normal text-secondary dark:text-white'>
                        “My goal is to deliver a front-end stack from scratch to well-performed websites.”
                    </p>

                    <p className="mb-6 text-lg font-normal text-secondary lg:text-xl dark:text-secondary">I love to create UI designs and prototypes before implementations. Collaborations make me improve in both my technical skills and communication. I play and compose music during my spare time.</p>

                    <p className='mb-4 text-2xl tracking-tight font-bold text-primary-600 dark:!text-accent-600'>
                        “I care about your business values and targeted customers to meet your golden goals for tomorrow.”
                    </p>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HeroSection