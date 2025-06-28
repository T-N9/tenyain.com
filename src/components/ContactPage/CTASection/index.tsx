import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import Link from 'next/link'
import React from 'react'
import { heading_font } from "@/fonts/fonts";
import { TNButton } from '@/components/common/buttons/TNButton';
import { useLocale } from 'next-intl';

const CTASection = () => {

    const locale = useLocale();
    return (
        <SectionWrapper className="bg-white dark:bg-secondary pt-16">
            <div className="flex flex-col justify-center">
                <h1 className={`${heading_font.className} uppercase mb-14 text-4xl text-center font-extrabold tracking-tight leading-none text-primary-600 md:text-5xl lg:text-6xl dark:text-accent-600`}>
                    Open to Work
                </h1>
                <p className="mb-8 max-w-2xl mx-auto text-lg font-normal text-slate-500 lg:text-xl dark:text-secondary text-justify">
                    I am currently on the lookout for exciting job opportunities and experiences that will allow me to grow and thrive in the world of web development. Whether it`&apos;s freelance / part-time web design work, or junior-level positions, I am open to them all. Feel free to get in touch with me - I would absolutely love the chance to work with you and your amazing team!
                </p>

                <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0">
                    <Link href={`/${locale}/services`}>
                        <TNButton label="View Services"/>
                   </Link>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTASection