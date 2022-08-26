/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        page: '80rem'
      },
      maxWidth: {
        page: '80rem'
      }
    }
  },
  plugins: []
};
