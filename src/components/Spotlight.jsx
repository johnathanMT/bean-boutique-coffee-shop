import { motion } from 'framer-motion'
import { asset } from '../lib/asset.js'
import { coffees } from '../data/coffees.js'
import { useCart } from '../context/CartContext.jsx'

// Barista's recommendation spotlight (the Colombian, as in the original home).
export default function Spotlight() {
  const { addToCart } = useCart()
  const coffee = coffees[0]

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-brand-green/60 to-brand-dark p-8 sm:p-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block rounded-full bg-carib-gradient px-4 py-1 text-sm font-semibold text-brand-dark">
            ★ Barista's Recommendation
          </span>
          <h2 className="mt-4 font-display text-4xl text-brand-cream">
            Single Origin <span className="text-brand-gold">Colombian</span>
          </h2>
          <p className="mt-4 leading-relaxed text-brand-cream/80">
            {coffee.story}
          </p>
          <div className="mt-6 text-3xl font-bold text-brand-gold">
            ${coffee.price.toFixed(2)}
          </div>
          <button
            className="btn-gold mt-6"
            onClick={() => addToCart(coffee.name, coffee.price, coffee.image)}
          >
            Add to Cart <i className="fa-solid fa-cart-plus" />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-full bg-carib-gradient opacity-30 blur-2xl animate-floaty" />
          <img
            src={asset(coffee.image)}
            alt={coffee.name}
            className="relative h-72 w-72 rounded-full border-4 border-brand-gold/40 object-cover shadow-gold sm:h-80 sm:w-80"
          />
        </motion.div>
      </div>
    </section>
  )
}
