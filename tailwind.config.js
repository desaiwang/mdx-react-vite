/** @type {import('tailwindcss').Config} */

import typography from "@tailwindcss/typography";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./posts/**/*.mdx",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontWeight: "700",
              color: "skyblue",
            },
          },
        },
      },
    },
    fontFamily: {},
  },
  plugins: [typography],
};
