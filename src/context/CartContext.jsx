import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'

// Cart state + localStorage persistence. Ports the logic from the original
// cart.js (add / remove / update quantity / total) into a React context, and
// replaces SweetAlert with react-hot-toast for feedback.

const CartContext = createContext(null)
const STORAGE_KEY = 'cart'
export const SHIPPING_FEE = 5.0

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readCart)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  function addToCart(name, price, image) {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name)
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { name, price, image, quantity: 1 }]
    })
    toast.success(`${name} added to cart`, { icon: '☕' })
  }

  function removeFromCart(name) {
    setCart((prev) => prev.filter((item) => item.name !== name))
  }

  function updateQuantity(name, change) {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  function clearCart() {
    setCart([])
  }

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  )
  const count = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart]
  )

  const value = {
    cart,
    count,
    subtotal,
    shipping: cart.length > 0 ? SHIPPING_FEE : 0,
    total: subtotal + (cart.length > 0 ? SHIPPING_FEE : 0),
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
