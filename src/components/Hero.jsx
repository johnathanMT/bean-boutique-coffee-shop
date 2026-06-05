import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'

const slides = [
  { image: 'images/coffee_slide_1.jpg', text: 'Premium Coffee Experience' },
  { image: 'images/coffee_slide_2.jpeg', text: 'Freshly Roasted Beans' },
  { image: 'images/coffee_slide_3.jpg', text: 'Brewed for the Soul' },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const go = useCallback((n) => {
    setIndex((i) => (i + n + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const t = setInterval(() => go(1), 4500)
    return () => clearInterval(t)
  }, [go])

  return (
    <section className="relative h-[78vh] min-h-[460px] w-full overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={asset(slides[index].image)}
          alt={slides[index].text}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-brand-dark/40 to-brand-dark/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
        <span className="mb-3 inline-block rounded-full bg-carib-gradient px-4 py-1 text-sm font-semibold text-brand-dark">
          🌴 Caribbean Coffee House
        </span>
        <h1 className="font-display text-4xl font-bold text-brand-cream drop-shadow-lg sm:text-6xl">
          Welcome to <span className="text-brand-gold">Bean Boutique</span>
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mt-4 text-lg text-brand-cream/90 sm:text-2xl"
          >
            {slides[index].text}
          </motion.p>
        </AnimatePresence>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/coffee" className="btn-gold">
            Explore Coffees <i className="fa-solid fa-mug-saucer" />
          </Link>
          <Link to="/events" className="btn-carib">
            Tropical Events <i className="fa-solid fa-music" />
          </Link>
        </div>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-brand-cream transition hover:bg-brand-gold hover:text-brand-dark"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-4 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-brand-cream transition hover:bg-brand-gold hover:text-brand-dark"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-7 bg-brand-gold' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
