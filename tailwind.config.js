/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      spin: {
        '100%': {
          transform: 'rotate(1turn)',
        },
      },
      spinDot: {
        '100%': {
          transform: 'rotate(0.5turn)',
        },
      },
      dot: {
        '20%': {
          backgroundPosition: '0% 0%, 50% 50%, 100% 50%',
        },
        '40%': {
          backgroundPosition: '0% 100%, 50% 0%, 100% 50%',
        },
        '60%': {
          backgroundPosition: '0% 50%, 50% 100%, 100% 0%',
        },
        '80%': {
          backgroundPosition: '0% 50%, 50% 50%, 100% 100%',
        },
      },
      line1: {
        '0%': {
          backgroundSize: '0 4px, 4px 0, 0 4px, 4px 0',
        },
        '12.5%': {
          backgroundSize: '100% 4px, 4px 0, 0 4px, 4px 0',
        },
        '25%': {
          backgroundSize: '100% 4px, 4px 100%, 0 4px, 4px 0',
        },
        '37.5%': {
          backgroundSize: '100% 4px, 4px 100%, 100% 4px, 4px 0',
        },
        '45%, 55%': {
          backgroundSize: '100% 4px, 4px 100%, 100% 4px, 4px 100%',
        },
        '62.5%': {
          backgroundSize: '0 4px, 4px 100%, 100% 4px, 4px 100%',
        },
        '75%': {
          backgroundSize: '0 4px, 4px 0, 100% 4px, 4px 100%',
        },
        '87.5%': {
          backgroundSize: '0 4px, 4px 0, 0 4px, 4px 100%',
        },
        '100%': {
          backgroundSize: '0 4px, 4px 0, 0 4px, 4px 0',
        },
      },
      line2: {
        '0%, 49%': {
          backgroundPosition: '0 0, 100% 0, 100% 100%, 0 100%',
        },
        '50%, 100%': {
          backgroundPosition: '100% 0, 100% 100%, 0 100%, 0 0',
        },
      },
      shape: {
        '33%': {
          borderRadius: 0,
          background: 'var(--secondary-color-200)',
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        },
        '66%': {
          borderRadius: 0,
          background: 'var(--tertiary-color-200)',
          clipPath: 'polygon(50% 0, 50% 0, 100% 100%, 0 100%)',
        },
      },
    },
    animation: {
      'fade-in': 'fadeIn 0.4s linear forwards',
      spin: 'spin 4s infinite',
      'spin-linear': 'spin 1s infinite linear',
      'spin-dot': 'spinDot 1s infinite',
      dot: 'dot 1s infinite linear',
      line: 'line1 2s infinite, line2 2s infinite',
      shape: 'shape 2s infinite cubic-bezier(0.3, 1, 0, 1)',
    },
  },
  darkMode: 'class',
  plugins: [],
};
