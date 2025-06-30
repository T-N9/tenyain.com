import { technologyLogoMap } from "@/components/common/logos";
import { Breadcrumb } from "flowbite-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
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
  const locale = useLocale();
  return (
    <header className="relative bg-gradient-to-r ">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl lg:text-5xl font-bold text-primary-600 dark:text-accent-600">
          {title}
        </h1>
        <p className="text-lg lg:text-xl font-light text-gray-500">{tagline}</p>

        <div className="container mx-auto flex flex-wrap gap-4">
          <div className="status--card bg-gray-100 dark:bg-slate-600 rounded-lg p-4 flex-1">
            <span className="name text-sm font-semibold text-primary-600 dark:text-accent-600 uppercase">
              Status
            </span>
            <p className="status_t text-base font-bold text-slate-600">
              {status}
            </p>
          </div>
          <div className="status--card bg-gray-100 dark:bg-slate-600 rounded-lg p-4 flex-1">
            <span className="name text-sm font-semibold text-primary-600 dark:text-accent-600 uppercase">
              Type
            </span>
            <p className="status_t text-base font-bold text-slate-600">{type}</p>
          </div>
          <div className="status--card bg-gray-100 dark:bg-slate-600 rounded-lg p-4 flex-1">
            <span className="name text-sm font-semibold text-primary-600 dark:text-accent-600 uppercase">
              Role
            </span>
            <p className="status_t text-base font-bold text-slate-600">{role}</p>
          </div>
          <div className="status--card bg-gray-100 dark:bg-slate-600 rounded-lg p-4 flex-1">
            <span className="name text-sm font-semibold text-primary-600 dark:text-accent-600 uppercase">
              Period
            </span>
            <p className="status_t text-base font-bold text-slate-600">
              {period}
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <Image src={image} alt={title} width={1030} height={590} />
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="text-base lg:text-lg">
            <p>
              <strong className="text-gray-500 dark:text-slate-200">View live:</strong>
              <br />
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-accent-600 underline"
              >
                {" "}
                {url}
              </a>
            </p>
          </div>

          <div className="text-base lg:text-lg">
            <p className="mb-3">
              <strong className="text-gray-500 dark:text-slate-200">Technologies:</strong>
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

        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-100 rounded-md px-5 py-3 dark:bg-gray-800">
          <Breadcrumb.Item>
            <Link href={`/${locale}`}>Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item><Link href={`/${locale}/works`}>Works</Link></Breadcrumb.Item>
          <Breadcrumb.Item className="opacity-50">{title}</Breadcrumb.Item>
        </Breadcrumb>
        {/*<Divider />*/}
      </div>
    </header>
  );
};

export default HeroSection;
