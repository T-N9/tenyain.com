import CTASection from '@/components/ContactPage/CTASection'
import ContactSection from '@/components/HomePage/ContactSection'
import React from 'react'

const ContactPage = () => {
  return (
    <>
        <CTASection/>
        <hr className='my-6'/>
        <ContactSection/>
    </>
  )
}

export default ContactPage