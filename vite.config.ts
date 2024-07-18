// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/testforauth0/', // Replace 'your-repo-name' with your actual repository name
});
