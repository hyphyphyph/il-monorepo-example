import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: "production",
    },
  },
  build: {
    lib: {
      entry: 'src/index.tsx',
      name: 'il-app-webcomponents',
      fileName: (format) => `il-app-webcomponents.${format}.js`
    },
    target: 'esnext',
  }
})
