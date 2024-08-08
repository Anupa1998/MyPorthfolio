/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'colorbgblue': '#1f242d',
        'colorlightblue' : '#0ef'
      },
    },
  },
  plugins: [],
}

