import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { plans, bundles } from '../data/offers.js'
import { asset } from '../lib/asset.js'
import { useCart } from '../context/CartContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Offers() {
  const { addToCart } = useCart()
  const [pending, setPending] = useState(null) // plan awaiting confirmation

  function confirmSubscribe() {
    const name = pending.name
    setPending(null)
    toast.success(`Welcome aboard the ${name} club! 🎉`)
  }

  return (
    <>
      <section className="bg-carib-cool py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl font-bold text-brand-cream sm:text-5xl"
        >
          The Island Collection
        </motion.h1>
        <p className="mt-4 text-brand-cream/80">
          Exclusive deals tailored for the true coffee connoisseur.
        </p>
      </section>

      {/* Subscription tiers */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Subscriptions"
          title="Join The Bean Club"
          subtitle="Freshly roasted beans delivered to your door. Cancel anytime."
        />
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-8 ${
                plan.featured
                  ? 'border-brand-gold bg-gradient-to-b from-brand-green/70 to-brand-dark shadow-gold lg:-translate-y-3'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-carib-gradient px-4 py-1 text-xs font-bold text-brand-dark">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-2xl text-brand-cream">{plan.name}</h3>
              <div className="mt-3 text-4xl font-bold text-brand-gold">
                ${plan.price}
                <span className="text-base font-normal text-brand-cream/60">/mo</span>
              </div>
              <p className="mt-2 text-sm text-brand-cream/70">{plan.blurb}</p>
              <ul className="mt-6 space-y-3 text-sm text-brand-cream/85">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <i className="fa-solid fa-check mt-0.5 text-carib-palm" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setPending(plan)}
                className={`mt-8 ${plan.featured ? 'btn-gold' : 'btn-carib'} w-full`}
              >
                Subscribe
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bundles */}
      <section className="bg-brand-footer/40 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Limited Time"
            title="Bundle & Save"
            subtitle="Save big when you brew better together."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {bundles.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card flex flex-col overflow-hidden sm:flex-row"
              >
                <img
                  src={asset(b.image)}
                  alt={b.name}
                  className="h-44 w-full object-cover sm:h-auto sm:w-40"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl text-brand-cream">{b.name}</h3>
                  <p className="mt-1 text-sm text-brand-cream/70">{b.info}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-sm text-brand-cream/50 line-through">
                      ${b.oldPrice.toFixed(2)}
                    </span>
                    <span className="text-2xl font-bold text-brand-gold">
                      ${b.price.toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => addToCart(b.name, b.price, b.image)}
                    className="btn-carib mt-auto w-full py-2.5 text-sm"
                  >
                    Add to Cart <i className="fa-solid fa-cart-plus" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe confirmation modal */}
      <AnimatePresence>
        {pending && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPending(null)}
          >
            <motion.div
              className="w-full max-w-sm overflow-hidden rounded-3xl bg-brand-dark text-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-2 w-full bg-carib-gradient" />
              <div className="p-8">
                <div className="mb-3 text-4xl">☕</div>
                <h3 className="font-display text-2xl text-brand-gold">Join the Club!</h3>
                <p className="mt-2 text-brand-cream/80">
                  You're selecting the <strong>{pending.name}</strong> plan at{' '}
                  <strong>${pending.price}/mo</strong>. Proceed to secure payment?
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setPending(null)}
                    className="flex-1 rounded-full border border-white/20 px-4 py-3 text-brand-cream/80 hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button onClick={confirmSubscribe} className="btn-gold flex-1">
                    Yes, Subscribe!
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
