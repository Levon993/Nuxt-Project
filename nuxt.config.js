const env = require('dotenv').config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description',   name: 'description', content: 'Nauxt app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/node_modules/bootstrap/dist/css/bootstrap.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
   {src:'@/plugins/pagination.js', ssr:false},
   {src:'@/plugins/setCookie.js', ssr:false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    'nuxt-i18n',
    '@nuxtjs/toast',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
  ],
  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome',
          home: 'Home',
          logout: 'Logout',
          poducts: 'Products',
          brands: 'Brands',
          working:'Working Now',
          title:'Title',
          brand:"Brand",
          category:"Category",
          price:'Price',
          old_price:'Old price',
          status:'Status',
          created_at:"Created at"
        },
        ru: {
          welcome: 'Привет',
          home: 'Главная',
          logout: 'Выйти',
          poducts: 'Продукты',
          brands: 'Бренды',
          working:'Сейчас в сети',
          title:'Название',
          brand:"Брэнд",
          category:"Категория",
          price:'Цена',
          old_price:'Старая Цена',
          status:'Статус',
          created_at:"Добавлено (чсл)"
        }

    }
  }
  },
  env: {
    baseUrl:env.baseURL || 'url' 
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: "http://shop.laravel.loc"
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  loading:{color: 'blue'},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  }
}
