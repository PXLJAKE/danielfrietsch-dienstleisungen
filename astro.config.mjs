// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.dienstleistungen-daniel-frietsch.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // CSS und JS immer als eigene Dateien ausgeben: Nur so kommt die CSP ohne 'unsafe-inline' aus.
    inlineStylesheets: 'never',
  },
  vite: {
    build: { assetsInlineLimit: 0 },
  },
});
