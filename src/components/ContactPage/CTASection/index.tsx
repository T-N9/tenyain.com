import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import Link from 'next/link'
import React from 'react'
import { heading_font } from "@/fonts/fonts";
import { TNButton } from '@/components/common/buttons/TNButton';
import { useLocale } from 'next-intl';
import LocationCard from '@/components/LocationCard';
import { SiGithub, SiGithubHex, SiInstagram, SiLinkedin, SiLinkedinHex, SiX } from '@icons-pack/react-simple-icons';

const CTASection = () => {

    const locale = useLocale();
    return (
        <SectionWrapper className="bg-white dark:bg-secondary pt-16">
            <div className="flex flex-col justify-center">
                <h1 className={`${heading_font.className} uppercase mb-14 text-4xl text-center font-extrabold tracking-tight leading-none text-primary-600 md:text-5xl lg:text-6xl dark:text-accent-600`}>
                    Let&apos;s Connect
                </h1>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <div className='flex-1'>
                        <LocationCard />
                    </div>
                    <div className='flex-1'>

                        <div className='shadow border bg-gray-100 dark:bg-slate-700 border-slate-100 dark:border-slate-700 relative flex h-60 flex-col gap-6 overflow-hidden rounded-xl p-4 lg:p-6'>
                            <div className='flex items-center gap-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                <h2 className='text-sm'>Social</h2>
                            </div>

                            <div className='pl-4 space-y-4 text-slate-500 dark:text-gray-300'>
                                <a className='block' href='https://github.com/T-N9' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex gap-2 items-center'>
                                        <SiGithub size={20} />
                                        <p className=''>T-N9</p>
                                    </div>
                                </a>
                                <a className='block' href='https://www.linkedin.com/in/tenyainmoelwin/' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex gap-2 items-center'>
                                        <SiLinkedin size={20} />
                                        <p className=''>Te Nyain Moe Lwin</p>
                                    </div>
                                </a>
                                <a className='block' href='https://www.instagram.com/tenyain_moe_lwin/' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex gap-2 items-center'>
                                        <SiInstagram size={20} />
                                        <p className=''>@tenyain_moe_lwin</p>
                                    </div>
                                </a>
                                <a className='block' href='https://x.com/tenyain_moelwin' target='_blank' rel='noopener noreferrer'>
                                    <div className='flex gap-2 items-center'>
                                        <SiX size={20} />
                                        <p className=''>@tenyain_moelwin</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0">
                    <Link href={`/${locale}/services`}>
                        <TNButton label="View Services" />
                    </Link>
                </div> */}
            </div>
        </SectionWrapper>
    )
}

export default CTASection