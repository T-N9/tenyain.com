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
} from "@icons-pack/react-simple-icons";
import { Tooltip } from "flowbite-react";

export const technologyLogoMap: { [key: string]: JSX.Element } = {
  HTML5: (
    <Tooltip content="HTML5">
      <SiHtml5 size={50} color={SiHtml5Hex} />
    </Tooltip>
  ),
  CSS3: (
    <Tooltip content="CSS3">
      <SiCss3 size={50} color={SiCss3Hex} />
    </Tooltip>
  ),
  JavaScript: (
    <Tooltip content="JavaScript">
      <SiJavascript size={50} color={SiJavascriptHex} />
    </Tooltip>
  ),
  TypeScript: (
    <Tooltip content="TypeScript">
      <SiTypescript size={50} color={SiTypescriptHex} />
    </Tooltip>
  ),
  ReactJS: (
    <Tooltip content="React.js">
      <SiReact size={50} color={SiReactHex} />
    </Tooltip>
  ),
  Bootstrap: (
    <Tooltip content="Bootstrap">
      <SiBootstrap size={50} color={SiBootstrapHex} />
    </Tooltip>
  ),
  TailwindCSS: (
    <Tooltip content="Tailwind CSS">
      <SiTailwindcss size={50} color={SiTailwindcssHex} />
    </Tooltip>
  ),
  Redux: (
    <Tooltip content="Redux">
      <SiRedux size={50} color={SiReduxHex} />
    </Tooltip>
  ),
  NextJS: (
    <Tooltip content="Next.js">
      <SiNextdotjs size={50} color={SiNextdotjsHex} />
    </Tooltip>
  ),
  SCSS: (
    <Tooltip content="SCSS">
      <SiSass size={50} color={SiSassHex} />
    </Tooltip>
  ),
  Firebase: (
    <Tooltip content="Firebase">
      <SiFirebase size={50} color={SiFirebaseHex} />
    </Tooltip>
  ),
  MySQL: (
    <Tooltip content="MySQL">
      <SiMysql size={50} color={SiMysqlHex} />
    </Tooltip>
  ),
  Framer: (
    <Tooltip content="Framer">
      <SiFramer size={50} color={SiFramerHex} />
    </Tooltip>
  ),
  GitHub: (
    <Tooltip content="GitHub">
      <SiGithub size={50} color={SiGithubHex} />
    </Tooltip>
  ),
  Figma: (
    <Tooltip content="Figma">
      <SiFigma size={50} color={SiFigmaHex} />
    </Tooltip>
  ),
  Netlify: (
    <Tooltip content="Netlify">
      <SiNetlify size={50} color={SiNetlifyHex} />
    </Tooltip>
  ),
  Vercel: (
    <Tooltip content="Vercel">
      <SiVercel size={50} color={SiVercelHex} />
    </Tooltip>
  ),
  Lighthouse: (
    <Tooltip content="Lighthouse">
      <SiLighthouse size={50} color={SiLighthouseHex} />
    </Tooltip>
  ),
  ReactRouter: (
    <Tooltip content="React Router">
      <SiReactrouter size={50} color={SiReactrouterHex} />
    </Tooltip>
  ),
  Php: (
    <Tooltip content="PHP">
      <SiPhp size={50} color={SiPhpHex} />
    </Tooltip>
  ),
};
