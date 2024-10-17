import Divider from '@/components/common/divider/Divider'
import CTASection from '@/components/ContactPage/CTASection'
import ContactSection from '@/components/HomePage/ContactSection'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TAILOR THE WEB with TN.dev',
  description:
    'Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities.',
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
    url: 'https://www.tenyain.com/contact/',
    title: 'TAILOR THE WEB with TN.dev',
    description:
      'Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities.',
    images: [
      {
        url: 'meta-tn.png',
        alt: 'Te Nyain Moe Lwin Contact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAILOR THE WEB with TN.dev',
    description:
      'Hire a highly skilled front-end developer for your next project. With expertise in branding and front-end technologies such as React and Next JS, this freelancer offers responsive and visually stunning website and web application development. Available for remote and freelance work opportunities.',
    images: ['meta-tn.png'],
  },
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  verification: {
    google: 'nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI',
  },
};


const ContactPage = () => {
  return (
    <>
        <CTASection/>
        <Divider/>
        <ContactSection/>
    </>
  )
}

export default ContactPage