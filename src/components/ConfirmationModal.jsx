import { useState } from 'react'
import { Loader2, X } from 'lucide-react'
import { sendRestaurantChoice } from '../lib/emailService'

export default function ConfirmationModal({ restaurant, onClose, onSuccess }) {
  const [sending, setSending] = useState(false)
  const [error, setError]     = useState(null)
  const Icon = restaurant.Icon

  async function handleConfirm() {
    setSending(true)
    setError(null)
    try {
      await sendRestaurantChoice(restaurant)
      onSuccess()
    } catch {
      setError('Algo salió mal. Intenta de nuevo.')
      setSending(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ background: 'rgba(36,18,30,0.85)', backdropFilter: 'blur(12px)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="animate-pop w-full max-w-sm mx-4 mb-4 sm:mb-0 rounded-3xl overflow-hidden"
        style={{
          background: '#FFFDF9',
          border: '1px solid rgba(198,164,106,0.40)',
          boxShadow: '0 40px 100px rgba(36,18,30,0.8)',
        }}
      >
        {/* Gold strip */}
        <div style={{ height: '2px', background: 'linear-gradient(90deg, transparent, #C6A46A 40%, #D4B896 60%, transparent)' }} />

        <div className="p-7 text-center relative">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            style={{ color: '#8A747C' }}
          >
            <X size={16} />
          </button>

          {/* Icon */}
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 animate-glow-gold"
            style={{ background: 'rgba(111,45,82,0.08)', border: '1px solid rgba(198,164,106,0.35)' }}
          >
            <Icon size={28} strokeWidth={1.5} style={{ color: '#6F2D52' }} />
          </div>

          <p className="font-sans text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#C6A46A' }}>
            Confirmar elección
          </p>
          <h2 className="font-display font-bold text-2xl mb-0.5" style={{ color: '#3A2430' }}>
            {restaurant.name}
          </h2>
          <p className="font-sans text-sm mb-1" style={{ color: '#8A747C' }}>{restaurant.place}</p>
          <p className="font-italic text-xs italic mb-6" style={{ color: '#8A747C', fontStyle: 'italic' }}>
            "{restaurant.label}"
          </p>

          <div className="divider-gold mb-6" />

          {error && (
            <p className="font-sans text-xs text-red-500 bg-red-50 rounded-xl px-3 py-2 mb-4">{error}</p>
          )}

          <button
            onClick={handleConfirm}
            disabled={sending}
            className="w-full py-3.5 rounded-full font-sans font-semibold text-sm tracking-wide
              transition-all duration-300 cursor-pointer active:scale-95
              hover:shadow-[0_8px_24px_rgba(111,45,82,0.4)]
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center gap-2"
            style={{
              background: '#6F2D52',
              color: '#F8F1E8',
              border: '1px solid rgba(198,164,106,0.45)',
              letterSpacing: '0.06em',
            }}
          >
            {sending
              ? <><Loader2 size={15} className="animate-spin" /> Guardando...</>
              : <>♡ &nbsp;Sí, quiero cenar aquí</>
            }
          </button>

          <button
            onClick={onClose}
            disabled={sending}
            className="w-full mt-3 py-2.5 rounded-full font-sans text-sm transition-colors cursor-pointer"
            style={{ color: '#8A747C' }}
          >
            Ver otras opciones
          </button>
        </div>
      </div>
    </div>
  )
}
