/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#ff0033',
        'brand-blue': '#0066ff',
        'mc-bg': '#1a1a1a',
      },
      fontFamily: {
        minecraft: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
}
