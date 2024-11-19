/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        text: 'rgb(var(--r-black-cozy) / <alpha-value>)',
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        button: 'hsl(var(--button) / <alpha-value>)',
        'button-hover': 'hsl(var(--button-hover) / <alpha-value>)',
        discord: 'hsl(var(--color-discord) / <alpha-value>)',
        facebook: 'hsl(var(--color-facebook) / <alpha-value>)',
        github: 'hsl(var(--color-github) / <alpha-value>)',
        'instagram-yellow': 'hsl(var(--color-instagram-yellow) / <alpha-value>)',
        'instagram-red': 'hsl(var(--color-instagram-red) / <alpha-value>)',
        'instagram-purple': 'hsl(var(--color-instagram-purple) / <alpha-value>)',
        linkedin: 'hsl(var(--color-linkedin) / <alpha-value>)',
        twitch: 'hsl(var(--color-twitch) / <alpha-value>)',
        twitter: 'hsl(var(--color-twitter) / <alpha-value>)',
        'twitter-blue': 'hsl(var(--color-twitter-blue) / <alpha-value>)',
        whatsapp: 'hsl(var(--color-whatsapp) / <alpha-value>)',
        youtube: 'hsl(var(--color-youtube) / <alpha-value>)'
      }
    },
    backgroundImage: {
      'instagram-gradient':
        'linear-gradient(to right, hsl(var(--color-instagram-purple) / 1), hsl(var(--color-instagram-red) / 1), hsl(var(--color-instagram-yellow) / 1))'
    }
  },
  safelist: [
    {
      pattern:
        /bg-(discord|facebook|github|instagram-gradient|linkedin|twitch|twitter|twitter-blue|whatsapp|youtube)/
    }
  ]
}
