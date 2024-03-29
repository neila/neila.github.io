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
    extend: {
      colors: {
        success: {
          DEFAULT: "#79F300",
          100: "#C1FF83",
          200: "#B7FF6E",
          300: "#A2FF45",
          400: "#8EFF1D",
          500: "#79F300",
          600: "#65CA00",
          700: "#00aa00",
        },
        warning: {
          DEFAULT: "#FE353E",
          100: "#FFE7E8",
          200: "#FFBEC1",
          300: "#FE969A",
          400: "#FE6D73",
          500: "#FE353E",
          600: "#F9020C",
          700: "#C10109",
        },
        info: {
          DEFAULT: "#1EE4D1",
          100: "#9EF4EB",
          200: "#8CF1E7",
          300: "#67EDE0",
          400: "#43E9D8",
          500: "#1EE4D1",
          600: "#17C3B2",
          700: "#119184",
        },
        neutral: {
          DEFAULT: "#1C1C1C",
          100: "#FFFFFF",
          200: "#F2F2F2",
          300: "#B5B5B5",
          400: "#787878",
          500: "#3B3B3B",
          600: "#1C1C1C",
          700: "#161616",
          base: "#F2F2F2",
          black: "#000000",
        },
      },
    },
    fontWeight: {
      1: 100,
      2: 200,
      3: 300,
      4: 400,
      5: 500,
      6: 600,
      7: 700,
      8: 800,
      9: 900,
    },
    fontSize: {
      1: "1rem",
      1.125: "1.125rem",
      1.25: "1.25rem",
      1.5: "1.5rem",
      1.875: "1.875rem",
      2: "2rem",
      2.25: "2.25rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
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
};
