// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-primevue",
        "@pinia/nuxt",
    ],
    plugins: ["@/plugins/vuedraggable.js"],
    primevue: {},
    css: ["primevue/resources/themes/aura-light-green/theme.css", "@/assets/css/global.css"],
    ssr: false,
    app: {
        baseURL: '/Planning-Poker/', // baseURL: '/<repository>/'
        buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
    }
});