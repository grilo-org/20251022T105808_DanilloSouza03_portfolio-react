/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#0074E4',
        'secondary-color': '#222',
        'text-color': '#fff',
        'background-card': '#2B2F33',
        'card-color': '#2F618F',
        'tag-color': '#324B63',
      }
    },
  },
  plugins: [],
}