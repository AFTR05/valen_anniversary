/* eslint-disable react/prop-types */

const BIG_HEARTS = [
  { top: '8%',  left: '4%',   size: 160, delay: '0s',   cls: 'animate-drift-a' },
  { top: '55%', left: '-2%',  size: 110, delay: '0s',   cls: 'animate-drift-b' },
  { top: '15%', right: '3%',  size: 130, delay: '0s',   cls: 'animate-drift-c' },
  { top: '65%', right: '2%',  size: 90,  delay: '0s',   cls: 'animate-drift-d' },
  { top: '40%', left: '50%',  size: 200, delay: '0s',   cls: 'animate-drift-b' },
]

export default function HeroSection({ onScrollToCards }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        minHeight: '100svh',
        background: 'linear-gradient(160deg, #24121E 0%, #3D1830 45%, #6F2D52 100%)',
      }}
    >
      {/* Big translucent background hearts */}
      {BIG_HEARTS.map((h, i) => (
        <span
          key={i}
          className={`absolute select-none pointer-events-none ${h.cls}`}
          style={{
            top: h.top, left: h.left, right: h.right,
            fontSize: h.size,
            color: 'rgba(198,164,106,0.06)',
            lineHeight: 1,
            animationDelay: h.delay,
          }}
        >
          ♥
        </span>
      ))}

      {/* Radial vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(36,18,30,0.6) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-2xl mx-auto">
        {/* Date */}
        <p className="animate-fade-up font-sans text-xs font-semibold tracking-[0.35em] uppercase text-gold mb-8">
          28 de junio · 2025
        </p>

        {/* Gold thin line */}
        <div className="animate-fade-up-1 flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold text-lg animate-heartbeat">♥</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* Main title */}
        <h1
          className="animate-fade-up-2 font-display font-bold text-white leading-[1.1] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)' }}
        >
          Nuestra Cena de<br />
          <span style={{ fontStyle: 'italic', color: '#C6A46A' }}>Aniversario</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up-3 font-italic text-cream/80 leading-relaxed mb-12"
          style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontStyle: 'italic' }}
        >
          Cuatro lugares para celebrar una noche<br className="hidden sm:block" /> solo para nosotros
        </p>

        {/* CTA */}
        <button
          onClick={onScrollToCards}
          className="animate-fade-up-4 inline-flex items-center gap-3 px-8 py-4 rounded-full
            font-sans font-semibold text-sm tracking-widest uppercase text-cream
            border border-gold/60 bg-wine/80
            hover:bg-wine hover:border-gold hover:shadow-[0_8px_32px_rgba(198,164,106,0.25)]
            active:scale-95 transition-all duration-300 cursor-pointer"
          style={{ letterSpacing: '0.08em' }}
        >
          <span className="text-gold">♡</span>
          Elegir restaurante
          <span className="text-gold">♡</span>
        </button>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40 animate-drift-a select-none">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
