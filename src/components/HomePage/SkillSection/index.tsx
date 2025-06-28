'use client'
import Heading from '@/components/common/headings/Heading'
import { technologyLogoColorlessMap } from '@/components/common/logos'
import SectionWrapper from '@/components/common/wrappers/SectionWrapper'
import { Button } from 'flowbite-react'
import { useLocale } from 'next-intl';
import Link from "next/link";

type EducationItem = {
  institution: string;
  degree: string;
  date: string;
};

const educationDataMap: Record<string, EducationItem[]> = {
  en: [
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
  ],
  ja: [
    {
      institution: 'グリニッジ大学、NCC教育、イギリス',
      degree: 'コンピューティング学士号',
      date: '予定: 2024年12月 ～ 2025年11月',
    },
    {
      institution: '情報処理技術者試験センター、日本',
      degree: '基本情報技術者試験 合格',
      date: '2023年4月',
    },
    {
      institution: 'ヒンタダ・コンピュータ大学、ミャンマー',
      degree: 'コンピュータサイエンス学士課程4年次',
      date: '201x年 ～ 20xx年',
    },
  ]
};

const SkillSection = () => {
  const locale = useLocale();
  return (
    <SectionWrapper>
      <div className='flex gap-14 lg:gap-5 flex-col lg:flex-row'>
        <div className='flex-1'>
          <Heading title="Education" align='left' />

          <div>
            <ul className="space-y-6">
              {locale === 'ja' ?
                educationDataMap.ja.map((edu, index) => (
                  <li key={index} className="border-l-4 border-gray-300 dark:border-gray-600 pl-4">
                    <h3 className="text-xl font-semibold text-primary-600 dark:text-accent-600">{edu.institution}</h3>
                    <p className="text-gray-700">{edu.degree}</p>
                    <p className="text-sm text-gray-500">{edu.date}</p>
                  </li>
                )) :

                educationDataMap.en.map((edu, index) => (
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
            `/${locale}/services`
          }><Button className='table mx-auto secondary-btn mt-10 rounded-full' size='lg' color='gray'>View Services</Button></Link>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default SkillSection