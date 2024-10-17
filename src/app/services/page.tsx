import Divider from '@/components/common/divider/Divider'
import AllServicesSection from '@/components/ServicesPage/AllServicesSection'
import CTASection from '@/components/ServicesPage/CTASection'
import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Features and Technologies I provide',
  description:
    'As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow.',
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
  themeColor: '#1192d3',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en-US',
    url: 'https://www.tenyain.com/services/',
    title: 'Services | Features and Technologies I provide',
    description:
      'As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow.',
    images: [
      {
        url: 'meta-tn.png',
        alt: 'Te Nyain Moe Lwin Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Features and Technologies I provide',
    description:
      'As a front-end web developer, I make sure that my website has good design qualities, from colors, and typography to clean coding and performance. I care about your business values and targeted customers to meet your golden goals for tomorrow.',
    images: ['meta-tn.png'],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
};

const ServicesPage = () => {
  return (
    <>
        <AllServicesSection/>
        <Divider/>
        <CTASection/>
    </>
  )
}

export default ServicesPage