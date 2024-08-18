/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nazmulHelp': '#000000',
        'nazmulBG': '#dadbf0',
        'cardBG':'#f4f6f8'
      },
      fontFamily: {
        sourceSans: '"Source Sans 3", sans-serif;',
      },
    },
  },
  plugins: [],
};