const socials = [
  ['fa-facebook-f', '#'],
  ['fa-twitter', '#'],
  ['fa-google', '#'],
  ['fa-linkedin-in', '#'],
  ['fa-youtube', '#'],
  ['fa-instagram', '#'],
]

export default function Footer() {
  return (
    <footer className="relative mt-16 bg-brand-footer text-brand-cream">
      <div className="h-1 w-full bg-carib-gradient" />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 font-display text-xl text-brand-gold">Contact Us</h3>
          <hr className="mb-4 w-16 border-brand-gold/60" />
          <p className="mb-2 text-sm text-brand-cream/80">
            <i className="fa-solid fa-location-dot mr-2 text-brand-gold" />
            73rd Street, Between 106 & 107 Street, Mandalay
          </p>
          <p className="mb-2 text-sm text-brand-cream/80">
            <i className="fa-solid fa-phone mr-2 text-brand-gold" />
            (+959) 123-4567
          </p>
          <p className="text-sm text-brand-cream/80">
            <i className="fa-solid fa-envelope mr-2 text-brand-gold" />
            info@beanboutique.com
          </p>
        </div>

        <div className="md:text-center">
          <h3 className="mb-3 font-display text-xl text-brand-gold">Our Promise</h3>
          <hr className="mb-4 w-16 border-brand-gold/60 md:mx-auto" />
          <p className="text-sm text-brand-cream/80">
            Single-origin beans with a Caribbean soul — roasted with care,
            served with sunshine. Crafted for the cold, brewed for the soul.
          </p>
        </div>

        <div className="md:text-right">
          <h3 className="mb-3 font-display text-xl text-brand-gold">Follow Us</h3>
          <hr className="mb-4 w-16 border-brand-gold/60 md:ml-auto" />
          <div className="flex gap-3 md:justify-end">
            {socials.map(([icon, href]) => (
              <a
                key={icon}
                href={href}
                aria-label={icon}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-brand-cream/80 transition hover:bg-brand-gold hover:text-brand-dark"
              >
                <i className={`fa-brands ${icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-brand-cream/60">
        © 2026 Bean Boutique Coffee Shop. All rights reserved.
      </div>
    </footer>
  )
}
