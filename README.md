# ☕ Bean Boutique Coffee Shop

A dynamic, colorful **Caribbean-themed** coffee shop website — rebuilt as a modern
**React + Vite** single-page app. Premium single-origin beans you can **select** to read
their **origin story** and **heritage photos**, a tropical **events** line-up, brewing gear,
subscriptions, and a fully working cart.

[![Live Demo](https://img.shields.io/badge/View-Live_Demo-success?style=for-the-badge)](https://johnathanmt.github.io/bean-boutique-coffee-shop/)

## ✨ Features
- **Modern stack:** React 18 + Vite + Tailwind CSS + Framer Motion animations.
- **Caribbean theme on the original brand:** keeps the signature gold (`#D4AF37`) and dark
  browns, layered with vibrant turquoise / coral / orange / palm accents.
- **Selectable coffees with stories:** every bean opens a modal with its origin story,
  region, tasting notes and a sepia **heritage photo**.
- **Historic photo gallery:** "The History of the Bean" section.
- **Tropical events:** colorful event cards + working registration form.
- **Definite response on every button:** add-to-cart toasts, story modals, subscribe
  confirmation, newsletter discount, cart quantity controls — all interactive.
- **Persistent cart** via React Context + `localStorage`.

## 🛠️ Tech
React 18 · Vite · React Router · Tailwind CSS · Framer Motion · react-hot-toast

## 🚀 Local Setup
```bash
npm install
npm run dev        # start the dev server
npm run build      # production build to dist/
npm run preview    # preview the production build
```

## 📁 Structure
```
src/
  components/   # Navbar, Footer, Hero, CoffeeCard, CoffeeStoryModal, HistoricGallery, ...
  pages/        # Home, Coffee, Brewing, Events, Offers, Cart
  data/         # coffees, brewing, events, offers
  context/      # CartContext (localStorage-backed)
public/images/  # all product & background imagery
legacy/         # the original static HTML/CSS/JS site, kept for reference
```

## 🌐 Deployment
Pushes to `main` are built and published to GitHub Pages by
`.github/workflows/deploy.yml`. The Vite `base` is set to `/bean-boutique-coffee-shop/`.
Enable **Settings → Pages → Source: GitHub Actions** for the deploy to take effect.
