import { motion, AnimatePresence } from 'framer-motion'
import { asset } from '../lib/asset.js'
import { useCart } from '../context/CartContext.jsx'

// The "related story + historic photo" modal for a selected coffee.
export default function CoffeeStoryModal({ coffee, onClose }) {
  const { addToCart } = useCart()

  return (
    <AnimatePresence>
      {coffee && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-brand-dark no-scrollbar"
            initial={{ scale: 0.92, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.92, y: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/50 text-brand-cream hover:text-brand-gold"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            {/* Hero image */}
            <div className="relative h-60 w-full overflow-hidden sm:h-72">
              <img
                src={asset(coffee.image)}
                alt={coffee.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="rounded-full bg-carib-gradient px-3 py-1 text-xs font-semibold text-brand-dark">
                  {coffee.region}
                </span>
                <h2 className="mt-2 font-display text-3xl text-brand-cream">
                  {coffee.name}
                </h2>
              </div>
            </div>

            <div className="grid gap-6 p-6 sm:grid-cols-5">
              {/* Story */}
              <div className="sm:col-span-3">
                <h3 className="font-display text-xl text-brand-gold">
                  <i className="fa-solid fa-feather mr-2" />The Story
                </h3>
                <p className="mt-2 leading-relaxed text-brand-cream/80">
                  {coffee.story}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <Fact label="Origin" value={coffee.origin} />
                  <Fact label="Roast" value={coffee.roast} />
                  <Fact label="Tasting Notes" value={coffee.tastingNotes} wide />
                </div>
              </div>

              {/* Historic photo */}
              <div className="sm:col-span-2">
                <h3 className="font-display text-xl text-brand-gold">
                  <i className="fa-solid fa-clock-rotate-left mr-2" />Heritage
                </h3>
                <figure className="mt-2 overflow-hidden rounded-2xl border border-brand-gold/20">
                  <img
                    src={asset(coffee.historicPhoto)}
                    alt={`Historic photo — ${coffee.origin}`}
                    className="h-44 w-full object-cover sepia"
                  />
                  <figcaption className="bg-white/5 p-3 text-xs italic text-brand-cream/60">
                    A glimpse into the heritage of {coffee.origin} coffee.
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 p-6 sm:flex-row">
              <span className="text-2xl font-bold text-brand-gold">
                ${coffee.price.toFixed(2)}
              </span>
              <button
                className="btn-carib w-full sm:w-auto"
                onClick={() => {
                  addToCart(coffee.name, coffee.price, coffee.image)
                  onClose()
                }}
              >
                Add to Cart <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Fact({ label, value, wide }) {
  return (
    <div className={`rounded-xl bg-white/5 p-3 ${wide ? 'col-span-2' : ''}`}>
      <div className="text-xs uppercase tracking-wide text-carib-aqua">{label}</div>
      <div className="mt-0.5 text-brand-cream">{value}</div>
    </div>
  )
}
