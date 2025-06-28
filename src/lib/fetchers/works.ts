import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const contentDir = path.join(process.cwd(), "src/app/[locale]/works/_contents");

export async function getWorkBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { frontmatter, content } = await compileMDX<{
    title: string;
    description: string;
    type: string;
    status: string;
    role: string;
    period: string;
    url: string;
    logo: string;
    colors: string[];
    technologies: string[],
    image : string,
    tagline: string
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

export async function getWorks() {
  const files = fs.readdirSync(contentDir);
  const works = await Promise.all(
    files.map(async (file) => await getWorkBySlug(path.parse(file).name))
  );
  return works;
}

export async function getWorksPage(pageNo: number, count: number) {

  const files = fs.readdirSync(contentDir);
  const works = await Promise.all(
    files.map(async (file) => await getWorkBySlug(path.parse(file).name))
  );

  const startIndex = (pageNo - 1) * count; 
  const endIndex = startIndex + count;     

  const paginatedWorks = works.slice(startIndex, endIndex);

  const totalWorks = works.length;
  const totalPages = Math.ceil(totalWorks / count);

  return {
    works: paginatedWorks,
    currentPage: pageNo,
    totalPages,
    totalWorks,
  };
}

export function getAllWorksSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}
