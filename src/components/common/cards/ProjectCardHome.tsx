import { Button } from 'flowbite-react';
import React from 'react';
import { technologyLogoMap } from '../logos';
import Link from 'next/link';
import Image from 'next/image';
import {unbound} from "@/fonts/fonts";

interface ProjectCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  livePreviewLink: string;
  description: string;
  onViewCaseStudy?: () => void;
  technologies: string[];
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  logoSrc,
  logoAlt,
  title,
  livePreviewLink,
  description,
  onViewCaseStudy,
  technologies,
  slug
}) => {
  return (
    <div className="flex flex-col gap-5 px-2 xl:px-0 mb-5 lg:mb-0">

      <div className='hidden flex justify-center rounded-tr-lg rounded-br-lg items-center bg-gradient-to-r from-slate-50 to-primary-50 dark:to-accent-50 border-l-4 border-l-primary-200 dark:border-l-accent-200 pl-4 w-full h-[150px] '>
        <Image src={logoSrc} width={200} height={100} className=' w-[200px] h-[100px] object-contain' alt={logoAlt} />
      </div>

      <div>
        <h1 className={`${unbound.className} uppercase mb-2 text-4xl font-extrabold tracking-tight leading-none text-secondary md:text-5xl lg:text-5xl dark:text-slate-200`}>
          {title}
        </h1>
        <div className="text-primary-600 dark:text-accent-600 flex gap-4 items-center">
          <a href={livePreviewLink} target="_blank" rel="noopener noreferrer" className="text-xl">
            Live Preview
          </a>
          <svg
            className="w-6 h-6 text-secondary dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="stroke-primary-600 dark:stroke-accent-600"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
          </svg>
        </div>
      </div>

      <p className="text-secondary text-xl">{description}</p>

      <div className='flex gap-4'>
        {technologies.map((tech, index) => {
          return (

            <React.Fragment key={index}> {technologyLogoMap[tech]}</React.Fragment>

          )
        })}
      </div>

      <Link href={`/works/${slug}`}>
        <Button className="secondary-btn" color="gray" size="lg" onClick={onViewCaseStudy}>
          View Detail
        </Button>
      </Link>
    </div>
  );
};

export default ProjectCard;
