import react from '@vitejs/plugin-react-swc';
// import * as path from 'path';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// import { readdir } from 'fs/promises';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  preview: {
    port: 3000,
    strictPort: true
  },
  server: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0'
    // origin: 'http://0.0.0.0:3000'
  }
});
