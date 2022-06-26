/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        sm: { min: '360px', max: '767px' },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: '768px', max: '1023px' },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: '1024px', max: '1279px' },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: '1280px', max: '1535px' },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        '2xl': { min: '1536px' },
        // => @media (min-width: 1536px) { ... }
        customMd: { min: '768px', max: '1100px' },
      },
      backgroundImage: {
        blur: 'url(/src/assets/blur-bg.png)',
        reactIconBg: 'url(/src/assets/ReactJS-icon.png)',
      },
      fontFamily: {
        sans: ['Roboto, sans-serif'],
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
      borderRadius: {
        md: '0.25rem',
      },
    },
  },
  plugins: [],
};
