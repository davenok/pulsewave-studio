// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  css: ['~/assets/css/main.css'],

  devtools: { enabled: true },

  image: {
    dir: 'assets/images',
  },

  modules: [
    '@nuxt/devtools',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  app: {
    head: {
      title: 'Pulsewave Studio | Modern Web Design Agency',
      meta: [
        { name: 'description', content: 'Pulsewave Studio is a cutting-edge web design agency crafting digital experiences that captivate and convert.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/pws-favicon-16.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/pws-favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '48x48', href: '/pws-favicon-48.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/pws-favicon-180.png' }
      ]
    }
  }
})
