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
            purple1: '#09051A',
            purple2: '#1C0F4D',
            purple3: '#2F1980',
            purple4: '#381E99',
            purple5: '#4B27CC',
            purple6: '#542CE5',
            purple7: '#5D31FE', // (=primary-color.purple)
            purple8: '#6A41FF',
            purple9: '#7C58FF',
            purple10: '#9A7EFF',
            purple11: '#BAA7FF',
            purple12: '#D9CEFF',
            purple13: '#EDE8FF',

            orange: '#FF5416',
            green: '#DEF048',
            black: '#222222',
            white: '#FFFFFF',

            gray80: '#3C3C3C',
            gray70: '#5A5A5A',
            gray60: '#787878',
            gray50: '#969696',
            gray40: '#AAAAAA',
            gray30: '#C8C8C8',
            gray20: '#E1E1E1',
            gray10: '#F0F0F0',

            error: '#E83459',
        },
        //spacing: default (https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale)
        borderRadius: {
            none: '0',
            DEFAULT: '6px',
        },
        fontSize: {
            'xs': '0.6rem', // 12px
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
