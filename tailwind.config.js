/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080e14',
          900: '#0f1419',
          800: '#162030',
          700: '#1a2b3c',
          600: '#1a3a52',
          500: '#245070',
          400: '#2e6a96',
          300: '#5b9cc4',
          200: '#b3d4e8',
          100: '#e8f2f9',
          50:  '#f5f9fc',
        },
        rosegold: {
          700: '#9a5148',
          600: '#b5635a',
          500: '#c97a6b',
          400: '#d4956a',
          300: '#e0b49a',
          200: '#eecfbe',
          100: '#f7e8e0',
          50:  '#fdf5f2',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        float:      'float 6s ease-in-out infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
      },
      boxShadow: {
        'navy-sm': '0 2px 12px rgba(26,58,82,0.08)',
        navy:      '0 4px 24px rgba(26,58,82,0.12)',
        'navy-lg': '0 8px 48px rgba(26,58,82,0.18)',
        'rose-sm': '0 2px 12px rgba(201,122,107,0.12)',
        rose:      '0 4px 24px rgba(201,122,107,0.22)',
        'rose-lg': '0 8px 48px rgba(201,122,107,0.32)',
      },
    },
  },
  plugins: [],
}
