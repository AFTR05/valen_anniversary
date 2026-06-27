/* eslint-disable react/prop-types */

export default function RestaurantCard({ restaurant, onChoose, animClass }) {
  const { number, Icon, name, place, description, label, tags } = restaurant

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl cursor-pointer
        transition-all duration-500 hover:-translate-y-3 ${animClass ?? ''}`}
      style={{
        background: 'rgba(255,253,249,0.04)',
        border: '1.5px solid rgba(198,164,106,0.35)',
        boxShadow: '0 8px 40px rgba(36,18,30,0.35), inset 0 1px 0 rgba(198,164,106,0.15)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
      }}
      onClick={() => onChoose(restaurant)}
    >
      {/* Hover: gold border brightens + outer glow */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 1.5px rgba(198,164,106,0.7), 0 20px 60px rgba(198,164,106,0.12)',
        }}
      />

      {/* Gold shimmer top edge */}
      <div
        className="absolute top-0 left-8 right-8 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(198,164,106,0.7), transparent)' }}
      />

      {/* Watermark number */}
      <div
        className="absolute -bottom-6 -right-2 font-display font-bold select-none pointer-events-none leading-none"
        style={{ fontSize: 160, color: 'rgba(198,164,106,0.07)', letterSpacing: '-0.05em' }}
      >
        {number}
      </div>

      <div className="relative z-10 p-7">

        {/* Option label */}
        <p
          className="font-sans text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
          style={{ color: 'rgba(198,164,106,0.5)' }}
        >
          Opción {number}
        </p>

        {/* Icon + Name row */}
        <div className="flex items-center gap-4 mb-2">
          <div
            className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center
              transition-transform duration-400 group-hover:scale-110"
            style={{
              background: 'rgba(198,164,106,0.1)',
              border: '1.5px solid rgba(198,164,106,0.32)',
              boxShadow: '0 4px 20px rgba(198,164,106,0.12)',
            }}
          >
            <Icon size={22} strokeWidth={1.4} style={{ color: '#C6A46A' }} />
          </div>
          <h3
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(1.55rem, 3.5vw, 2rem)' }}
          >
            {name}
          </h3>
        </div>

        {/* Place — indented to align under name */}
        <div className="flex items-center gap-1.5 mb-6 pl-[64px]">
          <span style={{ color: 'rgba(198,164,106,0.4)', fontSize: 9 }}>⌖</span>
          <p
            className="font-sans text-xs"
            style={{ color: 'rgba(248,241,232,0.38)', letterSpacing: '0.07em' }}
          >
            {place}
          </p>
        </div>

        {/* Divider — left to right fade */}
        <div
          className="mb-5"
          style={{ height: 1, background: 'linear-gradient(90deg, rgba(198,164,106,0.45), rgba(198,164,106,0.06))' }}
        />

        {/* Description */}
        <p
          className="font-italic italic leading-relaxed mb-5"
          style={{ fontSize: '0.94rem', color: 'rgba(248,241,232,0.58)', fontStyle: 'italic' }}
        >
          {description}
        </p>

        {/* Label & tags */}
        <div className="flex items-center flex-wrap gap-2 mb-7">
          <span style={{ color: '#C6A46A', fontSize: 10 }}>✦</span>
          <span
            className="font-sans text-[10px] font-bold uppercase tracking-wider"
            style={{ color: 'rgba(198,164,106,0.85)', letterSpacing: '0.12em' }}
          >
            {label}
          </span>
          <span style={{ color: 'rgba(198,164,106,0.2)' }}>·</span>
          {tags.map(tag => (
            <span
              key={tag}
              className="font-sans text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
              style={{
                background: 'rgba(198,164,106,0.08)',
                border: '1px solid rgba(198,164,106,0.18)',
                color: 'rgba(198,164,106,0.55)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={e => { e.stopPropagation(); onChoose(restaurant) }}
          className="relative w-full py-3.5 rounded-2xl font-sans font-semibold text-sm
            overflow-hidden cursor-pointer transition-all duration-300
            hover:shadow-[0_10px_32px_rgba(111,45,82,0.55)] active:scale-[0.97]
            group/btn"
          style={{
            background: 'rgba(198,164,106,0.1)',
            color: '#D4B896',
            border: '1px solid rgba(198,164,106,0.5)',
            letterSpacing: '0.05em',
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
            style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(198,164,106,0.22) 50%, transparent 70%)' }}
          />
          <span className="relative flex items-center justify-center gap-2">
            <span style={{ color: '#C6A46A' }}>♡</span>
            Elegir este restaurante
          </span>
        </button>

      </div>
    </article>
  )
}
