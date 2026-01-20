import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiSass,
  SiFirebase,
  SiMysql,
  SiFramer,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiVercel,
  SiLighthouse,

  SiHtml5Hex,
  SiCss3Hex,
  SiJavascriptHex,
  SiTypescriptHex,
  SiReactHex,
  SiBootstrapHex,
  SiTailwindcssHex,
  SiReduxHex,
  SiNextdotjsHex,
  SiSassHex,
  SiFirebaseHex,
  SiMysqlHex,
  SiFramerHex,
  SiGithubHex,
  SiFigmaHex,
  SiNetlifyHex,
  SiVercelHex,
  SiLighthouseHex,
  SiReactrouter,
  SiReactrouterHex,
  SiPhp,
  SiPhpHex,
  SiRss,
  SiRssHex,
  SiGoogleanalytics,
  SiGoogleanalyticsHex,
  SiGoogleads,
  SiGoogleadsHex,
  SiContentful,
  SiContentfulHex,
  SiExpress,
  SiExpressHex,
  SiNodedotjs,
  SiNodedotjsHex,
  SiSupabase,
  SiSupabaseHex,
  SiReactquery,
  SiReactqueryHex,
  SiGooglegemini,
  SiGooglegeminiHex,
} from "@icons-pack/react-simple-icons";
import { Tooltip } from "flowbite-react";

export const technologyLogoMap: { [key: string]: JSX.Element } = {
  HTML5: (
    <Tooltip content="HTML5">
      <SiHtml5 size={25} color={SiHtml5Hex} />
    </Tooltip>
  ),
  CSS3: (
    <Tooltip content="CSS3">
      <SiCss3 size={25} color={SiCss3Hex} />
    </Tooltip>
  ),
  JavaScript: (
    <Tooltip content="JavaScript">
      <SiJavascript size={25} color={SiJavascriptHex} />
    </Tooltip>
  ),
  TypeScript: (
    <Tooltip content="TypeScript">
      <SiTypescript size={25} color={SiTypescriptHex} />
    </Tooltip>
  ),
  ReactJS: (
    <Tooltip content="React.js">
      <SiReact size={25} color={SiReactHex} />
    </Tooltip>
  ),
  Bootstrap: (
    <Tooltip content="Bootstrap">
      <SiBootstrap size={25} color={SiBootstrapHex} />
    </Tooltip>
  ),
  TailwindCSS: (
    <Tooltip content="Tailwind CSS">
      <SiTailwindcss size={25} color={SiTailwindcssHex} />
    </Tooltip>
  ),
  Redux: (
    <Tooltip content="Redux">
      <SiRedux size={25} color={SiReduxHex} />
    </Tooltip>
  ),
  NextJS: (
    <Tooltip content="Next.js">
      <SiNextdotjs size={25} color={SiNextdotjsHex} />
    </Tooltip>
  ),
  SCSS: (
    <Tooltip content="SCSS">
      <SiSass size={25} color={SiSassHex} />
    </Tooltip>
  ),
  Firebase: (
    <Tooltip content="Firebase">
      <SiFirebase size={25} color={SiFirebaseHex} />
    </Tooltip>
  ),
  MySQL: (
    <Tooltip content="MySQL">
      <SiMysql size={25} color={SiMysqlHex} />
    </Tooltip>
  ),
  Framer: (
    <Tooltip content="Framer">
      <SiFramer size={25} color={SiFramerHex} />
    </Tooltip>
  ),
  GitHub: (
    <Tooltip content="GitHub">
      <SiGithub size={25} color={SiGithubHex} />
    </Tooltip>
  ),
  Figma: (
    <Tooltip content="Figma">
      <SiFigma size={25} color={SiFigmaHex} />
    </Tooltip>
  ),
  Netlify: (
    <Tooltip content="Netlify">
      <SiNetlify size={25} color={SiNetlifyHex} />
    </Tooltip>
  ),
  Vercel: (
    <Tooltip content="Vercel">
      <SiVercel size={25} color={SiVercelHex} />
    </Tooltip>
  ),
  Lighthouse: (
    <Tooltip content="Lighthouse">
      <SiLighthouse size={25} color={SiLighthouseHex} />
    </Tooltip>
  ),
  ReactRouter: (
    <Tooltip content="React Router">
      <SiReactrouter size={25} color={SiReactrouterHex} />
    </Tooltip>
  ),
  Php: (
    <Tooltip content="PHP">
      <SiPhp size={25} color={SiPhpHex} />
    </Tooltip>
  ),
  Rss: (
    <Tooltip content="Rss">
      <SiRss size={25} color={SiRssHex} />
    </Tooltip>
  ),
  GoogleAnalytics: (
    <Tooltip content="Google Analytics">
      <SiGoogleanalytics size={25} color={SiGoogleanalyticsHex} />
    </Tooltip>
  ),
  GoogleAds: (
    <Tooltip content="Google Ads">
      <SiGoogleads size={25} color={SiGoogleadsHex} />
    </Tooltip>
  ),
  Contentful: (
    <Tooltip content="Contentful">
      <SiContentful size={25} color={SiContentfulHex} />
    </Tooltip>
  ),
  Express: (
    <Tooltip content="Express">
      <SiExpress size={25} color={SiExpressHex} />
    </Tooltip>
  ),
  NodeJS: (
    <Tooltip content="NodeJS">
      <SiNodedotjs size={25} color={SiNodedotjsHex} />
    </Tooltip>
  ),
  Supabase: (
    <Tooltip content="Supabase">
      <SiSupabase size={25} color={SiSupabaseHex} />
    </Tooltip>
  ),
  ReactQuery :  (
    <Tooltip content="React Query">
      <SiReactquery size={25} color={SiReactqueryHex} />
    </Tooltip>
  ),
  GeminiAI : (
    <Tooltip content="GeminiAI">
      <SiGooglegemini size={25} color={SiGooglegeminiHex} />
    </Tooltip>
  ),
};

export const technologyLogoColorlessMap: { [key: string]: JSX.Element } = {
  HTML5: (
    <Tooltip content="HTML5">
      <SiHtml5 size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  CSS3: (
    <Tooltip content="CSS3">
      <SiCss3 size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  JavaScript: (
    <Tooltip content="JavaScript">
      <SiJavascript size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  TypeScript: (
    <Tooltip content="TypeScript">
      <SiTypescript size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  ReactJS: (
    <Tooltip content="React.js">
      <SiReact size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Bootstrap: (
    <Tooltip content="Bootstrap">
      <SiBootstrap size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  TailwindCSS: (
    <Tooltip content="Tailwind CSS">
      <SiTailwindcss size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Redux: (
    <Tooltip content="Redux">
      <SiRedux size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  NextJS: (
    <Tooltip content="Next.js">
      <SiNextdotjs size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  SCSS: (
    <Tooltip content="SCSS">
      <SiSass size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Firebase: (
    <Tooltip content="Firebase">
      <SiFirebase size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  MySQL: (
    <Tooltip content="MySQL">
      <SiMysql size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Framer: (
    <Tooltip content="Framer">
      <SiFramer size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  GitHub: (
    <Tooltip content="GitHub">
      <SiGithub size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Figma: (
    <Tooltip content="Figma">
      <SiFigma size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Netlify: (
    <Tooltip content="Netlify">
      <SiNetlify size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Vercel: (
    <Tooltip content="Vercel">
      <SiVercel size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Lighthouse: (
    <Tooltip content="Lighthouse">
      <SiLighthouse size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  ReactRouter: (
    <Tooltip content="React Router">
      <SiReactrouter size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
  Php: (
    <Tooltip content="PHP">
      <SiPhp size={50} className="fill-primary-500 dark:fill-accent-200" />
    </Tooltip>
  ),
};
