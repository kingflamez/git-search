export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GitHub User Search',
    meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}, {hid: 'description', name: 'description', content: ''}],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
  },

  pageTransition: {
    name: 'fade-slide-up',
    mode: 'out-in'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],

  styleResources: {
    // your settings here
    scss: ['~/assets/scss/abstracts/_mixins.scss', '~/assets/scss/abstracts/_variables.scss', 'bootstrap/scss/_functions.scss', 'bootstrap/scss/_variables.scss', 'bootstrap/scss/mixins/_breakpoints.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.vue$/,
        loader: 'vue-svg-inline-loader',
        options: {
          /* ... */
        }
      })
    },
    filenames: {
      app: ({isDev}) => (isDev ? '[name].[hash].js' : '[chunkhash].js'),
      chunk: ({isDev}) => (isDev ? '[name].[hash].js' : '[chunkhash].js')
    }
  }
}
