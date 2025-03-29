import React from 'react'
import CharacterHead from './Character/CharacterHead'
import { Button } from 'flowbite-react'
import { heading_font } from "@/fonts/fonts";
import Typewriter from '@/components/animation/Typewriter';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-secondary">
      <div className="flex flex-col gap-y-20 md:flex-row py-8 px-4 mx-auto max-w-screen-xl text-left xl:py-16 xl:px-0">
        <div className="flex-1 relative z-10">
          <a aria-label="Click to view my notes" href="https://notes.tenyain.com/" target='_blank' rel="noreferrer" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-secondary bg-gray-100 rounded-full dark:bg-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 duration-100 transition-all">
            <span className="text-xs bg-primary-600 dark:bg-accent-600 rounded-full text-white dark:text-secondary px-4 py-1.5 mr-3">New</span> <span className="lg:text-sm text-xs font-medium">See what&apos;s new on the feed </span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          <p className="text-2xl text-secondary">Hello, I am <span className="font-bold text-primary-600 dark:text-accent-600">Te Nyain</span>,</p>
          <h1 className={`${heading_font.className} mb-4 text-4xl font-extrabold tracking-tight leading-none text-secondary md:text-5xl lg:text-5xl dark:text-white uppercase`}>A <Typewriter
            text={[
              "Developer",
              "Designer",
              "Composer",
              "Writer"
            ]}
            speed={70}
            className="text-primary-600 dark:text-accent-600"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          /></h1>
          <p className="mb-8 text-lg font-normal text-secondary lg:text-xl dark:text-secondary">who delivers fast and reliable websites.<br className='hidden lg:block'/> I care about your business values and targeted customers to meet your golden goals for tomorrow.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
            <a href="mailto:tenyainmoelwin@gmail.com?subject=Hiring%20Inquiry%20for%20Front-end%20Development%20Project">
              <Button className='primary-btn' size='xl' >
                Hire Me
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Button>
            </a>

          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <CharacterHead />
        </div>
      </div>
    </section>
  )
}

export default HeroSection