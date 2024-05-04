// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-primevue",
        "@pinia/nuxt",
    ],
    primevue: {},
    css: ["primevue/resources/themes/aura-light-green/theme.css"],
    ssr: false,
});