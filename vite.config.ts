// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/testforauth0/', // replace 'testforauth0' with your actual repo name
});
