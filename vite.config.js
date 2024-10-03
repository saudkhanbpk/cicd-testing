import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/cicd-testing/',  // Correctly set base path for GitHub Pages
  // other configurations...
});
