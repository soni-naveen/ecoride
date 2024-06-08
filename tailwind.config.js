import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "2xl": { max: "1447px" },
      // => @media (max-width: 1300px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md1: { max: "867px" },
      //  => @media (max-width: 867px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      smxl: { max: "480px" },
      // => @media (max-width : 480px) { ... }

      sm2xl: { max: "350px" },
      // => @media (max-width : 480px) { ... }
    },
    extend: {
      colors: {
        "dark-color": "#2a6171",
        "medium-color": "#07b2a4",
        "light-color": "#d7f7f5",
      },
      keyframes: {
        "dropdown-animation": {
          "0%": { transform: "scaleY(0)", opacity: "0" },
          "100%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        "dropdown-animation":
          "dropdown-animation 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
    fontFamily: {
      roboto: ["Roboto Slab"],
    },
    important: true,
  },
  plugins: [],
};
