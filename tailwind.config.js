/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
    ],
    theme: {
        colors: {
            purple: '#5D31FE',
            orange: '#FF5416',
            green: '#DEF048',
            black: '#222222',
            white: '#FFFFFF',
            gray: '#969696',
            hr: '#C8C8C8',
            error: '#E83459',
        },
        //spacing: default (https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale)
        borderRadius: {
            none: '0',
            DEFAULT: '16px',
        },

        extend: {},
    },
    plugins: [],
};
