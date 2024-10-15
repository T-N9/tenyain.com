import HeroSection from '@/components/AboutPage/HeroSection'
import { TimelineSection } from '@/components/AboutPage/TimelineSection'
import { MottoSection } from '@/components/HomePage/MottoSection'
import TestimonialSection from '@/components/HomePage/TestimonialSection'
import React from 'react'

const AboutPage = () => {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <hr className="my-6" />
      <TestimonialSection />
      <hr className="my-6" />
      <MottoSection />
    </>
  )
}

export default AboutPage