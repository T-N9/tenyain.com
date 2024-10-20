import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#e7f6fd",
          "100": "#c7eaf9",
          "200": "#9ed9f4",
          "300": "#6fc5ec",
          "400": "#3eaee3",
          "500": "#229ddf",
          "600": "#1192d3", // Base color
          "700": "#0f79ac",
          "800": "#0d6086",
          "900": "#0a4964",
          "950": "#05303e",
        },
        secondary: '#3a4856',
        accent: {
          "50": "#e6fbf5",
          "100": "#bcf6e2",
          "200": "#8af1cf",
          "300": "#56ebbb",
          "400": "#2fe4aa",
          "500": "#29d699",
          "600": "#2fe0ac",  // Base color
          "700": "#25b48a",
          "800": "#1b8a6a",
          "900": "#136751",
          "950": "#0c4133",
        },
        
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
