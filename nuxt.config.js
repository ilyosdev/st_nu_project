const isDev = process.env.NODE_ENV !== 'production'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  ...(!isDev && {
    modern: 'client',
  }),
  head: {
    title:
      'IELTS – Achieve your work, study and migration goals | IDP IELTS Uzbekistan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content: 'IDP IELTS Uzbekistan',
      },
      { name: 'application-name', content: 'IDP IELTS Uzbekistan' },
      { name: 'author', content: 'Appx Tech Group' },
      { name: 'referrer', content: 'strict-origin' },
      //  Microsoft
      { httpequiv: 'x-ua-compatible', content: 'ie:edge' },
      { name: 'msapplication-starturl', content: '/' },
      {
        name: 'msapplication-tooltip',
        content: 'IDP IELTS Uzbekistan',
      },

      //  Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://ielts.idp.com/uzbekistan' },
      { property: 'og:title', content: 'IDP IELTS Uzbekistan' },
      { property: 'og:description', content: 'IDP IELTS Uzbekistan' },
      { property: 'og:locale', content: 'en_US' },

      //  Twitter
      { name: 'twitter:card', content: 'app' },
      { name: 'twitter:url', content: 'https://ielts.idp.com/uzbekistan' },
      { name: 'twitter:title', content: '' },
      { name: 'twitter:description', content: 'IDP IELTS Uzbekistan' },

      //  iOS
      { name: 'apple-mobile-web-app-title', content: 'IDP IELTS Uzbekistan' },
      { name: 'apple-mobile-web-app-status-bar-style', content: '#e31837' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },

      //  Android
      { name: 'theme-color', content: '#e31837' },
      { name: 'color-scheme', content: 'light' },
      { name: 'mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/swiper.min.css',
    'boxicons/css/boxicons.min.css',
    '~/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper.js', ssr: true, mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  render: {
    resourceHints: false,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    filenames: {
      app: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      chunk: ({ isDev }) => (isDev ? '[name].js' : 'js/[contenthash].js'),
      css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash].css'),
      img: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) =>
        isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true,
        },
      },
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },

  env: {
    baseUrl: process.env.BASE_URL,
  },
}
