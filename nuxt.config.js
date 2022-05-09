const DEPLOY_ENV = process.env.DEPLOY_ENV || ''
const dotenv = require('dotenv').config({
  // path: ".env" /*+ (DEPLOY_ENV || '')*/
  path: DEPLOY_ENV + '.env'
})

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: 'First Day School %s', // Adopt | %s
    htmlAttrs: {
      lang: 'en',
      locale: 'en-US'
    },
    script: [{ src: '/js/jquery.min.js' }, { src: '/js/bootstrap.js' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_version || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }]
  },
  Vue: {
    config: {
      productionTip: true,
      devtools: true
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@fortawesome/fontawesome-free/css/all.css', '@/assets/scss/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axios' },
    { src: '~/plugins/baseApi' }
    // { src: '~/plugins/localStorage.js', ssr: false }
    // { src: '~/plugins/dataLayer.js', ssr: false, async: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-helmet'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  helmet: {
    frameguard: true
  },
  router: {
    base: '/'
  },
  env: {
    DEPLOY_ENV: DEPLOY_ENV,
    SECRET_KEY: process.env.SECRET_KEY,
    API_STUDENT: process.env.API_STUDENT,
    API_STUDENT_SSR: process.env.API_STUDENT_SSR,
    API_OAUTH: process.env.API_OAUTH,
    API_OAUTH_SSR: process.env.API_OAUTH_SSR,
    API_AUTH: process.env.API_AUTH,
    API_OPTOUT: process.env.API_OPTOUT
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
