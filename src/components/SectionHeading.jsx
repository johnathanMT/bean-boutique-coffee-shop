import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, light }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto mb-10 max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="mb-2 inline-block rounded-full bg-carib-gradient px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-dark">
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display text-3xl font-bold sm:text-4xl ${light ? 'text-brand-cream' : 'text-brand-gold'}`}>
        {title}
      </h2>
      <div className="gold-line my-4" />
      {subtitle && <p className="text-brand-cream/70">{subtitle}</p>}
    </motion.div>
  )
}
