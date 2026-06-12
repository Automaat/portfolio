import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://mskalski.netlify.app',
  output: 'static',
  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
  },
});