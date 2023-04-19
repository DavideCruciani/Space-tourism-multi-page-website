/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Barlow': ['Barlow', 'sans-serif'],
      'BarlowCD': ['Barlow Condensed', 'sans-serif'],
      'Bellefair': ['Bellefair', 'serif'],
    }
  },
  plugins: [],
}

