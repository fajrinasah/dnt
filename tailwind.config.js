/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      dnt: {
        main: '#f2e9e4',
        contrast: '#22223b',
        accent: '#c9ada7'
      }
    },
  },
};
export const plugins = [require('flowbite/plugin')];

