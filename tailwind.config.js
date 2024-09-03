/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steelGrey: '#5D6A73',
        lightGrey: '#D2D6D9',
        white: '#F2F2F2',
        cadetBlue: '#85A0A6',
        pastelBlue: '#9BB9BF'
      }
    },
    fontFamily: {
      customFont: ['gamay', 'sans-serif'], 
    },
    fontWeight: {
      normal: 400,
      semibold: 700
    },
  },
  plugins: [],
}

