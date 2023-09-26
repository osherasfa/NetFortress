/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Some useful comment
    extend: {
        colors: {
          primary: '#0C0C0C',
          secondary: '#EEEEEE',
          tertiary: '#191919',
        }
    },

  },
  plugins: [],
}