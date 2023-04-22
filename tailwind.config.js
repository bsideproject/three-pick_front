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
            'purple': '#5D31FE',
            'orange': '#FF5416',
            'green': '#DEF048',
            'black': '#222222',
            'white': '#FFFFFF',
            'gray': '#969696',
            'light-gray': '#787878',
            'hr': '#C8C8C8',
            'error': '#E83459',
        },
        //spacing: default (https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale)
        borderRadius: {
            none: '0',
            DEFAULT: '6px',
        },
        fontSize: {
            'sm': '0.7rem', // 14px
            'base': '0.8rem', // 16px
            'xl': '1.01rem', // 20px
            '2xl': '1.41rem', // 24px
        },
        extend: {
            boxShadow: {
                md: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            },
        },
    },
    plugins: [],
};
