import type { Metadata, Viewport } from "next";
import Script from "next/script";

/* CSS */
import "./globals.css";
import "../style/markdown.css"

/* Components */
import { NavBar, Footer } from "@/components";
import { Toaster } from "sonner";

/* Google Fonts */

import { primary_font } from "@/fonts/fonts";

/* Various Providers */
import Providers from "@/app/Providers";
import React from "react";

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
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Te Nyain Moe Lwin | Creative Front-end developer</title>
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
        className={`${primary_font.className} tracking-tight antialiasing bg-white dark:bg-secondary relative`}
      >
        <svg className="pointer-events-none fixed isolate z-[60] opacity-70 top-0 mix-blend-soft-light" width="100%"
          height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch"></feTurbulence>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <Providers>
          <NavBar />
          <div className="mb-20"></div>
          <div className="bg-white dark:bg-secondary relative z-20 border-b-2 border-primary-600 dark:border-accent-600 pb-14 shadow-md">{children}</div>
          <Footer />
          <Toaster richColors closeButton position="bottom-center" />
        </Providers>
      </body>
    </html>
  );
}
