import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <SectionWrapper>
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div>
                    <Image src={'/assets/profile.webp'} width={360} height={437} alt='My Picture'/>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-normal text-gray-900 dark:text-white">I am Te Nyain Moe Lwin, 23 years old creative front-end web developer with 2+ years experience. I am here to help</h2>
                    <h1 className='mb-4 text-6xl tracking-tight font-bold text-gray-900 dark:text-white'>
                        Turn your idea into life.
                    </h1>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Since 2020, I have enjoyed learning digital design, web development, and content creation to deliver implicit and reachable information.</p>
                    <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                        Get started
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HeroSection