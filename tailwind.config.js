/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        accent: "#FFA500",
        para: "#494949",
      },
      fontFamily: {
        open: ["'Open Sans", "san-serif"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

