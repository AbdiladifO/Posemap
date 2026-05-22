/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['DM Serif Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        ink: {
          950: '#0a0a0f',
          900: '#111118',
          800: '#1a1a24',
          700: '#24243a',
          600: '#32324e',
        },
        chalk: {
          100: '#f0ede8',
          200: '#e0dbd2',
          300: '#c8c0b4',
        },
        ember: {
          400: '#ff6b35',
          500: '#e55a25',
          600: '#cc4a18',
        },
        bone: {
          100: '#faf6f0',
          200: '#f0e8d8',
          300: '#ddd0bc',
        },
      },
    },
  },
  plugins: [],
}
