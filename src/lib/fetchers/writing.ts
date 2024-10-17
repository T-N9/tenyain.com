import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const contentDir = path.join(process.cwd(), "src/app/writing/_contents");

export async function getArticleBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    description: string;
    createdAt: string;
    tags: string[];
    image: string;
  }>({
    source: fileContent,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeAutolinkHeadings, rehypeSlug],
      },
    },
  });
  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getArticles() {
  const files = fs.readdirSync(contentDir);
  const articles = await Promise.all(
    files.map(async (file) => await getArticleBySlug(path.parse(file).name))
  );
  return articles;
}

export async function getArticlesPage(pageNo: number, count: number) {

  const files = fs.readdirSync(contentDir);
  const articles = await Promise.all(
    files.map(async (file) => await getArticleBySlug(path.parse(file).name))
  );

  const startIndex = (pageNo - 1) * count; 
  const endIndex = startIndex + count;     

  const paginatedArticles = articles.slice(startIndex, endIndex);

  const totalArticles = articles.length;
  const totalPages = Math.ceil(totalArticles / count);

  return {
    articles: paginatedArticles,
    currentPage: pageNo,
    totalPages,
    totalArticles,
  };
}

export function getAllArticlesSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
