// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },

  // site: '#',
  // base: '/',

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  integrations: [
    icon(),
    vue()
  ]
});
