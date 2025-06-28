// components/sections/ExperienceSection.tsx
import Heading from '@/components/common/headings/Heading';
import SectionWrapper from '@/components/common/wrappers/SectionWrapper';
import React from 'react';

type ExperienceItem = {
    role: string;
    company?: string;
    content: string;
    location: string;
    date: string;
};

const experienceData: ExperienceItem[] = [
    {
        role: 'Freelancer',
        company: 'Bride To Be Bridal',
        content:
            'I redesigned and rebranded the website using Next.js and Figma, which led to a 90% improvement in Lighthouse performance. I also created over 30 Instagram posts and supported marketing part-time. Working closely with the team, I helped plan and improve more than 20 Google Ads campaigns. In addition, I boosted SEO rankings and increased website traffic by writing over 40 blog posts.',
        location: 'Remote',
        date: 'Nov 2022 – Dec 2023',
    },
    {
        role: 'On-the-Job Trainee',
        company: 'Myanmar High Society',
        content:
            'During my internship, I fixed bugs and improved the user interface of an e-commerce site built with React.js and Tailwind CSS. I worked in an Agile team and adapted quickly to fast project deadlines and team workflows.',
        location: 'On-site',
        date: 'Apr 2022 – Aug 2022',
    },
    {
        role: 'Freelancing & Volunteering',
        content:
            'Since 2021, I have been converting Adobe XD and Figma designs into functional websites. I also volunteered to design more than 20 social media graphics and built a landing page for a non-profit education group.',
        location: 'Remote',
        date: '2021',
    },
];

const ExperienceSection: React.FC = () => {
    return (
        <SectionWrapper>
            <Heading title='experience' align='left' />
            <div className="space-y-10">
                {experienceData.map((item, index) => (
                    <div key={index} className="space-y-2">
                        <div className='flex justify-between flex-col lg:flex-row lg:items-center'>
                            <h3 className="text-xl font-bold text-primary-600 dark:text-accent-600">
                                {item.role}
                                {item.company && (
                                    <span className="text-slate-500 dark:text-gray-400 "> | {item.company}</span>
                                )}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {item.location} &bull; {item.date}
                            </p>
                        </div>
                        <p className="text-slate-500 dark:text-gray-300 leading-relaxed">
                            {item.content}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ExperienceSection;
