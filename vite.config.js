import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React_Final_Project/',  // This should match your repository name exactly
  plugins: [react()]
})
