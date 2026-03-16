/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5CF6', // Violet
        secondary: '#06B6D4', // Cyan
        accent: '#10B981', // Emerald
        dark: '#030712', // Slate 950
        'dark-card': '#111827', // Slate 900
        light: '#F8FAFC', // Slate 50
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        Montserrat: ['Montserrat']
      },
    },
  },
  plugins: [],
}