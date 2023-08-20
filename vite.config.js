import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: "APPSETTING",
  server: {
    host: 'localhost',
    port: 5000
  },
  plugins: [react()],
})
