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
        "dark-black": "#171821",
        "light-black": "#21222D",
        "icon-color": "#BFBFBF",
        "light-gree": "#A9DFD8",

        //Oppia colors
        //NavBar and bakcground
        "Blue-Gray": "#003554",
        "light-White": "#F5F5F5",

        //Different types of blue
        "navy-blue": "#052559",
        "light-blue": "#05589a",
        "sky-blue": "#0479c4",

        //More options colors 
        "Blue-Gray": "#0b103d",
        "light-White": "#F5F5F5"
      },

      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
}