import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
import { defineConfig } from 'vite';
import staticCopy from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    staticCopy({
      targets: [
        {
          src: 'src/assets/*.JPG', // Path to your assets
          dest: 'assets', // Destination folder for build
        },
      ],
    }),
  ],
});
