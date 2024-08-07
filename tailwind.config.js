/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      theme: {
        minWidth: {
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem'
        },
      },

      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },

      colors: {
        //Stellar colors (for navbar, etc)
        "stellar-icon-color": "#BFBFBF",
        "stellar-blue": "#0B103D",
        "stellar-white": "#EDF0F7",
        "stellar-grey": "#565555",
        "stellar-text": "000000a3",

        //strong colors
        "strong-blue": "#14162E",
        "strong-red": "#Eb2828",
        'purple-strong': '#763DF2',

        //light colors
        "light-White": "#EDF0F7",
        "light-yellow": "#F9B742",
        "light-blue": "#4461F2",
        "light-green": "#48BC5E",
        "light-red": "#EF4545",
        'purple-light': '#C364FF',
      },
    },
  },
}