/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'nazmulButton': '#1a1a1a',
        'nazmulBG': '#dadbf0',
        'cardBG': '#f4f6f8',
        'cardTitle': '#2f3334',
      },
      fontFamily: {
        sourceSans: '"Source Sans 3", sans-serif;',
      },
    },
  },
  plugins: [],
};