// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-icon',
    '@vueuse/nuxt'
  ],

  css: ['~/assets/styles/app.scss'],

  googleFonts: {
    families: {
      Barlow: [100, 300, 400, 500, 700, 900]
    }
  },

  image: {
    format: ['webp'],
    // Options
    // todo: https://github.com/nuxt/image/issues/999#issuecomment-1781247683
    provider: 'netlify',
    netlify: {
      baseURl: 'https://calibro-ai.netlify.app'
    }
  },

  // todo: due to an error in netlify deployment
  // https://answers.netlify.com/t/javascript-heap-out-of-memory-when-trying-to-build-a-nuxt-app/93138/14
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false // disable cssnano when not in production
    }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },

    head: {
      title: 'Calibro AI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '' }]
    }
  }
})
