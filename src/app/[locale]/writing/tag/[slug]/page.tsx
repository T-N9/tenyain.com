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
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale = toSiteLocale(params.locale);
  const path = `/writing/tag/${params.slug}`;
  const readableTag = params.slug.replace(/-/g, " ");

  return {
    title: `Writing tagged "${readableTag}" | Te Nyain's thoughts`,
    description:
      "Read articles about software engineering, management, front-end development, and tips.",
    robots: "index, follow",
    alternates: buildLocaleAlternates(path, locale),
    openGraph: {
      type: "website",
      locale: getOpenGraphLocale(locale),
      url: buildLocalePath(locale, path),
      title: `Writing tagged "${readableTag}" | Te Nyain's thoughts`,
      description:
        "Read articles about software engineering, management, front-end development, and tips.",
      images: [
        {
          url: "/meta-tn.png",
          alt: "Te Nyain Moe Lwin's Writing page",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Writing tagged "${readableTag}" | Te Nyain's thoughts`,
      description:
        "Read articles about software engineering, management, front-end development, and tips.",
      images: ["/meta-tn.png"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

type Props = {
  params: { locale: string; slug: string };
  searchParams?: { page?: string };
};

const WritingPageByTag = ({ params, searchParams }: Props) => {
  const page = Number(searchParams?.page ?? "1");

  return (
    <AllArticlesSection locale={params.locale} page={page} tag={params.slug} />
  );
};

export default WritingPageByTag;

