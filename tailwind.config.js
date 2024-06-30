/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  colors: {
    primary: {
      DEFAULT: colors.slate[900],
      medium: colors.slate[700],
      light: colors.slate[500],
    },
    secondary: colors.pink[600],
    accent: colors.sky[400],
    gray: colors.gray[300],
    white: colors.white,
  },
};
