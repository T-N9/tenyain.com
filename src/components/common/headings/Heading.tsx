import React from 'react'
import {unbound} from "@/fonts/fonts";

interface HeadingProps {
    title: string;
    className?: string;
    align ?: 'left' | 'center'
}

const Heading = ({ title, className, align = 'center' }: HeadingProps) => {
    return (
        <h2 className={`${align === 'center' ? 'text-center' : 'text-left'} text-4xl mb-14 font-extrabold text-primary-600 dark:text-accent-600 tracking-tight ${className} ${unbound.className} uppercase`}>{title}</h2>
    )
}

export default Heading