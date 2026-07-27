/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF6E63',
          50: '#FFF1EF',
          100: '#FFE0DC',
          200: '#FFC2BA',
          300: '#FF9F92',
          400: '#FF8779',
          500: '#FF6E63',
          600: '#F04A3D',
          700: '#CC372B',
          800: '#A32C22',
          900: '#7A211A',
        },
        cream: {
          DEFAULT: '#F7D2A3',
          50: '#FFFBF5',
          100: '#FDF3E4',
          200: '#FAE6C9',
          300: '#F7D2A3',
          400: '#F2BE7C',
          500: '#ECA855',
        },
        blue: {
          DEFAULT: '#1D3FD3',
          50: '#EEF1FD',
          100: '#D6DDF9',
          500: '#1D3FD3',
          600: '#1832A8',
          700: '#13277F',
        },
        forest: {
          DEFAULT: '#1E5A3A',
          50: '#EAF4EE',
          100: '#C9E4D3',
          400: '#2C7A50',
          500: '#1E5A3A',
          600: '#164229',
          900: '#0C2517',
        },
        golden: {
          DEFAULT: '#F3C245',
          50: '#FEF9E9',
          100: '#FCEEBE',
          400: '#F3C245',
          500: '#E0AA1F',
        },
        ink: '#171512',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        heading: ['"Poppins"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '0.98', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
      },
      borderRadius: {
        organic: '63% 37% 54% 46% / 43% 45% 55% 57%',
        blob: '42% 58% 65% 35% / 45% 44% 56% 55%',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 8px 30px -8px rgba(23, 21, 18, 0.12)',
        lift: '0 20px 60px -15px rgba(255, 110, 99, 0.35)',
        glass: '0 8px 32px 0 rgba(23, 21, 18, 0.10)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(3deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-12px) translateX(10px)' },
        },
        bubble: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-120px) scale(1.4)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        bubble: 'bubble 4s ease-in infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
}
