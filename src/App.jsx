import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NewsletterModal from './components/NewsletterModal.jsx'
import Home from './pages/Home.jsx'
import Coffee from './pages/Coffee.jsx'
import Brewing from './pages/Brewing.jsx'
import Events from './pages/Events.jsx'
import Offers from './pages/Offers.jsx'
import Cart from './pages/Cart.jsx'

// Scroll to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coffee" element={<Coffee />} />
          <Route path="/brewing" element={<Brewing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
      <NewsletterModal />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#1A1110',
            color: '#F1F8E9',
            border: '1px solid #D4AF37',
          },
        }}
      />
    </div>
  )
}
