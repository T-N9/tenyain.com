import { Button } from 'flowbite-react';
import React from 'react';

interface ProjectCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  livePreviewLink: string;
  description: string;
  onViewCaseStudy?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  logoSrc,
  logoAlt,
  title,
  livePreviewLink,
  description,
  onViewCaseStudy,
}) => {
  return (
    <div className="flex flex-col gap-5">
      <img src={logoSrc} width={200} alt={logoAlt} />
      <div>
        <h1 className="mb-2 font-sans text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
          {title}
        </h1>
        <div className="text-primary-600 flex gap-4 items-center">
          <a href={livePreviewLink} target="_blank" rel="noopener noreferrer" className="text-xl">
            Live Preview
          </a>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="stroke-primary-600"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
            />
          </svg>
        </div>
      </div>

      <p className="text-gray-600 text-xl">{description}</p>

      <Button className="hover:!text-primary-600" color="gray" size="lg" onClick={onViewCaseStudy}>
        View case study
      </Button>
    </div>
  );
};

export default ProjectCard;
