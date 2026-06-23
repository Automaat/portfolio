import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://mskalski.netlify.app',
  output: 'static',
  adapter: netlify(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
