export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'covid-vaccine-spotter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css',
        integrity:
          'sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      /*
      {
        src:
          'https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.4.3/custom-elements.min.js',
        integrity:
          'sha512-PLDz+cN5TNZKRezSF9Zk+n/TTHG6ISM466kmCQkFcIkp4Mw+1S15qnvEsd5pyMNOlOMp9hGz6YS9eusXqh0rnA==',
        crossorigin: 'anonymous',
      },
      { src: 'https://unpkg.com/@github/time-elements@3.1.1' },
      */
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vuex-router-sync', '~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vue: {
    config: {
      ignoredElements: ['local-time'],
    },
  },

  router: {
    trailingSlash: true,
    prefetchLinks: false,
    prefetchPayloads: false,
  },
}
