import React from "react";
import SectionWrapper from "../common/wrappers/SectionWrapper";
import ProjectCard from "../common/cards/ProjectCardHome";
import Heading from "../common/headings/Heading";
import { getWorksPage } from "@/lib/fetchers/works";

const AllWorksSection = async () => {
  const { works } = await getWorksPage(1, 6);

  return (
    <SectionWrapper>
      <Heading title="All Works" />

      <div className="flex flex-col gap-10">
        {works.map(({ frontmatter, slug }) => (
          <div key={slug}>
            <ProjectCard
              logoSrc={frontmatter.image}
              logoAlt="Project Logo"
              title={frontmatter.title}
              livePreviewLink={frontmatter.url}
              description={frontmatter.description}
              technologies={frontmatter.technologies}
              slug={slug}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AllWorksSection;

