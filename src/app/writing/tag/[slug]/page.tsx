import AllArticlesSection from '@/components/WritingPage/AllArticlesSection'
import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Writing | Te Nyain's thoughts",
    description: "Read articles about software engineering, management, front-end development, and tips. I would like to write and do some knowledge sharing besides development.",
    keywords: [
        "Te Nyain Moe Lwin",
        "Te Nyain",
        "Moe Lwin",
        "Moe",
        "web",
        "web developer",
        "web development",
        "front-end",
        "UI",
        "Myanmar",
        "junior web developer",
        "job",
        "freelance",
        "promoting",
        "branding",
        "product branding",
        "creative",
    ],
    robots: "index, follow",
    openGraph: {
        type: 'website',
        locale: 'en-US',
        url: 'https://www.tenyain.com/writing',
        title: "Writing | Te Nyain's thoughts",
        description:
            "Read articles about software engineering, management, front-end development, and tips. I would like to write and do some knowledge sharing besides development.",
        images: [
            {
                url: 'meta-tn.png',
                alt: "Te Nyain Moe Lwin's Writing page",
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: "Writing | Te Nyain's thoughts",
        description:
            "Read articles about software engineering, management, front-end development, and tips. I would like to write and do some knowledge sharing besides development.",
        images: ['meta-tn.png'],
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#1192d3',
    icons: {
        icon: '/favicon.ico',
    },
    other: {
        'google-adsense-account': 'ca-pub-2340030299315656',
        'google-site-verification': 'nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI',
    },
};

const WritingPageByTag = ({
                              params,
                          }: {
    params: { slug: string }
}) => {

    return (
        <>
            <AllArticlesSection tag={params.slug}/>
        </>
    )
}

export default WritingPageByTag