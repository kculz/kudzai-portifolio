/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E4053', // Dark Blue
        secondary: '#456778', // Medium Blue
        tertiary: '#6495ED', // Light Blue
        dark: '#333333', // Dark Gray
        light: '#F7F7F7', // Light Gray
        black: '#000000',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        Montserrat: ['Montserrat']
      },
    },
  },
  plugins: [],
}