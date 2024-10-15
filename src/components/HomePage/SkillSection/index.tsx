import { technologyLogoMap } from '@/components/common/logos'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react'

const SkillSection = () => {
  return (
    <SectionWrapper>
      <h2 className="text-4xl tracking-tight font-extrabold text-primary-600 dark:text-white text-center mb-10">Skills</h2>
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