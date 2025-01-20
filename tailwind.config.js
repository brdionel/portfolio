/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#242526',
          dark: "#EEEEEE"
        },
      },
      screens: {
        'custom-sm': '750px'
      }
    },
  },
  plugins: [],
}

