// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["bootstrap-vue-3/nuxt", "@vueuse/nuxt"],
    css: ["@/assets/css/global.scss"],
    sourcemap: {
        client: true
    },
    alias: {
        bootstrap: "bootstrap/dist/js/boostrap.esm.js"
    },
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
