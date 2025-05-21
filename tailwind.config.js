/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        header: ['Poppins', 'sans-serif'], // Add Poppins for headers
        sans: ['sans-serif'], // Default sans-serif font for other text
      },
    },
  },
  plugins: [],
}

