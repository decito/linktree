/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)',
        secondary: 'rgb(209 213 219)'
      }
    }
  }
}
