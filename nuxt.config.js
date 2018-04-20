require('dotenv').config()

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  modules: [
    ['@nuxtjs/google-analytics', {
      id: process.env.GOOGLE_ANALYTICS_ID,
      debug: {
        sendHitTask: isProduction
      }
    }]
  ],

  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
    ],
    link:[
      { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
      { rel: 'shortcut icon', href: '/favicon.ico', sizes: '16x16 24x24 32x32 48x48 64x64' },
      { rel: 'apple-touch-icon', href: '/img/favicon-57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon-precomposed', href: '/img/favicon-57.png', sizes: '57x57' },
      { rel: 'apple-touch-icon', href: '/img/favicon-72.png', sizes: '72x72' },
      { rel: 'apple-touch-icon', href: '/img/favicon-114.png', sizes: '114x114' },
      { rel: 'apple-touch-icon', href: '/img/favicon-120.png', sizes: '120x120' },
      { rel: 'apple-touch-icon', href: '/img/favicon-144.png', sizes: '144x144' },
      { rel: 'apple-touch-icon', href: '/img/favicon-152.png', sizes: '152x152' },
    ],
  },

  css: [
    '~/assets/css/fonts.css',
    '~/assets/css/tailwind.css',
  ],
}
