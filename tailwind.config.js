/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Original brand foundation (preserved) ──
        brand: {
          gold: '#D4AF37',
          goldLight: '#E6C86E',
          goldDark: '#bfa34a',
          dark: '#1A1110',
          footer: '#2a110f',
          green: '#2c3930',
          cream: '#F1F8E9',
        },
        // ── Caribbean accents (new) ──
        carib: {
          turquoise: '#00BFA6',
          aqua: '#1CC8C0',
          orange: '#FF7A3D',
          coral: '#FF5E5B',
          palm: '#2E9E5B',
          sun: '#FFC93C',
          deep: '#0E4D64',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'carib-gradient':
          'linear-gradient(135deg, #00BFA6 0%, #1CC8C0 35%, #FFC93C 70%, #FF7A3D 100%)',
        'carib-warm': 'linear-gradient(135deg, #FF7A3D 0%, #FF5E5B 100%)',
        'carib-cool': 'linear-gradient(135deg, #0E4D64 0%, #00BFA6 100%)',
        'gold-sheen': 'linear-gradient(135deg, #E6C86E 0%, #D4AF37 50%, #bfa34a 100%)',
      },
      boxShadow: {
        tropical: '0 18px 40px -12px rgba(0, 191, 166, 0.45)',
        gold: '0 18px 40px -12px rgba(212, 175, 55, 0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
