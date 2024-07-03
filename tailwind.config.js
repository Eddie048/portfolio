/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    accent: {
      DEFAULT: colors.sky[300],
      dark: colors.sky[400],
    },
    white: colors.white,
    background: {
      DEFAULT: colors.gray[200],
      secondary: colors.white,
    },
    text: colors.black,
  },
};
