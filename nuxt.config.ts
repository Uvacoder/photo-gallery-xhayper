// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  target: "server",
  modules: [
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "nuxt-windicss",
    "@nuxtjs/robots",
    "@funken-studio/sitemap-nuxt-3",
  ],
  css: ["@/assets/styles/global.scss"],
  robots: {
    Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml`,
  },
  sitemap: {
    hostname: "http://portfolio-xhayper.vercel.app",
  },
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
    shim: false,
    strict: true,
    typeCheck: true,
  },
});
