import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://mskalski.netlify.app',
  output: 'static',
  adapter: netlify(),
});
