import { Inter, Noto_Sans_JP } from "next/font/google";

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const primary_font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  fallback: ["MyanmarSanpya"],
});

export const heading_font = Inter({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});
// export const heading_font = Tektur({ weight : [ "400" , "500" , "700" , "600"],subsets: ['latin']});
