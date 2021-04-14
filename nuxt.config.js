
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: "shortcut icon", type: "image/x-icon", href:"img/logo/favicon.ico"},
      { rel: "stylesheet",  href: "css/bootstrap.min.css"},
      { rel: "stylesheet",  href: "css/owl.carousel.css"},
      { rel: "stylesheet",  href: "css/owl.transitions.css"},
      { rel: "stylesheet",  href: "css/animate.css"},
      { rel: "stylesheet",  href: "css/meanmenu.min.css"},
      { rel: "stylesheet",  href: "css/font-awesome.min.css"},
      { rel: "stylesheet",  href: "css/themify-icons.css"},
      { rel: "stylesheet",  href: "css/flaticon.css"},
      { rel: "stylesheet",  href: "css/venobox.css"},
      { rel: "stylesheet",  href: "css/magnific.min.css"},
      { rel: "stylesheet",  href: "css/style.css"},
      { rel: "stylesheet",  href: "css/responsive.css"}
    ],
  script: [
      { src: "js/vendor/jquery-1.12.4.min.js"},
      { src: "js/bootstrap.min.js"},
      { src: "js/owl.carousel.min.js"},
      { src: "js/jquery.counterup.min.js"},
      { src: "js/waypoints.js"},
      { src: "js/magnific.min.js"},
      { src: "js/wow.min.js"},
      { src: "js/venobox.min.js"},
      { src: "js/jquery.meanmenu.js"},
      { src: "js/form-validator.min.js"},
      { src: "js/plugins.js"},

    ]

  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
