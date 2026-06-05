import { motion } from 'framer-motion'
import { asset } from '../lib/asset.js'
import { useCart } from '../context/CartContext.jsx'

// A selectable coffee card. Clicking the card (or "Read the Story") opens the
// story modal; the Add to Cart button adds without opening it.
export default function CoffeeCard({ coffee, onSelect }) {
  const { addToCart } = useCart()

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="glass-card group flex cursor-pointer flex-col overflow-hidden hover:border-brand-gold/50 hover:shadow-gold"
      onClick={() => onSelect(coffee)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={asset(coffee.image)}
          alt={coffee.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-full bg-carib-gradient px-3 py-1 text-xs font-semibold text-brand-dark">
          {coffee.origin}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-brand-dark/80 px-3 py-1 text-xs font-medium text-brand-gold">
          {coffee.roast}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl text-brand-cream">{coffee.name}</h3>
        <p className="mt-1 text-lg font-bold text-brand-gold">
          ${coffee.price.toFixed(2)}
        </p>
        <p className="mt-2 line-clamp-3 text-sm text-brand-cream/70">
          {coffee.description}
        </p>
        <p className="mt-3 text-xs uppercase tracking-wide text-carib-aqua">
          {coffee.tastingNotes}
        </p>

        <div className="mt-auto flex gap-2 pt-5">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onSelect(coffee)
            }}
            className="flex-1 rounded-full border border-brand-gold/40 px-3 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold/10"
          >
            <i className="fa-solid fa-book-open mr-1" /> Story
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              addToCart(coffee.name, coffee.price, coffee.image)
            }}
            className="flex-1 rounded-full bg-gold-sheen px-3 py-2 text-sm font-semibold text-brand-dark transition hover:brightness-110"
          >
            <i className="fa-solid fa-cart-plus mr-1" /> Add
          </button>
        </div>
      </div>
    </motion.article>
  )
}
