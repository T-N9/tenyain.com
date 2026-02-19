import React from "react";
import SectionWrapper from "../common/wrappers/SectionWrapper";
import ArticleCard from "../common/cards/ArticleCard";
import Heading from "../common/headings/Heading";
import Pagination from "@/components/common/pagination/Pagination";
import NewsletterSection from "@/components/WritingPage/NewsletterSection/NewsletterForm";
import Divider from "../common/divider/Divider";
import { getArticlesByTagPage, getArticlesPage } from "@/lib/fetchers/writing";

export type Frontmatter = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  createdAt: string;
};

export type Article = {
  frontmatter: Frontmatter;
  slug: string;
};

type Props = {
  locale: string;
  page: number;
  tag?: string;
};

const AllArticlesSection = async ({ locale, page, tag = "" }: Props) => {
  const resolvedPage = Number.isNaN(page) || page < 1 ? 1 : page;
  const result = tag
    ? await getArticlesByTagPage(resolvedPage, 6, tag)
    : await getArticlesPage(resolvedPage, 6);

  return (
    <SectionWrapper>
      <Heading title="My Thoughts" />

      {tag !== "" && (
        <p className="text-center">
          Articles by{" "}
          <b className="text-primary-600 dark:text-accent-600">#{tag}</b>
        </p>
      )}

      <Pagination
        totalPages={result.totalPages}
        currentPage={resolvedPage}
        tag={tag}
        locale={locale}
      />

      <div className="flex flex-col gap-5">
        {result.articles.length === 0 ? (
          <p className="text-center text-2xl">No data for this request.</p>
        ) : (
          result.articles.map(({ frontmatter, slug }) => (
            <ArticleCard
              key={slug}
              title={frontmatter.title}
              createdAt={frontmatter.createdAt}
              description={frontmatter.description}
              image={frontmatter.image}
              tags={frontmatter.tags}
              href={slug}
            />
          ))
        )}
      </div>

      <Pagination
        totalPages={result.totalPages}
        currentPage={resolvedPage}
        tag={tag}
        locale={locale}
      />

      <Divider />

      <NewsletterSection />
    </SectionWrapper>
  );
};

export default AllArticlesSection;

