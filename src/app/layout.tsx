import type { Metadata, Viewport } from "next";
import Script from "next/script";

/* CSS */
import "./globals.css";
import "../style/markdown.css"

/* Components */
import { NavBar , Footer } from "@/components";
import { Toaster } from "sonner";

/* Google Fonts */

import {ubuntu} from "@/fonts/fonts";

/* Various Providers */
import Providers from "@/app/Providers";

export const metadata: Metadata = {
  title: "Te Nyain Moe Lwin | Creative Front-end developer",
  description: "Hello there, I am Te Nyain Moe Lwin, a front-end developer who delivers fast and reliable websites. I care about your business values and targeted customers to meet your golden goals for tomorrow.",
  keywords: "Te Nyain Moe Lwin, Te Nyain, Moe Lwin, Moe, web, web developer, web development, front-end, UI, Myanmar, junior web developer, job, freelance, promoting, branding, product branding, creative",
  robots: "index, follow",
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#1192d3' },
    { media: '(prefers-color-scheme: dark)', color: '#2fe0ac' },
  ],
  width :"device-width",
  initialScale : 1,
  maximumScale: 1,
  userScalable: false,
}


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
            id="google-tag-manager"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5SSMC6Q6');`,
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
          className={`${ubuntu.className} antialiasing bg-white dark:bg-secondary`}
      >
      <noscript>
        <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SSMC6Q6"
            height="0"
            width="0"
            style={{display: "none", visibility: "hidden"}}
        ></iframe>
      </noscript>
      <Providers>
        <NavBar/>
        <div className="mb-20"></div>
        {children}
        <Footer/>
        <Toaster richColors closeButton position="bottom-center"/>
      </Providers>
      </body>
    </html>
  );
}
