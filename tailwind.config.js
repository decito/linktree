/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--r-primary) / <alpha-value>)',
        secondary: 'rgb(var(--r-secondary) / <alpha-value>)',

        'text-light': 'rgb(var(--r-black-cozy) / <alpha-value>)',
        'text-dark': 'rgb(var(--r-white-cozy) / <alpha-value>)',

        'bg-light': 'rgb(var(--r-white) / <alpha-value>)',
        'bg-dark': 'rgb(var(--r-black) / <alpha-value>)',

        'bg-btn-light': 'rgb(var(--r-black-soft) / <alpha-value>)',
        'bg-btn-dark': 'rgb(var(--r-white-soft) / <alpha-value>)',

        'bg-btn-light-hover': 'rgb(var(--r-black-mute) / <alpha-value>)',
        'bg-btn-dark-hover': 'rgb(var(--r-white-mute) / <alpha-value>)',

        'footer-light': 'rgb(var(--r-black-mute) / <alpha-value>)',
        'footer-dark': 'rgb(var(--r-white-mute) / <alpha-value>)'
      }
    }
  }
}
