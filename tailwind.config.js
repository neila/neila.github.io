/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    rotate: {
      270: "270deg",
    },
    screens: {
      mobile: "320px",
      tablet: "481px",
      laptop: "769px",
      desktop: "1025px",
      monitor: "1201px",
      bigmonitor: "1441px",
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    fontSize: {
      xs: ".60rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
    },
  },
  variants: {
    extend: {
      animation: ["group-hover"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
