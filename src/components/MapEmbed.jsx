export default function MapEmbed() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
      <div className="overflow-hidden rounded-3xl border border-brand-gold/20">
        <iframe
          title="Bean Boutique location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.085249446205!2d135.49597647635562!3d34.70302968308689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e77e7e6c1e11%3A0x66cb4f08f34edf1!2sStarbucks%20Coffee!5e0!3m2!1sen!2sjp!4v1765200338620!5m2!1sen!2sjp"
          className="h-[420px] w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
