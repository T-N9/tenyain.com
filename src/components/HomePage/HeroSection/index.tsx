import React from 'react'
import CharacterHead from './Character/CharacterHead'
import { Button } from 'flowbite-react'

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-secondary">
      <div className="flex flex-col gap-y-20 lg:flex-row py-8 px-4 mx-auto max-w-screen-xl text-left lg:py-16 lg:px-0">
        <div className="flex-1 relative z-10">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-secondary bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-secondary" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Checkout my notes. See what&apos;s new</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
          </a>
          <p className="text-2xl text-secondary">Hello there, I am <span className="font-bold text-primary-600">Te Nyain</span></p>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-secondary md:text-5xl lg:text-5xl dark:text-white">A Front-end Developer</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">A developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
            <Button className='bg-primary-600 hover:!bg-primary-500' size='xl' >
              Hire Me
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Button>
            
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