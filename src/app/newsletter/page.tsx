import NewsletterSection from "@/components/WritingPage/NewsletterSection/NewsletterForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Subscribe to my newsletter',
    description:
        'Subscribe to my newsletter and get notified whenever a new article is published.',
    keywords: [
        'Te Nyain Moe Lwin',
        'Te Nyain',
        'Moe Lwin',
        'Moe',
        'web',
        'web developer',
        'web development',
        'front-end',
        'UI',
        'Myanmar',
        'junior web developer',
        'job',
        'freelance',
        'promoting',
        'branding',
        'product branding',
        'creative',
    ],
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        type: 'website',
        locale: 'en-US',
        url: 'https://www.tenyain.com/newsletter/',
        title: 'Subscribe to my newsletter',
        description:
            'Subscribe to my newsletter and get notified whenever a new article is published.',
        images: [
            {
                url: 'meta-tn.png',
                alt: 'Te Nyain Moe Lwin Contact',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Subscribe to my newsletter',
        description:
            'Subscribe to my newsletter and get notified whenever a new article is published.',
        images: ['meta-tn.png'],
    },
    robots: 'index, follow',

    verification: {
        google: 'nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI',
    },
};

const NewsletterPage  = () => {
    return (
        <>
            <NewsletterSection/>
        </>
        )

}

export default NewsletterPage;