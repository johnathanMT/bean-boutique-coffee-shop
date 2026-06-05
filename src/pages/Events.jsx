import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { events } from '../data/events.js'
import { asset } from '../lib/asset.js'
import SectionHeading from '../components/SectionHeading.jsx'

// Static class maps so Tailwind keeps the accent utilities at build time.
const accentBar = {
  turquoise: 'bg-carib-turquoise',
  coral: 'bg-carib-coral',
  orange: 'bg-carib-orange',
  palm: 'bg-carib-palm',
}
const accentText = {
  turquoise: 'text-carib-turquoise',
  coral: 'text-carib-coral',
  orange: 'text-carib-orange',
  palm: 'text-carib-palm',
}

export default function Events() {
  const [form, setForm] = useState({ name: '', email: '', event: events[0].title })

  function register(title) {
    toast.success(`Spot reserved for “${title}”! 🌴`)
  }

  function handleSubmit(e) {
    e.preventDefault()
    toast.success(`Thanks ${form.name || 'friend'} — see you at ${form.event}!`)
    setForm({ name: '', email: '', event: events[0].title })
  }

  return (
    <>
      <section className="bg-carib-gradient py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl font-bold text-brand-dark sm:text-5xl"
        >
          Events & Tropical Workshops
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl px-4 text-brand-dark/80">
          Deepen your knowledge, meet fellow coffee lovers, and taste exclusive
          island brews. Reserve your spot today!
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((ev, i) => (
            <motion.article
              key={ev.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-card flex flex-col overflow-hidden md:flex-row"
            >
              <div className="relative h-52 w-full overflow-hidden md:h-auto md:w-2/5">
                <img
                  src={asset(ev.image)}
                  alt={ev.title}
                  className="h-full w-full object-cover"
                />
                <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-brand-dark ${accentBar[ev.accent]}`}>
                  {ev.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display text-2xl text-brand-cream">{ev.title}</h2>
                <p className={`mt-1 text-sm font-medium ${accentText[ev.accent]}`}>
                  <i className="fa-solid fa-calendar-day mr-2" />
                  {ev.date} · {ev.time}
                </p>
                <p className="mt-3 text-sm text-brand-cream/75">{ev.description}</p>
                <div className="mt-auto flex items-center justify-between pt-5">
                  <span className="text-xl font-bold text-brand-gold">${ev.cost}</span>
                  <button onClick={() => register(ev.title)} className="btn-gold py-2 text-sm">
                    Register Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Registration form */}
      <section className="mx-auto max-w-2xl px-4 pb-16 sm:px-6">
        <SectionHeading
          eyebrow="Save your seat"
          title="Reserve Your Spot"
          subtitle="Fill in your details and we'll hold a place for you."
        />
        <form onSubmit={handleSubmit} className="glass-card space-y-4 p-6 sm:p-8">
          <div>
            <label className="mb-1 block text-sm text-brand-cream/80">Full Name</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brand-cream/80">Email</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-brand-cream/80">Choose an Event</label>
            <select
              value={form.event}
              onChange={(e) => setForm({ ...form, event: e.target.value })}
              className="w-full rounded-xl border border-white/15 bg-brand-dark px-4 py-3 text-brand-cream focus:border-brand-gold focus:outline-none"
            >
              {events.map((ev) => (
                <option key={ev.id} value={ev.title}>
                  {ev.title}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn-carib w-full">
            Reserve My Spot <i className="fa-solid fa-ticket" />
          </button>
        </form>
      </section>
    </>
  )
}
