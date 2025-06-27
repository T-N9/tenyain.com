import React from 'react'
import Image from 'next/image';
import { TNButton } from '@/components/common/buttons/TNButton';

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-secondary">
      <div className="flex flex-col-reverse gap-8 md:flex-row py-8 px-4 mx-auto max-w-screen-lg text-left xl:py-16 xl:px-0 justify-between">
        <div className="relative z-10 space-y-4 w-full lg:w-2/3">
          {/* <a aria-label="Click to view my notes" href="https://notes.tenyain.com/" target='_blank' rel="noreferrer" className="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-secondary bg-gray-100 rounded-full dark:bg-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 duration-100 transition-all">
            <span className="text-xs bg-primary-600 dark:bg-accent-600 rounded-full text-white dark:text-secondary px-4 py-1.5 mr-3">New</span> <span className="lg:text-sm text-xs font-medium">See what&apos;s new on the feed </span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a> */}

          <div className='space-y-2'>
            <h1 className='text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-600 dark:text-slate-200'>
              Te Nyain Moe Lwin
            </h1>

            <h2 className='text-2xl lg:text-3xl font-medium tracking-tight text-primary-600 dark:text-accent-600'>Creative Front-end Developer</h2>
          </div>

          <div className='space-y-2 '>
            <p className='text-base lg:text-xl text-slate-500'> Transforming unique ideas into reality, one pixel at a time, creating accessible and visually stunning user experiences.</p>

            <p className='text-base lg:text-lg text-slate-500'> I am currently focusing on Next.JS, Node.JS, Japanese Kanji Characters and stepping into AI and Machine Learning.
            </p>

            <p className='text-base lg:text-lg text-slate-500'> Love to sing, compose, and play guitar, exploring both art and technology.</p>

          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
            <a href="mailto:tenyainmoelwin@gmail.com?subject=Hiring%20Inquiry%20for%20Front-end%20Development%20Project">
              <TNButton label='Hire Me'/>
            </a>

          </div>
        </div>
        <div className="">
          {/* <CharacterHead /> */}
          <Image src={'/assets/hero.jpg'} width={400} height={400} alt='Portrait of TeNyain' className='object-cover w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] border-4 border-gray-200 rounded shadow' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection