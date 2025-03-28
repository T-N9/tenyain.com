import React from 'react'
import {chakra_petch} from "@/fonts/fonts";

interface HeadingProps {
    title: string;
    className?: string;
    align ?: 'left' | 'center'
}

const Heading = ({ title, className, align = 'center' }: HeadingProps) => {
    return (
        <h2 className={`${align === 'center' ? 'text-center' : 'text-left'} text-2xl mb-14 font-extrabold text-primary-600 dark:text-accent-600 tracking-tight lg:text-4xl ${className} ${chakra_petch.className} uppercase`}>{title}</h2>
    )
}

export default Heading