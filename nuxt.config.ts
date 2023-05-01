// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
    head: {
        script: [{src: 'https://developers.kakao.com/sdk/js/kakao.js'}],
    },
    modules: [['@nuxtjs/eslint-module', {}], '@pinia/nuxt', 'nuxt-icons'],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    vite: {
        plugins: [
            svgLoader(), // https://github.com/jpkleemans/vite-svg-loader#readme
        ],
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    imports: {
        dirs: ['composables/**', 'apis/**'],
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    NuxtIcons: {
        addPlugin: true,
    },
    ssr: false,
});
