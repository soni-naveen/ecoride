/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color": "#2a6171",
        "medium-color": "#75cac3",
        "light-color": "#d7f7f5",
      },
    },
  },
  plugins: [],
};
