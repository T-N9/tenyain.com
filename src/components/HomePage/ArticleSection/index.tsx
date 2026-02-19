import React from "react";
import ArticleCard from "@/components/common/cards/ArticleCard";
import Heading from "@/components/common/headings/Heading";
import SectionWrapper from "@/components/common/wrappers/SectionWrapper";
import Link from "next/link";
import { getArticlesPage } from "@/lib/fetchers/writing";

const ArticleSection = async ({ locale }: { locale: string }) => {
  const { articles } = await getArticlesPage(1, 3);

  return (
    <SectionWrapper>
      <div className="mb-14 flex items-center justify-between">
        <Heading title="Articles" align="left" className="!mb-0" />
        <Link href={`/${locale}/writing`}>
          <button className="secondary-btn rounded-lg px-4 py-2 text-sm">
            View All
          </button>
        </Link>
      </div>

      <div className="flex flex-col gap-5">
        {articles.map(({ frontmatter, slug }) => (
          <ArticleCard
            key={slug}
            title={frontmatter.title}
            createdAt={frontmatter.createdAt}
            description={frontmatter.description}
            image={frontmatter.image}
            tags={frontmatter.tags}
            href={slug}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ArticleSection;

