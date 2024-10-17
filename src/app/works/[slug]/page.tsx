import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { getAllWorksSlug, getWorkBySlug } from '@/lib/fetchers/works'
import { Metadata } from 'next'
import React from 'react'

export async function generateStaticParams() {
  return getAllWorksSlug()
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const work = await getWorkBySlug(params.slug)

  return {
    title: work.frontmatter.title,
    description: work.frontmatter.description,
    keywords: "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, web development, front-end, portfolio, project",
    robots: "index, follow",
    themeColor: "#1192d3",
    openGraph: {
      type: "website",
      locale: "en-US",
      url: `https://www.tenyain.com/works/${params.slug}`,
      title: work.frontmatter.title,
      description: work.frontmatter.description,
      images: [{ url: "/meta-tn.png" }]
    },
    twitter: {
      card: "summary_large_image",
      title: work.frontmatter.title,
      description: work.frontmatter.description,
      images: [{ url: "/meta-tn.png" }]
    },
    icons: {
      icon: "/favicon.ico"
    }
  }
}

const WorkPage = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const work = await getWorkBySlug(params.slug)
  // console.log({work})
  return (
    <SectionWrapper>

      {/* {work} */}
      <h1>{work.frontmatter.title}</h1>
      <div className='mdx-wrapper'>
        {work.content}
      </div>

    </SectionWrapper>
  )
}

export default WorkPage