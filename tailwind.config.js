/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenMain: "#008062",
      },
      fontFamily: {
        helveticaArabic: ["HelveticaArabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
