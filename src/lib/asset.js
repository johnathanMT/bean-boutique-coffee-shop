// Resolve an image path stored as `images/foo.jpg` to a URL that respects
// Vite's configured base (so it works both in dev and on GitHub Pages).
export function asset(path = '') {
  const clean = String(path).replace(/^\/+/, '')
  return import.meta.env.BASE_URL + clean
}
