/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        trueBlue: "#2363d1",
        darkCyan: "#119da4",
        blueViolet: "#8c46d8",
        darkOrangeRed: "#bc5554",
        ivory: "#f4f9e9",
        timberwolfWhite: "#E4DFDA",
        jetGray: "#343434",
        darkModeBG: "#0a0b10",
        "gradient-accent-orange-dark":
        "linear-gradient(150deg,#ca7879,#7611a6,#1c0056)",
        "purple-dark": "#7611a6",
      },
      fontFamily: {
        system: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
        body: "Public Sans",
        brand: "Rubik",
      },
      backgroundImage: {
        "image-main": "url('./src/assets/backgrounds/bg-main-dark-800w.jpg')",
        footer: "url('./src/assets/backgrounds/bg-main-footer-1440w.jpg')",
        hero: "url('./src/assets/at-work.jpg')",
        "text-gradient":
          "linear-gradient(90deg, rgba(17,157,164,1) 0%, rgba(140,70,216,1) 50%, rgba(35,99,209,1) 100%)",
        "gradient-accent-orange-dark":
          "linear-gradient(150deg,#ca7879,#7611a6,rgba(35,99,209,1))",
      },
      screen: {
        xs: "475px",
      },
    },
  },
  plugins: [],
});
