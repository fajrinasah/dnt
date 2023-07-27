/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dnt: {
          main: '#f2e9e4',
          contrast: '#22223b',
          accent: '#c9ada7'
        }
      },
    },
  },
  plugins: [],
}

