/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'primary-dark': '#023047',
        'primary-blue': '#219ebc',
        'light-blue': '#8ecae6',
        'accent-yellow': '#ffb703',
        'accent-orange': '#fb8500',
        'blue-light': '#b6ccd7'
      },
    },
  },
  plugins: [],
}