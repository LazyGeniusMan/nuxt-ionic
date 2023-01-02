// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/ionic'],
  ionic: {
    integrations: {
      meta: true,
      pwa: true,
      router: true,
      icons: true
    },
    css: {
      core: true,
      basic: true,
      utilities: true
    },
    config: {
      //
    }
  },
})
