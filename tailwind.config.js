/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        govblue: {
          50: '#e5f2ff',
          100: '#cce4ff',
          200: '#99c9ff',
          300: '#66aeff',
          400: '#3393ff',
          500: '#0078ff',
          600: '#005fcc',
          700: '#004699',
          800: '#002e66',
          900: '#001733'
        }
      },
      boxShadow: {
        'soft-card': '0 18px 45px rgba(15, 23, 42, 0.35)'
      },
      borderRadius: {
        '2xl': '1.5rem'
      }
    }
  },
  plugins: []
};
