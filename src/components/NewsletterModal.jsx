import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// First-visit newsletter popup, gated by localStorage like the original
// modal_popup behaviour. Submitting reveals the WELCOME10 discount code.
export default function NewsletterModal() {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem('modalShown')) {
      const t = setTimeout(() => {
        setOpen(true)
        localStorage.setItem('modalShown', 'true')
      }, 2000)
      return () => clearTimeout(t)
    }
  }, [])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-brand-dark text-center"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-2 w-full bg-carib-gradient" />
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-xl text-brand-cream/60 hover:text-brand-gold"
            >
              <i className="fa-solid fa-xmark" />
            </button>

            <div className="p-8">
              {!done ? (
                <>
                  <div className="mb-3 text-4xl">🌴☕</div>
                  <h2 className="font-display text-2xl text-brand-gold">
                    Welcome to Bean Boutique!
                  </h2>
                  <p className="mt-2 text-brand-cream/80">
                    Get <strong className="text-carib-sun">10% off</strong> your
                    first purchase when you join our newsletter.
                  </p>
                  <form
                    className="mt-6 flex flex-col gap-3"
                    onSubmit={(e) => {
                      e.preventDefault()
                      setDone(true)
                    }}
                  >
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-gold focus:outline-none"
                    />
                    <button type="submit" className="btn-gold">
                      Get My Discount
                    </button>
                  </form>
                  <p className="mt-4 text-xs text-brand-cream/50">
                    We respect your privacy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <>
                  <div className="mb-3 text-4xl">🎉</div>
                  <h2 className="font-display text-2xl text-brand-gold">Thank You!</h2>
                  <p className="mt-3 text-brand-cream/80">Your 10% discount code is:</p>
                  <div className="mx-auto mt-3 w-max rounded-full bg-carib-gradient px-6 py-2 text-lg font-bold tracking-widest text-brand-dark">
                    WELCOME10
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="btn-carib mt-6"
                  >
                    Continue Shopping
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
