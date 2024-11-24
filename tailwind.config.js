/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  prefix: 'tw-',
  theme: {
    colors: {
      primary: '#FE019A',
      secondary: '#C0F000',
      dark: '#222222',
      gray: '#757575',
      white: '#FFFFFF',
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
