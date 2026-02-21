import { defineConfig } from 'astro/config';
import { withZephyr } from "zephyr-astro-integration";
import react from '@astrojs/react';
export default defineConfig({
  integrations: [react(), withZephyr()],
  vite: {
    css: {
      transformer: 'postcss'
    }
  }
});