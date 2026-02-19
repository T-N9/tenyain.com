import AllArticlesSection from "@/components/WritingPage/AllArticlesSection";
import { Metadata } from "next";
import {
  buildLocaleAlternates,
  buildLocalePath,
  getOpenGraphLocale,
  toSiteLocale,
} from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = toSiteLocale(params.locale);
  const path = "/writing";

  return {
    title: "Writing | Te Nyain's thoughts",
    description:
      "Read articles about software engineering, management, front-end development, and tips. I would like to write and do some knowledge sharing besides development.",
    keywords: [
      "Te Nyain Moe Lwin",
      "Te Nyain",
      "Moe Lwin",
      "Moe",
      "web",
      "web developer",
      "web development",
      "front-end",
      "UI",
      "Myanmar",
      "junior web developer",
      "job",
      "freelance",
      "promoting",
      "branding",
      "product branding",
      "creative",
    ],
    robots: "index, follow",
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: "Writing | Te Nyain's thoughts",
      description:
        "Read articles about software engineering, management, front-end development, and tips. I would like to write and do some knowledge sharing besides development.",
      images: [
        {
          url: "/meta-tn.png",
          alt: "Te Nyain Moe Lwin's Writing page",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Writing | Te Nyain's thoughts",
      description:
        "Read articles about software engineering, management, front-end development, and tips. I would like to write and do some knowledge sharing besides development.",
      images: ["/meta-tn.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

type Props = {
  params: { locale: string };
  searchParams?: { page?: string };
};

const WritingPage = ({ params, searchParams }: Props) => {
  const page = Number(searchParams?.page ?? "1");

  return <AllArticlesSection locale={params.locale} page={page} />;
};

export default WritingPage;

