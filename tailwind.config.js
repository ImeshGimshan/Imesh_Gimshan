/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        gothic: ['"Century Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
