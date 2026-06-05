import { motion } from 'framer-motion'
import { historicGallery } from '../data/coffees.js'
import { asset } from '../lib/asset.js'
import SectionHeading from './SectionHeading.jsx'

// "The History of the Bean" — a sepia-toned heritage photo strip.
export default function HistoricGallery() {
  return (
    <section className="bg-brand-footer/40 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Since the highlands"
          title="The History of the Bean"
          subtitle="A journey across a thousand years and many oceans — from wild forest cherry to the cup in your hands."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {historicGallery.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-brand-gold/20 bg-white/5"
            >
              <div className="relative overflow-hidden">
                <img
                  src={asset(item.image)}
                  alt={item.title}
                  className="h-48 w-full object-cover sepia transition-all duration-500 group-hover:sepia-0 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-brand-dark/80 px-3 py-1 text-xs font-semibold text-brand-gold">
                  {item.title}
                </span>
              </div>
              <figcaption className="p-4 text-sm italic text-brand-cream/70">
                {item.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-cream/40">
          Heritage imagery shown sepia-toned; archival photographs can be added in <code>src/data/coffees.js</code>.
        </p>
      </div>
    </section>
  )
}
