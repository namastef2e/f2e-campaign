/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'default': ['BluuNext-Bold', 'BluuNext-Bolditalic', 'BluuNext-Titling', 'GenSekiGothic-B', 'GenSekiGothic-H', 'GenSekiGothic-L', 'GenSekiGothic-M', 'GenSekiGothic-R']
    },
    extend: {
      colors: {
        primary: {
          dark: '#007991',
          tint: '#78FFD6'
        },
        secondary: {
          dark: '#2D2942',
          tint: '#EEEEEE'
        },
        grey: {
          1: '#000000',
          2: '#212121',
          3: '#424242',
          4: '#616161',
          5: '#757575',
          6: '#9E9E9E',
          7: '#BDBDBD',
          8: '#E0E0E0',
          9: '#F5F5F5',
          10: '#FAFAFA',
          11: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}
