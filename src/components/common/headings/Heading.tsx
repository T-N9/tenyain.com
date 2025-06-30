import React from 'react'
import { heading_font } from "@/fonts/fonts";

interface HeadingProps {
    title: string;
    className?: string;
    align?: 'left' | 'center'
}

const Heading = ({ title, className, align = 'center' }: HeadingProps) => {
    return (
        <h2 className={`${align === 'center' ? 'text-center' : 'text-center lg:text-left'} text-3xl mb-14 font-extrabold text-gray-600 dark:text-gray-200 tracking-tight lg:text-2xl ${className} ${heading_font.className} uppercase`}>
            <span className='relative'>
                <span className=' w-[0.6rem] h-[0.6rem] absolute bottom-[0.4rem] bg-primary-400 rounded-full dark:bg-accent-600 animate-ping inline-flex'></span>
                <span className='relative w-[0.6rem] h-[0.6rem] bg-primary-400 rounded-full dark:bg-accent-600 inline-flex'></span>
            </span> {title}</h2>
    )
}

export default Heading