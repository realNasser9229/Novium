import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CHANGE THIS ↓↓↓ to your repo name (or '/' if it's your username.github.io repo)
export default defineConfig({
  plugins: [react()],
  base: '/Novium/'
})
