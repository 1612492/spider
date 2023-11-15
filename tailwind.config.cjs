/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    colors: {},
    extend: {
      backgroundColor: {
        primary: '#fffffe',
        secondary: '#d1d1e9',
        tertiary: '#e45858',
        highlight: '#6246ea'
      },
      textColor: {
        primary: '#2b2c34',
        secondary: '#fffffe',
        tertiary: '#e45858',
        highlight: '#6246ea'
      },
      borderColor: {
        primary: '#2b2c34',
        secondary: '#d1d1e9',
        tertiary: '#e45858',
        highlight: '#6246ea'
      }
    }
  },
  plugins: []
};
