import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { asset } from '../lib/asset.js'

const features = [
  {
    to: '/coffee',
    image: 'images/coffee_selections.jpg',
    title: 'Coffee Selections',
    desc: 'Discover our single-origin beans and their stories.',
    accent: 'from-carib-turquoise',
  },
  {
    to: '/brewing',
    image: 'images/coffee_machines.jpg',
    title: 'Brewing Equipment',
    desc: 'Professional gear for barista-quality home brewing.',
    accent: 'from-carib-orange',
  },
  {
    to: '/events',
    image: 'images/coffee_events.jpg',
    title: 'Events & Workshops',
    desc: 'Join our tropical tastings and coffee carnivals.',
    accent: 'from-carib-palm',
  },
  {
    to: '/offers',
    image: 'images/green_coffee_cup.jpg',
    title: 'Special Offers',
    desc: 'Subscriptions, bundles and island-exclusive deals.',
    accent: 'from-carib-coral',
  },
]

export default function FeatureCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f, i) => (
        <motion.div
          key={f.to}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
        >
          <Link
            to={f.to}
            className="group relative block overflow-hidden rounded-2xl"
          >
            <img
              src={asset(f.image)}
              alt={f.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${f.accent} via-brand-dark/30 to-brand-dark/80 opacity-80`} />
            <div className="absolute bottom-0 p-5">
              <h3 className="font-display text-xl text-brand-cream">{f.title}</h3>
              <p className="mt-1 text-sm text-brand-cream/80">{f.desc}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-gold opacity-0 transition group-hover:opacity-100">
                Explore <i className="fa-solid fa-arrow-right" />
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
