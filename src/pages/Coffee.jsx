import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { coffees } from '../data/coffees.js'
import CoffeeCard from '../components/CoffeeCard.jsx'
import CoffeeStoryModal from '../components/CoffeeStoryModal.jsx'
import HistoricGallery from '../components/HistoricGallery.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Coffee() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return coffees
    return coffees.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.origin.toLowerCase().includes(q) ||
        c.tastingNotes.toLowerCase().includes(q) ||
        c.roast.toLowerCase().includes(q)
    )
  }, [query])

  return (
    <>
      {/* Intro */}
      <section className="bg-carib-cool py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl font-bold text-brand-cream sm:text-5xl"
          >
            Experience the World in a Cup
          </motion.h1>
          <p className="mt-4 text-lg italic text-brand-cream/85">
            "From the misty highlands of Colombia to the volcanic soils of
            Sumatra, we travel the globe to bring you the finest single-origin
            beans."
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-8 max-w-md">
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-brand-dark/50" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search beans, origin, roast or notes..."
              className="w-full rounded-full border border-brand-gold/40 bg-brand-cream py-3 pl-12 pr-5 text-brand-dark placeholder:text-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-gold"
            />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow="Single Origin"
          title="Our Coffee Collection"
          subtitle="Tap any bean to uncover its story and heritage."
        />
        {filtered.length === 0 ? (
          <p className="py-10 text-center text-brand-cream/60">
            No beans match “{query}”. Try another search.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} onSelect={setSelected} />
            ))}
          </div>
        )}
      </section>

      <HistoricGallery />

      <CoffeeStoryModal coffee={selected} onClose={() => setSelected(null)} />
    </>
  )
}
