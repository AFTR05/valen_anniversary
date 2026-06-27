/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night:    '#24121E',
        wine:     '#6F2D52',
        wine2:    '#8B3A63',
        gold:     '#C6A46A',
        'gold-lo':'#D4B896',
        cream:    '#F8F1E8',
        card:     '#FFFDF9',
        ink:      '#3A2430',
        muted:    '#8A747C',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        italic:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-1': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.12s both',
        'fade-up-2': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.24s both',
        'fade-up-3': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.36s both',
        'fade-up-4': 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.48s both',
        'pop':       'pop 0.45s cubic-bezier(0.175,0.885,0.32,1.275) both',
        'drift-a':   'drift 8s ease-in-out infinite',
        'drift-b':   'drift 11s ease-in-out 2s infinite',
        'drift-c':   'drift 7s ease-in-out 4.5s infinite',
        'drift-d':   'drift 10s ease-in-out 1.5s infinite',
        'heartbeat': 'heartbeat 2s ease-in-out infinite',
        'shimmer':   'shimmer 3s linear infinite',
        'rain':      'rain linear infinite',
        'glow-gold': 'glowGold 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        pop: {
          from: { opacity: '0', transform: 'scale(0.86)' },
          to:   { opacity: '1', transform: 'scale(1)' },
        },
        drift: {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)',    opacity: '1' },
          '50%':     { transform: 'translateY(-16px) rotate(8deg)', opacity: '0.7' },
        },
        heartbeat: {
          '0%,100%': { transform: 'scale(1)' },
          '30%':     { transform: 'scale(1.3)' },
          '60%':     { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        rain: {
          '0%':   { transform: 'translateY(-60px)', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '0.9' },
          '100%': { transform: 'translateY(110vh)',  opacity: '0' },
        },
        glowGold: {
          '0%,100%': { boxShadow: '0 0 0 0 rgba(198,164,106,0.3)' },
          '50%':     { boxShadow: '0 0 20px 6px rgba(198,164,106,0.12)' },
        },
      },
    },
  },
  plugins: [],
}
