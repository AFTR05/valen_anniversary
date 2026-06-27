const RAW_PHOTOS = [
  'IMG-20240819-WA0014.jpg',
  'IMG-20250921-WA0007.jpg',
  'IMG_20260326_132246.jpg',
  'PXL_20250107_190435192.jpg',
  'PXL_20250207_182419145.jpg',
  'PXL_20250419_170633811.MV.jpg',
  'PXL_20250627_163100348 (1).jpg',
  'PXL_20250705_170707075.jpg',
  'PXL_20250727_154426465.jpg',
  'PXL_20250807_165554863.jpg',
]

const PHOTOS = RAW_PHOTOS.map(f => `/photos/${encodeURIComponent(f)}`)

function Strip({ photos, reverse, speed }) {
  const doubled = [...photos, ...photos]
  return (
    <div
      style={{
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '14px',
          width: 'max-content',
          animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${speed}s linear infinite`,
        }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              height: 260,
              borderRadius: 16,
              overflow: 'hidden',
              flexShrink: 0,
              border: '1px solid rgba(198,164,106,0.22)',
              boxShadow: '0 8px 32px rgba(36,18,30,0.45)',
            }}
          >
            <img
              src={src}
              alt=""
              style={{ height: '100%', width: 'auto', display: 'block' }}
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PhotoCarousel() {
  const reversed = [...PHOTOS].reverse()

  return (
    <section className="py-16">
      {/* Title */}
      <div className="text-center mb-10 px-5">
        <p
          className="font-sans text-xs font-bold tracking-[0.3em] uppercase mb-3"
          style={{ color: '#C6A46A' }}
        >
          Nuestros momentos
        </p>
        <h2
          className="font-display font-bold text-white mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
        >
          Todo lo que hemos vivido
        </h2>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(198,164,106,0.6))' }} />
          <span style={{ color: 'rgba(198,164,106,0.6)', fontSize: 14 }}>♥</span>
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(198,164,106,0.6))' }} />
        </div>
      </div>

      {/* Row 1 — izquierda → derecha */}
      <Strip photos={PHOTOS} reverse={false} speed={55} />

      <div style={{ height: 14 }} />

      {/* Row 2 — derecha → izquierda */}
      <Strip photos={reversed} reverse={true} speed={65} />

      {/* Caption */}
      <p
        className="text-center mt-9 font-italic italic px-5"
        style={{ fontSize: '1rem', color: 'rgba(198,164,106,0.6)', fontStyle: 'italic' }}
      >
        Cada foto es un motivo más para celebrar.
      </p>
    </section>
  )
}
