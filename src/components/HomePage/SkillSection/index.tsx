import Heading from '@/components/common/headings/Heading'
import { technologyLogoColorlessMap } from '@/components/common/logos'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react'
import Link from "next/link";

const SkillSection = () => {
  return (
    <SectionWrapper>
      <Heading title="Skills"/>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-5"> {/* Using Tailwind CSS grid */}
        {Object.keys(technologyLogoColorlessMap).map((tech) => (
          <div key={tech} className="flex items-center justify-center">
            {technologyLogoColorlessMap[tech]} {/* Render the logo from the map */}
          </div>
        ))}
      </div>

        <Link href={
            '/services'
        }><Button className='table mx-auto secondary-btn mt-10' size='lg' color='gray'>View Services</Button></Link>
    </SectionWrapper>
  )
}

export default SkillSection