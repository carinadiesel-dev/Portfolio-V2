/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'trueBlue': '#2363d1',
        'darkCyan': '#119da4',
        'blueViolet': '#8c46d8',
        'darkOrangeRed': '#bc5554',
        'ivory': '#f4f9e9',
        'timberwolfWhite': '#E4DFDA',
        'jetGray': '#343434',
        'darkModeBG': '#0a0b10',
        'gradient-accent-orange-dark': 'linear-gradient(150deg,#ca7879,#7611a6,#1c0056)',

        
        


        'primary': '#7611a6',
        'purple-primary' : '#646cff',
        'purple-secondary' : '#535bf2',
        'purple-tertiary' : '#747bff',

        'gray-0': 'rgb(var(--gray-0) / <alpha-value>)',
        'gray-50': 'rgb(var(--gray-50) / <alpha-value>)',
        'gray-100':'rgb(var(--gray-100) / <alpha-value>)',
        'gray-200': 'rgb(var(--gray-200) / <alpha-value>)',
        'gray-300': 'rgb(var(--gray-300) / <alpha-value>)',
        'gray-400': 'rgb(var(--gray-400) / <alpha-value>)',
        'gray-500': 'rgb(var(--gray-500) / <alpha-value>)',
        'gray-600': 'rgb(var(--gray-600) / <alpha-value>)',
        'gray-700': 'rgb(var(--gray-700) / <alpha-value>)',
        'gray-800': 'rgb(var(--gray-800) / <alpha-value>)',
        'gray-900': 'rgb(var(--gray-900) / <alpha-value>)',

        'accent-light': 'rgb(var(--accent-light) / <alpha-value>)',
        'accent-regular': 'rgb(var(--accent-regular) / <alpha-value>)',
        'accent-dark': 'rgb(var(--accent-dark) / <alpha-value>)',
        'accent-overlay': 'hsla(var(--accent-overlay) / <alpha-value>)',

        /* Gradients */
	// 'gradient-stop-1' : var(--accent-light);
	// 'gradient-stop-2' : var(--accent-regular);
	// 'gradient-stop-3' : var(--accent-dark);
	'gradient-subtle' : 'linear-gradient(150deg, #f3f4f7 19%, hsl(0 0% 100%) 150%)',
	'gradient-accent' : 'linear-gradient(150deg,#c561f6,#7611a6,#1c0056)',
	'gradient-accent-orange': 'linear-gradient(150deg,#ca7879,#7611a6,#1c0056)',
	'gradient-stroke': 'linear-gradient(180deg, #f3f4f7, #c3cadb',

        // Dark Mode Colors
        'gray-0-dark': 'rgb(var(--gray-0-dark) / <alpha-value>)',
        'gray-50-dark': 'rgb(var(--gray-50-dark) / <alpha-value>)',
        'gray-100-dark':'rgb(var(--gray-100-dark) / <alpha-value>)',
        'gray-200-dark': 'rgb(var(--gray-200-dark) / <alpha-value>)',
        'gray-300-dark': 'rgb(var(--gray-300-dark) / <alpha-value>)',
        'gray-400-dark': 'rgb(var(--gray-400-dark) / <alpha-value>)',
        'gray-500-dark': 'rgb(var(--gray-500-dark) / <alpha-value>)',
        'gray-600-dark': 'rgb(var(--gray-600-dark) / <alpha-value>)',
        'gray-700-dark': 'rgb(var(--gray-700-dark) / <alpha-value>)',
        'gray-800-dark': 'rgb(var(--gray-800-dark) / <alpha-value>)',
        'gray-900-dark': 'rgb(var(--gray-900-dark) / <alpha-value>)',
      

        'accent-light-dark': 'rgb(var(--accent-light-dark) / <alpha-value>)',
        'accent-regular-dark': 'rgb(var(--accent-regular-dark) / <alpha-value>)',
        'accent-dark-dark': 'rgb(var(--accent-dark-dark) / <alpha-value>)',
        'accent-overlay-dark': 'hsla(var(--accent-overlay-dark) / <alpha-value>)',

        'gradient-subtle-dark' : 'linear-gradient(150deg, 141925 19%, #090b11 81%)',
	// 'gradient-accent-dark' : 'linear-gradient(150deg,#c561f6,#7611a6,#1c0056)',
	
	'gradient-stroke-dark': 'linear-gradient(180deg, #505d84, #505d84',
        
      },
      fontFamily: {
        system: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif'],
        body: 'Public Sans',
        brand: 'Rubik'
      },
      backgroundImage: {
        'image-main': "url('./src/assets/backgrounds/bg-main-dark-800w.jpg')",
        'subtle-1': "url('./src/assets/backgrounds/bg-subtle-1-light-1440w.jpg')",
        'subtle-2': "url('./src/assets/backgrounds/bg-subtle-2-light-1440w.jpg')",
        'footer': "url('./src/assets/backgrounds/bg-main-footer-1440w.jpg')",
        'hero': "url('./src/assets/at-work.jpg')",
        'text-gradient': 'linear-gradient(90deg, rgba(17,157,164,1) 0%, rgba(140,70,216,1) 50%, rgba(35,99,209,1) 100%)',
        'gradient-accent-orange-dark': 'linear-gradient(150deg,#ca7879,#7611a6,rgba(35,99,209,1))',
      },
      screen: {
        'xs': '475px',
      }
    },
  },
  plugins: [],
});

