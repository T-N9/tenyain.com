import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const CTASection = () => {
    return (
        <SectionWrapper className="bg-white dark:bg-secondary pt-16">
            <div className="flex flex-col justify-center">
                <h1 className="mb-14 text-4xl text-center font-extrabold tracking-tight leading-none text-primary-600 md:text-5xl lg:text-6xl dark:text-accent-600">
                    Open to work
                </h1>
                <p className="mb-8 max-w-2xl mx-auto text-lg font-normal text-secondary lg:text-xl dark:text-secondary">
                I am currently on the lookout for exciting job opportunities and experiences that will allow me to grow and thrive in the world of web development. Whether it`&apos;s freelance / part-time web design work, or junior-level positions, I am open to them all. Feel free to get in touch with me - I would absolutely love the chance to work with you and your amazing team!
                </p>
                
                <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0">
                   <Link href={'/services'}>
                     <Button className='bg-primary-600 hover:!bg-primary-500 dark:bg-accent-600 dark:!bg-accent-500 dark:text-secondary' size='xl' >
                         View Services
                         <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                     </Button>
                   </Link>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTASection