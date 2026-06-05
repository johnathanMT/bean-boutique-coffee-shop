import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import FeatureCards from '../components/FeatureCards.jsx'
import Spotlight from '../components/Spotlight.jsx'
import MapEmbed from '../components/MapEmbed.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      {/* Welcome / motto */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl text-brand-cream sm:text-4xl">
            Welcome to{' '}
            <span className="text-brand-gold">Bean Boutique</span> Coffee Shop
          </h2>
          <p className="mt-3 text-brand-cream/70">
            Experience the warmth of premium coffee with a vibrant Caribbean soul.
          </p>
          <div className="gold-line my-6" />
          <h3 className="font-display text-2xl text-carib-sun">Our Motto</h3>
          <p className="mt-2 text-lg italic text-brand-cream/85">
            "Crafted for the Cold, Brewed for the Soul."
          </p>
        </motion.div>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <FeatureCards />
      </section>

      {/* Quote */}
      <section className="my-12 bg-carib-cool py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl px-6 text-center"
        >
          <i className="fa-solid fa-quote-left text-4xl text-brand-gold" />
          <h3 className="mt-4 font-display text-2xl text-brand-cream">The Island Brew</h3>
          <p className="mt-4 text-lg leading-relaxed text-brand-cream/90">
            "From mountain mist to ocean breeze,
            <br />
            the bean has crossed the farthest seas.
            <br />
            A roasted brew, a golden stream,
            <br />
            awakening your island dream."
          </p>
          <div className="gold-line my-5" />
          <p className="text-sm uppercase tracking-widest text-brand-gold">
            — Bean Boutique Philosophy
          </p>
        </motion.div>
      </section>

      <Spotlight />
      <MapEmbed />
    </>
  )
}
