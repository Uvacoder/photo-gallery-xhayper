// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "server",
  modules: ["bootstrap-vue-3/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/styles/global.scss"],
  sourcemap: {
    client: true,
    server: true,
  },
  vite: {
    build: {
      sourcemap: true,
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
});
