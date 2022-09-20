// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    modules: ["bootstrap-vue-3/nuxt", "@vueuse/nuxt"],
    css: ["@/assets/css/global.scss"],
    head: {
        title: "hayper",
        link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
        meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" },
            { name: "theme-color", content: "#57739A" },
            // OpenGraph
            { property: "og:type", content: "website" },
            { property: "og:title", content: "hayper" },
            { property: "og:url", content: "https://portfolio-xhayper.vercel.app" },
            { property: "og:image", content: "https://portfolio-xhayper.vercel.app/gallery/hayper/WOOOO.png" },
            { property: "og:description", content: "Furry | Backend developer" },
            // Twitter
            { name: "twitter:card", content: "summary_large_image" },
            { name: "twitter:title", content: "hayper" },
            { name: "twitter:site", content: "@hayper1919" },
            { name: "twitter:description", content: "Furry | Backend developer" },
            { name: "twitter:image", content: "https://portfolio-xhayper.vercel.app/gallery/hayper/WOOOO.png" }
        ]
    },
    sourcemap: {
        client: true
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
