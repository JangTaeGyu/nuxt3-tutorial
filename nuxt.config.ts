// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: false},

    css: [
        '~/assets/css/tailwind.css'
    ],

    meta: {
        title: "Nuxt 3 course",
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
