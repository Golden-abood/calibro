/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        primary: '#ec912b',
        secondary: '#f5cb9a',
        gray: '#323131',
        dark: '#888',
        darken: '#1D2130',
        grey: '#1C1C1C'
      },

      // use Roboto Font
      fontFamily: {
        sans: ['Barlow', 'sans-serif']
      },
      fontSize: {
        '3xl': ['32px', '38px']
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1.5rem',
          lg: '4rem',
          xl: '4rem',
          '2xl': '4rem'
        },

        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px'
        }
      },
      animation: {
        move: 'move 2s linear infinite'
      },
      keyframes: {
        move: {
          '0%, 100%': { top: '5px' },
          '50%': { top: '-10px' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#brEC201B)'
      },

      boxShadow: {
        point: '0 0px 1000px 200px #ec912b2e'
      }
    }
  },
  plugins: []
}
