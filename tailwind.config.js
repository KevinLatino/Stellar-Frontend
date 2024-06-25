/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-black": "#171821",
        "light-black": "#21222D",
        "icon-color": "#BFBFBF",
        "light-gree": "#A9DFD8",


        //More options colors 
        "Blue-Gray": "#2b2d42",
        "light-White": "#F5F5F5"
      }
    },
  },
  plugins: [],
}