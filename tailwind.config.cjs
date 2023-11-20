/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#f1f5f9',
        secondary: '#d1d5db',
        card: '#fff',
        btn: {
          primary: '#6246ea',
          default: '#cbd5e1'
        }
      },
      textColor: {
        primary: '#2b2c34',
        btn: {
          primary: '#fff'
        }
      },
      borderColor: {
        primary: '#6246ea',
        default: '#f9fafb',
        black: '#000'
      },
      outlineColor: {
        primary: '#6246ea'
      }
    }
  },
  plugins: []
};
