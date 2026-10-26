import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Actions sets this to "/" because the custom domain is served from the root.
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  base,
  plugins: [react()],
})
