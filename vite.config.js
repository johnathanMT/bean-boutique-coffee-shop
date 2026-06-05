import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path so assets resolve correctly when deployed to GitHub Pages
// under https://<user>.github.io/bean-boutique-coffee-shop/
export default defineConfig({
  plugins: [react()],
  base: '/bean-boutique-coffee-shop/',
})
