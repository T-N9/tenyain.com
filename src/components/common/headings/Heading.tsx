import React from 'react'
import {heading_font} from "@/fonts/fonts";

interface HeadingProps {
    title: string;
    className?: string;
    align ?: 'left' | 'center'
}

const Heading = ({ title, className, align = 'center' }: HeadingProps) => {
    return (
        <h2 className={`${align === 'center' ? 'text-center' : 'text-center lg:text-left'} text-3xl mb-14 font-extrabold text-gray-300 dark:text-gray-500 tracking-tight lg:text-4xl ${className} ${heading_font.className} uppercase`}>{title}</h2>
    )
}

export default Heading