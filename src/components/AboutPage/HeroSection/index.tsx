'use client';

import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import Image from 'next/image';
import { heading_font } from '@/fonts/fonts';
import { useTranslations } from 'next-intl';
import React from 'react';

const HeroSection = () => {
    const t = useTranslations('AboutHeroSection');

    return (
        <SectionWrapper>
            <div className="items-center mx-auto max-w-screen-xl md:grid md:grid-cols-2 py-8">
                <div className="h-full relative">
                    <div className="sticky top-20">
                        <div className="relative">
                            <Image
                                className="rounded-lg border-4 border-gray-200 dark:border-gray-200 lg:rounded-sm relative z-10 w-[150px] lg:w-[360px]"
                                src={'/assets/profile.webp'}
                                width={360}
                                height={437}
                                alt="My Picture"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight text-slate-500 dark:text-gray-100 font-normal">
                        {t('introPart1')}
                        <span className="font-extrabold text-primary-600 dark:text-accent-600"> {t('introName')}</span>{t('introPart2')}
                    </h2>
                    <h1 className={`${heading_font.className} uppercase mb-4 text-4xl lg:text-6xl tracking-tight font-extrabold text-secondary dark:text-white`}>
                        {t('titlePart1')} <span className='text-primary-600 dark:text-accent-600'>{t('titlePart2')}</span> {t('titlePart3')}
                    </h1>

                    <p className="mb-6 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-500">{t('about1')}</p>

                    <p className="mb-6 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-500">
                        {t('about2Part1')} <a href="https://en.wikipedia.org/wiki/Karen_people" className="font-bold">{t('about2Link')}</a>{t('about2Part2')}
                    </p>

                    <p className="mb-6 text-lg font-normal text-slate-500 lg:text-xl dark:text-slate-500">
                        {t('about3Part1')} <a href="https://www.gre.ac.uk/" className="font-bold text-primary-600 dark:text-accent-600">{t('about3Link')}</a>.
                    </p>

                    <p className="mb-4 text-2xl tracking-tight font-normal text-secondary dark:text-white">{t('quote1')}</p>

                    <p className="mb-6 text-lg font-normal text-slate-500 lg:text-xl dark:text-secondary">{t('about4')}</p>

                    <p className="mb-4 text-2xl tracking-tight font-bold text-primary-600 dark:!text-accent-600">
                        {t('quote2')}
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HeroSection;
