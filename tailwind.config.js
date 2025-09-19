/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Permite usar la clase "dark" para modo oscuro
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkPalette: {
          50: '#f5f6fa',
          100: '#ebedf3',
          200: '#d2d7e5',
          300: '#abb5ce',
          400: '#7e8eb2',
          500: '#5e7099',
          600: '#4a597f',
          700: '#3c4768',
          800: '#353e57',
          900: '#30374a',
          950: '#191c27',
        },
        kpiBlue: '#003865',
        kpiIcon: '#F65127',
        tableBg: '#3E4B6B',
        graphColors: {
          1: '#3C4768',
          2: '#5E7099',
          3: '#7E8EB2',
          4: '#ABB5CE',
        },
        backgroundDark: '#000000',
      },
    },
  },
  plugins: [],
}