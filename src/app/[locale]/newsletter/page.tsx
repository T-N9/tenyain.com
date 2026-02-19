import NewsletterSection from "@/components/WritingPage/NewsletterSection/NewsletterForm";
import {Metadata} from "next";
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
    const path = "/newsletter";

    return {
        title: "Subscribe to my newsletter",
        description:
            "Subscribe to my newsletter and get notified whenever a new article is published.",
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
        icons: {
            icon: "/favicon.ico",
        },
        robots: "index, follow",
        alternates: buildLocaleAlternates(path, locale),
        openGraph: {
            type: "website",
            locale: getOpenGraphLocale(locale),
            url: buildLocalePath(locale, path),
            title: "Subscribe to my newsletter",
            description:
                "Subscribe to my newsletter and get notified whenever a new article is published.",
            images: [
                {
                    url: "/meta-tn.png",
                    alt: "Te Nyain Moe Lwin Contact",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: "Subscribe to my newsletter",
            description:
                "Subscribe to my newsletter and get notified whenever a new article is published.",
            images: ["/meta-tn.png"],
        },
    };
}

const NewsletterPage  = () => {
    return (
        <>
            <NewsletterSection/>
        </>
        )

}

export default NewsletterPage;
