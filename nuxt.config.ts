import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: ['normalize.css', '@/styles/globals.scss'],
  typescript: {
    shim: false,
    strict: true,
  },
})
