import Heading from '@/components/common/headings/Heading'
import { technologyLogoColorlessMap } from '@/components/common/logos'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react'
import Link from "next/link";

type EducationItem = {
  institution: string;
  degree: string;
  date: string;
};

const educationData: EducationItem[] = [
  {
    institution: 'University of Greenwich, NCC Education, UK',
    degree: 'Bachelor’s in Computing',
    date: 'Expected: Dec 2024 – Nov 2025',
  },
  {
    institution: 'Information Technology Professionals Examination Council, Japan',
    degree: 'Passed Fundamental Information Technology Engineer Examination',
    date: 'April 2023',
  },
  {
    institution: 'University of Computer Studies, Hinthada, Myanmar',
    degree: 'Fourth Year of Bachelor’s in Computer Science',
    date: '201x – 20xx',
  },
];

const SkillSection = () => {
  return (
    <SectionWrapper>
      <div className='flex gap-10 lg:gap-5 flex-col lg:flex-row'>
        <div className='flex-1'>
          <Heading title="Education" align='left' />

          <div>
            <ul className="space-y-6">
              {educationData.map((edu, index) => (
                <li key={index} className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold text-primary-600 dark:text-accent-600">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex-1'>
          <Heading title="Skills" align='left' />
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-5"> {/* Using Tailwind CSS grid */}
            {Object.keys(technologyLogoColorlessMap).map((tech) => (
              <div key={tech} className="flex items-center justify-center">
                {technologyLogoColorlessMap[tech]} {/* Render the logo from the map */}
              </div>
            ))}
          </div>

          <Link href={
            '/services'
          }><Button className='table mx-auto secondary-btn mt-10 rounded-full' size='lg' color='gray'>View Services</Button></Link>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SkillSection