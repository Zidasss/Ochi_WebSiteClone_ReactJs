/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'neue': ['Neue', 'sans-serif'],
        'grotes':['Grotesk','sans-serif']
      },
    },
  },
  plugins: [],
}

