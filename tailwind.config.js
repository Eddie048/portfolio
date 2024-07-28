/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    accent: {
      DEFAULT: colors.sky[300],
      secondary: colors.sky[200],
    },
    white: colors.white,
    background: {
      DEFAULT: colors.gray[200],
      secondary: colors.white,
      hover: colors.gray[100],
    },
    text: colors.black,
    shadow: colors.gray[400],
  },
};
