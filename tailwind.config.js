/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    accent: colors.sky[300],
    white: colors.white,
    background: {
      DEFAULT: colors.gray[200],
      secondary: colors.white,
    },
    text: colors.black,
  },
};
