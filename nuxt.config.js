module.exports = {

  head: {
    title: 'SEARCH IMAGES',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Currency exchange' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/si.png' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Concert+One|Noto+Sans|Nunito+Sans&display=swap"  }
    ]
  },

  loading: { color: '#76304b' },

  plugins: [
    '~/plugins/axios',
    '~/plugins/localize'
  ],

  modules: [
    '@nuxtjs/vuetify',
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'nuxt-izitoast',
    'cookie-universal-nuxt'
  ],

  axios: {
    baseURL: 'http://localhost:3030/',
    proxyHeaders: false,
    credentials: false,
    crossDomain: true
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/api/login', method: 'post', propertyName: 'token'},
          logout: {url: '/api/logout', method: 'post'},
          user: {url: '/api/profile', method: 'get', propertyName: 'data'}
        }
      },
    },
    localStorage: false,
    watchLoggedIn: false,
    rewriteRedirects: true
  },

  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

