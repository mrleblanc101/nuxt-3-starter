import { defineNuxtConfig } from 'nuxt'
import messages from './src/i18n/index.json';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'src/',

    modules: [
        '@nuxtjs/i18n',
    ],

    i18n: {
        locales: [
            {
                code: 'fr',
                name: 'Français',
                iso: 'fr-CA',
            },
            {
                code: 'en',
                name: 'English',
                iso: 'en-CA',
            },
        ],
        defaultLocale: 'fr',

        vueI18n: {
            messages,
        },
    },
})
