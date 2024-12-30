/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeInTopToBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeftToRight: {
          '0%': { opacity: '0', width: '0%' },
          '100%': { opacity: '1', width: '100%' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInSlow: 'fadeIn 2s ease-in-out',
        fadeInFast: 'fadeIn 1s ease-in-out',
        fadeInMedium: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.5s ease-in-out',
        popIn: 'popIn 0.5s ease-in-out forwards',
        fadeInTopToBottom: 'fadeInTopToBottom 0.75s ease-in-out ',
        fadeInLeftToRight: 'fadeInLeftToRight 3s ease-in-out',
        fadeInLeftToRightDelay: 'fadeInLeftToRight 3s ease-in-out', // New fade-in left-to-right with width expansion
      },
    },
  },
  plugins: [],
}
