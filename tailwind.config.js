/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        reddit_dark: {
          DEFAULT: '#030303'
        }
      }
    },
  },
  plugins: [],
}

