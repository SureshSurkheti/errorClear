// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // plugins: [
  //   '~/plugins/amplify.js',
  // ],
  // modules: [
  //   '@pinia/nuxt',
  // ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['vuetify/styles'],
  build: {
    transpile: ['vuetify']
  },
  plugins: ['~/plugins/vuetify.js']
})
