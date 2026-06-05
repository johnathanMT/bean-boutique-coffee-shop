import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import toast from 'react-hot-toast'
import { useCart } from '../context/CartContext.jsx'
import { asset } from '../lib/asset.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Cart() {
  const { cart, subtotal, shipping, total, updateQuantity, removeFromCart, clearCart } = useCart()

  function handleCheckout(e) {
    e.preventDefault()
    if (cart.length === 0) {
      toast.error('Your cart is empty!')
      return
    }
    toast.success('Order placed successfully! Thank you for your purchase. 🎉')
    clearCart()
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <SectionHeading eyebrow="Almost there" title="Your Shopping Cart" />

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Items + summary */}
        <div className="lg:col-span-3">
          {cart.length === 0 ? (
            <div className="glass-card flex flex-col items-center gap-4 p-12 text-center">
              <div className="text-5xl">🛒</div>
              <p className="text-brand-cream/70">Your cart is empty.</p>
              <Link to="/coffee" className="btn-gold">
                Browse Coffees
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    className="glass-card flex items-center gap-4 p-4"
                  >
                    <img
                      src={asset(item.image)}
                      alt={item.name}
                      className="h-20 w-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-display text-lg text-brand-cream">{item.name}</h4>
                      <p className="text-sm text-brand-cream/60">
                        ${item.price.toFixed(2)} each
                      </p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center overflow-hidden rounded-full border border-white/15">
                          <button
                            onClick={() => updateQuantity(item.name, -1)}
                            className="px-3 py-1 text-brand-gold hover:bg-white/10"
                          >
                            −
                          </button>
                          <span className="w-8 text-center text-brand-cream">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, 1)}
                            className="px-3 py-1 text-brand-gold hover:bg-white/10"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="text-sm text-carib-coral hover:underline"
                        >
                          <i className="fa-solid fa-trash mr-1" />Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-right font-bold text-brand-gold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Summary */}
              <div className="glass-card space-y-2 p-5">
                <h3 className="font-display text-lg text-brand-gold">Cart Summary</h3>
                <Row label="Subtotal" value={subtotal} />
                <Row label="Shipping" value={shipping} />
                <div className="my-2 border-t border-white/10" />
                <Row label="Total" value={total} bold />
              </div>
            </div>
          )}
        </div>

        {/* Checkout form */}
        <form onSubmit={handleCheckout} className="glass-card space-y-4 p-6 lg:col-span-2">
          <h3 className="font-display text-xl text-brand-gold">Billing Information</h3>
          <Input label="Full Name" placeholder="John M. Doe" />
          <Input label="Email" type="email" placeholder="john@example.com" />
          <Input label="Address" placeholder="73rd Street" />
          <div className="grid grid-cols-3 gap-3">
            <Input label="City" placeholder="Mandalay" />
            <Input label="State" placeholder="MDY" />
            <Input label="Zip" placeholder="05041" />
          </div>

          <h3 className="pt-2 font-display text-xl text-brand-gold">Payment</h3>
          <Input label="Name on Card" placeholder="John More Doe" />
          <Input label="Card Number" placeholder="1111-2222-3333-4444" />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Exp. Month" placeholder="December" />
            <Input label="Exp. Year" placeholder="2026" />
          </div>

          <button type="submit" className="btn-gold w-full">
            Proceed to Checkout <i className="fa-solid fa-lock" />
          </button>
        </form>
      </div>
    </div>
  )
}

function Row({ label, value, bold }) {
  return (
    <div className={`flex justify-between ${bold ? 'text-brand-cream' : 'text-brand-cream/70'}`}>
      <span className={bold ? 'font-bold' : ''}>{label}</span>
      <span className={bold ? 'font-bold text-brand-gold' : ''}>${value.toFixed(2)}</span>
    </div>
  )
}

function Input({ label, type = 'text', placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-sm text-brand-cream/80">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-brand-cream placeholder:text-brand-cream/40 focus:border-brand-gold focus:outline-none"
      />
    </div>
  )
}
