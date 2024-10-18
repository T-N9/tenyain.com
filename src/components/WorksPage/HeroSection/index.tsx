import Divider from "@/components/common/divider/Divider";
import { technologyLogoMap } from "@/components/common/logos";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  title: string;
  tagline: string;
  technologies: string[];
  image: string;
  type: string;
  status: string;
  role: string;
  period: string;
  url: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  tagline,
  technologies,
  type,
  status,
  role,
  period,
  url,
  image,
}) => {
  return (
    <header className="relative bg-gradient-to-r ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary-600">
          {title}
        </h1>
        <p className="text-lg lg:text-xl font-light text-gray-500">{tagline}</p>

        <div className="container mx-auto flex flex-wrap gap-4">
          <div className="status--card bg-gray-100 rounded-lg p-4 flex-1">
            <p className="name text-sm font-semibold text-primary-600 uppercase">
              Status
            </p>
            <p className="status_t text-xl font-bold text-secondary">
              {status}
            </p>
          </div>
          <div className="status--card bg-gray-100 rounded-lg p-4 flex-1">
            <p className="name text-sm font-semibold text-primary-600 uppercase">
              Type
            </p>
            <p className="status_t text-xl font-bold text-secondary">{type}</p>
          </div>
          <div className="status--card bg-gray-100 rounded-lg p-4 flex-1">
            <p className="name text-sm font-semibold text-primary-600 uppercase">
              Role
            </p>
            <p className="status_t text-xl font-bold text-secondary">{role}</p>
          </div>
          <div className="status--card bg-gray-100 rounded-lg p-4 flex-1">
            <p className="name text-sm font-semibold text-primary-600 uppercase">
              Period
            </p>
            <p className="status_t text-xl font-bold text-secondary">
              {period}
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <Image src={image} alt={title} width={1030} height={590} />
        </div>
        <div className="flex gap-5">
          <div className="text-base lg:text-lg">
            <p>
              <strong className="text-gray-500">View live:</strong>
              <br />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline"
              >
                {" "}
                {url}
              </a>
            </p>
          </div>

          <div className="text-base lg:text-lg">
            <p>
              <strong className="text-gray-500">Technologies:</strong>
              <br />
            </p>
            <div className="flex gap-3 flex-wrap">
              {technologies.map((tech, index) => {
                return (
                  <React.Fragment key={index}>
                    {" "}
                    {technologyLogoMap[tech]}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </header>
  );
};

export default HeroSection;
