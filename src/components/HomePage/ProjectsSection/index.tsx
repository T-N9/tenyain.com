import React from "react";
import ProjectCard from "@/components/common/cards/ProjectCardHome";
import Heading from "@/components/common/headings/Heading";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import Link from "next/link";
import { getWorksPage } from "@/lib/fetchers/works";

export type Frontmatter = {
  title: string;
  description: string;
  type: string;
  status: string;
  role: string;
  period: string;
  url: string;
  logo: string;
  colors: string[];
  technologies: string[];
  image: string;
  tagline: string;
};

export type Work = {
  frontmatter: Frontmatter;
  slug: string;
};

const ProjectsSection = async ({ locale }: { locale: string }) => {
  const { works } = await getWorksPage(1, 3);

  return (
    <SectionWrapper className="lg:mt-0">
      <div className="mb-14 flex items-center justify-between">
        <Heading title="Projects" className="!mb-0" />
        <Link href={`/${locale}/works`}>
          <button className="secondary-btn rounded-lg px-4 py-2 text-sm">
            View All
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-10">
        {works.map(({ frontmatter, slug }) => (
          <ProjectCard
            key={slug}
            logoSrc={frontmatter.image}
            logoAlt="Project Logo"
            title={frontmatter.title}
            livePreviewLink={frontmatter.url}
            description={frontmatter.description}
            technologies={frontmatter.technologies}
            slug={slug}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;

