export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "locale-issues",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  styleResources: {
    scss: ["assets/global/_mixins.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/vClickOutside.js", mode: "client" }],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/toast",
    "nuxt-webfontloader",
    "@nuxt/content"
  ],
  toast: {
    position: "bottom-right",
    duration: 1000
  },
  axios: {
    baseURL: process.env.CARZOO_SERVER_URL || "http://localhost:3000"
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  webfontloader: {
    google: {
      families: ["Material+Icons"] //Loads Lato font with weights 400 and 700
    }
  },

  content: {
    
  }
};
