/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fef9f3',
          100: '#fef3e7',
          200: '#fde7cf',
          300: '#fcdab7',
          400: '#fbce9f',
          500: '#fac287',
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};
