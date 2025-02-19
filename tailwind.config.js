/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  prefix: 'tw-',
  theme: {
    colors: {
      primary: '#FC225F',
      secondary: '#C0F000',
      dark: '#222222',
      gray: '#757575',
      white: '#FFFFFF',
      yellow: '#FFFF00',
    },
    fontFamily: {
      'if-kica': [ 'if kica', 'Arial', 'sans-serif' ],
      'montserrat': [ 'montserrat', 'Arial', 'sans-serif' ],
    },
    letterSpacing: {
      '1': '0.01em',
    },
  },
  plugins: [],
}
