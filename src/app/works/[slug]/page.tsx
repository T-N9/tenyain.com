import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { getAllWorksSlug, getWorkBySlug, getWorks } from '@/lib/fetchers/works'
import React from 'react'

export async function generateStaticParams() {
  return getAllWorksSlug()
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