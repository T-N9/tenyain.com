import type { Metadata } from "next";
import "./globals.css";
import "../style/markdown.css"
import NavBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContextProvider } from "@/context/GeneralContext";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import {ubuntu} from "@/fonts/fonts";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Te Nyain Moe Lwin | Creative Front-end developer",
  description: "Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
  keywords: "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative",
  robots: "index, follow",
  themeColor: "#1192d3",
  openGraph: {
    type: "website",
    locale: "en-US",
    url: "https://www.tenyain.com/",
    title: "Te Nyain Moe Lwin | Creative Front-end developer",
    description: "Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
    images: [{ url: "/meta-tn.png" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Te Nyain Moe Lwin | Creative Front-end developer",
    description: "Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
    images: [{ url: "/meta-tn.png" }]
  },
  icons: {
    icon: "/favicon.ico"
  },
  verification: {
    google: "nstIYPUM8pyaUUrW69SvgmJkxRRe_hS9tN_VAfzoLeI"
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-E4PF2Z2LTT"
            strategy="afterInteractive"
        />
        <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E4PF2Z2LTT');
            `,
            }}
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body
        className={`${ubuntu.className} antialiased bg-white dark:bg-secondary`}
      >
        <ThemeProvider attribute="class">
          <NavBar />
          <div className="mb-20"></div>
          <ContextProvider>{children}</ContextProvider>
          <Footer />
          <Toaster richColors closeButton position="bottom-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
