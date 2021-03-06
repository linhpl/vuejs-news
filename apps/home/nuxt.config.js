const path = require('path');
module.exports = {
  srcDir: __dirname,
  buildDir: '.nuxt/home',
  modules: ['@nuxtjs/apollo'],

  // Give apollo module options
  apollo: {
    clientConfigs: {
      default: 'shared/client-configs/default.js'
    }
  },
  head: {
    title: 'new24-fontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: '/js/jquery.min.js' },
      { src: '/js/bootstrap.min.js' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/fav.png' }
    ]
  },
  css: [
    '~static/css/bootstrap.min.css',
    '~static/css/font-awesome.min.css',
    '~static/css/animate.css',
    '~static/css/hover-min.css',
    '~static/css/magnific-popup.css',
    '~static/css/meanmenu.min.css',
    '~static/css/owl.carousel.css',
    '~static/css/lightbox.min.css',
    '~static/inc/custom-slider/css/nivo-slider.css',
    '~static/inc/custom-slider/css/preview.css',
    '~static/css/meanmenu.min.css',
    '~static/css/style.css',
    '~static/css/responsive.css'
  ],
  build: {
    extend(config, ctx) {
      const alias = config.resolve.alias = config.resolve.alias || {}
      alias['shared'] = path.join(__dirname, '../shared')
    }
  }
};
