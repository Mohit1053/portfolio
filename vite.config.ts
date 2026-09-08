import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// Vercel (primary) serves at "/". The GitHub Pages backup serves the project
// site at "/portfolio/", so its workflow builds with DEPLOY_TARGET=pages.
// (Avoid a GITHUB_* name here — Actions reserves that prefix.)
export default defineConfig({
  base: process.env.DEPLOY_TARGET === 'pages' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
