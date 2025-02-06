import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    {
      name: 'vite-plugin-alias',
      configureServer(server) {
        server.watcher.on('change', (filePath) => {
          console.log(`File ${filePath} has been changed`)
        })
      },
    }
  ],
})
