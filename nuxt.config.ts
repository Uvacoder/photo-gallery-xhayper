// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: "static",
    ssr: false,
    modules: [
        "bootstrap-vue-3/nuxt",
        '@vueuse/nuxt'
    ],
    css: [
        "@/assets/css/global.scss"
    ],
    vite: {
        build: {
            sourcemap: true
        }
    },
    typescript: {
        strict: true,
        typeCheck: true
    }
});
