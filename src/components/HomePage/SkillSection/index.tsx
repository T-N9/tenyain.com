import Heading from '@/components/common/headings/Heading'
import { technologyLogoMap } from '@/components/common/logos'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react'

const SkillSection = () => {
  return (
    <SectionWrapper>
      <Heading title="Skills"/>
      <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-4"> {/* Using Tailwind CSS grid */}
        {Object.keys(technologyLogoMap).map((tech) => (
          <div key={tech} className="flex items-center justify-center">
            {technologyLogoMap[tech]} {/* Render the logo from the map */}
          </div>
        ))}
      </div>

      <Button className='table mx-auto mt-10' size='lg' color='gray'>View Services</Button>
    </SectionWrapper>
  )
}

export default SkillSection