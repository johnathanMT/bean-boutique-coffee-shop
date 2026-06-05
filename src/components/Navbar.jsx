import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/coffee', label: 'Coffee Selections' },
  { to: '/brewing', label: 'Brewing Equipment' },
  { to: '/events', label: 'Events' },
  { to: '/offers', label: 'Special Offers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count } = useCart()

  const linkClass = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-brand-gold' : 'text-brand-cream/85 hover:text-brand-gold'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/20 bg-brand-green/80 backdrop-blur-md">
      {/* tropical accent line */}
      <div className="h-1 w-full bg-carib-gradient" />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="font-script text-3xl leading-none text-brand-gold sm:text-4xl">
          Bean <span className="text-brand-cream">Boutique</span> ☕
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-carib-gradient"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <CartButton count={count} />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <CartButton count={count} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="text-2xl text-brand-gold"
          >
            <i className={`fa-solid ${open ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-brand-gold/20 bg-brand-dark/95 lg:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-white/5 py-3 text-base ${
                      isActive ? 'text-brand-gold' : 'text-brand-cream/85'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function CartButton({ count }) {
  return (
    <Link
      to="/cart"
      className="relative inline-flex items-center gap-2 rounded-full bg-brand-gold/15 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold/25"
    >
      <i className="fa-solid fa-mug-hot" />
      <span className="hidden sm:inline">Cart</span>
      <span className="grid h-5 min-w-5 place-items-center rounded-full bg-carib-coral px-1 text-xs font-bold text-white">
        {count}
      </span>
    </Link>
  )
}
