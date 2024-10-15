import {
  SiNextdotjs,
  SiTailwindcss,
  SiTailwindcssHex,
  SiFirebase,
  SiFirebaseHex,
  SiGoogleanalytics,
  SiGoogleanalyticsHex,
  SiFigma,
  SiFigmaHex,
  SiPhp,
  SiPhpHex
} from "@icons-pack/react-simple-icons";
import { Tooltip } from "flowbite-react";

export const technologyLogoMap: { [key: string]: JSX.Element } = {
  NextJS: (
    <Tooltip content="Next.JS">
      <SiNextdotjs size={50} />
    </Tooltip>
  ),
  TailwindCSS: (
    <Tooltip content="Tailwind CSS">
      <SiTailwindcss size={50} color={SiTailwindcssHex} />
    </Tooltip>
  ),
  Firebase: (
    <Tooltip content="Firebase">
      <SiFirebase size={50} color={SiFirebaseHex} />
    </Tooltip>
  ),
  G4A: (
    <Tooltip content="Google Analytics">
      <SiGoogleanalytics size={50} color={SiGoogleanalyticsHex} />
    </Tooltip>
  ),
  Figma:(
    <Tooltip content="Figma">
      <SiFigma size={50} color={SiFigmaHex} />
    </Tooltip>
  ),
  PHP:(
    <Tooltip content="Figma">
      <SiPhp size={50} color={SiPhpHex} />
    </Tooltip>
  )
};
