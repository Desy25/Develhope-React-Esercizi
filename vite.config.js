import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  }
})

// VITE v4.4.10  ready in 181 ms

// ➜  Local:   http://localhost:3000/
// ➜  Network: use --host to expose
// ➜  press h to show help