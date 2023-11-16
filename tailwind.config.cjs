/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    color: {},
    extend: {
      backgroundColor: {
        primary: '#e2e8f0',
        secondary: '#d1d5db',
        card: '#fff',
        btn: {
          primary: '#6246ea'
        }
      },
      textColor: {
        primary: '#2b2c34',
        btn: {
          primary: '#fff'
        }
      },
      borderColor: {
        primary: '#f9fafb'
      }
    }
  },
  plugins: []
};
