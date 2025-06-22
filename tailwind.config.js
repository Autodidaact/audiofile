module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D87D4A',
        'primary-light': '#FBAF85',
        black: '#101010',
        gray: {
          100: '#FAFAFA',
          200: '#F1F1F1',
          500: '#808080',
        },
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}

