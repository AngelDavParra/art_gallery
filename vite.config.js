import { defineConfig } from "vite";
import path from 'path'

export default defineConfig( {
    base: "/art_gallery/", 
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          location: path.resolve(__dirname, 'location.html'),
        },
    },
  },
})