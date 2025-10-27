// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D0D0D',
        'brand-gray': '#1A1A1A',
        'brand-yellow': '#EBAF28',
        'brand-light': '#EAEAEA',
        'brand-muted': '#888888',
      },
      fontFamily: {
        'heading': ['Cinzel', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}