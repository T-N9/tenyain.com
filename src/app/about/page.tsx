import HeroSection from '@/components/AboutPage/HeroSection'
import { TimelineSection } from '@/components/AboutPage/TimelineSection'
import Divider from '@/components/common/divider/Divider'
import { MottoSection } from '@/components/HomePage/MottoSection'
import TestimonialSection from '@/components/HomePage/TestimonialSection'
import ListenRecommendation from '@/components/Spotify/ListenRecommendation'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Te Nyain Moe Lwin | Who am I?",
  description: "I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites.",
  keywords: "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative",
  robots: "index, follow",
  themeColor: "#1192d3",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://www.tenyain.com/about",
    title: "About Te Nyain Moe Lwin | Who am I?",
    description: "I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites.",
    images: [{ url: "/meta-tn.png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Te Nyain Moe Lwin | Who am I?",
    description: "I am a creative front-end web developer from Myanmar. I am currently specializing in front-end web development and creating web applications from my own idea. My goal is to deliver a front-end stack from scratch to well-performed websites.",
    images: [{ url: "/meta-tn.png" }]
  },
  icons: {
    icon: "/favicon.ico"
  },
  verification: {
    google: "nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
  }
};

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <Divider/>
      <TestimonialSection />
      <Divider/>
      <MottoSection />
      <Divider/>
      <ListenRecommendation/>
    </>
  )
}

export default AboutPage