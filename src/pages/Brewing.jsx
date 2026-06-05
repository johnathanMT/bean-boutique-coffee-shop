import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { brewing } from '../data/brewing.js'
import { asset } from '../lib/asset.js'
import { useCart } from '../context/CartContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Brewing() {
  const [query, setQuery] = useState('')
  const { addToCart } = useCart()

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return brewing
    return brewing.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      <section className="bg-carib-warm py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-brand-dark sm:text-5xl"
          >
            Master the Art of Home Brewing
          </motion.h1>
          <p className="mt-4 text-lg text-brand-dark/80">
            Great coffee starts with great beans, but it is perfected by the
            right equipment — from precision grinders to classic French Presses.
          </p>
          <div className="relative mx-auto mt-8 max-w-md">
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-brand-dark/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brewing equipment..."
              className="w-full rounded-full border border-brand-dark/20 bg-brand-cream py-3 pl-12 pr-5 text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-dark/40"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Barista Gear"
          title="Brewing Equipment"
          subtitle="Everything you need to craft a barista-quality cup at home."
        />
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-brand-cream/60">
            No equipment matches “{query}”.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                whileHover={{ y: -6 }}
                className="glass-card group flex flex-col overflow-hidden hover:border-carib-turquoise/50 hover:shadow-tropical"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={asset(item.image)}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-brand-cream">{item.name}</h3>
                  <p className="mt-1 text-lg font-bold text-carib-sun">
                    ${item.price.toFixed(2)}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm text-brand-cream/70">
                    {item.description}
                  </p>
                  <button
                    onClick={() => addToCart(item.name, item.price, item.image)}
                    className="btn-carib mt-auto w-full py-2.5 text-sm"
                  >
                    Add to Cart <i className="fa-solid fa-cart-plus" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
