import { Divider } from '@/components';
import AllWorksSection from '@/components/WorksPage/AllWorksSection'
import NewsletterSection from '@/components/WritingPage/NewsletterSection/NewsletterForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Works | My project experience",
  description: "Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas.",
  keywords: "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://www.tenyain.com/works",
    title: "Works | My project experience",
    description: "Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas.",
    images: [{ url: "/meta-tn.png" }]
  },
  twitter: {
    card: "summary_large_image",

    title: "Works | My project experience",
    description: "Explore the portfolio of a creative front-end developer, who specialized in building modern, responsive websites and web applications using the latest technologies such as React & Next JS. Discover a passion for intuitive design and ideas.",
    images: [{ url: "/meta-tn.png" }]
  },
  icons: {
    icon: "/favicon.ico"
  },
  verification: {
    google: "nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
  }
};


const WorksPage = () => {
  return (
    <>
        <AllWorksSection/>
        <Divider/>
        <NewsletterSection/>
    </>
  )
}

export default WorksPage