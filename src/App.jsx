import { useRef, useState } from 'react'
import { Moon, Wine, Flame, Coffee } from 'lucide-react'
import HeroSection       from './components/HeroSection'
import PhotoCarousel     from './components/PhotoCarousel'
import RestaurantCard    from './components/RestaurantCard'
import ConfirmationModal from './components/ConfirmationModal'

const RESTAURANTS = [
  {
    id: 1, number: '01', Icon: Moon,
    name: 'Tierra Luna', place: 'Pueblo Tapao',
    tags: ['campestre', 'cálido', 'especial'],
    description: 'Una cena cálida, tranquila y con ambiente especial. Perfecta para una noche relajada, bonita y diferente.',
    label: 'Romántico y natural',
    tagline: 'La opción más tranquila y mágica para celebrar bonito.',
  },
  {
    id: 2, number: '02', Icon: Wine,
    name: 'Bianco', place: 'El Edén',
    tags: ['italiano', 'vino', 'elegante'],
    description: 'Una opción elegante, suave y con una vibra más delicada. Ideal para una cena linda, tranquila y especial.',
    label: 'Elegante y romántico',
    tagline: 'La opción para vestirnos lindo y tener una cita de película.',
  },
  {
    id: 3, number: '03', Icon: Flame,
    name: 'Boludo Parrilla', place: 'Armenia',
    tags: ['parrilla', 'brindis', 'antojo'],
    description: 'Una cena con sabor, ambiente fuerte y una vibra más cálida. Perfecta si queremos algo rico, cómodo y con mucha conversación.',
    label: 'Cálido y con sabor',
    tagline: 'La opción más antojadora si queremos una cena contundente.',
  },
  {
    id: 4, number: '04', Icon: Coffee,
    name: 'Yampa', place: 'Calarcá',
    tags: ['natural', 'relajado', 'diferente'],
    description: 'Una opción moderna, distinta y con un ambiente especial. Perfecta para una noche con estilo y algo fuera de lo común.',
    label: 'Moderno y especial',
    tagline: 'La opción más fresca para hablar, reír y estar juntos sin afán.',
  },
]

const STAGGER = ['animate-fade-up', 'animate-fade-up-1', 'animate-fade-up-2', 'animate-fade-up-3']

/* Deterministic confetti */
const CONFETTI = [
  { s: '♥', l: 5,  d: 0,    dur: 3.5 }, { s: '✦', l: 16, d: 0.5, dur: 4.2 },
  { s: '♡', l: 28, d: 0.9,  dur: 3.7 }, { s: '♥', l: 42, d: 1.3, dur: 4.5 },
  { s: '✿', l: 55, d: 0.2,  dur: 3.2 }, { s: '✧', l: 67, d: 1.6, dur: 4.1 },
  { s: '♡', l: 79, d: 0.7,  dur: 3.6 }, { s: '♥', l: 91, d: 1.0, dur: 3.9 },
  { s: '✦', l: 11, d: 1.8,  dur: 4.0 }, { s: '✿', l: 50, d: 0.4, dur: 3.4 },
]

function SuccessScreen({ restaurant }) {
  const Icon = restaurant.Icon
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #24121E 0%, #3D1830 50%, #6F2D52 100%)' }}
    >
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {CONFETTI.map((c, i) => (
          <span key={i} className="absolute select-none animate-rain"
            style={{ left: `${c.l}%`, fontSize: 18 + (i % 3) * 4, color: i % 2 === 0 ? '#C6A46A' : 'rgba(248,241,232,0.7)', animationDelay: `${c.d}s`, animationDuration: `${c.dur}s`, top: -40 }}>
            {c.s}
          </span>
        ))}
      </div>

      <div className="animate-pop relative z-10 w-full max-w-sm">
        {/* Icon */}
        <div
          className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 animate-glow-gold"
          style={{ background: 'rgba(255,253,249,0.08)', border: '1px solid rgba(198,164,106,0.5)' }}
        >
          <Icon size={32} strokeWidth={1.4} style={{ color: '#C6A46A' }} />
        </div>

        <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">Elección confirmada</p>

        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold/50" />
          <span className="text-gold animate-heartbeat">♥</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <h1
          className="font-display font-bold text-white mb-1"
          style={{ fontSize: 'clamp(2rem, 8vw, 3rem)' }}
        >
          {restaurant.name}
        </h1>
        <p className="font-sans text-sm text-cream/60 mb-8">{restaurant.place}</p>

        {/* Message card */}
        <div
          className="rounded-2xl p-7 mb-8 text-left"
          style={{ background: 'rgba(255,253,249,0.07)', border: '1px solid rgba(198,164,106,0.25)' }}
        >
          <p className="font-italic text-cream/80 text-[15px] leading-relaxed italic mb-5">
            ¡Perfecto! Ya voy a reservar nuestra mesa. Solo quedate tranquila que todo está bajo control.
          </p>
          <div className="divider-gold mb-5" />
          <p
            className="font-italic text-gold text-center italic"
            style={{ fontSize: '1.1rem', fontStyle: 'italic' }}
          >
            Solo dime cuál,<br />
            <span className="text-cream/80">y hacemos de esa noche nuestro lugar favorito.</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span className="text-gold/50 text-xs animate-heartbeat">♥</span>
          <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-cream/30">
            28 de Junio · Nuestra cena romántica
          </p>
          <span className="text-gold/50 text-xs animate-heartbeat" style={{ animationDelay: '1s' }}>♥</span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [chosen,    setChosen]    = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [done,      setDone]      = useState(false)
  const cardsRef = useRef(null)

  function scrollToCards() {
    cardsRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleChoose(restaurant) {
    setChosen(restaurant)
    setShowModal(true)
  }

  if (done) return <SuccessScreen restaurant={chosen} />

  return (
    <div className="min-h-screen" style={{ background: '#24121E' }}>

      {/* 1. Hero */}
      <HeroSection onScrollToCards={scrollToCards} />

      {/* 2. Photo carousel */}
      <PhotoCarousel />

      {/* 3. Anniversary message */}
      <section className="py-16 px-6 text-center" style={{ background: 'rgba(111,45,82,0.15)' }}>
        <div className="max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to right, transparent, #C6A46A)' }} />
            <span className="text-gold text-base">✦</span>
            <div className="h-px flex-1 max-w-[80px]" style={{ background: 'linear-gradient(to left, transparent, #C6A46A)' }} />
          </div>
          <p
            className="font-italic text-cream/75 leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontStyle: 'italic' }}
          >
            Cada restaurante tiene una vibra distinta,<br />
            pero todos tienen algo en común:<br />
            <span className="text-gold/90">serían una noche especial contigo.</span>
          </p>
        </div>
      </section>

      {/* 3. Restaurant cards */}
      <section ref={cardsRef} className="py-16 px-5 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-xs font-bold tracking-[0.3em] uppercase text-gold mb-3">La elección</p>
            <h2
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Elige dónde cenamos
            </h2>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, rgba(198,164,106,0.6))' }} />
              <span className="text-gold/60 text-sm">♥</span>
              <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, rgba(198,164,106,0.6))' }} />
            </div>
          </div>

          {/* 2-col desktop / 1-col mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {RESTAURANTS.map((r, i) => (
              <RestaurantCard
                key={r.id}
                restaurant={r}
                onChoose={handleChoose}
                animClass={STAGGER[i]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing */}
      <section className="py-16 px-6 text-center" style={{ background: 'rgba(111,45,82,0.12)' }}>
        <div className="max-w-md mx-auto">
          <span className="text-gold/50 text-3xl block mb-4 animate-heartbeat">♥</span>
          <p
            className="font-display font-bold text-white mb-2"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)' }}
          >
            Solo dime cuál,
          </p>
          <p
            className="font-italic text-gold/80 italic"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontStyle: 'italic' }}
          >
            y hacemos de esa noche nuestro lugar favorito.
          </p>
        </div>
      </section>

      {showModal && chosen && (
        <ConfirmationModal
          restaurant={chosen}
          onClose={() => setShowModal(false)}
          onSuccess={() => { setShowModal(false); setDone(true) }}
        />
      )}
    </div>
  )
}
