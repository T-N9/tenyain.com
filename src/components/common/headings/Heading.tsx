import React from 'react'

interface HeadingProps {
    title: string;
    className?: string;
    align ?: 'left' | 'center'
}

const Heading = ({ title, className, align = 'center' }: HeadingProps) => {
    return (
        <h2 className={`${align === 'center' ? 'text-center' : 'text-left'} text-4xl mb-14 tracking-tight font-extrabold text-primary-600 dark:text-white ${className}`}>{title}</h2>
    )
}

export default Heading