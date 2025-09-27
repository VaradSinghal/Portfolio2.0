/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fefefe',
        primary: '#2c2c2c',
        secondary: '#6b7280',
        accent: '#3b82f6',
        cream: {
          50: '#fefefe',
          100: '#fefcf9',
          200: '#fdf8f3',
          300: '#fbf2ed',
          400: '#f8ebe0',
          500: '#f4e4d3',
          600: '#f0ddc6',
          700: '#ecd6b9',
          800: '#e8cfac',
          900: '#e4c89f',
        },
        professional: {
          blue: '#2563eb',
          purple: '#7c3aed',
          cyan: '#06b6d4',
          green: '#10b981',
          orange: '#f59e0b',
          red: '#ef4444',
        },
        glassBg: 'rgba(254, 252, 249, 0.8)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-professional': 'linear-gradient(135deg, #2563eb, #7c3aed, #06b6d4)',
      },
    },
  },
  plugins: [],
};