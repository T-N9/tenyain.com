'use client'
import React from 'react'
import Image from 'next/image';
import { TNButton } from '@/components/common/buttons/TNButton';
import { useTranslations } from 'next-intl';

const HeroSection = () => {
  const t = useTranslations('HeroSection');
  const tButton = useTranslations('Button');

  return (
    <section className="bg-white dark:bg-secondary">
      <div className="flex flex-col-reverse gap-8 md:flex-row py-8 px-4 mx-auto max-w-screen-lg text-left xl:py-16 xl:px-0 justify-between">
        <div className="relative z-10 space-y-4 w-full lg:w-2/3">

          <div className='space-y-2'>
            <h1 className={` text-4xl lg:text-5xl font-black tracking-tight text-slate-600 dark:text-slate-200`}>
              {t('name')}
            </h1>

            <h2 className='text-2xl lg:text-3xl font-medium tracking-tight text-primary-600 dark:text-accent-600'> {t('title')}</h2>
          </div>

          <div className='space-y-2 '>
            <p className='text-base lg:text-xl text-slate-500'>{t('subtitle')}</p>
            <p className='text-base lg:text-lg text-slate-500'>{t('focus')}</p>
            <p className='text-base lg:text-lg text-slate-500'>{t('hobbies')}</p>

          </div>

          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-start sm:space-y-0 sm:space-x-4">
            <a href="mailto:tenyainmoelwin@gmail.com?subject=Hiring%20Inquiry%20for%20Front-end%20Development%20Project">
              <TNButton label={tButton('hireMe')} />
            </a>

          </div>
        </div>
        <div className="">
          <Image src={'/assets/hero.jpg'} width={400} height={400} alt='Portrait of TeNyain' className='object-cover w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] border-4 border-gray-200 rounded shadow' />
        </div>
      </div>
    </section>
  )
}

export default HeroSection