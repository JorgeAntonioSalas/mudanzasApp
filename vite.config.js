import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Styles': '/src/Styles', // Configura un alias para las rutas de estilos
    },
  },
})
