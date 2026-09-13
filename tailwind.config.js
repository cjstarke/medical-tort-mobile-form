const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        default: colors.green[100],
        primary: colors.red[600],
        secondary: '#1D1F29', // Dark Blue
        tertiary: '#F5FAEE',
        accent: '#F2C94C',
        success: '#27AE60',
        info: '#2D9CDB',
        warning: '#F2994A',
        error: '#EB5757',
        highlight: '#83bc01',
        startRed: '#ce2127',
        endRed: '#8d0b10 ',
        roundUpBlue: '#001272',
        roundUpLightBlue: '#0031DE',
        orange: {
          ...colors.orange,
          500: '#EF643D', // Orange from prototype pages
          400: '#FF7600', // Orange for thank you modal
        },
        red: {
          ...colors.red,
          500: '#FA0641', // red from hernia mesh
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        slab: '"Roboto Slab"',
        openSans: ['Open Sans', 'sans-serif'],
      },
      transitionDuration: {
        0: '0ms',
        10000: '10000ms',
      },
      spacing: {
        122: '22rem',
        125: '25rem',
        128: '28rem',
        132: '32rem',
        135: '35rem',
      },
      zIndex: {
        5: '5',
      },
      screens: {
        '3xl': '2100px',
      },
    },
    screens: {
      xs: '378px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')],
}
