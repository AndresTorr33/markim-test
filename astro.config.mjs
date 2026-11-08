// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // shortcut: URL provisional, cambiar por el dominio final en la Fase 7
  site: 'https://markim.pages.dev',

  vite: {
    plugins: [tailwindcss()],
  },
});