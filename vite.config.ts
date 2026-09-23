import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// VITE_BASE_PATH is set in GitHub Actions, for example "/SpringBoard/".
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
