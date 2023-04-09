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
            'primary-color': '#5D31FE',
            'white': '#ffffff',
            'gray': '#969696',
            'hr': '#C8C8C8',
        },
        spacing: {
            1: '16px',
            2: '20px',
            // 1: '8px',
            // 2: '12px',
            // 3: '16px',
            // 4: '24px',
            // 5: '32px',
            // 6: '48px',
        },
        borderRadius: {
            none: '0',
            DEFAULT: '6px',
        },

        extend: {},
    },
    plugins: [],
};
